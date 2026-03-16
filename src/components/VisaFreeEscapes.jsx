import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover-1140x540.jpg";

export default function VisaFreeEscapes() {

const [bookmark,setBookmark] = useState(false)

const link = "https://travel.rethinkways.com/top-10-visa-free-honeymoon-destinations/";
const tagLink = "https://travel.rethinkways.com/category/visa-free/";

const toggle = (e)=>{
e.preventDefault()
e.stopPropagation()
setBookmark(!bookmark)
}

return(

<section className="w-full md:max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-0 md:px-4">

{/* HEADER */}
<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-700"></div>

<h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
VISA-Free Escapes
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

<a href={tagLink}>
<span className="absolute top-0 left-[12px] md:hidden bg-[#3f4c60] text-white text-[10px] px-3 py-1 rounded">
VISA-FREE
</span>
</a>


{/* BOOKMARK */}
<button
onClick={toggle}
className="absolute top-[12px] right-[12px] md:hidden w-8 h-8 bg-white rounded-full border flex items-center justify-center text-red-500"
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
<div className="w-full md:w-[42%] bg-[#aeb9c8] px-[16px] py-[18px] md:p-12 relative flex flex-col md:justify-center">

<a href={tagLink}>
<span className="hidden md:block absolute top-0 left-6 bg-[#3f4c60] text-white text-[10px] px-3 py-1 rounded">
VISA-FREE
</span>
</a>


{/* BOOKMARK DESKTOP */}
<button
onClick={toggle}
className="hidden md:flex absolute top-6 right-6 w-9 h-9 bg-white rounded-full border items-center justify-center text-red-500"
>

{bookmark ? <FaBookmark /> : <FaRegBookmark />}

</button>


{/* TITLE */}
<a href={link}>

<h3 className="font-['Yeseva_One'] text-[16px] md:text-[36px] leading-[22px] md:leading-tight mb-3 md:mb-5">

Top 10 Exotic VISA Free Honeymoon
for Indians 2026 Romantic
Travel Guide | Travel Rethink Ways

</h3>

</a>


<p className="hidden md:block font-[Poppins] text-[15px] text-gray-700 text-sm mb-8">

Planning a honeymoon should be exciting,
not stressful. Yet VISA paperwork often
becomes the most...

</p>


{/* DESKTOP BUTTON */}
<a href={link}>

<div className="hidden md:flex mt-[20px] justify-end">

<div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#2f3e4f] text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px]">

<span className="flex items-center justify-center w-[44px] h-[44px]">
→
</span>

<span className="absolute left-[52px] whitespace-nowrap text-[13px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] delay-[40ms] group-hover:opacity-100 group-hover:translate-x-0">

READ MORE

</span>

</div>

</div>

</a>

</div>

</div>

</section>

)
}