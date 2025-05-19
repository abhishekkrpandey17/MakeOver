"use client";
import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// 💬 Chat Steps
const steps = [
  {
    id: "0",
    message:
      "Hi beautiful 💜 I'm your MakeOver Assistant! Ask me anything about skincare, makeup, or our community ✨",
    trigger: "1",
  },
  { id: "1", user: true, trigger: "2" },
  {
    id: "2",
    message: (props: { previousValue: string }) => {
      const q = props.previousValue.toLowerCase();
      const answers: { [key: string]: string } = {
        "how to register":
          "Click Login → Register → Fill your details → You're in! 💫",
        "what is makeover":
          "MakeOver is your beauty buddy — explore blogs, tips, and a glam community 💄",
        "best sunscreen":
          "Try SPF 50+ with PA+++. Our picks: Minimalist, Neutrogena & La Shield 🌞",
        "earn points":
          "Post, comment, like & engage — earn glow points for badges 🌟",
        "how to post":
          "Go to Community → Click 'Ask' → Submit your question 💬",
        "contact support":
          "DM us @makeover.community or email support@make-over.in 📩",
        "makeup for oily skin":
          "Use oil-free primer, matte foundation & setting spray 💁‍♀️",
        "night routine":
          "Cleanser → Toner → Serum → Moisturizer → Eye Cream → Lip Balm 💤",
        "dry lips": "Hydrate, exfoliate & apply lip balm with shea butter 💋",
        "best serum":
          "Glow: Vitamin C | Acne: Niacinamide | Hydration: Hyaluronic acid ✨",
        "group join": "Go to Groups tab → Pick one → Click 'Join Now' 👯‍♀️",
        faq: "You can find answers in our Help Center 📚",
        "delete account":
          "Settings → Account → Delete → Confirm (we'll miss you 😢)",
        "trending blogs": "Check Blog → Trends tab to see what's buzzing 🔥",
        "hair fall": "Use mild shampoo, avoid heat, and take biotin 💆‍♀️",
        "open pores":
          "Try niacinamide, clay masks, and AHA/BHA exfoliants weekly 💧",
        "what is toner":
          "Toner helps prep your skin after cleansing & balances pH 🧴",
        "glowy skin": "Hydration + Sleep + Vitamin C + SPF = Glow Up 💫",
      };

      const found = Object.entries(answers).find(([key]) => q.includes(key));

      return (
        found?.[1] ||
        "Oops! 😅 I couldn’t find that. Try rephrasing or check our FAQ 💡"
      );
    },
    trigger: "3",
  },
  {
    id: "3",
    message: "Ask another question or click ✖ to close 💬",
    trigger: "1",
  },
];

// 🎨 Theme for MakeOver
const theme = {
  background: "#fdf4ff",
  fontFamily: "Poppins",
  headerBgColor: "#9333ea",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#f3e8ff",
  botFontColor: "#4c1d95",
  userBubbleColor: "#fef3c7",
  userFontColor: "#7e22ce",
};

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-poppins">
      {open ? (
        <div className="relative w-[320px] rounded-xl shadow-xl border border-purple-300 bg-white overflow-hidden">
          {/* ✨ Chatbot UI */}
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              botAvatar="https://cdn-icons-png.flaticon.com/512/4712/4712104.png"
              placeholder="Ask about skincare, trends, or blogs..."
              recognitionEnable={true}
              floating={false}
              hideSubmitButton={false}
            />
          </ThemeProvider>

          {/* ❌ Close Button */}
          <div className="absolute -top-3 -right-3">
            <button
              onClick={() => setOpen(false)}
              className="bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-800 shadow-lg"
              title="Close Assistant"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 flex items-center gap-2"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-medium">Ask Me</span>
        </button>
      )}
    </div>
  );
}
