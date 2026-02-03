
export default function Title() {
  return (
    <div className="group relative w-100 h-240 overflow-hidden bg-main">
      <div className="absolute inset-3.75 overflow-hidden border border-accent/20">
        <img
          src="/titleBG.png"
          alt="Title background"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] sepia-[0.5] brightness-[0.75] contrast-[0.9]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-imgBorder via-transparent to-imgBorder opacity-66"></div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-70 text-accent/60 pointer-events-none">
        <FlourishCenter />
      </div>

      <div className="relative h-full flex flex-col items-center justify-between py-16 px-8 text-center z-10">
        <div className="animate-fade-in flex flex-col items-center">
          <div className="inline-block p-1 border border-accent/40 rounded-full mb-2">
            <div className="bg-accent/10 px-4 py-1 rounded-full border border-accent/60">
              <span className="text-accent text-[8px] font-black uppercase tracking-[0.3em]">
                Philippines
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center py-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] rounded-[100%] bg-shadow/20 backdrop-blur-xs scale-y-[0.9] shadow-[0_0_10px_rgba(0,0,0,0.8)] border border-accent/20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-accent text-[9px] uppercase tracking-[0.6em] mb-4 font-bold block opacity-90">
              Established 1892
            </span>

            <h3 className="font-serif italic text-white text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] scale-y-105">
              Rodriguez
            </h3>

            {/* Separator */}
            <div className="relative flex items-center justify-center w-full my-5 max-w-50">
              <div className="h-px w-full bg-linear-to-r from-transparent via-accent/60 to-transparent"></div>
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent"></div>
            </div>

            <span className="block text-accent text-sm font-serif italic tracking-[0.3em] uppercase leading-none">
              Ancestral House
            </span>

            <p className="text-[#F5F5DC]/80 text-[10px] leading-relaxed max-w-48 mt-6 font-light italic text-center">
              "A living testament to Filipino craftsmanship and heritage across
              generations."
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border border-accent/40 rotate-45 flex items-center justify-center">
            <div className="w-8 h-8 border border-accent/20 flex items-center justify-center -rotate-45">
              <span className="text-accent text-xs font-serif font-bold">
                R
              </span>
            </div>
          </div>
          <div className="w-px h-12 bg-linear-to-b from-accent to-transparent"></div>
        </div>
      </div>

      <CornerBrackets className="absolute top-4 left-4 text-accent" />
      <CornerBrackets className="absolute top-4 right-4 text-accent rotate-90" />
      <CornerBrackets className="absolute bottom-4 left-4 text-accent -rotate-90" />
      <CornerBrackets className="absolute bottom-4 right-4 text-accent rotate-180" />
    </div>
  );
}

function FlourishCenter() {
  return (
    <svg viewBox="0 0 100 20" fill="currentColor">
      <path
        d="M50 2C40 2 35 15 10 15M50 2C60 2 65 15 90 15"
        stroke="currentColor"
        fill="none"
        strokeWidth="0.5"
      />
      <circle cx="50" cy="2" r="1.5" />
    </svg>
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
      <path d="M8 32V8H32" opacity="0.4" />
    </svg>
  );
}
