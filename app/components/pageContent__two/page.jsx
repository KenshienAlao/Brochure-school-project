import { createPortal } from "react-dom";

import { Home, Building2, MapPin, Archive, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import HeaderScribble from "../ui/header-scribble__two.png";

export default function PageTwo() {
  const [ImageOne, setImageOne] = useState(false);
  return (
    <>
      <div className="relative h-240 w-100 overflow-hidden">
        {/* Background  */}
        <div className="absolute inset-0">
          <img
            src="/landfall.png"
            className="size-full object-cover brightness-[0.3] sepia-[0.9]"
            alt=""
          />
        </div>
        {/* content */}
        <div className="relative z-10 flex h-full flex-col px-4 pt-10 pb-6">
          {/* header */}
          <header className="bg-wite border-accent/50 bg-accent/20 mb-10 rotate-6 border-t-3 border-b-3 px-4 text-center">
            <h1 className="text-2xl tracking-tight text-white/90 uppercase drop-shadow-md">
              <span className="font-header font-bold">most</span> <br />
              <span className="text-accent font-supheader text-4xl">
                visited places
              </span>
            </h1>
            <div className="bg-accent/30 mx-auto mt-2 h-px w-32" />
          </header>

          {/* places */}
          <div className="flex h-200 w-full flex-col gap-10 brightness-[0.8] sepia-[0.4]">
            {/* 1st */}
            <div className="relative h-60">
              {/* header */}
              <div className="absolute">
                <div className="bg-accent absolute -top-0.5 left-4 h-1 w-80" />
                <div className="absolute -top-17 -left-1 size-60">
                  <Image
                    src={HeaderScribble}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-2 left-3">
                  <h1 className="font-supheader absolute w-50 text-center text-[15px] font-bold tracking-widest text-black uppercase">
                    Rodriguez Ancestral <br />
                    House
                  </h1>
                </div>
              </div>
              {/* picture */}
              <div className="relative top-15 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <div className="absolute left-2 bg-[#e8dcc3] pb-6">
                    <div className="m-2 size-35 border">
                      <img src="/visited/house.png" className="size-full" />
                    </div>
                  </div>
                </div>
                1
                <div className="flex w-50 items-center justify-center">
                  <p className="font-body text-sm tracking-wide text-white">
                    The Eulogio Rodriguez Ancestral House in Rodriguez (formerly
                    Montalban), Rizal is a historic bahay-na-bato that once
                    belonged to Eulogio “Amang” Rodriguez Sr., the Philippines’
                    longest-serving Senate President and notable public servant.
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="relative h-60">
              {/* header */}
              <div className="absolute">
                <div className="bg-accent absolute -top-0.5 left-4 h-1 w-80" />
                <div className="absolute -top-15 size-50">
                  <Image
                    src={HeaderScribble}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-3">
                  <h1 className="font-supheader absolute w-50 text-center text-[20px] font-bold tracking-widest text-black uppercase">
                    wawa
                  </h1>
                </div>
              </div>
              {/* picture */}
              <div className="relative top-10 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <div className="absolute left-2 bg-[#e8dcc3] pb-6">
                    <div className="m-2 size-35 border">
                      <img src="/visited/wawa.png" className="size-full" />
                    </div>
                  </div>
                </div>
                <div className="flex w-50 items-center justify-center">
                  <p className="font-body text-sm tracking-wide text-white">
                    Wawa Dam in Rodriguez (formerly Montalban), Rizal is a
                    historic waterworks built during the American period, known
                    for its massive stone dam and its role in early Manila water
                    supply, now recognized as a cultural and natural landmark.
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="relative h-60">
              {/* header */}
              <div className="absolute -top-5">
                <div className="bg-accent absolute -top-0.5 left-4 h-1 w-80" />
                <div className="absolute -top-15 size-50">
                  <Image
                    src={HeaderScribble}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-8">
                  <h1 className="font-supheader absolute w-50 text-center text-[20px] font-bold tracking-widest text-black uppercase">
                    mount parawagan
                  </h1>
                </div>
              </div>
              {/* picture */}
              <div className="relative top-6 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <div className="absolute left-2 bg-[#e8dcc3] pb-6">
                    <div className="m-2 size-35 border">
                      <img src="/visited/parawagan.png" className="size-full" />
                    </div>
                  </div>
                </div>
                <div className="flex w-50 items-center justify-center">
                  <p className="font-body text-sm text-white">
                    Mount Parawagan in Rodriguez (formerly Montalban), Rizal is
                    a popular hiking destination known for its rolling hills,
                    grassland summit, and panoramic views of the Sierra Madre,
                    offering both recreational and local cultural significance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {ImageOne && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="bg-main border-accent/40 ring-accent/20 relative max-h-[90vh] max-w-7xl overflow-hidden border-r-4 border-b-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] ring-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* 1. VINTAGE OVERLAYS */}
                  <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] opacity-[0.04] mix-blend-multiply"></div>

                  {/* 2. DECORATIVE CORNERS (Callado Style) */}
                  <div
                    className="border-accent/20 pointer-events-none absolute top-0 left-0 m-4 h-32 w-32 border-t-2 border-l-2 opacity-50"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  ></div>
                  <div
                    className="border-accent/20 pointer-events-none absolute right-0 bottom-0 m-4 h-32 w-32 border-r-2 border-b-2 opacity-50"
                    style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
                  ></div>

                  {/* 3. CLOSE BUTTON */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="bg-main border-accent/40 text-accent hover:bg-accent hover:text-main absolute top-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-xl transition-all duration-500 hover:rotate-90"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {/* 4. MAIN CONTENT GRID */}
                  <div className="relative grid h-full grid-cols-1 gap-0 overflow-y-auto md:grid-cols-2 lg:overflow-hidden">
                    {/* LEFT COLUMN: VISUAL GALLERY */}
                    <div className="border-accent/10 flex flex-col justify-center border-r bg-black/20 p-12 lg:p-20">
                      <div className="mb-8 space-y-3 text-center md:text-left">
                        <div className="text-accent/50 flex items-center justify-center gap-3 md:justify-start">
                          <div className="from-accent/30 h-px flex-1 bg-linear-to-r to-transparent"></div>
                        </div>
                        <h3 className="text-accent font-header text-3xl leading-tight tracking-widest uppercase drop-shadow-md lg:text-5xl">
                          {selectedImage.title}
                        </h3>
                      </div>

                      {/* The "Wood Frame" Image */}
                      <div className="group relative">
                        <div className="bg-accent/10 absolute -inset-2 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>
                        <div className="border-imgBorder relative z-10 overflow-hidden border-[12px] shadow-2xl">
                          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/60 to-transparent"></div>
                          <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="aspect-4/3 w-full object-cover brightness-90 contrast-110 sepia-[0.2] transition-transform duration-[3s] group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: NARRATIVE */}
                    <div className="flex flex-col justify-center space-y-10 p-12 lg:p-20">
                      <div className="flex items-center gap-6">
                        {selectedImage.icon && (
                          <div className="border-accent/30 bg-accent/5 rounded-full border-2 p-5 shadow-inner">
                            <selectedImage.icon className="text-accent h-10 w-10" />
                          </div>
                        )}
                        {/* <div className="space-y-1">
                          <p className="text-accent font-header text-sm tracking-widest uppercase">
                            Location
                          </p>
                          <p className="text-body/40 font-body text-xs tracking-widest">
                            Montalban, Rizal Province
                          </p>
                        </div> */}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                      >
                        {/* Ornate Dropcap Description */}
                        <p className="text-body font-body first-letter:font-header first-letter:text-accent text-base leading-relaxed italic opacity-90 first-letter:float-left first-letter:mr-4 first-letter:pt-2 first-letter:text-6xl first-letter:leading-[0.8] lg:text-xl">
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
