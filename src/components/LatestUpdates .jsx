import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

const posts = [
  {
    title: "The Wild Splendor of India: 15 Breathtaking Forests, Wildlife & Untamed Landscapes",
    desc: "India is not just monuments and megacities. The Wild Splendor of India unfolds far beyond its historic forts and bustling cities — into dense jungles, misty highlands, and coastal wetlands teeming with life.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/03/rethinkways-Wildlife-750x536.jpg",
    tag: "WILDLIFE",
    tagLink: "https://travel.rethinkways.com/category/wildlife/",
    link: "https://travel.rethinkways.com/wild-splendor-of-india-landscapes/"
  },
  {
    title: "Bali Attraction: 30 Must Visit Places in Bali for an Unforgettable Journey",
    desc: "Bali is a destination that needs no introduction. But every visit reveals something new, something unexpected.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/03/bali-1024x512.jpg",
    tag: "ATTRACTIONS",
    tagLink: "https://travel.rethinkways.com/category/attractions/",
    link: "https://travel.rethinkways.com/top-bali-attractions-ultimate-travel-guide/"
  },
  {
    title: "The Warm Side of Winter: Coastal Escapes to Dream About",
    desc: "Winter doesn't have to mean cold. These coastal escapes offer warmth, colour and a slower kind of magic.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2025/10/129-coastal-750x375.jpg",
    tag: "SEASONS STORIES",
    tagLink: "https://travel.rethinkways.com/category/seasons-stories/",
    link: "https://travel.rethinkways.com/top-coastal-destinations-winter-travel/"
  },
  {
    title: "Andaman Attractions: 15 Must Visit Wonders of the Tropical Paradise",
    desc: "Turquoise waters, coral reefs and jungle trails — the Andamans are as wild and beautiful as ever.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/02/rethinkwways-Andaman-750x375.jpg",
    tag: "ATTRACTIONS",
    tagLink: "https://travel.rethinkways.com/category/attractions/",
    link: "https://travel.rethinkways.com/andaman-attractions-15-must-visit-wonders-2026/"
  }
];

const TagBadge = ({ tag, tagLink }) => (
  <a
    href={tagLink}
    onClick={(e) => e.stopPropagation()}
    className="absolute top-0 left-4 bg-[#D02525] text-white text-[11px] font-semibold uppercase px-3 py-[5px] tracking-wider z-20"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    {tag}
  </a>
);

const BookmarkBtn = ({ id, bookmarks, toggle }) => (
  <button
    onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id); }}
    className={`absolute top-3 right-3 w-[34px] h-[34px] flex items-center justify-center rounded-full z-20 shadow-md transition-colors duration-300 ${
      bookmarks[id] ? "bg-[#D02525]" : "bg-white/90"
    }`}
    style={{ backdropFilter: "blur(6px)" }}
  >
    {bookmarks[id]
      ? <FaBookmark className="text-white text-[13px]" />
      : <FaRegBookmark className="text-[#D02525] text-[13px]" />}
  </button>
);

const ExpandBtn = ({ href }) => (
  <a
    href={href}
    className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#D02525] border-2 border-[#D02525] text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px] group-hover:bg-black group-hover:border-[#D02525]"
  >
    <span className="flex items-center justify-center w-[44px] h-[44px] shrink-0">
      <img src={arrow} alt="Arrow" className="w-[22px] h-[22px] transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[4px]" />
    </span>
    <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] group-hover:opacity-100 group-hover:translate-x-0" style={{ fontFamily: "Poppins, sans-serif" }}>
      READ MORE
    </span>
  </a>
);

const MobileBtn = ({ href }) => (
  <div className="flex mt-3">
    <a
      href={href}
      className="relative flex items-center h-[44px] w-fit rounded-full bg-[#D02525] text-white overflow-hidden pr-5"
    >
      <span className="flex items-center justify-center w-[44px] h-[44px] shrink-0">
        <img src={arrow} alt="Arrow" className="w-[22px] h-[22px] rotate-[-45deg]" />
      </span>
      <span className="whitespace-nowrap text-[14px] font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
        READ MORE
      </span>
    </a>
  </div>
);

