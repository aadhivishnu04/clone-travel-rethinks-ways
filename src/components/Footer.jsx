import { useState } from "react";

const monthlyGetawaysLeft = [
  { label: "January Getaways", href: "https://travel.rethinkways.com/travel-in-january-travelrethink-ways/" },
  { label: "February Getaways", href: "https://travel.rethinkways.com/travel-in-february-travel-rethink-ways/" },
  { label: "March Getaways", href: "https://travel.rethinkways.com/vacation-in-march-travel-rethink-ways/" },
  { label: "April Getaways", href: "https://travel.rethinkways.com/visit-in-april-travelrethink-ways/" },
  { label: "May Getaways", href: "https://travel.rethinkways.com/visit-in-may-travel-rethink-ways/" },
  { label: "June Getaways", href: "https://travel.rethinkways.com/travel-in-june-travel-rethink-ways/" }
];

const monthlyGetawaysRight = [
  { label: "July Getaways", href: "https://travel.rethinkways.com/travel-in-july/" },
  { label: "August Getaways", href: "https://travel.rethinkways.com/visit-in-august/" },
  { label: "September Getaways", href: "https://travel.rethinkways.com/travel-in-september/" },
  { label: "October Getaways", href: "https://travel.rethinkways.com/travel-in-october/" },
  { label: "November Getaways", href: "https://travel.rethinkways.com/visit-in-november/" },
  { label: "December Getaways", href: "https://travel.rethinkways.com/international-visit-in-december/" }
];

const indiaLeft = [
  { label: "Places to Visit in January", href: "https://travel.rethinkways.com/30-best-places-to-visit-in-january-in-india/" },
  { label: "Places to Visit in February", href: "https://travel.rethinkways.com/places-to-visit-in-february-2026-in-india/" },
  { label: "Places to Visit in March", href: "https://travel.rethinkways.com/places-to-visit-in-india-in-march-2026/" },
  { label: "Places to Visit in April", href: "https://travel.rethinkways.com/30-best-places-to-visit-in-india-in-april/" },
  { label: "Places to Visit in May", href: "https://travel.rethinkways.com/best-places-to-visit-in-india-in-may-2026/" },
  { label: "Places to Visit in June", href: "https://travel.rethinkways.com/30-best-places-to-visit-in-india-in-june/" }
];

const indiaRight = [
  { label: "Places to Visit in July", href: "https://travel.rethinkways.com/30-best-places-to-visit-in-india-in-july/" },
  { label: "Places to Visit in August", href: "https://travel.rethinkways.com/best-places-to-visit-india-in-august-2026/" },
  { label: "Places to Visit in September", href: "https://travel.rethinkways.com/30-best-places-to-visit-india-in-september/" },
  { label: "Places to Visit in October", href: "https://travel.rethinkways.com/30-best-places-to-visit-in-october-in-india/" },
  { label: "Places to Visit in November", href: "https://travel.rethinkways.com/30-best-places-to-visit-november-in-india/" },
  { label: "Places to Visit in December", href: "https://travel.rethinkways.com/30-best-places-to-visit-india-in-december/" }
];

const visaLeft = [
  { label: "Bali", href: "https://travel.rethinkways.com/indonesia-visa-for-indians-2026-guide/" },
  { label: "Barbados", href: "https://travel.rethinkways.com/barbados-visa-for-indians-guide-2026/" },
  { label: "Bhutan", href: "https://travel.rethinkways.com/bhutan-tourist-entry-rules-for-indians-2026/" },
  { label: "Dubai", href: "https://travel.rethinkways.com/dubai-visa-for-indians-2026-guide/" },
  { label: "Georgia", href: "https://travel.rethinkways.com/georgia-visa-for-indians-best-guide-2026/" },
  { label: "Kazakhstan", href: "https://travel.rethinkways.com/kazakhstan-visa-guide-for-indians-2026/" },
  { label: "Kenya", href: "https://travel.rethinkways.com/kenya-visa-for-indians-2026-complete-guide/" }
];

