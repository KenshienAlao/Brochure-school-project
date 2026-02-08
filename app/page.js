"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  flushKeyframeResolvers,
  scale,
} from "framer-motion";
import { MoveLeft, MoveRight, X } from "lucide-react";
import Title from "./components/pageTitle/page";
import PageOne from "./components/pageContent__one/page";
import PageTwo from "./components/pageContent__two/page";
import PageFour from "./components/pageContent__four/page";
import PageFinal from "./components/pageContent__final/page";
import PageThree from "./components/pageContent__three/page";

export default function Page() {
  const [flip, setFlip] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [CloseAllPage, setCloseAllPage] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [clickable2, setClickable2] = useState(false);

  const handleNext = () => {
    if (!flip) {
      setFlip(true);
      setTimeout(() => {
        setClickable(true);
      }, 1000);
    } else if (flip && !flip2) {
      setFlip2(true);
      setClickable(false);
      setTimeout(() => {
        setClickable2(true);
      }, 1000);
    } else if (flip2 && !flip3) {
      setClickable(false);
      setClickable2(false);
      setFlip3(true);
      setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => setFlip3(false), 100);
        setTimeout(() => setFlip2(false), 500);
        setTimeout(() => setFlip(false), 1000);

        setTimeout(() => {
          setIsClosing(false);
          setShowFinal(true);
          setCloseAllPage(true);
        }, 2000);
      }, 500);
    }
  };

  const handleBack = () => {
    if (showFinal) {
      setShowFinal(false);
      setTimeout(() => {
        setCloseAllPage(false);
      }, 700);
    } else if (flip3) setFlip3(false);
    else if (flip2) {
      setFlip2(false);
      setClickable(true);
      setClickable2(false);
    } else if (flip) {
      setFlip(false);
      setClickable(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative h-240 w-100">
        {/* 1st box */}
        <>
          <motion.div
            animate={{
              rotateY: showFinal ? -180 : 0,
            }}
            transition={{ type: "tween", duration: 0.8 }}
            className="absolute inset-0 z-10 h-full w-full transform-3d"
          >
            <motion.div
              animate={{ rotateY: flip ? -180 : 0 }}
              transition={{ type: "tween", duration: 0.8 }}
              className="absolute inset-0 z-10 h-full w-full origin-left transform-3d"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <Title />
              </div>
            </motion.div>
          </motion.div>
        </>

        <div className={CloseAllPage ? "hidden" : "flex"}>
          <motion.div
            animate={{ rotateY: flip ? 180 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className={`absolute inset-0 h-full w-full origin-left transform-3d ${clickable ? "z-99" : "z-9"}`}
          >
            <div className="rotate-y-180">
              <PageOne />
            </div>
          </motion.div>

          {/* 2nd box */}
          <motion.div
            animate={{ rotateY: flip2 ? 180 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className={`absolute inset-0 h-full w-full origin-right transform-3d ${clickable ? "z-99" : "z-8"}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <PageTwo />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotateY: flip2 ? -180 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className={`absolute inset-0 h-full w-full origin-right ${clickable2 ? "z-99" : "z-7"}`}
          >
            <div className="rotate-y-180">
              <PageThree />
            </div>
          </motion.div>

          {/* 3rd box */}
          <div
            className={`absolute inset-0 flex h-full w-full items-center justify-center ${clickable2 ? "z-99" : "z-2"}`}
          >
            <PageFour />
          </div>
          <div
            className={`absolute inset-0 h-full w-full ${clickable2 ? "z-99" : "z-6"}`}
          >
            <PageFour />
          </div>
        </div>

        {/* Final page (back of title) */}
        <motion.div
          animate={{ rotateY: showFinal ? 180 : 0 }}
          transition={{ type: "tween", duration: 0.8 }}
          className={`absolute inset-0 z-9 h-full w-full bg-red-500 ${CloseAllPage ? "flex" : "hidden"}`}
        >
          <div className="rotate-y-180">
            <PageFinal />
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex gap-5">
        <button
          onClick={handleBack}
          className={`${flip || flip2 || flip3 || showFinal ? "flex" : "hidden"} rounded p-2 hover:bg-gray-100`}
          disabled={isClosing}
        >
          <MoveLeft />
        </button>
        <button
          onClick={handleNext}
          className={`${!showFinal ? "flex" : "hidden"} rounded p-2 hover:bg-gray-100`}
          disabled={isClosing}
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
}
