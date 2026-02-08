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
  const [isOpenEventOne, setIsOpenEventOne] = useState(false);
  const [isOpenEventTwo, setIsOpenEventTwo] = useState(false);
  const [isOpenEventThree, setIsOpenEventThree] = useState(false);
  const [isOpenEventFour, setIsOpenEventFour] = useState(false);

  return (
    <div className="relative h-240 w-100 overflow-hidden">
      {/* Background */}
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
            <motion.div
              className="absolute -top-4 right-10 z-1 size-20 rotate-y-180"
              whileHover={{
                y: [-5, 5, -5],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={Boat} alt="" className="size-full object-contain" />
            </motion.div>
            {/* picture */}
            <motion.div
              className="absolute left-2 -rotate-3 bg-[#e8dcc3] pb-4"
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <button onClick={() => setIsOpenEventOne(true)}>
                <div className="m-2 size-30 border">
                  <img
                    src="/event/event__one.png"
                    className="size-full object-cover"
                  />
                </div>
              </button>
            </motion.div>
            {/* label */}
            <motion.div
              className="absolute top-5 right-5 size-60 rotate-3"
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
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-12.5">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">bamboo rafts</span>{" "}
                  <br />
                  renting
                </h1>
              </div>
            </motion.div>
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
            <motion.div
              className="absolute right-6 rotate-5 bg-[#e8dcc3] pb-4"
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <button onClick={() => setIsOpenEventTwo(true)}>
                <div className="m-2 size-30 border">
                  <img
                    src="/event/event__two.png"
                    className="size-full object-cover"
                  />
                </div>
              </button>
            </motion.div>
            {/* label */}
            <motion.div
              className="absolute top-5 left-1 size-60 -rotate-3"
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
            </motion.div>
          </div>
          {/* 3rd pic */}
          <div className="relative top-100 mx-3">
            {/* ui */}
            <motion.div
              className="absolute top-25 left-30 z-1 size-15 -rotate-15"
              whileHover={{
                rotate: [-15, -25, -5, -15],
                scale: 1.15,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image src={Bible} alt="" className="size-full object-contain" />
            </motion.div>
            {/* picture */}
            <motion.div
              className="absolute left-2 -rotate-3 bg-[#e8dcc3] pb-4"
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <button onClick={() => setIsOpenEventThree(true)}>
                <div className="m-2 size-30 border">
                  <img
                    src="/event/event__three.png"
                    className="size-full object-cover"
                  />
                </div>
              </button>
            </motion.div>
            {/* label */}
            <motion.div
              className="absolute top-5 right-5 size-60 rotate-3"
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
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-15">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">Fiesta</span>{" "}
                  <br />
                  Celebration
                </h1>
              </div>
            </motion.div>
          </div>
          {/* 4th pic */}
          <div className="relative top-140 mx-3">
            {/* ui */}
            <motion.div
              className="absolute top-18 right-30 z-1 size-20"
              whileHover={{
                scale: [1, 1.2, 0.9, 1.1, 1],
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <Image
                src={Photography}
                alt=""
                className="object-coverw size-full"
              />
            </motion.div>
            <motion.div
              className="absolute -top-10.5 right-35 z-1 size-15 rotate-15 rotate-y-180"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={Birds} alt="" className="size-full object-contain" />
            </motion.div>
            {/* picture */}
            <motion.div
              className="absolute right-6 rotate-5 bg-[#e8dcc3] pb-4"
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <button onClick={() => setIsOpenEventFour(true)}>
                <div className="m-2 size-30 border">
                  <img src="/event/event__four.png" className="size-full" />
                </div>
              </button>
            </motion.div>
            {/* label */}
            <motion.div
              className="absolute top-5 left-1 size-60 -rotate-3"
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
              <Image src={HeaderScribble} alt="" className="object-contain" />
              <div className="absolute top-3 right-13">
                <h1 className="font-header text-center text-lg font-bold text-black uppercase">
                  <span className="font-miniheader text-2xl">Photography</span>{" "}
                  <br />
                  creation
                </h1>
              </div>
            </motion.div>
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

      {/* modal one */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpenEventOne && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpenEventOne(false)}
                className="absolute inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-cyan-50/30 to-teal-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-cyan-200/30 to-blue-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-teal-200/20 to-emerald-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpenEventOne(false)}
                    className="absolute top-6 right-6 z-50 flex size-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-red-50"
                  >
                    <svg
                      className="size-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="relative flex h-full gap-12">
                    {/* Image Section */}
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/event/event__one.png"
                          alt="Bamboo Rafts Rental"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Activity Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-cyan-600/95 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-white uppercase">
                            Adventure Activity
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Experience Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Water Recreation & Sightseeing
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between py-4">
                      {/* Header */}
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Wawa Dam Activity
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Bamboo Rafts <br />
                          <span className="text-accent font-supheader tracking-widest">
                            Rental
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          Glide through the serene waters of{" "}
                          <span className="text-accent font-bold">
                            Wawa Dam
                          </span>
                        </p>
                      </section>

                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Pricing */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                              Rental Rate
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              ₱150 - ₱300
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Per raft/hour
                            </p>
                          </div>
                        </div>

                        {/* Capacity */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Capacity
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              4-6 People
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Per bamboo raft
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Experience the tranquil beauty of Wawa Dam aboard
                          traditional bamboo rafts.
                          <span className="text-accent font-semibold">
                            {" "}
                            Perfect for families and groups
                          </span>
                          , these eco-friendly rafts offer a unique way to
                          explore the stunning rock formations and crystal-clear
                          waters while enjoying the peaceful ambiance of this
                          natural wonder.
                        </p>
                      </div>

                      {/* Features Tags */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Life Jackets Provided",
                            "Scenic Views",
                            "Photo Ops",
                            "Eco-Friendly",
                          ].map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-cyan-100/80 px-3 py-1.5 text-xs font-semibold text-cyan-700 backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      {/* modal two */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpenEventTwo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpenEventTwo(false)}
                className="absolute inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-amber-50/30 to-orange-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-amber-200/30 to-orange-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-stone-200/20 to-slate-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpenEventTwo(false)}
                    className="absolute top-6 right-6 z-50 flex size-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-red-50"
                  >
                    <svg
                      className="size-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="relative flex h-full gap-12">
                    {/* Image Section */}
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/event/event__two.png"
                          alt="Pamintinan Cave"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Activity Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-orange-600/95 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-white uppercase">
                            Adventure Activity
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Experience Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Cave Exploration & Trekking
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between py-4">
                      {/* Header */}
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Historical Cave
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Pamintinan Cave <br />
                          <span className="text-accent font-supheader tracking-widest">
                            Exploration
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          Discover the legendary hideout of{" "}
                          <span className="text-accent font-bold">
                            Bernardo Carpio
                          </span>
                        </p>
                      </section>

                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Difficulty */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-red-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-orange-600 uppercase">
                              Difficulty
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Moderate to Hard
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Requires fitness
                            </p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Duration
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              3-4 Hours
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Round trip trek
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Embark on an exciting journey to this historic
                          limestone cave steeped in Filipino folklore.
                          <span className="text-accent font-semibold">
                            {" "}
                            Rich in history and natural beauty
                          </span>
                          , Pamintinan Cave features stunning rock formations,
                          ancient inscriptions, and breathtaking views from its
                          elevated entrance, making it a must-visit for
                          adventure seekers.
                        </p>
                      </div>

                      {/* Features Tags */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Historical Site",
                            "Rock Formations",
                            "Scenic Views",
                            "Guided Tours",
                          ].map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-orange-100/80 px-3 py-1.5 text-xs font-semibold text-orange-700 backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      {/* modal three */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpenEventThree && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpenEventThree(false)}
                className="absolute inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-rose-50/30 to-pink-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-rose-200/30 to-pink-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-purple-200/20 to-fuchsia-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpenEventThree(false)}
                    className="absolute top-6 right-6 z-50 flex size-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-red-50"
                  >
                    <svg
                      className="size-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="relative flex h-full gap-12">
                    {/* Image Section */}
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/event/event__three.png"
                          alt="Fiesta Celebration"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Activity Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-rose-600/95 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-white uppercase">
                            Cultural Event
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Event Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Religious & Cultural Festival
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between py-4">
                      {/* Header */}
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Annual Celebration
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Fiesta <br />
                          <span className="text-accent font-supheader tracking-widest">
                            Celebration
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          Holy Rosary Church{" "}
                          <span className="text-accent font-bold">
                            Montalban, Rizal
                          </span>
                        </p>
                      </section>

                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Date */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500 to-pink-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-rose-600 uppercase">
                              Celebration
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              October 7th
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Annual feast day
                            </p>
                          </div>
                        </div>

                        {/* Activities */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">
                              Duration
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Multi-Day Event
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Week-long festivities
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Join the vibrant annual fiesta celebrating the Feast
                          of Our Lady of the Holy Rosary.
                          <span className="text-accent font-semibold">
                            {" "}
                            A beloved tradition
                          </span>{" "}
                          featuring religious processions, cultural
                          performances, street parades, food festivals, and
                          community gatherings that bring together locals and
                          visitors in joyful celebration of faith and culture.
                        </p>
                      </div>

                      {/* Features Tags */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Religious Procession",
                            "Street Parades",
                            "Food Festival",
                            "Cultural Shows",
                          ].map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-rose-100/80 px-3 py-1.5 text-xs font-semibold text-rose-700 backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
      {/* modal four */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpenEventFour && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpenEventFour(false)}
                className="absolute inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="group relative h-158 w-250 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-indigo-50/30 to-violet-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-3xl transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-linear-to-br from-indigo-200/30 to-violet-300/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-purple-200/20 to-blue-200/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpenEventFour(false)}
                    className="absolute top-6 right-6 z-50 flex size-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-red-50"
                  >
                    <svg
                      className="size-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="relative flex h-full gap-12">
                    {/* Image Section */}
                    <div className="relative h-full w-95 shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-black/10">
                        <img
                          src="/event/event__four.png"
                          alt="Photography at Mount Pamintinan"
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Activity Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-indigo-600/95 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-white uppercase">
                            Creative Activity
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Experience Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            Photography & Visual Arts
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between py-4">
                      {/* Header */}
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Creative Workshop
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          Photography <br />
                          <span className="text-accent font-supheader tracking-widest">
                            Creation
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          Capture stunning vistas from{" "}
                          <span className="text-accent font-bold">
                            Mount Pamintinan
                          </span>
                        </p>
                      </section>

                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Skill Level */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase">
                              Skill Level
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              All Levels Welcome
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Beginner to Advanced
                            </p>
                          </div>
                        </div>

                        {/* Best Time */}
                        <div className="group/item flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-pink-600 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">
                              Best Time
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              Sunrise & Sunset
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Golden hour magic
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          Unleash your creativity at one of Rodriguez's most
                          photogenic locations.
                          <span className="text-accent font-semibold">
                            {" "}
                            Perfect for landscape and nature photography
                          </span>
                          , Mount Pamintinan offers dramatic rock formations,
                          panoramic mountain views, and golden-hour lighting
                          that will elevate your portfolio and inspire your
                          artistic vision.
                        </p>
                      </div>

                      {/* Features Tags */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Landscape Shots",
                            "Golden Hour",
                            "Rock Formations",
                            "Panoramic Views",
                          ].map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-indigo-100/80 px-3 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
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