export default function LatestUpdates({ darkMode = false }) {
  const [bookmarks, setBookmarks] = useState({});
  const toggle = (id) => setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));

  const titleCol = darkMode ? "text-white"    : "text-[#111]";
  const descCol  = darkMode ? "text-[#aaa]"   : "text-[#555]";
  const divider  = darkMode ? "border-[#333]" : "border-[#e0e0e0]";
  const bg       = darkMode ? "bg-[#111]"     : "bg-white";

  const Header = () => (
    <div className="flex items-center justify-between mb-4 flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-[3px] h-[26px] bg-[#D02525]" />
        <h2
          className={`text-[20px] md:text-[26px] lg:text-[30px] font-medium ${darkMode ? "text-white" : "text-black"}`}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Latest Updates
        </h2>
      </div>
      <button
        className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-[#D02525] text-white text-[13px] font-semibold border-2 border-[#D02525] transition-all duration-300 ${
          darkMode ? "hover:bg-white hover:text-black hover:border-black" : "hover:bg-black hover:border-[#D02525]"
        }`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span className="hidden md:inline">VIEW ALL</span>
        <img
          src={arrow}
          alt="Arrow"
          className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-300 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] ${darkMode ? "group-hover:invert" : ""}`}
        />
      </button>
    </div>
  );

  return (
    <>
      {/* ══════════════ MOBILE ══════════════ */}
      <div className={`block md:hidden w-full px-4 py-6 ${bg}`}>
        <Header />
        <div className={`pb-6 mb-6 border-b ${divider}`}>
          <a href={posts[0].link} className="relative block overflow-hidden rounded-xl mb-3">
            <TagBadge tag={posts[0].tag} tagLink={posts[0].tagLink} />
            <BookmarkBtn id="featured" bookmarks={bookmarks} toggle={toggle} />
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-[220px] object-cover rounded-xl" />
          </a>
          <a href={posts[0].tagLink}>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[2px] text-[#D02525] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{posts[0].tag}</span>
          </a>
          <a href={posts[0].link}>
            <h3 className={`text-[19px] leading-[1.3] mb-2 hover:text-[#D02525] transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>{posts[0].title}</h3>
          </a>
          <p className={`text-[13px] leading-[1.7] mb-2 ${descCol}`} style={{ fontFamily: "Poppins, sans-serif" }}>{posts[0].desc}</p>
          <MobileBtn href={posts[0].link} />
        </div>
        <div className="flex flex-col gap-6">
          {posts.slice(1).map((post, i) => (
            <div key={i} className={`pb-6 border-b last:border-b-0 ${divider}`}>
              <a href={post.link} className="relative block overflow-hidden rounded-xl mb-3">
                <TagBadge tag={post.tag} tagLink={post.tagLink} />
                <BookmarkBtn id={i} bookmarks={bookmarks} toggle={toggle} />
                <img src={post.image} alt={post.title} className="w-full h-[180px] object-cover rounded-xl" />
              </a>
              <a href={post.tagLink}>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[2px] text-[#D02525] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{post.tag}</span>
              </a>
              <a href={post.link}>
                <h4 className={`text-[16px] leading-[1.3] mb-2 hover:text-[#D02525] transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>{post.title}</h4>
              </a>
              <MobileBtn href={post.link} />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT
          ════════════════════════════════════════

          gridTemplateColumns: 1fr | 1fr | 1.33fr
                               col1  col2   col3

          ROW 1: [ BIG CARD IMAGE col1+col2 (~60%) ] [ CONTENT BOX col3 (~40%) ]
          ROW 2: [ CARD 1 col1   ] [ CARD 2 col2  ] [ CARD 3      col3         ]
                  ↑ card1+card2 width = big card width
                                                       ↑ card3 width = content box width
      ══════════════════════════════════════════ */}
      <div className={`hidden md:block w-full ${bg}`}>
        <div className="w-full max-w-[1500px] mx-auto px-6 py-5">
          <Header />

          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "360px auto",
            }}
          >

            {/* ── ROW 1 · COL 1+2 · BIG CARD IMAGE ── */}
            <a
              href={posts[0].link}
              className="relative block overflow-hidden rounded-2xl"
            style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
            >
              <TagBadge tag={posts[0].tag} tagLink={posts[0].tagLink} />
              <BookmarkBtn id="featured" bookmarks={bookmarks} toggle={toggle} />
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
            </a>

            {/* ── ROW 1 · COL 3 · CONTENT BOX ── */}
            <div
              className={`rounded-2xl border ${divider} p-6 flex flex-col justify-center`}
              style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
            >
              <a href={posts[0].tagLink}>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[2px] text-[#D02525] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {posts[0].tag}
                </span>
              </a>
              <a href={posts[0].link}>
                <h3 className={`text-[18px] lg:text-[22px] leading-[1.35] mb-3 hover:text-[#D02525] transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>
                  {posts[0].title}
                </h3>
              </a>
              <p className={`text-[13px] leading-[1.7] mb-5 line-clamp-5 ${descCol}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {posts[0].desc}
              </p>
              <div className="group flex">
                <ExpandBtn href={posts[0].link} />
              </div>
            </div>

            {/* ── ROW 2 · CARDS 1, 2, 3 — content + button overlaid INSIDE image ── */}
            {[
              { post: posts[1], col: "1 / 2", bmId: 0 },
              { post: posts[2], col: "2 / 3", bmId: 1 },
              { post: posts[3], col: "3 / 4", bmId: 2 },
            ].map(({ post, col, bmId }) => (
              <div
                key={col}
                className="group relative overflow-hidden rounded-xl"
                style={{ gridColumn: col, gridRow: "2 / 3", height: "260px" }}
              >
                {/* background image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* dark gradient overlay — stronger at bottom */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* tag badge top-left */}
                <TagBadge tag={post.tag} tagLink={post.tagLink} />

                {/* bookmark top-right */}
                <BookmarkBtn id={bmId} bookmarks={bookmarks} toggle={toggle} />

                {/* content + button pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
                  <a href={post.tagLink}>
                    <span
                      className="inline-block text-[9px] font-bold uppercase tracking-[2px] text-[#ff6b6b]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {post.tag}
                    </span>
                  </a>
                  <a href={post.link}>
                    <h4
                      className="text-white text-[14px] lg:text-[16px] leading-[1.3] line-clamp-2 hover:text-[#D02525] transition-colors"
                      style={{ fontFamily: "'Yeseva One', Georgia, serif" }}
                    >
                      {post.title}
                    </h4>
                  </a>
                  <div className="group flex pt-1">
                    <ExpandBtn href={post.link} />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
