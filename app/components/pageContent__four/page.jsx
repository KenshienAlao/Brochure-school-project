import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import HeaderText from "../ui/header__text.png";
import Bag from "../ui/backpack.png";
import Hat from "../ui/hat.png";
import PHmap from "../ui/ph__map.png";
import Aware from "../ui/aware.png";
import Law from "../ui/law.png";
import Money from "../ui/money.png";
import Placeholder from "../ui/placeholder.png";
import { X } from "lucide-react";

export default function PageFour() {
  const [openMap, setOpenMap] = useState(false);
  const [isOpenLoc1, setIsOpenLoc1] = useState(false);
  const [isOpenLoc2, setIsOpenLoc2] = useState(false);
  const [isOpenLoc3, setIsOpenLoc3] = useState(false);

  return (
    <>
      <div className="relative flex h-240 w-100 flex-col overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 -left-200">
          <img
            src="/background__mountain.png"
            className="size-full object-cover brightness-[0.3] sepia-[0.9]"
            alt=""
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-5">
          {/* header */}
          <div className="absolute top-17 right-0 rotate-55">
            <Image src={HeaderText} alt="" className="size-55 object-contain" />
          </div>
          {/* map */}
          <div className="relative h-180 w-full">
            {/* ph map */}
            <Image
              src={PHmap}
              alt=""
              className="-rotate-10 object-contain brightness-0 invert"
            />
            {/* magnifying glass */}
            <div>
              <button onClick={() => setOpenMap(true)}>
                {" "}
                <div className="border-accent absolute top-30 right-20 size-70 overflow-hidden rounded-full border-12">
                  <img
                    src="/map/rizal__map.png"
                    className="translate-x-6 translate-y-20 scale-150 object-cover"
                  />
                </div>
              </button>
              <div className="bg-accent absolute top-80 right-10 h-6 w-15 rotate-25 p-1" />
              <div className="absolute top-84 -right-5 h-10 w-20 rotate-25 rounded-md bg-amber-800 p-1">
                <div className="relative">
                  <div className="h-0.5 bg-amber-950" />
                </div>
              </div>
            </div>

            {/* pre-cautions */}
            <div className="absolute top-150">
              {/* 1st*/}
              <motion.div
                className="absolute bottom-30 mx-3 flex -rotate-4 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Icon Section */}
                <motion.div
                  className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2"
                  variants={{
                    rest: { scale: 1, rotate: 0 },
                    hover: {
                      scale: 1.05,
                      rotate: [0, -15, 15, -15, 15, 0],
                      transition: {
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.2,
                        },
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 1, y: 0 },
                      hover: {
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        y: [0, -5, 0, -3, 0],
                        transition: {
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <Image
                      src={Aware}
                      alt=""
                      className="size-15 brightness-0"
                    />
                  </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center"
                  variants={{
                    rest: { x: 0 },
                    hover: {
                      x: [0, -3, 3, -2, 2, 0],
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px)",
                    }}
                  ></div>

                  <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                    Avoid <br />
                    <motion.span
                      className="inline-block text-red-600"
                      variants={{
                        rest: { scale: 1 },
                        hover: {
                          scale: [1, 1.2, 1.1, 1.2, 1],
                          color: [
                            "#dc2626",
                            "#ef4444",
                            "#dc2626",
                            "#ef4444",
                            "#dc2626",
                          ],
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    >
                      unsafe
                    </motion.span>{" "}
                    areas
                  </p>
                </motion.div>
              </motion.div>
              {/* 2nd */}
              <motion.div
                className="absolute bottom-5 mx-3 flex rotate-2 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Icon Section */}
                <motion.div
                  className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2"
                  variants={{
                    rest: { scale: 1, rotate: 0 },
                    hover: {
                      scale: 1.05,
                      rotate: [0, -15, 15, -15, 15, 0],
                      transition: {
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.2,
                        },
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 1, y: 0 },
                      hover: {
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        y: [0, -5, 0, -3, 0],
                        transition: {
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <Image src={Law} alt="" className="size-15 brightness-0" />
                  </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center"
                  variants={{
                    rest: { x: 0 },
                    hover: {
                      x: [0, -3, 3, -2, 2, 0],
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px)",
                    }}
                  ></div>

                  <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                    <motion.span
                      className="inline-block text-green-700"
                      variants={{
                        rest: { scale: 1 },
                        hover: {
                          scale: [1, 1.2, 1.1, 1.2, 1],
                          color: [
                            "#15803d",
                            "#16a34a",
                            "#15803d",
                            "#16a34a",
                            "#15803d",
                          ],
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    >
                      Follow
                    </motion.span>{" "}
                    local laws
                  </p>
                </motion.div>
              </motion.div>
              {/* 3rd */}
              <motion.div
                className="absolute -bottom-18 mx-3 flex -rotate-4 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Icon Section */}
                <motion.div
                  className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2"
                  variants={{
                    rest: { scale: 1, rotate: 0 },
                    hover: {
                      scale: 1.05,
                      rotate: [0, -15, 15, -15, 15, 0],
                      transition: {
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.2,
                        },
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 1, y: 0 },
                      hover: {
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        y: [0, -5, 0, -3, 0],
                        transition: {
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <Image
                      src={Money}
                      alt=""
                      className="size-15 brightness-0"
                    />
                  </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center"
                  variants={{
                    rest: { x: 0 },
                    hover: {
                      x: [0, -3, 3, -2, 2, 0],
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px)",
                    }}
                  ></div>

                  <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                    <motion.span
                      className="inline-block text-violet-600"
                      variants={{
                        rest: { scale: 1 },
                        hover: {
                          scale: [1, 1.2, 1.1, 1.2, 1],
                          color: [
                            "#7c3aed",
                            "#8b5cf6",
                            "#7c3aed",
                            "#8b5cf6",
                            "#7c3aed",
                          ],
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    >
                      Secure
                    </motion.span>{" "}
                    your valuables
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* bucket list */}
          <div className="relative z-1 mx-3 flex h-80 justify-center rounded-[5px] border bg-white/80 px-5">
            <Image
              src={Bag}
              alt=""
              className="absolute -top-8 right-8 z-1 size-20 -rotate-9"
            />
            <Image
              src={Hat}
              alt=""
              className="absolute -top-18 left-15 z-1 size-20 -rotate-9"
            />
            <div className="absolute -top-12 w-fit rounded-2xl bg-green-600 p-5 text-center">
              <p className="font-body font-semibold text-white uppercase">
                <span className="font-supheader text-2xl tracking-widest">
                  bucket list
                </span>
                <br /> challenge
              </p>
            </div>
            <div className="mt-15 flex flex-col gap-5">
              {/* 1st */}
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-lg border-2 bg-white" />{" "}
                <p className="font-body text-[12px] tracking-wide text-black uppercase">
                  Go kayaking or boating on the {""}
                  <span className="font-header font-bold text-green-800">
                    wawa dam
                  </span>
                  .
                </p>
              </div>
              {/* 2nd */}
              <div className="flex items-center gap-3">
                <div className="size-6">
                  <div className="size-6 rounded-lg border-2 bg-white" />
                </div>
                <p className="font-body text-[12px] tracking-wide text-black uppercase">
                  Climb to the{" "}
                  <span className="font-header font-bold text-green-800">
                    {" "}
                    mount pamintinan
                  </span>{" "}
                  for panoramic views of Montalban.
                </p>
              </div>
              {/* 3rd */}
              <div className="flex items-center gap-3">
                <div className="size-6">
                  <div className="size-6 rounded-lg border-2 bg-white" />
                </div>
                <p className="font-body text-[12px] tracking-wide text-black uppercase">
                  Take a guided tour in{" "}
                  <span className="font-header font-bold text-green-800">
                    {" "}
                    Ancestral House
                  </span>{" "}
                  to learn about the history and heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal map */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {openMap && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
                className="absolute inset-0 z-900 flex items-center justify-center bg-black/80 backdrop-blur-md"
              >
                <div className="relative h-250 w-400">
                  {/* back */}
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    onClick={() => setOpenMap(false)}
                    className="absolute top-5 right-5 rounded-full border-5 bg-black"
                  >
                    <X size={80} className="text-white" />
                  </motion.button>
                  {/* 1st loc */}
                  <motion.button
                    whileHover="hover"
                    whileTap={{
                      scale: 0.9,
                    }}
                    initial="rest"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    onClick={() => setIsOpenLoc1(true)}
                    className="absolute top-30 left-25 z-910 size-30"
                  >
                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 },
                      }}
                    >
                      <Image
                        src={Placeholder}
                        alt=""
                        className="size-full object-cover"
                      />
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-green-600 px-3 py-1.5 whitespace-nowrap shadow-lg"
                      variants={{
                        rest: {
                          opacity: 0,
                          y: 5,
                          scale: 0.8,
                        },
                        hover: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <p className="text-xs font-semibold text-white">
                        Rodriguez Ancestral House
                      </p>

                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-green-600" />
                    </motion.div>
                  </motion.button>
                  {/* 2nd loc */}
                  <motion.button
                    whileHover="hover"
                    whileTap={{
                      scale: 0.9,
                    }}
                    initial="rest"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    onClick={() => setIsOpenLoc2(true)}
                    className="absolute top-90 right-158 z-910 size-30"
                  >
                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 },
                      }}
                    >
                      <Image
                        src={Placeholder}
                        alt=""
                        className="size-full object-cover"
                      />
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-green-600 px-3 py-1.5 whitespace-nowrap shadow-lg"
                      variants={{
                        rest: {
                          opacity: 0,
                          y: 5,
                          scale: 0.8,
                        },
                        hover: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <p className="text-xs font-semibold text-white">
                        Mount Parawagan
                      </p>

                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-green-600" />
                    </motion.div>
                  </motion.button>
                  {/* 3rd loc */}
                  <motion.button
                    whileHover="hover"
                    whileTap={{
                      scale: 0.9,
                    }}
                    initial="rest"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    onClick={() => setIsOpenLoc3(true)}
                    className="absolute top-62 right-10 z-910 size-30"
                  >
                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 },
                      }}
                    >
                      <Image
                        src={Placeholder}
                        alt=""
                        className="size-full object-cover"
                      />
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-green-600 px-3 py-1.5 whitespace-nowrap shadow-lg"
                      variants={{
                        rest: {
                          opacity: 0,
                          y: 5,
                          scale: 0.8,
                        },
                        hover: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <p className="text-xs font-semibold text-white">Wawa</p>

                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-green-600" />
                    </motion.div>
                  </motion.button>
                  <div className="size-full overflow-hidden rounded-4xl">
                    <img
                      src="/map/map.png"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                </div>

                {/* loc 1 */}
                <AnimatePresence>
                  {isOpenLoc1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                      }}
                      onClick={() => setIsOpenLoc1(false)}
                      className="absolute inset-0 z-998 flex items-center justify-center bg-black/80 backdrop-blur-md"
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
                        className="relative h-auto w-125 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-amber-50/30 to-orange-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
                      >
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br from-amber-200/30 to-orange-200/30 blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-linear-to-tr from-blue-200/20 to-purple-200/20 blur-2xl" />

                        {/* Close Button */}
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsOpenLoc1(false)}
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

                        {/* Content */}
                        <div className="relative flex flex-col items-center gap-6">
                          {/* Image */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="group relative size-70 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50"
                          >
                            <img
                              src="/visited/house.png"
                              alt="Rodriguez Ancestral House"
                              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Heritage Badge */}
                            <div className="absolute top-4 left-4 rounded-full bg-amber-500/95 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-sm">
                              Heritage Site
                            </div>
                          </motion.div>

                          {/* Title Section */}
                          <motion.section
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="text-center"
                          >
                            <h1 className="mb-2 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                              Rodriguez
                            </h1>
                            <h2 className="font-supheader text-accent text-5xl font-bold tracking-widest uppercase">
                              Ancestral House
                            </h2>

                            {/* Decorative Line */}
                            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-amber-500 to-transparent" />
                              <div className="size-1.5 rounded-full bg-amber-500" />
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-amber-500 to-transparent" />
                            </div>
                          </motion.section>

                          {/* Info Cards */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.3,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-full space-y-3"
                          >
                            {/* Historical Figure */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Named After
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Eulogio "Amang" Rodriguez Sr.
                                </p>
                              </div>
                            </div>

                            {/* Era */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-orange-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Built
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Early 20th Century
                                </p>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Location
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Barangay Balite, Rodriguez, Rizal
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="rounded-2xl bg-linear-to-br from-slate-100/80 to-white/60 p-5 text-center text-sm leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm"
                          >
                            Traditional{" "}
                            <span className="font-bold text-gray-900">
                              bahay-na-bato
                            </span>{" "}
                            architecture showcasing the legacy of a former
                            Senate President and key political figure in
                            Philippine history.
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* loc 2 */}
                <AnimatePresence>
                  {isOpenLoc2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                      }}
                      onClick={() => setIsOpenLoc2(false)}
                      className="absolute inset-0 z-998 flex items-center justify-center bg-black/80 backdrop-blur-md"
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
                        className="relative h-auto w-125 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-emerald-50/30 to-teal-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
                      >
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br from-emerald-200/30 to-teal-200/30 blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-linear-to-tr from-blue-200/20 to-green-200/20 blur-2xl" />

                        {/* Close Button */}
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsOpenLoc2(false)}
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

                        {/* Content */}
                        <div className="relative flex flex-col items-center gap-6">
                          {/* Image */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="group relative size-70 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50"
                          >
                            <img
                              src="/visited/parawagan.png"
                              alt="Mount Parawagan"
                              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Nature Badge */}
                            <div className="absolute top-4 left-4 rounded-full bg-emerald-600/95 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-sm">
                              Natural Wonder
                            </div>
                          </motion.div>

                          {/* Title Section */}
                          <motion.section
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="text-center"
                          >
                            <h1 className="mb-2 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                              Mount
                            </h1>
                            <h2 className="font-supheader text-accent text-5xl font-bold tracking-widest uppercase">
                              Parawagan
                            </h2>

                            {/* Decorative Line */}
                            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
                              <div className="size-1.5 rounded-full bg-emerald-500" />
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
                            </div>
                          </motion.section>

                          {/* Info Cards */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.3,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-full space-y-3"
                          >
                            {/* Elevation */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Elevation
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  420+ meters above sea level
                                </p>
                              </div>
                            </div>

                            {/* Type */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Activity
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Hiking & Eco-Tourism
                                </p>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-cyan-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Location
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Rodriguez, Rizal
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="rounded-2xl bg-linear-to-br from-slate-100/80 to-white/60 p-5 text-center text-sm leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm"
                          >
                            A scenic mountain destination perfect for{" "}
                            <span className="font-bold text-gray-900">
                              hiking enthusiasts
                            </span>{" "}
                            and nature lovers, offering breathtaking views and
                            lush greenery in the heart of Rodriguez, Rizal.
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* loc 3 */}
                <AnimatePresence>
                  {isOpenLoc3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                      }}
                      onClick={() => setIsOpenLoc3(false)}
                      className="absolute inset-0 z-998 flex items-center justify-center bg-black/80 backdrop-blur-md"
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
                        className="relative h-auto w-125 overflow-hidden rounded-[48px] border border-white/40 bg-linear-to-br from-white via-cyan-50/30 to-blue-50/20 p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
                      >
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br from-cyan-200/30 to-blue-200/30 blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-linear-to-tr from-teal-200/20 to-sky-200/20 blur-2xl" />

                        {/* Close Button */}
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsOpenLoc3(false)}
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

                        {/* Content */}
                        <div className="relative flex flex-col items-center gap-6">
                          {/* Image */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="group relative size-70 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50"
                          >
                            <img
                              src="/visited/parawagan.png"
                              alt="Wawa Dam"
                              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Water Badge */}
                            <div className="absolute top-4 left-4 rounded-full bg-cyan-600/95 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-sm">
                              Scenic Spot
                            </div>
                          </motion.div>

                          {/* Title Section */}
                          <motion.section
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="text-center"
                          >
                            <h1 className="mb-2 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                              Wawa
                            </h1>
                            <h2 className="font-supheader text-accent text-5xl font-bold tracking-widest uppercase">
                              Dam
                            </h2>

                            {/* Decorative Line */}
                            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                              <div className="size-1.5 rounded-full bg-cyan-500" />
                              <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                            </div>
                          </motion.section>

                          {/* Info Cards */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.3,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-full space-y-3"
                          >
                            {/* Type */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Type
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Historical Dam & Recreation Area
                                </p>
                              </div>
                            </div>

                            {/* Activities */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Activities
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Swimming, Picnics & Photography
                                </p>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-cyan-600 shadow-md">
                                <svg
                                  className="size-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                  Location
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                  Rodriguez, Rizal
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="rounded-2xl bg-linear-to-br from-slate-100/80 to-white/60 p-5 text-center text-sm leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm"
                          >
                            A popular{" "}
                            <span className="font-bold text-gray-900">
                              outdoor destination
                            </span>{" "}
                            featuring crystal-clear waters surrounded by
                            stunning rock formations, perfect for swimming,
                            weekend getaways, and capturing breathtaking nature
                            photography.
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
