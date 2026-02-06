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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-100 h-240">
        {/* 1st box */}
        <>
          <motion.div
            animate={{
              rotateY: showFinal ? -180 : 0,
            }}
            transition={{ type: "tween", duration: 0.8 }}
            className="z-10 w-full h-full absolute inset-0 transform-3d"
          >
            <motion.div
              animate={{ rotateY: flip ? -180 : 0 }}
              transition={{ type: "tween", duration: 0.8 }}
              className="z-10 w-full h-full absolute inset-0 origin-left transform-3d"
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
            className={`w-full h-full absolute inset-0 origin-left transform-3d ${clickable ? "z-99" : "z-9"}`}
          >
            <div className="rotate-y-180">
              <PageOne />
            </div>
          </motion.div>

          {/* 2nd box */}
          <motion.div
            animate={{ rotateY: flip2 ? 180 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className={`w-full h-full absolute inset-0 origin-right transform-3d ${clickable ? "z-99" : "z-8"}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <PageTwo />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotateY: flip2 ? -180 : 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className={`w-full h-full bg-green-300 absolute inset-0 origin-right ${clickable2 ? "z-99" : "z-7"}`}
          >
            <div className="rotate-y-180">3rd page</div>
          </motion.div>

          {/* 3rd box */}
            <div
              className={`w-full h-full absolute inset-0 flex items-center justify-center ${clickable2 ? "z-99" : "z-2"}`}
            >
              <PageFour />
            </div>
          <div
            className={`w-full h-full absolute inset-0 ${clickable2 ? "z-99" : "z-6"}`}
          >
            <PageFour />
          </div>
        </div>

        {/* Final page (back of title) */}
        <motion.div
          animate={{ rotateY: showFinal ? 180 : 0 }}
          transition={{ type: "tween", duration: 0.8 }}
          className={`z-9 w-full h-full bg-red-500 absolute inset-0 ${CloseAllPage ? "flex" : "hidden"}`}
        >
          <div className="rotate-y-180">
            <PageFinal />
          </div>
        </motion.div>
      </div>

      <div className="flex gap-5 mt-6">
        <button
          onClick={handleBack}
          className={`${flip || flip2 || flip3 || showFinal ? "flex" : "hidden"} p-2 hover:bg-gray-100 rounded`}
          disabled={isClosing}
        >
          <MoveLeft />
        </button>
        <button
          onClick={handleNext}
          className={`${!showFinal ? "flex" : "hidden"} p-2 hover:bg-gray-100 rounded`}
          disabled={isClosing}
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
}