import { createPortal } from "react-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Landmark, X, Quote } from "lucide-react";
import Image from "next/image";

import HeaderScribble from "../ui/header-scribble__one.png";
import Web from "../ui/cobweb.png";
import Skull from "../ui/skull.png";
import Boat from "../ui/boat.png";
import Bible from "../ui/bible.png";
import Photography from "../ui/photography.png";
import Birds from "../ui/birds.png";
import Question from "../ui/ask.png";

export default function PageOne() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative h-240 w-100 overflow-hidden">
      {/* 1. Background texture */}
      <div className="absolute inset-0">
        <img
          src="/background__mountain.png"
          className="size-full object-cover brightness-[0.3] sepia-[0.9]"
          alt=""
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col px-4 pt-10 pb-6">
        {/* header */}
        <header className="bg-wite border-accent/50 bg-accent/20 mb-8 -rotate-6 border-t-3 border-b-3 px-4 text-center">
          <h1 className="text-2xl tracking-tight text-white/90 drop-shadow-md">
            <span className="font-header font-bold">A LEGACY</span> <br />
            <span className="text-accent font-supheader text-4xl">
              YOU'LL NEVER FORGET
            </span>
          </h1>
          <div className="bg-accent/30 mx-auto mt-2 h-px w-32" />
        </header>

        {/* gallery */}
        <div className="absolute h-200 w-full brightness-[0.8] sepia-[0.4]">
          {/* 1st pic */}
          <div className="relative top-30 mx-3">
            {/* ui */}
            <div className="absolute -top-4 right-10 z-1 size-20 rotate-y-180">
              <Image src={Boat} alt="" className="size-full object-contain" />
            </div>
            {/* picture */}
            <div className="absolute left-2 -rotate-3 bg-[#e8dcc3] pb-4">
              <div className="m-2 size-30 border">
                <img
                  src="/event/event__one.png"
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* label */}
            <div className="absolute top-5 right-5 size-60 rotate-3">
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-12.5">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">bamboo rafts</span>{" "}
                  <br />
                  renting
                </h1>
              </div>
            </div>
          </div>
          {/* 2nd pic */}
          <div className="relative top-65 mx-3">
            {/* ui */}
            <div className="absolute top-0.5 right-4.5 z-1 size-10 rotate-y-180">
              <Image src={Web} alt="" className="size-full object-contain" />
            </div>
            <div className="absolute -top-3.5 right-35 z-1 size-10 rotate-11 rotate-y-180">
              <Image src={Skull} alt="" className="size-full object-contain" />
            </div>
            {/* picture */}
            <div className="absolute right-6 rotate-5 bg-[#e8dcc3] pb-4">
              <div className="m-2 size-30 border">
                <img
                  src="/event/event__two.png"
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* label */}
            <div className="absolute top-5 left-1 size-60 -rotate-3">
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-10">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">
                    pamintinan cave
                  </span>{" "}
                  <br />
                  exploration
                </h1>
              </div>
            </div>
          </div>
          {/* 3rd pic */}
          <div className="relative top-100 mx-3">
            {/* ui */}
            <div className="absolute top-25 left-30 z-1 size-15 -rotate-15">
              <Image src={Bible} alt="" className="size-full object-contain" />
            </div>
            {/* picture */}
            <div className="absolute left-2 -rotate-3 bg-[#e8dcc3] pb-4">
              <div className="m-2 size-30 border">
                <img
                  src="/event/event__three.png"
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* label */}
            <div className="absolute top-5 right-5 size-60 rotate-3">
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-15">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">Fiesta</span>{" "}
                  <br />
                  Celebration
                </h1>
              </div>
            </div>
          </div>
          {/* 4th pic */}
          <div className="relative top-140 mx-3">
            {/* ui */}
            <div className="absolute top-18 right-30 z-1 size-20">
              <Image
                src={Photography}
                alt=""
                className="size-full object-coverw"
              />
            </div>
            <div className="absolute -top-10.5 right-35 z-1 size-15 rotate-15 rotate-y-180">
              <Image src={Birds} alt="" className="size-full object-contain" />
            </div>
            {/* picture */}
            <div className="absolute right-6 rotate-5 bg-[#e8dcc3] pb-4">
              <div className="m-2 size-30 border">
                <img src="/event/event__four.png" className="size-full" />
              </div>
            </div>
            {/* label */}
            <div className="absolute top-5 left-1 size-60 -rotate-3">
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-13">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">Photography</span>{" "}
                  <br />
                  creation
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="relative z-20 mt-auto">
          <div className="border-accent/20 rounded-sm border-2 bg-[#f4e4bc]/10 p-4 backdrop-blur-sm">
            <h3 className="text-accent font-header absolute -top-7 text-4xl font-bold italic">
              Did you know
            </h3>
            <p className="font-body text-sm leading-relaxed text-white/70">
              Rodriguez, Rizal (formerly{" "}
              <span className="text-accent font-bold italic">Montalban</span>)
              is the gateway to the Sierra Madre and was named after Senate
              President Eulogio "Amang" Rodriguez Sr., whose ancestral home
              still stands today.
            </p>
            <div className="absolute -top-10 right-25 rotate-5">
              <Image src={Question} alt="" className="text-accent size-10" />
            </div>
          </div>
        </footer>
      </div>

      {/* modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-10 backdrop-blur-xl"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-main border-accent/30 relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden border shadow-2xl md:grid md:grid-cols-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-accent absolute top-4 right-4 z-50 p-2"
                  >
                    <X />
                  </button>
                  <div className="flex items-center justify-center bg-black/40 p-8">
                    <img
                      src={selectedImage.src}
                      className="max-h-[60vh] border-[10px] border-white object-cover shadow-2xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-10">
                    <h3 className="text-accent font-header mb-6 text-4xl italic">
                      {selectedImage.title}
                    </h3>
                    <div className="relative">
                      <Quote className="text-accent/10 absolute -top-8 -left-4 h-12 w-12" />
                      <p className="font-body text-base leading-relaxed text-white/80 italic">
                        {selectedImage.fullDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
