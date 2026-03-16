import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const slides = [
  {
    image: "https://travel.rethinkways.com/wp-content/uploads/2025/12/212-March26-cover.jpg",
    title: "30 Best Places to Visit in India in March 2026 | Travel Rethink Ways",
    tag: "INDIA 2026",
    link: "https://travel.rethinkways.com/30-best-places-to-visit-in-january-in-india/",
    tagLink: "https://travel.rethinkways.com/category/india-2026/"
  },
  {
    image: "https://travel.rethinkways.com/wp-content/uploads/2025/11/rethinkways-blog-visa-free-destination-cover-1140x540.jpg",
    title: "Top 10 Exotic VISA Free Honeymoon Destinations for Indians 2026 Romantic Travel Guide | Travel Rethink Ways",
    tag: "VISA FREE",
    link: "https://travel.rethinkways.com/top-10-visa-free-honeymoon-destinations/",
    tagLink: "https://travel.rethinkways.com/category/visa-free/"
  },
  {
    image: "https://travel.rethinkways.com/wp-content/uploads/2025/07/themewise-Blog-_Family-Friendly-min-1140x570.jpg",
    title: "Top 10 Family Friendly Destinations in India | Travel Rethink Ways",
    tag: "FAMILY GETAWAYS",
    link: "https://travel.rethinkways.com/family-friend-destination/",
    tagLink: "https://travel.rethinkways.com/category/family-getaways/"
  },
];

export default function Banner() {
  const [bookmark, setBookmark] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { title, tag, link, tagLink } = slides[active];

  return (
    <div className="w-full max-w-[420px] sm:max-w-[1368px] mx-auto px-0 sm:px-4 lg:px-6 md:mt-[30px] lg:mt-[40px]">

      <div className="group relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[540px] overflow-hidden rounded-none md:rounded-[16px] shadow-lg">

        {/* Slides */}
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt="banner"
            className={`absolute inset-0 w-full h-full object-cover brightness-[0.75] transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#4b6f9e]/40 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0" />

        {/* TAG WITH LINK */}
        <a
          href={tagLink}
          className="absolute top-0 left-4 md:left-10 bg-[#55364b] md:bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-[3px] rounded-sm shadow z-20"
        >
          {tag}
        </a>

        {/* Bookmark */}
        <button
          onClick={() => setBookmark(!bookmark)}
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

        {/* Desktop Text */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 max-w-[720px] text-white z-30">
          <h1 className="text-[24px] md:text-[36px] lg:text-[46px] leading-[1.25] mb-5 font-['Yeseva_One']">
            {title}
          </h1>
        </div>

        {/* Desktop Read More */}
        <a href={link} className="hidden md:block absolute right-10 bottom-12 group">
          <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#D02525] text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px]">
            <span className="flex items-center justify-center w-[44px] h-[44px] text-[14px]">→</span>
            <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[600ms] group-hover:opacity-100 group-hover:translate-x-0">
              READ MORE
            </span>
          </div>
        </a>

        {/* Desktop Dots */}
        <div className="hidden md:flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
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

        {/* Mobile Caption */}
        <div className="absolute bottom-0 left-0 w-full md:hidden bg-[#55364b] text-white px-4 pt-8 pb-6 z-20">

          <a
            href={link}
            className="group absolute bottom-[130px] right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#55364b]"
          >
            READ MORE
            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>
          </a>

          <h1 className="text-[18px] leading-[1.3] font-['Yeseva_One']">
            {title}
          </h1>

        </div>

      </div>
    </div>
  );
}