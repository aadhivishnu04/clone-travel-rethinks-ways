import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover-1140x540.jpg";
import arrow from "../assets/Travel_arrow.svg";

export default function VisaFreeEscapes() {

  const [bookmark, setBookmark] = useState(false);

  const link = "https://travel.rethinkways.com/top-10-visa-free-honeymoon-destinations/";
  const tagLink = "https://travel.rethinkways.com/category/visa-free/";

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmark(!bookmark);
  };

  return (
    <section className="w-full bg-white">
      <div className="w-full md:max-w-[1320px] mx-auto  px-0 md:px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-[3px] h-[26px] bg-red-700"></div>

            <h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
              VISA-Free Escapes
            </h2>
          </div>

          <button className="group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 hover:bg-black transition-all">
            <span className="hidden md:inline">VIEW ALL</span>

            <img
              src={arrow}
              alt="Arrow"
              className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] rotate-[-45deg] transition-all group-hover:rotate-0 group-hover:translate-x-[3px]"
            />
          </button>
        </div>

        {/* CARD */}
        <div className="flex flex-col md:flex-row md:rounded-[18px] overflow-hidden shadow-sm group">

          {/* IMAGE */}
          <div className="relative w-full md:w-[58%]">
            <a href={link}>
              <img
                src={img}
                alt="visa free"
                className="w-full h-[240px] md:h-[540px] object-cover"
              />
            </a>

            {/* TAG */}
            <a href={tagLink} className="absolute top-0 left-[12px] md:hidden z-10">
              <span className="bg-[#3f4c60] text-white text-[10px] px-3 py-1">
                VISA-FREE
              </span>
            </a>

            {/* BOOKMARK */}
            <button
              onClick={toggle}
              className="absolute top-4 right-4 md:hidden w-8 h-8 bg-white rounded-full border flex items-center justify-center text-red-500"
            >
              {bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </button>

            {/* MOBILE BUTTON */}
            <a
              href={link}
              className="absolute bottom-[15px] md:hidden right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#2f3e4f]"
            >
              READ MORE →
            </a>
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-[42%] bg-[#cfdcec] py-[18px] md:p-12 relative min-h-[540px] flex flex-col justify-center">

            {/* TAG */}
            <a href={tagLink} className="hidden md:block absolute top-0 left-12 z-10">
              <span className="bg-[#3f4c60] text-white text-[10px] px-3 py-1">
                VISA-FREE
              </span>
            </a>

            {/* BOOKMARK */}
            <button
              onClick={toggle}
              className="hidden md:flex absolute top-4 right-4 w-9 h-9 bg-white rounded-full border items-center justify-center text-red-500"
            >
              {bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </button>

            {/* TEXT */}
            <div className="px-4 md:px-0">
              <a href={link}>
                <h3 className="font-['Yeseva_One'] text-[16px] md:text-[36px] leading-[22px] md:leading-tight mb-3 md:mb-5">
                  Top 10 Exotic VISA Free Honeymoon
                  for Indians 2026 Romantic
                  Travel Guide | Travel Rethink Ways
                </h3>
              </a>

              <p className="text-[14px] md:text-[20px] leading-[22px] md:leading-[28px] md:max-w-[380px] font-[Poppins]">
                Planning a honeymoon should be exciting,
                not stressful. Yet VISA paperwork often
                becomes the most...
              </p>
            </div>

            {/* BUTTON */}
            <a href={link}>
              <div className="hidden md:flex absolute bottom-4 right-4">
                <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#2f3e4f] text-white overflow-hidden transition-all duration-[650ms] group-hover:w-[150px]">

                  <span className="flex items-center justify-center w-[44px] h-[44px]">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[18px] h-[18px] brightness-0 invert rotate-[-45deg] transition-transform duration-500 group-hover:rotate-0"
                    />
                  </span>

                  <span className="absolute left-[52px] whitespace-nowrap text-[13px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] group-hover:opacity-100 group-hover:translate-x-0">
                    READ MORE
                  </span>

                </div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}