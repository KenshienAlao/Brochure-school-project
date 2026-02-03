import { createPortal } from "react-dom";

import { Home, Building2, MapPin, Archive, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageData = [
  {
    id: 1,
    src: "/img__two.png",
    alt: "Bahay",
    title: "Front Facade / Exterior",
    icon: Home,
    shortDesc:
      "The stately bahay-na-bato of Eulogio 'Amang' Rodriguez, showcasing traditional Filipino colonial architecture. A blend of stone lower walls and wooden upper floors.",
    fullDescription:
      "This magnificent bahay-na-bato represents the pinnacle of Filipino colonial architecture from the Spanish era. The structure features robust stone foundations supporting elegant wooden upper floors, a design that provided both protection from flooding and natural cooling. The capiz shell windows, hand-carved wooden balustrades, and intricate ventanillas showcase the masterful craftsmanship of Filipino artisans. Built in the late 19th century, this ancestral home has witnessed generations of the Rodriguez family and stands as a testament to the cultural fusion of Filipino and Spanish architectural traditions. The facade's symmetrical design, with its central entrance and flanking windows, exemplifies the classical proportions favored during the colonial period.",
  },
  {
    id: 2,
    src: "/img__one.png",
    alt: "Lamesa",
    title: "Dining Area",
    icon: Building2,
    shortDesc:
      "A classic interior for family gatherings, featuring hand-carved furniture and capiz windows that evoke a warm Filipino-Spanish atmosphere.",
    fullDescription:
      "The dining area serves as the heart of family life in this ancestral home. The meticulously preserved interior features a magnificent hardwood dining table, likely crafted from narra or molave, surrounded by intricately carved chairs that showcase the exceptional woodworking skills of Filipino craftsmen. The capiz shell windows create a soft, diffused light that bathes the room in warmth while maintaining privacy. Original ceramic tiles, imported from Spain during the colonial era, adorn the floors in geometric patterns. The room's high ceilings, adorned with exposed wooden beams, provided natural ventilation essential in the tropical climate. Family portraits and religious icons on the walls tell stories of generations who gathered here for meals, celebrations, and important family decisions.",
  },
  {
    id: 3,
    src: "/img__three.jpg",
    alt: "Monument",
    title: "Historical Marker",
    icon: MapPin,
    shortDesc:
      "Marker commemorating the house as the home of Montalban's (Rodriguez, Rizal) most distinguished resident, Senate President Eulogio Rodriguez Sr.",
    fullDescription:
      "This official historical marker, installed by the National Historical Commission of the Philippines, designates the Rodriguez ancestral home as a site of national importance. Senate President Eulogio Rodriguez Sr., one of the most influential Filipino statesmen of the 20th century, was born and raised in this house. His contributions to Philippine governance, particularly in land reform and education, shaped modern Filipino society. The marker serves not only as recognition of Rodriguez's legacy but also as a testament to the municipality of Rodriguez (formerly Montalban), Rizal's rich political and cultural heritage. The inscription details key dates and achievements, ensuring that future generations understand the historical significance of this remarkable structure and the distinguished family who called it home.",
  },
  {
    id: 4,
    src: "/img__four.png",
    alt: "living room",
    title: "Sala / Living Room",
    icon: Archive,
    shortDesc:
      "Spacious second-floor living area with airy interiors and iconic capiz windows, offering a glimpse into colonial-era Filipino life.",
    fullDescription:
      "The second-floor sala represents the epitome of colonial-era Filipino domestic life. This grand living space, elevated to catch cooling breezes, served as the primary reception area for distinguished guests and the venue for important social gatherings. The room features an impressive array of capiz shell windows that create ethereal lighting effects throughout the day. Antique furniture pieces, including Vienna chairs and carved aparadors, speak to the family's refined taste and social standing. The polished hardwood floors, likely made from the finest Philippine mahogany, have been maintained through generations. Original family photographs, vintage mirrors with ornate frames, and religious artifacts create a museum-like atmosphere that transports visitors to a bygone era. The room's design emphasizes the Filipino concept of 'bahay kubo' openness while incorporating Spanish colonial elegance, creating a unique architectural hybrid that defines Filipino heritage homes.",
  },
];

export default function PageTwo() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="group relative w-100 h-240 overflow-hidden bg-main">
        {/* ui */}
        <>
          <div
            className="absolute inset-0 opacity-5 pointer-events-none z-1"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px)`,
            }}
          ></div>
        </>
        {/* light */}
        <>
          <div className="absolute top-12 right-10 w-10 h-10 rounded-full bg-accent/5 blur-md"></div>
          <div className="absolute bottom-24 left-6 w-14 h-14 rounded-full bg-accent/5 blur-lg"></div>
          <div className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-accent/5 blur-sm"></div>
          <div className="absolute top-1/4 left-12 w-6 h-6 rounded-full bg-accent/5 blur-sm"></div>
        </>

        {/* top design */}
        <>
          <div className="absolute top-0 left-0 right-0 h-11 flex flex-col justify-center items-center z-2 bg-linear-to-b from-accent/8 to-transparent border-b border-accent/10">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-px bg-linear-to-r from-transparent via-accent/30 to-accent/30"></div>
              <div className="flex items-center gap-1">
                <div className="w-0.5 h-0.5 rotate-45 bg-accent/40"></div>
                <div className="w-1 h-1 rotate-45 border border-accent/40"></div>
                <div className="w-1.5 h-1.5 rotate-45 border-2 border-accent/40"></div>
                <div className="w-1 h-1 rotate-45 border border-accent/40"></div>
                <div className="w-0.5 h-0.5 rotate-45 bg-accent/40"></div>
              </div>
              <div className="w-10 h-px bg-linear-to-l from-transparent via-accent/30 to-accent/30"></div>
            </div>
          </div>
        </>
        {/* border */}
        <>
          {/* Border */}
          <div className="absolute inset-3.75 border border-accent/20 z-0"></div>

          {/* Double Inner Border */}
          <div className="absolute inset-5 border border-accent/10 z-0"></div>

          {/* Triple Border */}
          <div className="absolute inset-6 border border-accent/5 z-0"></div>

          {/* Border Patterns */}
          <div
            className="absolute top-5 left-5 right-5 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(212, 175, 55, 0.15) 3px, rgba(212, 175, 55, 0.15) 6px)",
            }}
          ></div>
          <div
            className="absolute bottom-5 left-5 right-5 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(212, 175, 55, 0.15) 3px, rgba(212, 175, 55, 0.15) 6px)",
            }}
          ></div>
        </>

        {/* Main Container */}
        <div className="relative z-10 h-full flex flex-col py-12 px-6">
          {/* elements */}
          <>
            <div className="absolute top-14 right-5 opacity-8">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
                <circle
                  cx="27.5"
                  cy="27.5"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  className="text-accent"
                />
                <circle
                  cx="27.5"
                  cy="27.5"
                  r="21"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-accent"
                />
                <circle
                  cx="27.5"
                  cy="27.5"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-accent"
                />
                <circle
                  cx="27.5"
                  cy="27.5"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-accent"
                />
                <path
                  d="M27.5 8 L30 20 L27.5 32 L25 20 Z"
                  fill="currentColor"
                  className="text-accent"
                  opacity="0.25"
                />
                <path
                  d="M27.5 23 L39.5 27.5 L27.5 32 L15.5 27.5 Z"
                  fill="currentColor"
                  className="text-accent"
                  opacity="0.25"
                />
                <circle
                  cx="27.5"
                  cy="27.5"
                  r="3.5"
                  fill="currentColor"
                  className="text-accent"
                  opacity="0.3"
                />
              </svg>
            </div>
          </>

          {/* ui */}
          <>
            {/* Vertical Side */}
            <div className="absolute left-1.5 top-20 bottom-20 w-px bg-linear-to-b from-transparent via-accent/12 to-transparent"></div>
            <div className="absolute right-1.5 top-20 bottom-20 w-px bg-linear-to-b from-transparent via-accent/12 to-transparent"></div>

            {/* Side */}
            <div className="absolute left-0.5 top-1/4">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
                <div className="w-px h-4 bg-accent/15"></div>
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
              </div>
            </div>
            <div className="absolute right-0.5 top-1/4">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
                <div className="w-px h-4 bg-accent/15"></div>
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
              </div>
            </div>
            <div className="absolute left-0.5 top-2/3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
                <div className="w-px h-4 bg-accent/15"></div>
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
              </div>
            </div>
            <div className="absolute right-0.5 top-2/3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
                <div className="w-px h-4 bg-accent/15"></div>
                <div className="w-0.5 h-0.5 bg-accent/25 rotate-45"></div>
              </div>
            </div>
          </>

          {/* Header */}
          <>
            <div className="relative mb-4 text-center">
              <div className="flex items-center justify-center mb-2 gap-2">
                <div className="h-px w-8 bg-accent/30"></div>
                <span className="text-accent text-[9px] tracking-[0.5em] uppercase font-bold font-header">
                  Ancestral House
                </span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>

              <h2 className="text-white text-3xl font-light tracking-tight leading-tight">
                The
                <span className="italic text-accent block font-header text-4xl">
                  Amang Rodriguez
                </span>
                <span className="uppercase text-[10px] tracking-[0.2em] font-body opacity-60">
                  Legacy Estate
                </span>
              </h2>

              <div className="mt-2 flex flex-col items-center">
                <div className="w-1 h-1 bg-accent rotate-45 mb-1.5"></div>
                <p className="text-body/60 font-body text-[8px] uppercase tracking-widest max-w-45">
                  Documentation of the Ancestral Residence in Rizal
                </p>
              </div>

              {/* underline */}
              <div className="flex justify-center items-center mt-4">
                <div className="flex items-center gap-1">
                  <div className="w-12 h-px bg-accent/15"></div>
                  <div className="w-1 h-1 border border-accent/25 rotate-45"></div>
                  <div className="w-12 h-px bg-accent/15"></div>
                </div>
              </div>
            </div>
          </>

          <div className="flex flex-col gap-3 mb-10">
            {imageData.map((image, index) => {
              const Icon = image.icon;
              const isReversed = index % 2 === 1;

              return (
                <div key={image.id}>
                  <div
                    className={`flex items-start gap-4 ${isReversed ? "flex-row-reverse" : ""} relative`}
                  >
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="relative z-99"
                    >
                      <div
                        className={`absolute -inset-1 border border-accent/20 ${isReversed ? "-translate-x-1" : "translate-x-1"} translate-y-1`}
                      ></div>
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-l-2 border-t-2 border-accent/50 "></div>
                      {/* picture border */}
                      <>
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-r-2 border-t-2 border-accent/50 "></div>
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-l-2 border-b-2 border-accent/50 "></div>
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-r-2 border-b-2 border-accent/50 "></div>
                      </>

                      <div className="relative w-25 h-25 border border-accent/40 p-1 bg-imgBorder">
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"></div>
                        <img
                          onClick={() => setSelectedImage(image)}
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover grayscale-[0.4] sepia-[0.2]"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]"></div>
                      </div>
                    </button>

                    <div
                      className={`flex flex-col pt-2 ${isReversed ? "text-right items-end" : ""}`}
                    >
                      <h4
                        className={`text-accent text-[10px] font-header uppercase tracking-widest mb-2 font-bold leading-tight flex items-center gap-1.5 ${isReversed ? "flex-row-reverse" : ""}`}
                      >
                        {!isReversed && <Icon className="w-2.5 h-2.5" />}
                        {image.title}
                        {isReversed && <Icon className="w-2.5 h-2.5" />}
                      </h4>
                      <p
                        className={`text-body/70 text-[12px] leading-relaxed font-body italic ${isReversed ? "border-r-2 pr-3" : "border-l-2 pl-3"} border-accent/20`}
                      >
                        {image.shortDesc}
                      </p>
                      <p className="font-body leading-tight text-[12px] text-accent/70">
                        date
                      </p>
                    </div>
                  </div>

                  {index < imageData.length - 1 && (
                    <div className="flex justify-center items-center mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-px bg-accent/15"></div>
                        <div className="w-0.5 h-0.5 bg-accent/30 rotate-45"></div>
                        <div className="w-1 h-1 border border-accent/30 rotate-45"></div>
                        <div className="w-1.5 h-1.5 border border-accent/25 rotate-45">
                          <div className="w-full h-full border border-accent/20 rotate-45"></div>
                        </div>
                        <div className="w-1 h-1 border border-accent/30 rotate-45"></div>
                        <div className="w-0.5 h-0.5 bg-accent/30 rotate-45"></div>
                        <div className="w-8 h-px bg-accent/15"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Corner Brackets*/}
        <CornerBrackets className="absolute top-4 left-4 text-accent/45" />
        <CornerBrackets className="absolute top-4 right-4 text-accent/45 rotate-90" />
        <CornerBrackets className="absolute bottom-4 left-4 text-accent/45 -rotate-90" />
        <CornerBrackets className="absolute bottom-4 right-4 text-accent/45 rotate-180" />

        {/* Decorative Corner */}
        <div className="absolute top-7 left-7 text-accent/25">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M0 0 Q6 6, 0 12" />
            <path d="M0 0 Q6 6, 12 0" />
            <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.4" />
            <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute top-7 right-7 text-accent/25 scale-x-[-1]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M0 0 Q6 6, 0 12" />
            <path d="M0 0 Q6 6, 12 0" />
            <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.4" />
            <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-7 left-7 text-accent/25 scale-y-[-1]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M0 0 Q6 6, 0 12" />
            <path d="M0 0 Q6 6, 12 0" />
            <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.4" />
            <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-7 right-7 text-accent/25 scale-[-1]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M0 0 Q6 6, 0 12" />
            <path d="M0 0 Q6 6, 12 0" />
            <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.4" />
            <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-999 flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative bg-main border-b-4 border-r-4 border-accent/60 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-accent/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Elegant Vintage Paper Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>

                  {/* Intricate Corner Fretwork (Callado style) */}
                  <div
                    className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent/40 m-2 pointer-events-none"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent/40 m-2 pointer-events-none"
                    style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
                  ></div>

                  {/* Close Button - More Integrated */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-main border border-accent/40 text-accent hover:bg-accent hover:text-main transition-all duration-500 hover:rotate-90 shadow-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="relative p-6 md:p-12 space-y-8">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-4 text-accent/60">
                        <div className="h-px w-12 bg-linear-to-r from-transparent to-accent"></div>
                        <span className="text-[10px] tracking-[0.5em] uppercase font-header italic">
                          Est. 19th Century
                        </span>
                        <div className="h-px w-12 bg-linear-to-l from-transparent to-accent"></div>
                      </div>

                      <h3 className="text-accent text-2xl md:text-4xl font-header uppercase tracking-widest leading-tight drop-shadow-sm">
                        {selectedImage.title}
                      </h3>
                    </div>

                    {/* Main Image - "Framed Gallery" Look */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative group"
                    >
                      {/* Outer Wood Frame Effect */}
                      <div className="relative z-10 border-12 border-imgBorder shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>
                        <img
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          className="w-full aspect-video object-cover sepia-[0.2] contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                      </div>
                      {/* Frame Shadow */}
                      <div className="absolute -inset-1 bg-accent/20 blur-sm -z-10 translate-x-2 translate-y-2"></div>
                    </motion.div>

                    {/* Description Body */}
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                      <div className="flex flex-col items-center gap-2">
                        {selectedImage.icon && (
                          <div className="p-4 rounded-full border border-accent/20 bg-accent/5">
                            <selectedImage.icon className="w-8 h-8 text-accent" />
                          </div>
                        )}
                        <div className="w-px h-20 bg-linear-to-b from-accent/40 to-transparent hidden md:block"></div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <p className="text-body text-base md:text-lg leading-relaxed font-body italic opacity-90 first-letter:text-4xl first-letter:font-header first-letter:text-accent first-letter:mr-2 first-letter:float-left">
                          {selectedImage.fullDescription}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

function CornerBrackets({ className }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M0 40V0H40" />
    </svg>
  );
}
