import { motion } from "framer-motion";

export default function PageFour() {
  const locations = [
    {
      id: 1,
      top: "23.5%",
      left: "8%",
      label: `E. Rodriguez Sr. Residence`,
      src: "/location__one.png",
    },
    {
      id: 2,
      top: "35.5%",
      right: "38.5%",
      label: "Mt. Parawagan Summit",
      src: "/location__two.png",
    },
    {
      id: 3,
      top: "30.5%",
      right: "7.5%",
      label: "Wawa Gorge / Dam",
      src: "/location__three.png",
    },
    {
      id: 4,
      bottom: "33%",
      right: "22.5%",
      label: "Grotto Vista Point",
      src: "/location__four.png",
    },
  ];

  return (
    <div className="flex flex-col items-center relative w-100 h-240 overflow-hidden bg-main border-x border-accent/10">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-50"></div>

      {/* 1. Header Section */}
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
            Topographic survey of the Rodriguez patrimony and the Montalban Pass
          </p>
        </div>
      </div>

      {/* 2. Static Map Section */}
      <div className="relative z-10 flex flex-col items-center px-6 w-full">
        {/* Verification Stamp */}
        <div className="absolute -top-6 -left-1 z-20 opacity-25 -rotate-12">
          <div className="border border-accent/60 p-1">
            <div className="border border-accent/40 px-2 py-0.5 text-[7px] font-header text-accent uppercase tracking-widest">
              Archival Entry: 1902-A
            </div>
          </div>
        </div>

        <div className="relative p-1.5 bg-imgBorder border border-accent/30 shadow-2xl">
          <div className="relative overflow-hidden size-85 bg-[#121212]">
            <img
              src="/empty__map.png"
              className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] opacity-70"
              alt="Historical Map"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10"></div>
          </div>

          {/* Static Location Labels (No Hover) */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              style={{
                top: loc.top,
                left: loc.left,
                right: loc.right,
                bottom: loc.bottom,
              }}
              className="absolute z-30"
            >
              <div className="relative flex flex-col items-center">
                <img src={loc.src} className="size-13 grayscale-[0.2]" />
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>

                {/* Fixed Leader Line */}
                <div className="h-3 w-px bg-accent/50"></div>
                {/* Permanent Label
                <div className="bg-main border border-accent/30 px-2 py-0.5 -mt-px shadow-lg">
                  <p className="text-accent text-[6px] font-header whitespace-nowrap tracking-[0.2em] font-bold uppercase">
                    {loc.label}
                  </p>
                </div> */}
              </div>
            </div>
          ))}

          {/* Survey Coordinates */}
          <div className="absolute bottom-3 right-3 z-20 opacity-30 text-right">
            <p className="text-[6px] font-body text-accent uppercase tracking-widest">
              Surveyor: Rodriguez Estate Office <br />
              Datum: Luzon Grid 1902
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Brochure Content (Historical Context) */}
      <div className="relative z-10 w-full px-10 mt-10">
        <div className="border-t border-accent/20 pt-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Descriptive Summary */}
            <div className="col-span-7 space-y-3">
              <h4 className="text-accent font-header text-[10px] font-bold tracking-[0.4em] uppercase">
                Territorial Summary
              </h4>
              <p className="text-body/60 text-[9px] font-body leading-relaxed text-justify">
                The Rodriguez holdings encompass a strategic gateway between the
                Sierra Madre range and the Marikina Basin. The{" "}
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

        {/* 4. Footer "Official" Elements */}
        <div className="mt-14 flex justify-between items-end opacity-40">
          <div className="flex flex-col">
            <div className="w-12 h-px bg-accent/40 mb-1"></div>
            <p className="text-[6px] font-body tracking-[0.3em] uppercase italic">
              Property of Rodriguez Archives
            </p>
          </div>

          {/* Decorative Seal Symbol */}
          <div className="relative size-10 flex items-center justify-center border border-accent/40 rotate-45">
            <div className="size-6 border border-accent/20 flex items-center justify-center">
              <div className="size-1 bg-accent/60"></div>
            </div>
          </div>
        </div>
      </div>

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
