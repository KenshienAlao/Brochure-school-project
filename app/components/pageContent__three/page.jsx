import Image from "next/image";
import Idea from "../ui/ideas.png";
import Questions from "../ui/question-mark.png";
import Menu from "../ui/menu.png";
import { label } from "framer-motion/client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function PageThree() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const menu = [
    {
      img: "/menu/tilapia.png",
      label: "Tilapia",
      category: "Fresh Water Delight",
      type: "Grilled Specialty",
      subtitle: "Fresh from Rodriguez waters",
      prepTime: "25-30 minutes",
      serves: "3-4 people",
      description:
        "Freshly caught tilapia from the clean waters of Rodriguez, grilled to perfection with a blend of local spices and herbs. This dish showcases the town's rich fishing tradition, served with a side of steamed rice and atchara (pickled papaya). The crispy skin and tender, flaky meat make it a favorite among locals and visitors alike.",
    },
    {
      img: "/menu/kakanin.png",
      label: "Kakanin",
      category: "Traditional Delicacy",
      type: "Rice Cake Selection",
      subtitle: "Sweet heritage in every bite",
      prepTime: "1-2 hours",
      serves: "6-8 people",
      description:
        "An assortment of traditional Filipino rice cakes lovingly prepared using time-honored recipes. Each piece represents Rodriguez's culinary heritage - from sticky bibingka to sweet puto and savory suman. Made with locally-sourced glutinous rice and coconut milk, these delicacies are perfect for merienda or special occasions.",
    },
    {
      img: "/menu/silog.png",
      label: "Silog",
      category: "Breakfast Champion",
      type: "Filipino Classic",
      subtitle: "The ultimate Rodriguez breakfast",
      prepTime: "20 minutes",
      serves: "1-2 people",
      description:
        "A hearty Filipino breakfast staple featuring garlic fried rice (sinangag), perfectly fried eggs (itlog), and your choice of savory meat. Popular in Rodriguez for its filling and flavorful combination, this meal energizes locals for their day ahead. Served with a side of atchara and spicy vinegar dipping sauce.",
    },
    {
      img: "/menu/pares.png",
      label: "Pares",
      category: "Comfort Food",
      type: "Braised Beef",
      subtitle: "Rodriguez's midnight comfort",
      prepTime: "2-3 hours",
      serves: "2-3 people",
      description:
        "Tender braised beef slow-cooked in a sweet-savory sauce until fall-apart tender. A Rodriguez favorite especially popular late at night, served with garlic fried rice and a clear beef broth soup on the side. The rich, aromatic sauce perfectly complements the melt-in-your-mouth meat, making it an irresistible comfort food.",
    },
    {
      img: "/menu/empanada.png",
      label: "Empanada",
      category: "Street Food Favorite",
      type: "Savory Pastry",
      subtitle: "Crispy pockets of joy",
      prepTime: "45 minutes",
      serves: "4-6 pieces",
      description:
        "Golden-fried savory pastries filled with seasoned ground meat, potatoes, and vegetables. A beloved street food in Rodriguez, these crispy empanadas are made fresh throughout the day. Each bite delivers a perfect crunch followed by a flavorful, hearty filling. Best enjoyed hot with spiced vinegar dipping sauce.",
    },
    {
      img: "/menu/crispyPata.png",
      label: "Pata",
      category: "Celebration Dish",
      type: "Deep-Fried Pork",
      subtitle: "Crispy perfection achieved",
      prepTime: "3-4 hours",
      serves: "4-6 people",
      description:
        "A showstopping centerpiece featuring a whole pork leg that's been boiled until tender, then deep-fried to achieve impossibly crispy skin while maintaining juicy, succulent meat inside. A Rodriguez celebration favorite that's worth the wait. Served with a tangy liver sauce and pickled vegetables, this dish brings people together.",
    },
  ];

  const resturant = [
    {
      img: "/resturant/calleCafe.png",
      qr: "/resturant/qr/calleCafeQR.png",
      label: "calle's cafe",
      category: "Specialty Coffee House",
      type: "Modern Filipino Fusion",
      subtitle: "Where community meets coffee",
      openingHours: "7:00 AM - 10:00 PM",
      location: "Burgos Street, Rodriguez",
      description:
        "A charming neighborhood cafe that has become Rodriguez's beloved gathering spot. Calle's Cafe serves expertly crafted coffee alongside Filipino comfort food with a modern twist. The warm, inviting atmosphere makes it perfect for catching up with friends, working remotely, or simply enjoying a quiet moment with a perfectly brewed cup. Their signature dishes blend traditional Filipino flavors with contemporary presentation, creating a unique dining experience that locals can't get enough of.",
    },
    {
      img: "/resturant/renatoResturant.png",
      qr: "/resturant/qr/renatoResturantQR.png",
      label: "renato's resturant",
      category: "Family Restaurant",
      type: "Authentic Filipino Cuisine",
      subtitle: "Home-cooked goodness since 1995",
      openingHours: "10:00 AM - 9:00 PM",
      location: "J.P. Rizal St., Rodriguez",
      description:
        "A Rodriguez institution for nearly three decades, Renato's Restaurant has been serving authentic Filipino dishes that taste just like home. Family-owned and operated, this beloved establishment prides itself on using traditional recipes passed down through generations. From their famous sinigang to their crispy lechon kawali, every dish is prepared with love and the freshest local ingredients. The generous portions and affordable prices make it a favorite among families and groups celebrating special occasions.",
    },
    {
      img: "/resturant/tarainomCafe.png",
      qr: "/resturant/qr/tarainomCafeQR.png",
      label: "tara inom's cafe",
      category: "Social Hangout Spot",
      type: "Drinks & Light Bites",
      subtitle: "Let's drink and unwind together",
      openingHours: "3:00 PM - 12:00 AM",
      location: "Kasiglahan Village, Rodriguez",
      description:
        "The ultimate after-work hangout spot in Rodriguez, Tara Inom's Cafe ('Let's drink together') lives up to its name by creating a relaxed, social atmosphere perfect for unwinding. Specializing in refreshing beverages, creative cocktails, and satisfying bar chow, this trendy cafe has become the go-to destination for both locals and visitors looking to experience Rodriguez's vibrant nightlife scene. The outdoor seating area and live music on weekends create an energetic yet laid-back vibe that keeps people coming back.",
    },
  ];
  return (
    <>
      <div className="relative z-1 h-240 w-100 overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 -left-600">
          <img
            src="/background__mountain.png"
            className="size-full object-cover brightness-[0.3] sepia-[0.9]"
            alt=""
          />
        </div>
        <div className="relative flex h-full w-full flex-col">
          {/* brain teaser */}
          <div className="relative -right-5 mt-20 mb-5 flex h-30 w-100 flex-col items-center justify-center rounded-2xl bg-white/70 text-center">
            {/* ui */}
            <div className="absolute -top-13 right-8 size-15 rotate-8">
              <Image src={Idea} alt="" className="size-full object-contain" />
            </div>
            <div className="absolute top-19 left-2 size-15 -rotate-10">
              <Image
                src={Questions}
                alt=""
                className="size-full object-contain"
              />
            </div>
            <h1 className="absolute inset-0 -top-16 left-10 flex h-20 w-65 justify-center gap-4.5 rounded-2xl bg-indigo-950">
              <div className="relative flex items-center justify-center">
                {" "}
                <span className="font-header text-accent absolute -rotate-6 text-3xl font-bold uppercase">
                  b
                </span>
              </div>
              <div className="relative flex -rotate-6 items-center justify-center">
                {" "}
                <span className="font-body absolute text-4xl text-blue-800">
                  r
                </span>
              </div>
              <div className="relative flex rotate-9 items-center justify-center">
                {" "}
                <span className="font-header absolute text-4xl font-bold text-blue-300 uppercase">
                  a
                </span>
              </div>
              <div className="relative flex -rotate-9 items-center justify-center">
                {" "}
                <span className="font-body absolute text-3xl text-red-300 uppercase">
                  i
                </span>
              </div>
              <div className="relative flex rotate-9 items-center justify-center">
                {" "}
                <span className="font-body absolute text-4xl font-bold text-amber-800">
                  n
                </span>
              </div>
              <div className="relative ml-3 flex items-center justify-center">
                {" "}
                <span className="font-header absolute rotate-9 text-4xl font-bold text-amber-400 uppercase">
                  t
                </span>
              </div>
              <div className="relative flex rotate-9 items-center justify-center">
                {" "}
                <span className="font-body absolute text-4xl text-blue-400">
                  e
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                {" "}
                <span className="font-header absolute -rotate-8 text-4xl font-bold text-green-400">
                  a
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                {" "}
                <span className="font-body absolute -rotate-9 text-4xl text-white uppercase">
                  s
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                {" "}
                <span className="font-header absolute rotate-9 text-3xl font-bold text-neutral-500 uppercase">
                  e
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                {" "}
                <span className="font-body text-accent absolute rotate-9 text-4xl font-bold">
                  r
                </span>
              </div>
            </h1>
            <div className="flex items-center justify-center p-10">
              <p className="font-supbody text-md tracking-tight text-green-700">
                I speak without a mouth and hear without ears. I have no body,
                but I come alive with wind. What am I?
              </p>
            </div>
          </div>

          {/* menu */}
          <div className="h-100">
            {/* header */}
            <motion.div
              className="relative mb-3"
              style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* ui */}
              <motion.div
                className="absolute top-2 left-12 size-15 -rotate-8"
                whileHover={{ rotate: 8, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={Menu} alt="" className="size-full object-contain" />
              </motion.div>
              <h1 className="font-supbody text-accent mr-5 text-right text-5xl leading-15 font-semibold tracking-wide uppercase">
                Rodriguez's <br />
                <span className="font-supheader tracking-widest">Menu</span>
              </h1>
              <div className="absolute top-18 left-10">
                <p
                  className="font-supbody text-center text-[20px] leading-5 font-bold tracking-tight text-white/80"
                  style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
                >
                  Rodriguez, Rizal where <br /> every corner surprises.
                </p>
              </div>
            </motion.div>

            {/* picture */}
            <div className="relative h-70 w-full overflow-hidden">
              {/* grid picture */}
              <div className="grid size-full grid-cols-3 justify-center gap-2 p-5">
                {menu.map((item, index) => (
                  <motion.div
                    className="relative flex size-25 cursor-pointer justify-center"
                    key={item.label}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    onClick={() => setSelectedMenu(item)}
                  >
                    {/* Image Container */}
                    <motion.div
                      className="size-full overflow-hidden rounded-md shadow-md"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: {
                          scale: 1.1,
                          rotate: [0, -5, 5, -3, 3, 0],
                          transition: {
                            scale: { duration: 0.2 },
                            rotate: { duration: 0.5, ease: "easeInOut" },
                          },
                        },
                      }}
                    >
                      <motion.img
                        src={item.img}
                        alt=""
                        className="size-full object-cover"
                        variants={{
                          rest: { scale: 1 },
                          hover: {
                            scale: 1.2,
                            transition: { duration: 0.3 },
                          },
                        }}
                      />
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      className="absolute -top-5 rounded-xl bg-indigo-900 p-2 shadow-lg"
                      variants={{
                        rest: { y: 0, scale: 1, rotate: 0 },
                        hover: {
                          y: [0, -8, -5, -8, -5],
                          scale: [1, 1.15, 1.1, 1.15, 1.1],
                          rotate: [0, -5, 5, -5, 5, 0],
                          transition: {
                            duration: 0.6,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    >
                      <motion.p
                        className="font-miniheader text-md font-bold tracking-widest text-white"
                        variants={{
                          rest: { scale: 1 },
                          hover: {
                            scale: [1, 1.1, 1.05, 1.1, 1.05],
                            transition: { duration: 0.5 },
                          },
                        }}
                      >
                        {item.label}
                      </motion.p>
                    </motion.div>

                    {/* Sparkle Effect on Hover */}
                    <motion.div
                      className="pointer-events-none absolute inset-0"
                      variants={{
                        rest: { opacity: 0 },
                        hover: {
                          opacity: [0, 1, 0],
                          transition: {
                            duration: 0.8,
                            repeat: Infinity,
                            repeatDelay: 0.2,
                          },
                        },
                      }}
                    >
                      <div className="absolute top-2 right-2 size-2 rounded-full bg-yellow-300 blur-sm" />
                      <div className="absolute bottom-3 left-3 size-1.5 rounded-full bg-white blur-sm" />
                      <div className="absolute top-1/2 left-1/2 size-1 rounded-full bg-cyan-300 blur-sm" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* resturant */}
          <div className="relative ml-3 flex h-full w-75 flex-col gap-3">
            {resturant.map((i) => (
              <motion.div
                className="relative flex h-25 cursor-pointer justify-center"
                key={i.label}
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                onClick={() => setSelectedRestaurant(i)}
              >
                {/* picture */}
                <motion.div className="size-full" whileHover={{ scale: 1.02 }}>
                  <img
                    src={i.img}
                    alt=""
                    className="size-full rounded-lg object-cover"
                  />
                </motion.div>
                {/* QR */}
                <motion.div
                  className="absolute top-2 right-2 size-15"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.2 },
                  }}
                >
                  <img src={i.qr} alt="" className="size-full object-cover" />
                </motion.div>
                {/* label */}
                <motion.div
                  className="absolute bottom-0"
                  whileHover={{
                    y: -8,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <p
                    className="text-accent font-supheader text-xl font-bold tracking-widest uppercase"
                    style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
                  >
                    {i.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
            <div className="absolute top-30 -right-55 w-90 -rotate-90">
              <p
                className="text-accent font-supbody text-4xl font-bold uppercase"
                style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
              >
                Eat like a Rizaleños
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedMenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMenu(null)}
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
                          src={selectedMenu.img}
                          alt={selectedMenu.label}
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                            {selectedMenu.category || "Local Delicacy"}
                          </span>
                        </div>

                        <div className="absolute right-8 bottom-8 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Culinary Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            {selectedMenu.type || "Traditional Filipino"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-4">
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            Rodriguez Specialty
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          <span className="text-accent font-supheader tracking-widest">
                            {selectedMenu.label}
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          {selectedMenu.subtitle ||
                            "A taste of Rodriguez tradition"}
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Prep Time
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              {selectedMenu.prepTime || "30-45 minutes"}
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
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Serves
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              {selectedMenu.serves || "4-6 people"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          {selectedMenu.description ||
                            "A beloved Rodriguez specialty passed down through generations. This dish captures the authentic flavors of our town, combining traditional cooking methods with locally-sourced ingredients to create an unforgettable culinary experience."}
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
                            People love this!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedMenu(null)}
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white"
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
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}

      {/* Restaurant Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedRestaurant && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRestaurant(null)}
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
                          src={selectedRestaurant.img}
                          alt={selectedRestaurant.label}
                          className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-xl backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                          <span className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                            Open Now
                          </span>
                        </div>

                        {/* QR Code in corner */}
                        <div className="absolute right-6 bottom-6 h-20 w-20 rounded-xl bg-white p-2 shadow-xl">
                          <img
                            src={selectedRestaurant.qr}
                            alt="QR Code"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="absolute right-8 bottom-28 left-8">
                          <p className="mb-1 text-sm font-medium text-white/80">
                            Restaurant Type
                          </p>
                          <p className="text-xl font-bold tracking-wide text-white">
                            {selectedRestaurant.type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-4">
                      <section>
                        <div className="mb-4 flex items-center gap-4">
                          <span className="bg-accent h-px w-12"></span>
                          <span className="text-accent font-header text-sm font-bold tracking-[0.3em] uppercase">
                            {selectedRestaurant.category}
                          </span>
                        </div>
                        <h1 className="mb-4 text-5xl leading-[1.1] font-black tracking-tight text-slate-900">
                          <span className="text-accent font-supheader tracking-widest uppercase">
                            {selectedRestaurant.label}
                          </span>
                        </h1>
                        <p className="font-body text-lg font-medium text-white">
                          {selectedRestaurant.subtitle}
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                              Hours
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              {selectedRestaurant.openingHours}
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Daily
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
                            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              Location
                            </p>
                            <p className="font-header text-sm leading-snug font-bold text-slate-800">
                              {selectedRestaurant.location}
                            </p>
                            <p className="font-body text-xs text-neutral-900">
                              Rodriguez, Rizal
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-md font-body leading-relaxed text-white">
                          {selectedRestaurant.description}
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
                                src={`https://i.pravatar.cc/40?img=${i + 20}`}
                                alt="user"
                              />
                            </div>
                          ))}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-sm">
                            +127
                          </div>
                          <span className="ml-4 flex items-center text-xs text-white">
                            Regular customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedRestaurant(null)}
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white"
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
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
