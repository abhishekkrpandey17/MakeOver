import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connect.js";

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import replyRoutes from "./routes/replyRoutes.js";

// import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "./swagger.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://blogs.make-over.in"
      : "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
connectDB();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "OK" });
});
app.get("/api/v1/", (req, res) => {
  res.json({ status: 200, message: "OK" });
});
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/replies", replyRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Make_Over Blog Platform API is running");
});

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
