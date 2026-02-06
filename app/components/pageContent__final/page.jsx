import { Globe, MapPin, Mail, PhoneCall, Compass } from "lucide-react";

export default function PageFinal() {
  const contactInfo = [
    { logo: PhoneCall, info: "123-456-7890" },
    { logo: Mail, info: "test@gmailcom" },
    { logo: Globe, info: "www.test.com" },
    { logo: MapPin, info: "idk" },
  ];

  return (
    <div className="group relative w-100 h-240 overflow-hidden bg-main flex flex-col">
      {/* Vintage Paper Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Subtle Radial Gradient */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-1"
        style={{
          background: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
        }}
      ></div>

      {/* Ornate Border Frame */}
      <div className="absolute inset-4 border-2 border-accent/30 z-0 shadow-inner">
        <div className="absolute inset-2 border border-accent/15"></div>
      </div>

      {/* Decorative Corner Ornaments */}
      <div className="z-20">
        <VintageCorner className="absolute top-3 left-3 text-accent/60" />
        <VintageCorner className="absolute top-3 right-3 text-accent/60 rotate-90" />
        <VintageCorner className="absolute bottom-3 left-3 text-accent/60 -rotate-90" />
        <VintageCorner className="absolute bottom-3 right-3 text-accent/60 rotate-180" />
      </div>

      {/* Compass Rose Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] z-0">
        <Compass className="size-64 text-accent" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col p-10 gap-10">
        {/* Header Ribbon */}

        {/* Logo Section with Vintage Frame */}
        <div className="flex mt-15 justify-center mb-10">
          <div className="relative group/logo">
            {/* Ornate frame behind logo */}
            <div className="absolute -inset-4 border-2 border-accent/20 rotate-45">
              <div className="absolute inset-1 border border-accent/10"></div>
            </div>
            <div className="relativep-4">
              <img src="/contact/logo.png" className="size-40 relative z-10" />
            </div>
          </div>
        </div>

        {/* About Section with Vintage Typography */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 flex items-center gap-1">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-accent/40"></div>
              <div className="size-1 bg-accent/40 rotate-45"></div>
            </div>
            <h2 className="font-header text-2xl text-accent uppercase tracking-wider relative">
              <span className="relative z-10">About Us</span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-accent/0 via-accent/30 to-accent/0"></div>
            </h2>
            <div className="flex-1 flex items-center gap-1">
              <div className="size-1 bg-accent/40 rotate-45"></div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-accent/40"></div>
            </div>
          </div>
          <div className="relative bg-accent/5 border border-accent/10 p-6 backdrop-blur-sm">
            <div className="absolute top-2 left-2 size-3 border-l-2 border-t-2 border-accent/30"></div>
            <div className="absolute top-2 right-2 size-3 border-r-2 border-t-2 border-accent/30"></div>
            <div className="absolute bottom-2 left-2 size-3 border-l-2 border-b-2 border-accent/30"></div>
            <div className="absolute bottom-2 right-2 size-3 border-r-2 border-b-2 border-accent/30"></div>
            <p className="font-body text-[13px] text-body/85 leading-loose text-center italic tracking-wide">
              hdawddahdahdioadhiadihadhadhioadoadodhoad
              adgawdawddhwhiodhaodhoahwohaohodhaohdiohioah
              dadidhdoiahdiohidhiahodhiodhaiwodoawhdaidada
              abdiahdiahdihdihaidohidhoahioahidhahdiahidhai
            </p>
          </div>
        </section>

        {/* Contact Section with Travel Motif */}
        <section>
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-accent/30 to-accent/50"></div>
            <div className="relative">
              <h2 className="font-header text-xl text-accent uppercase tracking-[0.25em] px-4">
                Visit Us
              </h2>
              <div className="absolute -bottom-0.5 left-0 right-0 flex justify-center gap-1">
                <div className="size-1 bg-accent/60 rotate-45"></div>
                <div className="size-1 bg-accent/60 rotate-45"></div>
                <div className="size-1 bg-accent/60 rotate-45"></div>
              </div>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-accent/30 to-accent/50"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group/item relative bg-linear-to-br from-accent/5 to-transparent border border-accent/20 p-4 hover:border-accent/40 transition-all duration-300"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 size-2 border-l border-t border-accent/40"></div>
                <div className="absolute bottom-0 right-0 size-2 border-r border-b border-accent/40"></div>

                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    <div className="relative bg-main border-2 border-accent/50 p-2 rounded-full group-hover/item:scale-110 transition-transform">
                      <item.logo
                        className="text-accent size-3.5"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <span className="font-body text-body text-[11px] tracking-wider uppercase opacity-85 group-hover/item:opacity-100 group-hover/item:text-accent/90 transition-all">
                    {item.info}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function VintageCorner({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M0 60L0 0L60 0" />
      <path d="M5 60L5 5L60 5" strokeWidth="1" opacity="0.5" />
      <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
