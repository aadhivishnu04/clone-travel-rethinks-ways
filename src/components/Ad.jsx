import { useState, useEffect } from "react";

export default function AdBanner() {

  const slides = [
    "/ads/ad1.webp",
    "/ads/ad2.webp",
    "/ads/ad3.webp"
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1204px] mx-auto px-4 py-10 bg-[#e9e9e9]">

      <div className="relative w-full h-[120px]">

        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Ad"
            className={`absolute inset-0 w-full h-full object-cover rounded-[10px] transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>

      <p className="text-center text-[12px] text-gray-600 mt-2">
        Advertise With Us →
      </p>

    </div>
  );
}
