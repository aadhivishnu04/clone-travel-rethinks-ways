import { useEffect, useState } from "react";

const topSocials = [
  { href: "https://whatsapp.com/channel/0029Vb69sC2JJhzYpd1zRQ1C", icon: "fa-whatsapp" },
  { href: "https://www.instagram.com/travel.rethinkways?igsh=MWEyaWVrZDllZW5lcQ==", icon: "fa-instagram" },
  { href: "https://www.facebook.com/share/1CNm92gSxo/", icon: "fa-facebook-f" },
  { href: "https://x.com/rethinkways", icon: "fa-x-twitter" },
  { href: "https://www.youtube.com/@Travel.Rethinkways", icon: "fa-youtube" },
  { href: "https://www.threads.com/@travel.rethinkways", icon: "fa-threads" },
  { href: "https://in.pinterest.com/travelrethinkways/", icon: "fa-pinterest-p" },
  { href: "http://linkedin.com/company/travel-rethink-ways/", icon: "fa-linkedin-in" }
];

const socialIconColors = {
  "fa-whatsapp": "text-[#25D366]",
  "fa-instagram": "text-[#E1306C]",
  "fa-facebook-f": "text-[#1877F2]",
  "fa-x-twitter": "text-white",
  "fa-youtube": "text-[#FF0000]",
  "fa-threads": "text-white",
  "fa-pinterest-p": "text-[#E60023]",
  "fa-linkedin-in": "text-[#0A66C2]"
};

const mainMenu = [
  { label: "Home", href: "https://travel.rethinkways.com/" },
  { label: "Tour", href: "https://travel.rethinkways.com/categories/" },
  { label: "Super Deals", href: "https://travel.rethinkways.com/super-deals/" },
  { label: "Jobs", href: "https://travel.rethinkways.com/jobs/" },
  { label: "Brand Story", href: "https://travel.rethinkways.com/category/brand-story/" }
];

const lightLogoSrc = "https://travel.rethinkways.com/wp-content/uploads/2025/11/Travel_Logo-01.svg";
const darkLogoSrc = "https://travel.rethinkways.com/wp-content/uploads/2026/02/travel-rethink-ways-dark-mode-logo-300x150.png";

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
  const headerLogoSrc = darkMode ? darkLogoSrc : lightLogoSrc;

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = `https://travel.rethinkways.com/?s=${encodeURIComponent(query.trim())}`;
    window.open(url, "_top");
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
        <div className="relative mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${darkMode ? "bg-[#151922] text-white" : "text-black"}`}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars text-[26px]" />
          </button>

          <a
            href="https://travel.rethinkways.com/"
            target="_blank"
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
                <i className={`fa-solid ${darkMode ? "fa-sun text-[#f59e0b]" : "fa-moon"} text-[12px]`} />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-[11px] text-[18px] font-[700] uppercase tracking-[0.3px] text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://travel.rethinkways.com/wishlist/"
                target="_blank"
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
                  <a
                    href="https://travel.rethinkways.com/about-us-travel-rethink-ways/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-[#1f1f1f] py-[11px] text-[18px] font-[500] uppercase text-white/80"
                  >
                    About Us
                  </a>
                  <a
                    href="https://travel.rethinkways.com/contact-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[11px] text-[18px] font-[500] uppercase text-white/80"
                  >
                    Contact Us
                  </a>
                </div>
              )}
            </nav>

            <div className="mt-auto px-5 pb-4">
              <div className="mb-3 flex items-center justify-between">
                {topSocials.map((item) => (
                  <a
                    key={`m-${item.icon}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px]"
                  >
                    <i className={`fa-brands ${item.icon} ${socialIconColors[item.icon] || "text-[#2a2a2a]"}`} />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-3">
                <p className="text-[15px] text-white/75">© 2025 Travel Rethink Ways from</p>
                <img
                  src="https://travel.rethinkways.com/wp-content/uploads/2025/11/gdbrandcreative_logo-01.svg"
                  alt="Brand Creative"
                  className="h-auto w-[120px]"
                />
              </div>
            </div>
          </aside>
        </div>
      )}

      <div className="hidden bg-[#232326] text-white lg:block">
        <div className="mx-auto flex h-[38px] max-w-[1320px] items-center justify-between px-4">
          <div className="flex items-center gap-5">
            {topSocials.map((item) => (
              <a
                key={item.icon}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-normal text-white hover:text-[#cccccc]"
              >
                <i className={`fa-brands ${item.icon}`} />
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
                  <i className={`fa-solid ${darkMode ? "fa-sun text-[#f59e0b]" : "fa-moon"} text-[12px]`} />
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="trw-desktop-middle hidden bg-[#f3f3f3] lg:block">
        <div className="mx-auto grid min-h-[170px] max-w-[1320px] grid-cols-1 items-center gap-6 px-4 py-6 lg:grid-cols-[320px_1fr]">
          <a href="https://travel.rethinkways.com/" target="_blank" rel="noopener noreferrer" className="self-center justify-self-center lg:justify-self-start">
            <img
              src={headerLogoSrc}
              alt="Travel Rethink Ways Logo"
              className="h-auto w-[280px]"
            />
          </a>

          <div className="flex self-center justify-end">
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-end gap-3">
                <span className="text-[10px] tracking-[2px] text-black/45 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                  SPONSORED AD
                </span>
                <a
                  href="https://wa.me/919962610113?text=Hi!%20I%20came%20across%20GD%20Brand%20Creative%20on%20Travel%20Rethink%20Ways%20and%20I'd%20like%20to%20enquire%20about%20your%20creative%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://travel.rethinkways.com/wp-content/uploads/2025/11/GD_Ad_Nov_head.jpg"
                    alt="Advertisement banner"
                    className="h-[110px] w-[900px] max-w-full rounded-xl object-cover"
                  />
                </a>
              </div>
            <div className="mt-2 w-[900px] max-w-full text-center">
              <a
                href="https://travel.rethinkways.com/advertise-with-us/"
                target="_blank"
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

      <div className="sticky top-0 z-40 hidden bg-[#242427] text-white lg:block">
        <div className="mx-auto max-w-[1320px] px-4">
          <nav className="float-none flex flex-wrap items-start justify-between md:flex-nowrap">
            {mainMenu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-[14px] font-medium uppercase tracking-[0.4px] text-[#f5f5f5] [font-family:Poppins,Helvetica,Arial,sans-serif] hover:bg-[#3a3a3d]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://travel.rethinkways.com/wishlist/"
              target="_blank"
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
                <a
                  href="https://travel.rethinkways.com/about-us-travel-rethink-ways/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-b border-[#d7d7d7] px-5 py-4 text-[14px] hover:bg-[#dfdfdf]"
                >
                  <i className="fa-solid fa-user text-[14px]" />
                  About Us
                </a>
                <a
                  href="https://travel.rethinkways.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 text-[14px] hover:bg-[#dfdfdf]"
                >
                  <i className="fa-solid fa-phone text-[14px]" />
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
