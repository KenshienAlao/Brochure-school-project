import { createPortal } from "react-dom";
import { useState } from "react";

import { AnimatePresence, motion, scale } from "framer-motion";

import {
  ArrowRightSquare,
  Award,
  BriefcaseBusinessIcon,
  Car,
  Handshake,
  User,
  X,
} from "lucide-react";

const imageData = [
  {
    id: 1,
    src: "/img__five.png",
    alt: "Collection",
    title: "Baston Collection",
    icon: Award,
    shortDesc:
      "Antique canes and walking sticks displayed in a glass cabinet, representing traditional craftsmanship and the senator's personal collection.",
    fullDescription:
      "The Baston Collection features antique canes and walking sticks carefully arranged in a glass cabinet, showcasing fine traditional craftsmanship. Each piece reflects the elegance, materials, and detailed handiwork of its era, while also highlighting the senator’s refined taste and personal history.",
  },
  {
    id: 2,
    src: "/img__seven.png",
    alt: "Car",
    title: "Official Vehicle Display",
    icon: Car,
    shortDesc:
      "Preserved official car (Plate No. 3), a tangible reminder of Rodriguez's public service and leadership.",
    fullDescription:
      "The preserved official car (Plate No. 3) stands as a powerful symbol of Rodriguez’s years in public service. Carefully maintained, the vehicle reflects the design and engineering of its time, from its sturdy body to its formal detailing, emphasizing dignity and authority. More than just a mode of transport, it represents leadership, duty, and the daily realities of governance, offering visitors a tangible connection to the senator’s role in history and public life.",
  },
  {
    id: 3,
    src: "/img__eight.png",
    alt: "Eulogio Rodriguez Sr. Historical Marker",
    title: "Eulogio Rodriguez Sr. Historical Marker",
    icon: User,
    shortDesc:
      'Eulogio "Amang" Rodriguez Sr. was a prominent statesman and Senate President. His preserved home and official car stand as tangible reminders of his long leadership and service to Montalban and the Philippines.',
    fullDescription:
      "Eulogio “Amang” Rodriguez Sr. was one of the most influential Filipino statesmen of the 20th century, serving for many years as a senator and later as Senate President. Born and raised in Montalban (now Rodriguez), Rizal, he rose from humble beginnings to become a national leader known for his commitment to public service. His work in legislation, particularly in land reform, local governance, and education, helped shape modern Philippine society.",
  },
  {
    id: 4,
    src: "/img__nine.png",
    alt: "living room",
    title: "The Senate President's Desk",
    icon: BriefcaseBusinessIcon,
    shortDesc:
      "The recreated workspace of Senate President Eulogio Rodriguez Sr., complete with his personal effects, serving as a focal point of his leadership and legacy.",
    fullDescription: `The recreated workspace of Senate President "Eulogio Rodriguez Sr." offers an intimate look into the environment where he worked, reflected, and made important decisions that influenced Philippine governance. Carefully arranged with period-appropriate furniture, official documents, and personal effects, the space captures the discipline and seriousness of his public life. Every detail—from the desk and writing materials to photographs and memorabilia—helps illustrate his leadership style and dedication to service. More than a simple room, the workspace stands as a symbolic center of authority and responsibility, allowing visitors to connect with the daily realities, pressures, and purpose that defined Eulogio Rodriguez Sr.’s enduring political legacy.`,
  },
  {
    id: 5,
    src: "/img__ten.png",
    alt: "Picture",
    title: "Discovery the Heart of Montalban",
    icon: Handshake,
    shortDesc:
      "Experience the heritage of Rizal at the Amang Rodriguez Monument and Museum—a tribute to a legendary leader's journey from humble roots to national service.",
    fullDescription: `Experience the rich heritage of Rizal at the Amang Rodriguez Monument and Museum, a place that honors the life and legacy of a legendary leader. From his humble beginnings in Montalban to his rise as a national statesman, the site reflects his dedication to public service, leadership, and the enduring impact he left on the Philippines.`,
  },
];

