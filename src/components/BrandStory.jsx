import { useState } from "react";
import brandImage from "../assets/brandstory@.jpg";
import brandImageMobile from "../assets/mobile.jpeg";
import arrow from "../assets/Travel_arrow.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function BrandStory({ darkMode }) {

const [bookmark, setBookmark] = useState(false);

const link = "https://travel.rethinkways.com/tourist-360-maldives-honeymoon-specialist/";
const tagLink = "https://travel.rethinkways.com/category/brand-story/";

return (

<section className="w-full md:max-w-[1320px] mx-auto px-0 md:px-4">

  {/* Header */}
  <div className="flex items-center justify-between mb-6 md:mb-10">

    <div className="flex items-center gap-3">
      <div className="w-[3px] h-[28px] md:h-[36px] bg-red-600"></div>
      <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
        Brand Story
      </h2>
    </div>

    {/*
      VIEW ALL BUTTON
      Default state: red bg → arrow must be WHITE → brightness-0 invert
      Dark mode hover: white bg → arrow must be BLACK → [filter:none] (removes invert, shows natural black SVG)
      Light mode hover: black bg → arrow must be WHITE → brightness-0 invert stays
    */}
    <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 transition-all duration-300 ${
      darkMode
        ? "hover:bg-white hover:text-black hover:border-black"
        : "hover:bg-black hover:border-red-600"
    }`}>
      <span className="hidden md:inline">VIEW ALL</span>
      <img
        src={arrow}
        alt="Arrow"
        className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-300 ease-out rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] brightness-0 invert ${
          darkMode ? "group-hover:[filter:none]" : ""
        }`}
      />
    </button>
  </div>

  {/* Banner */}
  <div className="relative group">

    <a href={link}>
      <img src={brandImage} alt="brand story" className="hidden md:block w-full rounded-md" />
      <img src={brandImageMobile} alt="brand story" className="block md:hidden w-full rounded-md" />
    </a>

    {/* TAG */}
    <a href={tagLink}>
      <span className="absolute top-[0px] left-[11px] md:left-18 bg-red-600 text-white text-[10px] md:text-[11px] px-2 md:px-3 py-1 uppercase font-semibold">
        BRAND STORY
      </span>
    </a>

    {/* BOOKMARK */}
    <div
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setBookmark(!bookmark); }}
      className="absolute top-[10px] right-[10px] md:top-4 md:right-4 bg-white w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-full flex items-center justify-center shadow cursor-pointer"
    >
      {bookmark ? (
        <FaBookmark className="text-red-600 text-[12px] md:text-[14px]" />
      ) : (
        <FaRegBookmark className="text-red-600 text-[12px] md:text-[14px]" />
      )}
    </div>

    {/* MOBILE BUTTON */}
    <a
      href={link}
      className="absolute bottom-[20px] md:hidden right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-red-600 hover:bg-[#4a2f4a] transition"
    >
      READ MORE
      <img src={arrow} alt="Arrow" className="w-[14px] h-[14px] rotate-[-45deg] brightness-0 invert" />
    </a>

    {/* TEXT OVERLAY */}
    <div className="hidden md:block absolute top-[160px] left-[73px] max-w-[621px]">
      <a href={link}>
        <h3 className="font-['Yeseva_One'] text-[46px] leading-[56px] text-black">
          The Tourist 360: A Luxury Maldives Honeymoon
          Specialist in South India | Travel Rethink Ways
        </h3>
      </a>

      {/* DESKTOP READ MORE BUTTON */}
      <a href={link}>
        <div className="mt-5 relative flex items-center h-[44px] w-[44px] rounded-full bg-red-600 border-2 border-red-600 text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px] group-hover:bg-black group-hover:border-red-600">
          <span className="flex items-center justify-center w-[44px] h-[44px]">
            <img
              src={arrow}
              alt="Arrow"
              className="w-[20px] h-[20px] transition-all duration-500 ease-out rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] brightness-0 invert"
            />
          </span>
          <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] delay-[40ms] group-hover:opacity-100 group-hover:translate-x-0">
            READ MORE
          </span>
        </div>
      </a>
    </div>

  </div>

</section>

);
}
