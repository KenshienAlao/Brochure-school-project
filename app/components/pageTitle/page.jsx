import Image from "next/image";
import pic1 from "../ui/framer__header.png";
import mountain__ui from "../ui/mountain.png";

export default function Title() {
  return (
    <div className="group bg-main relative flex h-240 w-100 flex-col items-center justify-center overflow-hidden">
      {/* theme bg*/}
      <>
        <div className="absolute inset-0 z-0">
          <img
            src="/title/bg.png"
            alt="Background"
            className="size-full object-cover brightness-[0.5] contrast-[1.1] grayscale-[0.5] sepia-[0.4]"
          />
          {/* ui */}
          <>
            <div
              className="pointer-events-none absolute inset-0 z-1 opacity-5"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px)`,
              }}
            ></div>
          </>
          {/* glows */}
          <>
            <div className="bg-accent/5 absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"></div>
          </>
        </div>
      </>

      {/* border */}
      <>
        <div className="border-accent/20 absolute inset-3.75 z-10 border"></div>
        <div className="border-accent/20 absolute inset-5 z-10 border"></div>
      </>
      {/* corner brackets */}
      <>
        <CornerBrackets className="text-accent/45 absolute top-4 left-4 z-20" />
        <CornerBrackets className="text-accent/45 absolute top-4 right-4 z-20 rotate-90" />
        <CornerBrackets className="text-accent/45 absolute bottom-4 left-4 z-20 -rotate-90" />
        <CornerBrackets className="text-accent/45 absolute right-4 bottom-4 z-20 rotate-180" />
      </>
      {/* top section*/}
      <>
        <div className="absolute top-14 z-20 flex flex-col items-center">
          <div className="absolute top-4 opacity-20">
            <svg width="300" height="300" viewBox="0 0 55 55" fill="none">
              <circle
                cx="27.5"
                cy="27.5"
                r="26"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-accent"
              />
              <circle
                cx="27.5"
                cy="27.5"
                r="21"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-accent"
              />
            </svg>
          </div>

          <div className="border-accent/40 bg-imgBorder relative mt-20 size-40 rounded-full border-2 p-1 shadow-2xl">
            <img
              src="/title/title__subpic.png"
              className="size-full rounded-full object-cover grayscale-[0.2] sepia-[0.3]"
              alt="Seal"
            />
          </div>
        </div>
      </>

      {/* 4. CENTRAL TITLE (The Rodriguez Centerpiece) */}
      <div className="relative z-20 flex flex-col items-center px-4 text-center">
        {/* Mountain Crest Icon */}
        <div className="-mb-3.75 w-40 brightness-400 sepia-[0.5] filter">
          <Image src={mountain__ui} alt="mountain" className="h-auto w-full" />
        </div>

        {/* Main Title */}
        <div className="relative">
          <h1 className="text-accent font-header text-6xl leading-tight font-bold tracking-tighter uppercase italic">
            Rodriguez
          </h1>

          {/* Sub-label matching PageTwo text style */}
          <div className="mt-2 flex items-center justify-center gap-3">
            <div className="bg-accent/30 h-px w-8"></div>
            <span className="text-accent font-header text-[11px] font-bold tracking-[0.5em] uppercase">
              Montalban
            </span>
            <div className="bg-accent/30 h-px w-8"></div>
          </div>
        </div>

        {/* Location Label */}
        <p className="text-body/80 font-body mt-8 text-[10px] font-bold tracking-[0.4em]">
          LALAWIGAN NG RIZAL
        </p>
      </div>

      {/* 5. BOTTOM BRANDING (History Beats) */}
      <div className="absolute bottom-16 z-20 flex flex-col items-center">
        {/* Branding Frame UI */}
        <div className="mb-4 w-32 opacity-30 saturate-[0.5] sepia-[1] filter">
          <Image src={pic1} alt="footer-ui" className="w-full" />
        </div>

        <div className="flex flex-col items-center">
          <span className="font-header text-accent text-3xl tracking-wide lowercase italic">
            History
            <span className="font-body text-accent/90 ml-2 text-[10px] font-bold tracking-[0.3em] uppercase not-italic">
              Beats
            </span>
          </span>

          {/* The Geometric Divider from PageTwo */}
          <div className="mt-4 flex items-center justify-center gap-1">
            <div className="bg-accent/90 h-px w-12"></div>
            <div className="border-accent/90 h-1 w-1 rotate-45 border"></div>
            <div className="bg-accent/90 h-px w-12"></div>
          </div>
        </div>
      </div>

      {/* 6. CORNER ORNAMENT (The SVG Flourish) */}
      <div className="text-accent/25 absolute right-8 bottom-8 rotate-180">
        <svg
          width="30"
          height="30"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M0 0 Q6 6, 0 12" />
          <path d="M0 0 Q6 6, 12 0" />
          <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function CornerBrackets({ className }) {
  return (
    <svg
      width="18"
      height="18"
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