const visaRight = [
  { label: "Malaysia", href: "https://travel.rethinkways.com/malaysia-visa-free-entry-indians-2026-mdac/" },
  { label: "Maldives", href: "https://travel.rethinkways.com/maldives-tourist-visa-for-indian-passport/" },
  { label: "Mauritius", href: "https://travel.rethinkways.com/mauritius-tourist-visa-for-indians-2026/" },
  { label: "Philippines", href: "https://travel.rethinkways.com/philippines-visa-guide-for-indians-2026/" },
  { label: "Schengen Countries", href: "https://travel.rethinkways.com/schengen-visa-2026-complete-guide-indians/" },
  { label: "Sri Lanka", href: "https://travel.rethinkways.com/sri-lanka-tourist-visa-for-indians-2026/" },
  { label: "Thailand", href: "https://travel.rethinkways.com/thailand-visa-free-entry-for-indians-tdac/" }
];

const curatedTravelPicks = [
  { label: "Attractions", href: "https://travel.rethinkways.com/category/attractions/" },
  { label: "Culinary Journey", href: "https://travel.rethinkways.com/category/culinary/" },
  { label: "Family Getaways", href: "https://travel.rethinkways.com/category/family-getaways/" },
  { label: "Friends Trip Suggestion", href: "https://travel.rethinkways.com/category/friends/" },
  { label: "International Honeymoon Destinations", href: "https://travel.rethinkways.com/category/honeymoon-global/" },
  { label: "Unique Stays", href: "https://travel.rethinkways.com/category/unique-stays/" },
  { label: "Weekend Getaways", href: "https://travel.rethinkways.com/category/weekend-getaways/" }
];

const exploreByExperience = [
  { label: "Adventure", href: "https://travel.rethinkways.com/category/adventure/" },
  { label: "Beaches", href: "https://travel.rethinkways.com/category/beaches/" },
  { label: "Desert", href: "https://travel.rethinkways.com/category/desert/" },
  { label: "Heritage", href: "https://travel.rethinkways.com/category/heritage/" },
  { label: "Hill Stations", href: "https://travel.rethinkways.com/category/hill-stations/" },
  { label: "Islands", href: "https://travel.rethinkways.com/category/islands/" },
  { label: "Wildlife Experience", href: "https://travel.rethinkways.com/category/wildlife/" }
];

const travelRethinkWaysLinks = [
  { label: "About Us", href: "https://travel.rethinkways.com/about-us-travel-rethink-ways/" },
  { label: "Advertise With Us", href: "https://travel.rethinkways.com/advertise-with-us/" },
  { label: "Brand Story", href: "https://travel.rethinkways.com/category/brand-story/" },
  { label: "Careers", href: "https://travel.rethinkways.com/jobs/" },
  { label: "Contact Us", href: "https://travel.rethinkways.com/contact-us/" }
];

const legalLinks = [
  { label: "Terms & Conditions", href: "https://travel.rethinkways.com/terms-and-conditions/" },
  { label: "Privacy Policy", href: "https://travel.rethinkways.com/privacy-policy/" },
  { label: "Disclaimer", href: "https://travel.rethinkways.com/disclaimer-travel-rethink-ways/" },
  { label: "Affiliate Disclosure", href: "https://travel.rethinkways.com/affiliate-disclosure/" },
  { label: "Sitemap", href: "https://travel.rethinkways.com/sitemap_index.xml" }
];

