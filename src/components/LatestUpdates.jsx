import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/Travel_arrow.svg";

const GAP = "gap-6"; // 🔥 single source of truth for spacing

const posts = [
{
title:"The Wild Splendor of India: 15 Breathtaking Forests, Wildlife & Untamed Landscapes | Travel Rethink Ways",
desc:"India is not just monuments and megacities. The Wild Splendor of India unfolds far beyond its historic forts and bustling...",
image:"https://travel.rethinkways.com/wp-content/uploads/2026/03/rethinkways-Wildlife-750x536.jpg",
tag:"WILDLIFE",
tagLink:"https://travel.rethinkways.com/category/wildlife/",
link:"https://travel.rethinkways.com/wild-splendor-of-india-landscapes/"
},
{
title:"Bali Attraction: 30 Must Visit Places in Bali for an Unforgettable",
image:"https://travel.rethinkways.com/wp-content/uploads/2026/03/bali-1024x512.jpg",
tag:"ATTRACTIONS",
tagLink:"https://travel.rethinkways.com/category/attractions/",
link:"https://travel.rethinkways.com/top-bali-attractions-ultimate-travel-guide/"
},
{
title:"The Warm Side of Winter: Coastal Escapes to Dream | Travel Rethink",
image:"https://travel.rethinkways.com/wp-content/uploads/2025/10/129-coastal-750x375.jpg",
tag:"SEASONS STORIES",
tagLink:"https://travel.rethinkways.com/category/seasons-stories/",
link:"https://travel.rethinkways.com/top-coastal-destinations-winter-travel/"
},
{
title:"Andaman Attractions: 15 Must Visit Wonders of the Tropical Paradise",
image:"https://travel.rethinkways.com/wp-content/uploads/2026/02/rethinkwways-Andaman-750x375.jpg",
tag:"ATTRACTIONS",
tagLink:"https://travel.rethinkways.com/category/attractions/",
link:"https://travel.rethinkways.com/andaman-attractions-15-must-visit-wonders-2026/"
}
];


// BUTTON
const expandBtn = (
<div className="ml-auto relative flex items-center h-[44px] w-[44px] rounded-full bg-[#D02525] border-2 border-[#D02525] text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px] group-hover:bg-black">
  
  <span className="flex items-center justify-center w-[44px] h-[44px]">
    <img 
      src={arrow}
      alt="Arrow"
      className="w-[22px] h-[22px] transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[4px]"
    />
  </span>

  <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] group-hover:opacity-100 group-hover:translate-x-0">
    READ MORE
  </span>

</div>
);


const BookmarkBtn = ({ id, bookmarks, toggle }) => (
<button
onClick={(e)=>{
e.preventDefault();
e.stopPropagation();
toggle(id);
}}
className="absolute top-3 right-3 w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full shadow-md z-20"
>
{bookmarks[id] ? <FaBookmark className="text-red-600 text-[13px]" /> : <FaRegBookmark className="text-red-600 text-[13px]" />}
</button>
);

export default function LatestUpdates() {

const [bookmarks,setBookmarks] = useState({});
const toggle = (id) => setBookmarks(prev => ({...prev,[id]:!prev[id]}));

return (

<div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">

{/* HEADER */}
<div className="flex items-center justify-between mb-10">
  <div className="flex items-center gap-3">
    <div className="w-[3px] h-[24px] bg-red-600"/>
    <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium font-poppins">
      Latest Updates
    </h2>
  </div>

  <button className="group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 hover:bg-black transition-all">
    <span className="hidden md:inline">VIEW ALL</span>
    <img 
      src={arrow}
      alt="Arrow"
      className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px]"
    />
  </button>
</div>


{/* 🔥 MAIN CONTENT WRAPPER */}
<div className="space-y-6">

  {/* FEATURED */}
  <div className={`group grid grid-cols-1 md:grid-cols-2 ${GAP} items-center`}>

    <a href={posts[0].link} className="relative overflow-hidden rounded-xl">

      {/* TAG */}
      <span className="absolute top-0 left-4 md:left-10 bg-red-600 text-white text-[10px] px-2 py-1 uppercase z-10">
        {posts[0].tag}
      </span>

      <BookmarkBtn id="featured" bookmarks={bookmarks} toggle={toggle} />

      <img 
        src={posts[0].image} 
        className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] object-cover"
      />
    </a>

    <div>
      <a href={posts[0].link}>
        <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-['Yeseva_One'] leading-[1.3] mb-4 transition group-hover:text-red-600">
          {posts[0].title}
        </h3>
      </a>

      <p className="text-[15px] md:text-[22px] text-[#5B5F62] mb-6">
        {posts[0].desc}
      </p>

      <a href={posts[0].link} className="flex group">
        {expandBtn}
      </a>
    </div>

  </div>


  {/* SMALL POSTS */}
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${GAP}`}>

    {posts.slice(1).map((post,i)=>(

      <div key={i} className="group flex flex-col">

        <a href={post.link} className="relative overflow-hidden rounded-lg">

          <span className="absolute top-0 left-4 md:left-10 bg-red-600 text-white text-[10px] px-2 py-1 uppercase z-10">
            {post.tag}
          </span>

          <BookmarkBtn id={i} bookmarks={bookmarks} toggle={toggle} />

          <img 
            src={post.image} 
            className="w-full h-[180px] md:h-[210px] object-cover rounded-lg"
          />

        </a>

        <a href={post.link}>
          <h4 className="text-[16px] md:text-[22px] font-['Yeseva_One'] mt-3 mb-3 transition group-hover:text-red-600">
            {post.title}
          </h4>
        </a>

        <a href={post.link} className="flex mt-auto group">
          {expandBtn}
        </a>

      </div>

    ))}

  </div>

</div>

</div>

);
}