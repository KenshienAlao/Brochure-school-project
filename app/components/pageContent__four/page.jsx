import { motion, scale, useInstantLayoutTransition } from "framer-motion";
import { useState } from "react";

export default function PageFour() {
  const [OpenLocation, setOpenLocation] = useState(false);

  return (
    <div className="flex flex-col items-center relative w-100 h-240 overflow-hidden bg-main border-x border-accent/10">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-50"></div>

      {/* 1. Header Section */}
      <>
        <div className="relative z-10 w-full pt-16 pb-8 px-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-8 bg-accent/40"></div>
            <span className="text-accent text-[10px] tracking-[0.6em] font-header font-bold uppercase">
              Folio Record IV
            </span>
            <div className="h-px w-8 bg-accent/40"></div>
          </div>
          <h2 className="text-white text-4xl font-light font-header text-center leading-none">
            REGIONAL <br />
            <span className="italic text-accent tracking-tighter">
              Cartography
            </span>
          </h2>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-body/50 font-body text-[8px] uppercase tracking-[0.3em] text-center max-w-60">
              Topographic survey of the Rodriguez patrimony and the Montalban
              Pass
            </p>
          </div>
        </div>
      </>

      {/* Map Section */}
      <>
        <div className="relative z-10 flex flex-col items-center px-6 w-full">
          <div className="relative p-1.5 bg-imgBorder border border-accent/30 shadow-2xl">
            <div className="relative overflow-hidden size-85">
              {/* first location */}
              <>
                <motion.div
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    type: "keyframes",
                    stiffness: 400,
                    damping: 50,
                  }}
                  className="absolute z-1 top-18 left-5.5"
                  onClick={() => setOpenLocation(true)}
                >
                  <img className="size-15" src="/location__one.png" />
                </motion.div>
              </>
              {/* second location */}
              <>
                <motion.div
                  whileHover={{
                    y: -8.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="absolute z-1 top-28.5 left-38"
                >
                  <img className="size-15" src="/location__two.png" />
                </motion.div>
              </>
              {/* third location */}
              <>
                <motion.div
                  whileHover={{
                    y: -8.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="absolute z-1 top-21 right-10"
                >
                  <img className="size-15" src="/location__three.png" />
                </motion.div>
              </>
              {/* fourth location */}
              <>
                <motion.div
                  whileHover={{
                    y: -8.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="absolute z-1 bottom-26.5 right-19"
                >
                  <img className="size-15" src="/location__four.png" />
                </motion.div>
              </>
              {/* map */}
              <>
                <img
                  src="/empty__map.png"
                  className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] opacity-70"
                  alt="Historical Map"
                />
              </>
            </div>
          </div>
        </div>
      </>

      {/* 3. Bottom Brochure Content (Historical Context) */}
      <>
        <div className="relative w-full px-10 mt-10">
          <div className="border-t border-accent/20 pt-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Descriptive Summary */}
              <div className="col-span-7 space-y-3">
                <h4 className="text-accent font-header text-[10px] font-bold tracking-[0.4em] uppercase">
                  Territorial Summary
                </h4>
                <p className="text-body/60 text-[9px] font-body leading-relaxed text-justify">
                  The Rodriguez holdings encompass a strategic gateway between
                  the Sierra Madre range and the Marikina Basin. The{" "}
                  <span className="text-accent/80">Wawa Gorge</span> serves as a
                  natural bastion, while the higher elevations of{" "}
                  <span className="text-accent/80">Mt. Parawagan</span> provide
                  unrivaled surveillance of the eastern plains.
                </p>
                <div className="pt-2 flex gap-4">
                  <div>
                    <span className="block text-white text-[8px] font-header font-bold uppercase italic">
                      Status
                    </span>
                    <span className="text-accent/60 text-[7px] uppercase tracking-widest">
                      Heritage Site
                    </span>
                  </div>
                  <div>
                    <span className="block text-white text-[8px] font-header font-bold uppercase italic">
                      Province
                    </span>
                    <span className="text-accent/60 text-[7px] uppercase tracking-widest">
                      Rizal (Montalban)
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Metadata Column */}
              <div className="col-span-5 border-l border-accent/10 pl-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-accent/40 text-[7px] font-header uppercase tracking-tighter">
                      Elevation Data
                    </span>
                    <span className="text-body/80 text-[8px] font-body leading-none mt-1">
                      Varies: 40m - 480m ASL
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-accent/40 text-[7px] font-header uppercase tracking-tighter">
                      Key Landmarks
                    </span>
                    <ul className="text-body/80 text-[8px] font-body leading-tight mt-1 list-disc list-inside opacity-70">
                      <li>The Ancestral Hearth</li>
                      <li>Wawa Limestone Formations</li>
                      <li>Marian Grotto Path</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Standard Page UI Elements */}
      <CornerBrackets className="absolute top-6 left-6 text-accent/30" />
      <CornerBrackets className="absolute bottom-6 right-6 text-accent/30 rotate-180" />

                  
    </div>
  );
}

function CornerBrackets({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
    >
      <path d="M0 40V0H40" />
    </svg>
  );
}
