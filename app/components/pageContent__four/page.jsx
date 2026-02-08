import HeaderText from "../ui/header__text.png";
import Bag from "../ui/backpack.png";
import Hat from "../ui/hat.png";
import PHmap from "../ui/ph__map.png";
import Aware from "../ui/aware.png";
import Law from "../ui/law.png";
import Money from "../ui/money.png";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PageFour() {
  return (
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
            <div className="border-accent absolute top-30 right-20 size-70 overflow-hidden rounded-full border-12">
              <img
                src="/map/rizal__map.png"
                className="translate-x-6 translate-y-20 scale-150 object-cover"
              />
            </div>
            <div className="bg-accent absolute top-80 right-10 h-6 w-15 rotate-25 p-1" />
            <div className="absolute top-84 -right-5 h-10 w-20 rotate-25 rounded-md bg-amber-800 p-1">
              <div className="relative">
                <div className="h-0.5 bg-amber-950" />
              </div>
            </div>
          </div>

          {/* pre-cautions */}
          <div className="absolute">
            {/* 1st*/}
            <div className="absolute bottom-30 mx-3 flex -rotate-4 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]">
              <div className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2">
                <Image src={Aware} alt="" className="size-15 brightness-0" />
              </div>

              <div className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center">
                <div className="repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px) absolute inset-0 opacity-10"></div>

                <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                  Avoid <br /> <span className="text-red-600">unsafe</span>{" "}
                  areas
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div className="absolute bottom-5 mx-3 flex rotate-2 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]">
              <div className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2">
                <Image src={Law} alt="" className="size-15 brightness-0" />
              </div>

              <div className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center">
                <div className="repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px) absolute inset-0 opacity-10"></div>

                <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                  <span className="text-green-700">Follow</span> local laws
                </p>
              </div>
            </div>
            {/* 3rd */}
            <div className="absolute -bottom-18 mx-3 flex -rotate-4 items-center drop-shadow-[4px_4px_0px_rgba(10,5,4,1)]">
              <div className="bg-accent border-main flex size-20 items-center justify-center rounded-l-sm border-4 p-2">
                <Image src={Money} alt="" className="size-15 brightness-0" />
              </div>

              <div className="bg-accent border-main relative flex h-18 w-40 items-center overflow-hidden border-y-4 border-r-4 text-center">
                <div className="repeating-linear-gradient(-45deg, transparent, transparent 10px, #0a0504 10px, #0a0504 20px) absolute inset-0 opacity-10"></div>

                <p className="font-header text-main relative z-10 p-1 text-lg leading-tight font-semibold -tracking-tighter uppercase">
                  <span className="text-violet-600">Secure</span> your valuables
                </p>
              </div>
            </div>
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
