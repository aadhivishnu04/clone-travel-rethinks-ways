import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/Travel_arrow.svg";

import slide1 from "../assets/Best Travel Deals 2026.jpg";
import slide2 from "../assets/Maldives Honeymoon.jpg";
import slide3 from "../assets/30 Best Places india.jpg";
import slide4 from "../assets/India Travel Deals 2026.jpg";
import slide5 from "../assets/Visa-Free Thailand.jpg";


const slides = [
  {
    image: slide1,
    title: "Best Travel Deals 2026: International Vacation Offers| Travel Rethink Ways",
    tag: "INDIA 2026",
    link: "https://travel.rethinkways.com/international-travel-deals-2026/",
    tagLink: "https://travel.rethinkways.com/category/india-2026/"
  },
  {
    image: slide2,
    title: "Maldives Honeymoon Guide: Dreamy Escapes for Every Couple | Travel Rethink Ways",
    tag: "VISA FREE",
    link: "https://travel.rethinkways.com/maldives-honeymoon/",
    tagLink: "https://travel.rethinkways.com/category/visa-free/"
  },
  {
    image: slide3,
    title: "30 Best Places to Visit in April in India 2026 | Travel Rethink Ways",
    tag: "FAMILY GETAWAYS",
    link: "https://travel.rethinkways.com/30-best-places-to-visit-in-april-in-india/",
    tagLink: "https://travel.rethinkways.com/category/family-getaways/"
  },
  {
    image: slide4,
    title: "India Travel Deals 2026: Top Domestic Vacation Offers| Travel Rethink Ways",
    tag: "HILL STATIONS",
    link: "https://travel.rethinkways.com/india-travel-deals-2026/",
    tagLink: "#"
  },
  {
    image: slide5,
    title: "Visa-Free Thailand for Indians 2026: 60+30 Days Stay, TDAC Guide & Latest Extension",
    tag: "BEACHES",
    link: "https://travel.rethinkways.com/thailand-visa-free-entry-for-indians-tdac/",
    tagLink: "#"
  }
];

export default function Banner({ darkMode }) {
  const [bookmark, setBookmark] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, tag, link, tagLink } = slides[active];

  return (
    <div
      className={`w-full sm:max-w-[1548px] mx-auto px-0 sm:px-4 lg:px-6 lg:mt-[4px] transition-colors duration-300 ${
        darkMode ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >

      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <div className="block md:hidden group">
        {/* Image with tag + bookmark */}
        <div className="relative w-full h-[350px] overflow-hidden">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.image}
              alt={s.title}
              className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-700 ease-in-out ${
                i === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* tag */}
          <a
            href={tagLink}
            className="absolute top-0 left-0 bg-[#D02525] text-white text-[12px] font-semibold uppercase px-3 py-[4px] z-20 tracking-wider"
          >
            {tag}
          </a>

          {/* bookmark */}
          <button
            onClick={() => setBookmark(!bookmark)}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20"
          >
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
          </button>

          {/* Dots — inside image, bottom center */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[10px] z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-[9px] h-[9px] rounded-full border border-white transition-colors duration-300 ${
                  i === active ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content below image */}
        <div
          className={`px-4 pt-4 pb-5 ${
            darkMode ? "bg-[#0a0a0a]" : "bg-white"
          }`}
        >
          {/* Title */}
          <h1
            className={`text-[24px] leading-[1.45] font-['Yeseva_One'] text-center mb-4 ${
              darkMode ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            {title}
          </h1>

          {/* READ MORE button — centered */}
          <div className="flex justify-center">
            <a href={link}>
              <div className="relative flex items-center h-[44px] w-fit rounded-full bg-[#D02525] text-white overflow-hidden pr-4">
                <span className="flex items-center justify-center w-[44px] h-[44px] shrink-0">
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-[22px] h-[22px] rotate-[-45deg]"
                  />
                </span>
                <span className="whitespace-nowrap text-[14px] font-semibold">
                  READ MORE
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (unchanged, hidden on mobile) ── */}
      <div className="hidden md:block">
        <div className="group relative w-full h-[560px] lg:h-[750px] overflow-hidden rounded-[16px] shadow-lg transition-all duration-300">

          {slides.map((s, i) => (
            <img
              key={i}
              src={s.image}
              alt={s.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0" />

          {/* tag */}
          <a
            href={tagLink}
            className="absolute top-0 tracking-wider left-10 bg-red-500 text-white text-[14px] font-semibold uppercase px-2 py-[3px] z-20"
          >
            {tag}
          </a>

          {/* bookmark */}
          <button
            onClick={() => setBookmark(!bookmark)}
            className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20"
          >
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
          </button>

          {/* desktop text */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[720px] text-white z-30">
            <h1 className="text-[36px] lg:text-[46px] leading-[1.25] font-['Yeseva_One']">
              {title}
            </h1>
          </div>

          {/* desktop button */}
          <a href={link} className="absolute right-6 bottom-6 z-40 group">
            <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#D02525] text-white overflow-hidden border border-transparent transition-all duration-700 group-hover:w-[150px]">
              <span className="flex items-center justify-center w-[44px] h-[44px]">
                <img
                  src={arrow}
                  alt="Arrow"
                  className="w-[22px] h-[22px] transition-transform duration-700 rotate-[-45deg] group-hover:rotate-0"
                />
              </span>
              <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
                READ MORE
              </span>
            </div>
          </a>

          {/* dots */}
          <div className="flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-[10px] h-[10px] rounded-full border border-white ${
                  i === active ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
