import { useState } from "react";
import poolImg from "../assets/rethinkways-blog-boutique-kerala-cover.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function UniqueStay() {

const [bookmark,setBookmark] = useState(false)

const link = "https://travel.rethinkways.com/10-boutique-hotels-in-kerala/";
const tagLink = "https://travel.rethinkways.com/category/unique-stays/";

return(

<section className="w-full md:max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-0 md:px-4">

{/* Header */}
<div className="flex items-center justify-between mb-[20px] md:mb-[25px]">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-700"></div>

<h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
Unique Stay Stories
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
<div className="relative md:rounded-[10px] overflow-hidden group">

{/* IMAGE */}
<div className="relative">

<a href={link}>
<img
src={poolImg}
className="w-full h-[240px] md:h-[540px] object-cover"
alt="Kerala Pool"
/>
</a>

{/* MOBILE TAG */}
<a href={tagLink}>
<span className="absolute top-0 left-[12px] md:hidden bg-[#5b3dbb] text-white text-[10px] px-[10px] py-[3px] uppercase font-semibold rounded-[3px]">
UNIQUE STAYS
</span>
</a>

{/* BOOKMARK */}
<div
onClick={(e)=>{
e.preventDefault()
e.stopPropagation()
setBookmark(!bookmark)
}}
className="absolute top-[12px] right-[12px] md:top-[16px] md:right-[16px] w-[32px] h-[32px] md:w-[36px] md:h-[36px] bg-white rounded-full flex items-center justify-center shadow cursor-pointer"
>

{bookmark ? (
<FaBookmark className="text-red-600 text-[13px] md:text-[14px]" />
) : (
<FaRegBookmark className="text-red-600 text-[13px] md:text-[14px]" />
)}

</div>


{/* MOBILE READ MORE */}
<a
href={link}
className="absolute bottom-[15px] right-4 md:hidden flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#5b3dbb]"
>

READ MORE →

</a>

</div>


{/* CONTENT CARD */}
<div className="bg-[#F1E4FF] px-[16px] py-[16px] md:absolute md:left-[80px] md:top-0 md:w-[520px] md:p-[32px] md:rounded-[10px]">

<a href={tagLink}>
<span className="hidden md:block absolute top-0 left-[32px] bg-[#5b3dbb] text-white text-[11px] px-[12px] py-[4px] uppercase font-semibold rounded-[3px]">
UNIQUE STAYS
</span>
</a>


{/* TITLE */}
<a href={link}>
<h3 className="font-['Yeseva_One'] text-[16px] md:text-[40px] leading-[22px] md:leading-[48px] text-black md:mt-[18px]">

10 Boutique Hotels in Kerala Nature Meets Timeless Charm...

</h3>
</a>


<p className="hidden md:block font-[Poppins] text-[18px] leading-[28px] text-gray-700 mt-[20px] max-w-[420px]">

Kerala, often called God's Own Country, is more than a destination
it's an emotion. A place misty hills meet...

</p>


{/* DESKTOP BUTTON */}
<a href={link}>

<div className="hidden md:flex mt-[24px] ml-auto items-center gap-2 h-[44px] w-[44px] rounded-full bg-[#5b3dbb] text-white px-4 overflow-hidden transition-all duration-[500ms] ease-in-out group-hover:w-[160px] cursor-pointer">

<span className="text-[16px]">
→
</span>

<span className="whitespace-nowrap text-[14px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">

READ MORE

</span>

</div>

</a>

</div>

</div>

</section>

)
}