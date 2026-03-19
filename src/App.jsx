import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Tags from "./components/Tags";
import LatestUpdates from "./components/LatestUpdates";
import Honeymooncard from "./components/Honeymooncard";
import BrandStory from "./components/BrandStory";
import ExperienceIndia from "./components/ExperienceIndia";
import VisaProcess from "./components/VisaProcess";
import UniqueStay from "./components/UniqueStay";
import AroundWorld from "./components/AroundWorld";
import VisaFreeEscapes from "./components/VisaFreeEscapes";
import TravelMood from "./components/TravelMood";
import Footer from "./components/Footer";
// import WhatsAppIcon from "./components/WhatsAppIcon";

// Helper to read initial dark mode
const getInitialDark = () => {
  if (typeof window === "undefined") return false;
  const stored = window.localStorage.getItem("trw-dark-mode");
  if (stored === "1") return true;
  if (stored === "0") return false;
  return document.documentElement.classList.contains("trw-dark-mode");
};

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* HEADER */}
      <Header onDarkModeChange={setDarkMode} />

      {/* 🔥 HERO BANNER (NO PADDING, FULL WIDTH) */}
      <Banner darkMode={darkMode} />

      {/* 📦 MAIN CONTENT (WITH SPACING) */}
      <main className="space-y-10 py-6">
        <Tags darkMode={darkMode} />
        <LatestUpdates darkMode={darkMode} />
        <Honeymooncard darkMode={darkMode} />
        <BrandStory darkMode={darkMode} />
        <ExperienceIndia darkMode={darkMode} />
        <VisaProcess darkMode={darkMode} />
        <UniqueStay darkMode={darkMode} />
        <AroundWorld darkMode={darkMode} />
        <VisaFreeEscapes darkMode={darkMode} />
        <TravelMood darkMode={darkMode} />
        {/* <WhatsAppIcon darkMode={darkMode} /> */}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}