const socialLinks = [
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb69sC2JJhzYpd1zRQ1C", icon: "fa-whatsapp" },
  { label: "Instagram", href: "https://instagram.com/travel.rethinkways", icon: "fa-instagram" },
  { label: "Pinterest", href: "https://in.pinterest.com/travelrethinkways/", icon: "fa-pinterest-p" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/travel-rethink-ways/", icon: "fa-linkedin-in" },
  { label: "YouTube", href: "https://www.youtube.com/@Travel.Rethinkways", icon: "fa-youtube" }
];

function FooterList({ items, className = "text-sm" }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/95 hover:text-[#cccccc]">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterHeading({ children }) {
  return <h4 className="mb-4 text-[18px] font-bold text-white">{children}</h4>;
}

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const mobileSections = [
    { key: "monthly", title: "International Monthly Getaways", items: [...monthlyGetawaysLeft, ...monthlyGetawaysRight] },
    { key: "india", title: "Experience India 2026", items: [...indiaLeft, ...indiaRight] },
    { key: "visa", title: "VISA Process", items: [...visaLeft, ...visaRight] },
    { key: "curated", title: "Curated Travel Picks", items: curatedTravelPicks },
    { key: "explore", title: "Explore By Experience", items: exploreByExperience },
    { key: "trw", title: "Travel Rethink Ways", items: travelRethinkWaysLinks },
    { key: "legal", title: "Legal", items: legalLinks },
    {
      key: "touch",
      title: "Get In Touch",
      items: [
        { label: "Phone", href: "tel:+918438506813" },
        { label: "travel@rethinkways.com", href: "mailto:travel@rethinkways.com" },
        { label: "Chennai, Tamil Nadu, India", href: "https://travel.rethinkways.com/contact-us/" }
      ]
    },
    { key: "social", title: "Social", items: socialLinks }
  ];

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <footer className="trw-footer mt-12 bg-black text-white [font-family:Poppins,sans-serif]">
      <div className="mx-auto max-w-[1320px] px-4 py-8 text-[18px] md:hidden">
        <div className="mb-5 flex justify-center">
          <img
            src="https://travel.rethinkways.com/wp-content/uploads/2026/02/travel-rethink-ways-dark-mode-logo-300x150.png"
            alt="Travel Rethink Ways"
            className="h-auto w-[180px]"
          />
        </div>

        <p className="mb-6 text-center text-[18px] leading-[1.55] text-white">
          Travel Rethink Ways is a modern travel intelligence platform built for today&apos;s travelers.
          We simplify global travel decisions through curated destination insights, practical guides,
          unique stays, value-driven deals, and trusted recommendations helping you travel with clarity,
          confidence, and purpose.
        </p>

        <div className="border-t border-[#1a1a1a]">
          {mobileSections.map((section) => {
            const isOpen = openSection === section.key;
            return (
              <div key={section.key} className="border-b border-[#1a1a1a]">
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-[18px] font-[700] leading-none">{section.title}</span>
                  <span className="text-[18px] font-[700] leading-none">{isOpen ? "-" : "+"}</span>
                </button>

                {isOpen && (
                  <ul className="pb-4">
                    {section.items.map((item) => (
                      <li key={`${section.key}-${item.label}`} className="py-1.5">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[18px] text-white"
                        >
                          {section.key === "social" && item.icon ? (
                            <i className={`fa-brands ${item.icon} text-[20px]`} />
                          ) : null}
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 border-t border-[#1a1a1a] pt-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-[11px] text-white">
            <span>© 2026 Travel Rethink Ways from</span>
            <a href="https://gdbrandcreative.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://travel.rethinkways.com/wp-content/uploads/2025/11/gdbrandcreative_logo-01.svg"
                alt="GD Brand Creative"
                className="h-7 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="https://whatsapp.com/channel/0029Vb69sC2JJhzYpd1zRQ1C" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp text-[20px] text-[#25D366]" />
            </a>
            <a href="https://instagram.com/travel.rethinkways" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-[20px] text-[#E1306C]" />
            </a>
            <a href="https://www.facebook.com/share/1CNm92gSxo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f text-[20px] text-[#1877F2]" />
            </a>
            <a href="https://x.com/rethinkways" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="fa-brands fa-x-twitter text-[20px] text-white" />
            </a>
            <a href="https://www.youtube.com/@Travel.Rethinkways" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube text-[20px] text-[#FF0000]" />
            </a>
            <a href="https://www.threads.com/@travel.rethinkways" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <i className="fa-brands fa-threads text-[20px] text-white" />
            </a>
            <a href="https://in.pinterest.com/travelrethinkways/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p text-[20px] text-[#E60023]" />
            </a>
            <a href="http://linkedin.com/company/travel-rethink-ways/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in text-[20px] text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1320px] px-4 py-14 md:block">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://travel.rethinkways.com/wp-content/uploads/2026/02/travel-rethink-ways-dark-mode-logo-300x150.png"
              alt="Travel Rethink Ways"
              className="h-auto w-[220px] md:w-[300px]"
            />
          </div>
          <p className="max-w-[620px] text-base leading-relaxed text-white/95">
            Travel Rethink Ways is a modern travel intelligence platform built for today's travelers.
            We simplify global travel decisions through curated destination insights, practical guides,
            unique stays, value-driven deals, and trusted recommendations helping you travel with clarity,
            confidence, and purpose.
          </p>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section className="xl:col-span-2">
            <FooterHeading>International Monthly Getaways</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={monthlyGetawaysLeft} />
              <FooterList items={monthlyGetawaysRight} />
            </div>
          </section>

          <section className="xl:col-span-2">
            <FooterHeading>Experience India 2026</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={indiaLeft} />
              <FooterList items={indiaRight} />
            </div>
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section className="xl:col-span-2">
            <FooterHeading>VISA Process</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={visaLeft} />
              <FooterList items={visaRight} />
            </div>
          </section>

          <section>
            <FooterHeading>Curated Travel Picks</FooterHeading>
            <FooterList items={curatedTravelPicks} className="text-[16px]" />
          </section>

          <section>
            <h4 className="mb-4 text-[18px] font-bold text-white">Explore By Experience</h4>
            <FooterList items={exploreByExperience} />
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section>
            <FooterHeading>Travel Rethink Ways</FooterHeading>
            <FooterList items={travelRethinkWaysLinks} />
          </section>

          <section>
            <FooterHeading>Legal</FooterHeading>
            <FooterList items={legalLinks} />
          </section>

          <section>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-3 text-sm text-white/95">
              <li>
                <a href="tel:+918438506813" className="hover:text-[#cccccc]">
                  <i className="fa-solid fa-phone mr-2" />
                  +91 8438506813
                </a>
              </li>
              <li>
                <a href="mailto:travel@rethinkways.com" className="hover:text-[#cccccc]">
                  <i className="fa-solid fa-envelope mr-2" />
                  travel@rethinkways.com
                </a>
              </li>
              <li><i className="fa-solid fa-location-dot mr-2" />Chennai, Tamil Nadu, India</li>
            </ul>
          </section>

          <section>
            <FooterHeading>Social</FooterHeading>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/95 hover:text-[#cccccc]">
                    <i className={`fa-brands ${item.icon} mr-2`} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 items-center gap-5 py-2 text-center md:grid-cols-3 md:text-left">
          <div className="text-[14px] font-normal text-white [font-family:Poppins,sans-serif]">© 2026</div>

          <div className="flex items-center justify-center gap-2 text-[14px] font-normal text-white [font-family:Poppins,sans-serif] md:text-center">
            <span>Travel Rethink Ways</span>
            <span>from</span>
            <a href="https://gdbrandcreative.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://travel.rethinkways.com/wp-content/uploads/2025/11/gdbrandcreative_logo-01.svg"
                alt="GD Brand Creative"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 md:justify-end">
            <a href="https://whatsapp.com/channel/0029Vb69sC2JJhzYpd1zRQ1C" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp text-[16px] text-[#25D366]" />
            </a>
            <a href="https://instagram.com/travel.rethinkways" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-[16px] text-[#E1306C]" />
            </a>
            <a href="https://www.facebook.com/share/1CNm92gSxo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f text-[16px] text-[#1877F2]" />
            </a>
            <a href="https://x.com/rethinkways" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="fa-brands fa-x-twitter text-[16px] text-white" />
            </a>
            <a href="https://www.youtube.com/@Travel.Rethinkways" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube text-[16px] text-[#FF0000]" />
            </a>
            <a href="https://www.threads.com/@travel.rethinkways" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <i className="fa-brands fa-threads text-[16px] text-white" />
            </a>
            <a href="https://in.pinterest.com/travelrethinkways/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p text-[16px] text-[#E60023]" />
            </a>
            <a href="http://linkedin.com/company/travel-rethink-ways/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in text-[16px] text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