export default function PageOne() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="group relative w-100 h-240 overflow-hidden border-r border-neutral-800 bg-main">
        {/* exposure */}
        <>
          <div
            className="absolute inset-0 opacity-5 pointer-events-none z-1"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px)`,
            }}
          ></div>
        </>

        {/* design */}
        <>
          <div className="absolute top-12 right-10 w-10 h-10 rounded-full bg-accent/5 blur-md"></div>
          <div className="absolute bottom-24 left-6 w-14 h-14 rounded-full bg-accent/5 blur-lg"></div>
          <div className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-accent/5 blur-sm"></div>
          <div className="absolute top-1/4 left-12 w-6 h-6 rounded-full bg-accent/5 blur-sm"></div>
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

          {/* Double Inner Border for Historic Effect */}
          <div className="absolute inset-5 border border-accent/10 z-0"></div>

          {/* Triple Border Detail */}
          <div className="absolute inset-6 border border-accent/5 z-0"></div>

          {/* Decorative Border Patterns */}
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
          {/* ui */}
          <>
            {/* design */}
            <div>
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
                  <text
                    x="27.5"
                    y="30"
                    fontSize="4"
                    fill="currentColor"
                    className="text-accent"
                    textAnchor="middle"
                    opacity="0.4"
                  >
                    EST
                  </text>
                </svg>
              </div>
            </div>

            {/* Vertical Side Decorations */}
            <div>
              <div className="absolute left-1.5 top-20 bottom-20 w-px bg-linear-to-b from-transparent via-accent/12 to-transparent"></div>
              <div className="absolute right-1.5 top-20 bottom-20 w-px bg-linear-to-b from-transparent via-accent/12 to-transparent"></div>
            </div>
            {/* Side Ornamental Markers */}
            <div>
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
                      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-r-2 border-t-2 border-accent/50 "></div>
                      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-l-2 border-b-2 border-accent/50 "></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-r-2 border-b-2 border-accent/50 "></div>

                      <div className="relative w-25 h-25 border border-accent/40 p-1 bg-imgBorder">
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"></div>
                        <motion.img
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
                        {!isReversed && <Icon className="size-5" />}
                        {image.title}
                        {isReversed && <Icon className="size-5" />}
                      </h4>
                      <p
                        className={`text-body/70 text-[12px] leading-relaxed font-body italic ${isReversed ? "border-r-2 pr-3" : "border-l-2 pl-3"} border-accent/20`}
                      >
                        {image.shortDesc}
                      </p>
                      {/* <p className="font-body leading-tight text-[8px] text-accent/70">hi</p> */}
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

          {/* Footer */}
          <div className="mt-auto border-t-2 border-accent/15 pt-3 pb-1">
            <div className="flex justify-center items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-px bg-accent/20"></div>
                <div className="flex items-center gap-1">
                  <div className="w-0.5 h-0.5 rotate-45 bg-accent/30"></div>
                  <div className="w-1 h-1 rotate-45 border border-accent/30"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-accent/20"></div>
                  <div className="w-1 h-1 rotate-45 border border-accent/30"></div>
                  <div className="w-0.5 h-0.5 rotate-45 bg-accent/30"></div>
                </div>
                <div className="w-10 h-px bg-accent/20"></div>
              </div>
            </div>

            <div className="text-[12px] flex justify-center items-center gap-1.5 text-accent/40 uppercase tracking-[0.2em] leading-tight mb-2.5">
              interested? See more
              <span className="ml-1">
                <ArrowRightSquare className="size-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Corner Brackets*/}
        <div>
          <CornerBrackets className="absolute top-4 left-4 text-accent/45" />
          <CornerBrackets className="absolute top-4 right-4 text-accent/45 rotate-90" />
          <CornerBrackets className="absolute bottom-4 left-4 text-accent/45 -rotate-90" />
          <CornerBrackets className="absolute bottom-4 right-4 text-accent/45 rotate-180" />
        </div>

        {/* Decorative Corner*/}
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
