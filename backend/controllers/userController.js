import { User } from "../models/User.js";

import bcrypt from "bcryptjs";
import axios from "axios";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { email, password, name, phone, gender, preferences } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const user = new User({
      email,
      password: hash,
      name,
      gender,
      phone,
      preferences,
    });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    res.json({ message: "Login successful", role: user.role, name: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const OAuthLogin = async (req, res) => {
  try {
    const { code } = req.body;
    console.log("Received Auth Code:", code);

    // Step 1: Exchange code for token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: "postmessage",
      grant_type: "authorization_code",
      code,
    });

    const { id_token } = tokenRes.data;

    // Step 2: Verify ID token and extract user info
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`
    );

    const { email, name, aud, iss } = userRes.data;

    // Step 3: Validate token origin
    if (
      aud !== process.env.GOOGLE_CLIENT_ID ||
      (iss !== "accounts.google.com" && iss !== "https://accounts.google.com")
    ) {
      return res
        .status(401)
        .json({ message: "Invalid token issuer or audience" });
    }

    // Step 4: Create or find user
    let user = await UserObj.findOne({ email });
    if (!user) {
      user = new UserObj({ name, email });
      await user.save();
    }

    // Step 5: Generate JWT
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Step 6: Set JWT in secure cookie
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 3600000, // 1 hour
    });

    // Step 7: Respond
    res.status(200).json({
      message: "Login successful",
      user: { email: user.email },
    });
  } catch (error) {
    console.error("Google Login Error:", error.message);
    res
      .status(400)
      .json({ message: "Invalid Google token", error: error.message });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "User logged out" });
};
