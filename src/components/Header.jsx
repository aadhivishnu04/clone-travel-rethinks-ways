import { useEffect, useState } from "react";
import darkLogoSrc from "../assets/images/brand/travel-logo-dark.png";
import gdBrandCreativeLogoSrc from "../assets/images/brand/gdbrandcreative-logo.svg";
import lightLogoSrc from "../assets/images/brand/travel-logo-light.svg";
import headerAdTravel01Src from "../assets/images/ads/header-travel-01.jpg";
import headerAdGdSrc from "../assets/images/ads/header-gd.jpg";
import headerAdTravel02Src from "../assets/images/ads/header-travel-02.jpg";
import {
  headerAdsContent,
  headerCompanyLinks,
  headerLinks,
  headerMainMenu,
  headerMobileCopyrightText,
  headerSocialIconColors,
  headerTopSocials
} from "../Data/headerContent";
import WhatsAppIcon from "../components/WhatsAppIcon";

const topSocials = headerTopSocials;
const socialIconColors = headerSocialIconColors;
const mainMenu = headerMainMenu;
const headerAdImageMap = {
  travel01: headerAdTravel01Src,
  gd: headerAdGdSrc,
  travel02: headerAdTravel02Src
};
const headerAds = headerAdsContent.map((item) => ({
  ...item,
  image: headerAdImageMap[item.imageKey] || headerAdTravel01Src
}));

const getInitialDarkMode = () => {
  if (typeof window === "undefined") return false;

  const stored = window.localStorage.getItem("trw-dark-mode");
  if (stored === "1") return true;
  if (stored === "0") return false;

  return (
    document.body.classList.contains("dark")
    || document.body.classList.contains("jnews-dark-mode")
    || document.body.classList.contains("trw-dark-mode")
    || document.documentElement.classList.contains("trw-dark-mode")
  );
};

