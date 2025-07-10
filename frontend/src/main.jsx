import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// ✅ Register Service Worker for PWA
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        console.log("✅ Service Worker registered:", reg);
      })
      .catch((err) => {
        console.error("❌ Service Worker registration failed:", err);
      });
  });
}
