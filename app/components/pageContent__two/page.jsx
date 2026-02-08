import { createPortal } from "react-dom";

import { Home, Building2, MapPin, Archive, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import HeaderScribble from "../ui/header-scribble__two.png";
import Barangay from "../ui/town-hall.png";
import Location from "../ui/location-pin.png";

export default function PageTwo() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [ImageOne, setImageOne] = useState(false);
  return (
    <>
      <div className="relative h-240 w-100 overflow-hidden">
        {/* Background  */}
        <div className="absolute inset-0 -left-100">
          <img
            src="/bgOne.jpeg"
            className="size-full rotate-y-180 object-cover brightness-[0.3] sepia-[0.9]"
            alt=""
          />
        </div>
        {/* content */}
        <div className="relative z-10 flex h-full flex-col px-4 pt-10 pb-6">
          {/* header */}
          <motion.header
            className="bg-wite border-accent/50 bg-accent/20 mb-10 rotate-6 border-t-3 border-b-3 px-4 text-center"
            whileHover={{
              rotate: -6,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <h1 className="text-2xl tracking-tight text-white/90 uppercase drop-shadow-md">
              <span className="font-header font-bold">most</span> <br />
              <span className="text-accent font-supheader text-4xl">
                visited places
              </span>
            </h1>
            <div className="bg-accent/30 mx-auto mt-2 h-px w-32" />
          </motion.header>

          {/* places */}
          <div className="flex h-200 w-full flex-col gap-10 brightness-[0.8] sepia-[0.4]">
            {/* 1st */}
            <div className="relative h-60">
              {/* header */}
              <motion.div
                className="absolute"
                whileHover={{
                  rotate: 3,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
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
              </motion.div>
              {/* picture */}
              <div className="relative top-15 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <motion.div
                    className="absolute left-2 bg-[#e8dcc3] pb-6"
                    whileHover={{
                      rotate: 5,
                      scale: 1.15,
                      y: -10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <button onClick={() => setIsOpen1(true)}>
                      <div className="m-2 size-35 border">
                        <img
                          src="/visited/house.png"
                          className="size-full object-cover"
                        />
                      </div>
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  className="flex w-50 items-center justify-center"
                  whileHover={{
                    x: 5,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <p className="font-body text-sm tracking-wide text-white">
                    The Eulogio Rodriguez Ancestral House in Rodriguez (formerly
                    Montalban), Rizal is a historic bahay-na-bato that once
                    belonged to Eulogio "Amang" Rodriguez Sr., the Philippines'
                    longest-serving Senate President and notable public servant.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* 2nd */}
            <div className="relative h-60">
              {/* header */}
              <motion.div
                className="absolute"
                whileHover={{
                  rotate: -3,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
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
              </motion.div>
              {/* picture */}
              <div className="relative top-10 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <motion.div
                    className="absolute left-2 bg-[#e8dcc3] pb-6"
                    whileHover={{
                      rotate: -5,
                      scale: 1.15,
                      y: -10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <button onClick={() => setIsOpen2(true)}>
                      <div className="m-2 size-35 border">
                        <img
                          src="/visited/wawa.png"
                          className="size-full object-cover"
                        />
                      </div>
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  className="flex w-50 items-center justify-center"
                  whileHover={{
                    x: 5,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <p className="font-body text-sm tracking-wide text-white">
                    Wawa Dam in Rodriguez (formerly Montalban), Rizal is a
                    historic waterworks built during the American period, known
                    for its massive stone dam and its role in early Manila water
                    supply, now recognized as a cultural and natural landmark.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* 3rd */}
            <div className="relative h-60">
              {/* header */}
              <motion.div
                className="absolute -top-5"
                whileHover={{
                  rotate: 3,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
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
              </motion.div>
              {/* picture */}
              <div className="relative top-6 flex">
                <div className="relative flex size-50 items-center justify-center">
                  <motion.div
                    className="absolute left-2 bg-[#e8dcc3] pb-6"
                    whileHover={{
                      rotate: 5,
                      scale: 1.15,
                      y: -10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <button onClick={() => setIsOpen3(true)}>
                      <div className="m-2 size-35 border">
                        <img
                          src="/visited/parawagan.png"
                          className="size-full object-cover"
                        />
                      </div>
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  className="flex w-50 items-center justify-center"
                  whileHover={{
                    x: 5,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <p className="font-body text-sm text-white">
                    Mount Parawagan in Rodriguez (formerly Montalban), Rizal is
                    a popular hiking destination known for its rolling hills,
                    grassland summit, and panoramic views of the Sierra Madre,
                    offering both recreational and local cultural significance.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal One */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen1(false)}
                className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-slate-50/50 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-200/30 to-orange-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-blue-200/20 to-emerald-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  <div className="relative flex h-full gap-12">
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/visited/house.png"
                          alt="Rodriguez Ancestral House"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                            National Heritage
                          </span>
                        </div>

                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Architectural Style
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Spanish-Colonial Bahay-na-Bato
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-4">
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Historic Landmark
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Rodriguez <br />
                          <span className="text-accent font-supheader tracking-widest">
                            Ancestral House
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          The living legacy of{" "}
                          <span className="text-accent font-bold">
                            Eulogio "Amang" Rodriguez Sr.
                          </span>
                        </p>
                      </section>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Location
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              J.P. Rizal St., Brgy. Balite
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Rodriguez, Rizal
                            </p>
                          </div>
                        </div>

                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Period
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Early 20th Century
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              American Colonial Era
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          This grand estate served as the residence of the
                          former Senate President, known as the
                          <span className="font-semibold text-slate-900">
                            {" "}
                            "Grand Old Man of Philippine Politics."
                          </span>
                          The architecture stands as a testament to Filipino
                          resilience, featuring heavy stone foundations and
                          intricate hardwood upper floors designed to withstand
                          the tropical elements for generations.
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm"
                            >
                              <img
                                src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                alt="user"
                              />
                            </div>
                          ))}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-sm">
                            +42
                          </div>
                          <span className="ml-4 flex items-center text-xs text-white">
                            Recent visitors
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    onClick={() => setIsOpen1(false)}
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all hover:bg-white"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      {/* Modal Two */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen2(false)}
                className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-slate-50/50 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-200/30 to-orange-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-blue-200/20 to-emerald-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  <div className="relative flex h-full gap-12">
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/visited/wawa.png"
                          alt="Wawa Dam"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                            Natural Landmark
                          </span>
                        </div>

                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Concrete Gravity Dam
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Spanish Colonial–American Transitional Period
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-4">
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Historic Infrastructure
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Wawa{" "}
                          <span className="text-accent font-supheader tracking-widest">
                            Dam
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          A historic dam and gateway to the natural landscapes
                          of Rodriguez, Rizal.
                        </p>
                      </section>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Location
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Barangay San Rafael
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Rodriguez, Rizal
                            </p>
                          </div>
                        </div>

                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Period
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              1909
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Late Spanish Colonial Period
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Wawa Dam was constructed in 1909 during the final
                          years of Spanish rule in the Philippines as part of
                          Manila's early water supply system. Built across the
                          Wawa River, the dam supplied water to the growing
                          capital before later being replaced by larger
                          facilities. Surrounded by limestone cliffs and
                          forested terrain, the site later became a strategic
                          location during World War II and is now recognized for
                          both its historical significance and natural beauty.
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm"
                            >
                              <img
                                src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                alt="user"
                              />
                            </div>
                          ))}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-sm">
                            +42
                          </div>
                          <span className="ml-4 flex items-center text-xs text-white">
                            Recent visitors
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    onClick={() => setIsOpen2(false)}
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all hover:bg-white"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      {/* Modal Three */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen3(false)}
                className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-slate-50/50 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-200/30 to-orange-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-blue-200/20 to-emerald-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  <div className="relative flex h-full gap-12">
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/visited/parawagan.png"
                          alt="Mount Parawagan"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                            Natural Landmark
                          </span>
                        </div>

                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Grassland Mountain Ridge
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Limestone and Rolling Terrain
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-4">
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Cultural Landscape
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Mount{" "}
                          <span className="text-accent font-supheader tracking-widest">
                            Parawagan
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          A scenic summit offering sweeping views of Rizal,
                          Metro Manila, and the Sierra Madre.
                        </p>
                      </section>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Location
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Barangay Mascap
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Rodriguez, Rizal
                            </p>
                          </div>
                        </div>

                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Period
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Pre-colonial to Present
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Traditional Grazing and Hiking Area
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Mount Parawagan is a well-known hiking destination in
                          Rodriguez, Rizal, characterized by its rolling
                          grasslands, open ridges, and panoramic viewpoints.
                          Long before it became a recreational site, the
                          mountain served as a grazing area for local farmers
                          and played a role in the everyday livelihood of nearby
                          communities. Today, it is valued as both a natural
                          landmark and a cultural landscape, offering accessible
                          trails and unobstructed views of the surrounding
                          mountains, plains, and urban skyline.
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm"
                            >
                              <img
                                src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                alt="user"
                              />
                            </div>
                          ))}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-sm">
                            +42
                          </div>
                          <span className="ml-4 flex items-center text-xs text-white">
                            Recent visitors
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    onClick={() => setIsOpen3(false)}
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all hover:bg-white"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