function Header() {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [headerAdIndex, setHeaderAdIndex] = useState(0);
  const headerLogoSrc = darkMode ? darkLogoSrc : lightLogoSrc;
  const currentHeaderAd = headerAds[headerAdIndex % headerAds.length];

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("jnews-dark-mode", darkMode);
    document.body.classList.toggle("trw-dark-mode", darkMode);
    document.documentElement.classList.toggle("trw-dark-mode", darkMode);
    localStorage.setItem("trw-dark-mode", darkMode ? "1" : "0");
  }, [darkMode]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (headerAds.length < 2) return undefined;
    const timerId = window.setInterval(() => {
      setHeaderAdIndex((prev) => (prev + 1) % headerAds.length);
    }, 3500);
    return () => window.clearInterval(timerId);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = `${headerLinks.searchBase}?s=${encodeURIComponent(query.trim())}`;
    window.open(url, "_self");
  };

  return (
    <header className="trw-header sticky top-0 z-50 [font-family:Poppins,sans-serif] lg:static lg:z-auto">
      <div
        className={`trw-mobile-top lg:hidden ${
          darkMode
            ? "border-b border-[#2a2a2a] bg-black shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
            : "border-b border-[#ccc] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="relative mx-auto flex h-[76px] max-w-[1350px] items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${darkMode ? "bg-[#151922] text-white" : "text-black"}`}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars text-[26px]" />
          </button>

          <a
            href={headerLinks.home}
            target="_self"
            rel="noopener noreferrer"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={headerLogoSrc}
              alt="Travel Rethink Ways Logo"
              className="h-auto w-[134px]"
            />
          </a>

          <label className="inline-flex cursor-pointer items-center" title={darkMode ? "Dark mode on" : "Dark mode off"}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="sr-only"
              aria-label={`Dark mode toggle (${darkMode ? "on" : "off"})`}
            />
            <span className={`relative h-8 w-12 rounded-full transition-colors ${darkMode ? "bg-[#111827]" : "bg-[#d7d7d7]"}`}>
              <span
                className={`absolute top-[2px] left-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#efefef] transition-transform ${
                  darkMode ? "translate-x-4 text-[#111827]" : "text-[#5b5b5b]"
                }`}
              >
                <i className={`fa-regular ${darkMode ? "fa-sun text-[#f59e0b]" : "fa-moon text-[#606060]"} text-[12px]`} />
              </span>
            </span>
          </label>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative flex h-full w-[100%] flex-col bg-black text-white">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-[28px] leading-none text-white"
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="px-5 pt-20">
              <form
                onSubmit={handleSearchSubmit}
                className="flex h-[44px] items-center rounded-full border border-[#3a3a3a] bg-black px-4"
              >
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="h-full w-full border-0 bg-transparent text-[20px] text-white outline-none placeholder:text-[#9a9a9a]"
                />
                <button type="submit" className="text-white" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass text-[20px]" />
                </button>
              </form>
            </div>

            <nav className="mt-4 border-y border-[#1f1f1f] px-5 py-2">
              {mainMenu.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_self"
                  rel="noopener noreferrer"
                  className="block py-[11px] text-[18px] font-[700] uppercase tracking-[0.3px] text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={headerLinks.wishlist}
                target="_self"
                rel="noopener noreferrer"
                className="block py-[11px] text-[18px] font-[700] uppercase tracking-[0.3px] text-white"
              >
                Wishlist
              </a>

              <button
                type="button"
                onClick={() => setMobileCompanyOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-[11px] text-left text-[18px] font-[700] uppercase tracking-[0.3px]"
              >
                <span className="text-[#e11]">Company</span>
                <i className={`fa-solid fa-angle-${mobileCompanyOpen ? "up" : "down"} text-[24px] text-[#cfcfcf]`} />
              </button>

              {mobileCompanyOpen && (
                <div className="border-t border-[#1f1f1f]">
                  {headerCompanyLinks.map((item, index) => (
                    <a
                      key={`mobile-company-${item.label}`}
                      href={item.href}
                      target="_self"
                      rel="noopener noreferrer"
                      className={`block py-[11px] text-[18px] font-[500] uppercase text-white/80 ${
                        index < headerCompanyLinks.length - 1 ? "border-b border-[#1f1f1f]" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </nav>

            <div className="mt-auto px-5 pb-4">
              <div className="mb-3 flex items-center justify-between">
                {topSocials.map((item) => (
                  <a
                    key={`m-${item.icon}`}
                    href={item.href}
                    target="_self"
                    rel="noopener noreferrer"
                    className="text-[24px]"
                  >
                    {item.icon === "fa-whatsapp" ? (
                      <WhatsAppIcon className={socialIconColors[item.icon] || "text-[#2a2a2a]"} />
                    ) : (
                      <i className={`fa-brands ${item.icon} ${socialIconColors[item.icon] || "text-[#2a2a2a]"}`} />
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-3">
                <p className="text-[15px] text-white/75">{headerMobileCopyrightText}</p>
                <img
                  src={gdBrandCreativeLogoSrc}
                  alt="Brand Creative"
                  className="h-auto w-[120px]"
                />
              </div>
            </div>
          </aside>
        </div>
      )}

      <div className="hidden bg-black text-white lg:block">
        <div className="mx-auto flex h-[38px] max-w-[1350px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {topSocials.map((item) => (
              <a
                key={item.icon}
                href={item.href}
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[14px] leading-none font-normal text-white hover:text-[#cccccc]"
              >
                {item.icon === "fa-whatsapp" ? <WhatsAppIcon className="h-[14px] w-[14px]" /> : <i className={`fa-brands ${item.icon}`} />}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search..."
                className="w-[140px] border-0 bg-transparent text-[14px] text-white outline-none placeholder:text-white/60"
              />
              <button type="submit" className="text-white">
                <i className="fa-solid fa-magnifying-glass text-[14px]" />
              </button>
            </form>

            <label className="inline-flex cursor-pointer items-center" title={darkMode ? "Dark mode on" : "Dark mode off"}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="sr-only"
                aria-label={`Dark mode toggle (${darkMode ? "on" : "off"})`}
              />
              <span className={`relative h-7 w-12 rounded-full transition-colors ${darkMode ? "bg-[#111827]" : "bg-[#65656a]"}`}>
                <span
                  className={`absolute top-[2px] left-[2px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#efefef] transition-transform ${
                    darkMode ? "translate-x-5 text-[#111827]" : "text-[#5b5b5b]"
                  }`}
                >
                  <i className={`fa-regular ${darkMode ? "fa-sun text-[#f59e0b]" : "fa-moon text-[#606060]"} text-[12px]`} />
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className={`trw-desktop-middle hidden lg:block ${darkMode ? "bg-[#0e0908]" : "bg-white"}`}>
        <div className="mx-auto grid min-h-[170px] max-w-[1350px] grid-cols-1 items-center gap-6 px-4 py-6 lg:grid-cols-[320px_1fr]">
          <a href={headerLinks.home} target="_self" rel="noopener noreferrer" className="self-center justify-self-center lg:justify-self-start">
            <img
              src={headerLogoSrc}
              alt="Travel Rethink Ways Logo"
              className="h-auto w-[250px]"
            />
          </a>

          <div className="flex self-center justify-end">
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-end gap-3">
                <span className={`text-[7px] tracking-[2px] ${darkMode ? "text-white/45" : "text-black/45"} [writing-mode:vertical-rl] [transform:rotate(180deg)]`}>
                  SPONSORED AD
                </span>
                <a
                  href={currentHeaderAd.href}
                  target="_self"
                  rel="noopener noreferrer"
                  aria-label={currentHeaderAd.ariaLabel}
                >
                  <img
                    src={currentHeaderAd.image}
                    alt={currentHeaderAd.alt}
                    className="h-[110px] w-[900px] max-w-full rounded-xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
              <div className="mt-2 w-[900px] max-w-full text-center">
                <a
                  href={headerLinks.advertiseWithUs}
                  target="_self"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-[14px] font-medium ${
                    darkMode ? "text-white hover:text-white/80" : "text-black hover:text-[#666]"
                  }`}
                >
                  Advertise With Us
                  <i className="fa-solid fa-chevron-right text-[13px]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 hidden bg-black text-white lg:block">
        <div className="mx-auto max-w-[1350px] px-4">
          <nav className="float-none flex flex-wrap items-start justify-between md:flex-nowrap">
            {mainMenu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_self"
                rel="noopener noreferrer"
                className="px-6 py-4 text-[14px] font-medium uppercase tracking-[0.4px] text-[#f5f5f5] [font-family:Poppins,Helvetica,Arial,sans-serif] hover:bg-[#3a3a3d]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={headerLinks.wishlist}
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 text-[14px] font-medium uppercase text-[#f5f5f5] [font-family:Poppins,Helvetica,Arial,sans-serif] hover:bg-[#3a3a3d]"
            >
              <i className="fa-solid fa-heart text-[#f70d28]" />
              Wishlist
            </a>

            <div className="group relative">
              <button className="flex min-w-[180px] items-center justify-center gap-1 px-6 py-4 text-[14px] font-medium uppercase text-[#f5f5f5] [font-family:Poppins,Helvetica,Arial,sans-serif] hover:bg-[#3a3a3d]">
                Company
                <i className="fa-solid fa-angle-down text-[14px]" />
              </button>
              <div className="invisible absolute right-0 z-50 mt-0 w-full bg-[#fff] text-black opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {headerCompanyLinks.map((item, index) => (
                  <a
                    key={`desktop-company-${item.label}`}
                    href={item.href}
                    target="_self"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-5 py-4 text-[14px] hover:bg-[#dfdfdf] ${
                      index < headerCompanyLinks.length - 1 ? "border-b border-[#d7d7d7]" : ""
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} text-[14px]`} />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
