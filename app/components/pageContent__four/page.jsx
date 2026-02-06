import { useState } from "react";
import { motion } from "framer-motion";
import { LocationOn } from "@mui/icons-material";

export default function PageFour() {
  const [OpenLocation, setOpenLocation] = useState(false);

  return (
    <div className="bg-main border-accent/10 relative flex h-240 w-100 flex-col items-center overflow-hidden border-x">
      {/* Paper Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.04] mix-blend-overlay" />

      {/* Header Section */}
      <div className="relative z-10 flex w-full flex-col items-center px-8 pt-16 pb-8">
        <div className="mb-2 flex items-center gap-4">
          <div className="bg-accent/40 h-px w-8" />
          <span className="text-accent font-header text-[10px] font-bold tracking-[0.6em] uppercase">
            Folio Record IV
          </span>
          <div className="bg-accent/40 h-px w-8" />
        </div>
        <h2 className="font-header text-center text-4xl leading-none font-light text-white">
          REGIONAL <br />
          <span className="text-accent tracking-tighter italic">
            Cartography
          </span>
        </h2>
        <p className="text-body/50 font-body mt-4 max-w-60 text-center text-[8px] tracking-[0.3em] uppercase">
          Topographic survey of the Rodriguez patrimony and the Montalban Pass
        </p>
      </div>

      {/* Map Section */}
      <div className="relative z-10 mt-6 flex w-full flex-col items-center px-6">
        <div className="bg-imgBorder border-accent/30 relative border p-1.5 shadow-2xl">
          <div className="relative size-85 overflow-hidden">
            {/* Locations */}
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "keyframes", stiffness: 400, damping: 50 }}
              className="absolute top-18 left-5.5 z-10"
              onClick={() => setOpenLocation(true)}
            >
              <img className="size-15" src="/location__one.png" />
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-28.5 left-38 z-10"
            >
              <img className="size-15" src="/location__two.png" />
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-21 right-10 z-10"
            >
              <img className="size-15" src="/location__three.png" />
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute right-19 bottom-26.5 z-10"
            >
              <img className="size-15" src="/location__four.png" />
            </motion.div>

            {/* Map background */}
            <img
              src="/empty__map.png"
              className="h-full w-full object-cover opacity-70 grayscale-[0.3] sepia-[0.2]"
              alt="Historical Map"
            />
          </div>
        </div>
      </div>

      {/* Historical Content */}
      <div className="relative z-10 mt-10 w-full px-10">
        <div className="border-accent/20 border-t pt-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Summary */}
            <div className="col-span-7 space-y-3">
              <h4 className="text-accent font-header text-[10px] font-bold tracking-[0.4em] uppercase">
                Territorial Summary
              </h4>
              <p className="text-body/60 font-body text-justify text-[9px] leading-relaxed">
                The Rodriguez holdings encompass a strategic gateway between the
                Sierra Madre range and the Marikina Basin. The{" "}
                <span className="text-accent/80">Wawa Gorge</span> serves as a
                natural bastion, while the higher elevations of{" "}
                <span className="text-accent/80">Mt. Parawagan</span> provide
                unrivaled surveillance of the eastern plains.
              </p>
              <div className="flex gap-4 pt-2">
                <div>
                  <span className="font-header block text-[8px] font-bold text-white uppercase italic">
                    Status
                  </span>
                  <span className="text-accent/60 text-[7px] tracking-widest uppercase">
                    Heritage Site
                  </span>
                </div>
                <div>
                  <span className="font-header block text-[8px] font-bold text-white uppercase italic">
                    Province
                  </span>
                  <span className="text-accent/60 text-[7px] tracking-widest uppercase">
                    Rizal (Montalban)
                  </span>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="border-accent/10 col-span-5 flex flex-col justify-between border-l pl-4">
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-accent/40 font-header text-[7px] tracking-tighter uppercase">
                    Elevation Data
                  </span>
                  <span className="text-body/80 font-body mt-1 text-[8px] leading-none">
                    Varies: 40m - 480m ASL
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-accent/40 font-header text-[7px] tracking-tighter uppercase">
                    Key Landmarks
                  </span>
                  <ul className="text-body/80 font-body mt-1 list-inside list-disc text-[8px] leading-tight opacity-70">
                    <li>The Ancestral Hearth</li>
                    <li>Wawa Limestone Formations</li>
                    <li>Marian Grotto Path</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex items-end justify-between opacity-40">
          <div className="flex flex-col">
            <div className="bg-accent/40 mb-1 h-px w-12"></div>
            <p className="font-body text-[6px] tracking-[0.3em] uppercase italic">
              Property of Rodriguez Archives
            </p>
          </div>

          <div className="border-accent/40 relative flex size-10 rotate-45 items-center justify-center border">
            <div className="border-accent/20 flex size-6 items-center justify-center border">
              <div className="bg-accent/60 size-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <CornerBrackets className="text-accent/30 absolute top-6 left-6" />
      <CornerBrackets className="text-accent/30 absolute right-6 bottom-6 rotate-180" />
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
