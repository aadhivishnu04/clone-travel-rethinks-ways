import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-serbia-visa-1140x570.jpg";

export default function VisaProcess() {
  const [bookmark, setBookmark] = useState(false);

  const link =
    "https://travel.rethinkways.com/serbia-visa-for-indian-passport-holder-2026/";

  const tagLink = "https://travel.rethinkways.com/category/visa-process/";

  return (
    <section className="w-full md:max-w-[1320px] mx-auto px-0 md:px-4 my-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] bg-red-600" />
          <h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
            VISA Process
          </h2>
        </div>

        <button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">
          <span className="hidden md:inline">VIEW ALL</span>
          <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* CARD */}
      <div className="md:rounded-[16px] overflow-hidden group relative">

        {/* IMAGE */}
        <a href={link}>
          <img
            src={img}
            alt="Serbia Visa"
            className="w-full h-[240px] md:h-[540px] object-cover"
          />
        </a>

        {/* OVERLAY */}
        <div className="hidden md:block absolute inset-0 bg-black/40" />

        {/* TAG */}
        <a href={tagLink}>
          <span className="absolute top-0 left-[12px] md:left-11 text-white text-[10px] bg-[#7a5959] px-2 py-1">
            VISA-PROCESS
          </span>
        </a>

        {/* BOOKMARK */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setBookmark(!bookmark);
          }}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

        {/* MOBILE BUTTON */}
        <a
          href={link}
          className="absolute bottom-[15px] md:hidden right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#7a5959]"
        >
          READ MORE →
        </a>

        {/* DESKTOP TEXT */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[736px]">

          <a href={link}>
            <h3 className="font-['Yeseva_One'] text-[26px] md:text-[36px] lg:text-[46px] leading-[1.25]">
              Serbia VISA for Indian <br />
              Passport Holders 2026 | Travel Rethink Ways
            </h3>
          </a>

          {/* EXPAND BUTTON */}
          <a href={link}>
            <div className="mt-5 relative flex items-center h-[44px] w-[44px] rounded-full bg-red-600 text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px]">
              <span className="flex items-center justify-center w-[44px] h-[44px] text-[14px]">
                →
              </span>

              <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] delay-[40ms] group-hover:opacity-100 group-hover:translate-x-0">
                READ MORE
              </span>
            </div>
          </a>

        </div>

        {/* MOBILE TITLE */}
        <div className="md:hidden bg-[#7a5959] text-white py-4 px-4">
          <a href={link}>
            <h3 className="font-['Yeseva_One'] text-[16px] leading-[22px]">
              Serbia VISA for Indian Passport Holders 2026 | Travel Rethink Ways
            </h3>
          </a>
        </div>

      </div>
    </section>
  );
}