import Image from "next/image";
import Idea from "../ui/ideas.png";
import Questions from "../ui/question-mark.png";
import { label } from "framer-motion/client";
export default function PageThree() {
  const menu = [
    {
      img: "/menu/tilapia.png",
      label: "Tilapia",
    },
    {
      img: "/menu/kakanin.png",
      label: "Kakanin",
    },
    {
      img: "/menu/silog.png",
      label: "Silog",
    },
    {
      img: "/menu/pares.png",
      label: "Pares",
    },
    {
      img: "/menu/empanada.png",
      label: "Empanada",
    },
    {
      img: "menu/crispyPata.png",
      label: "Pata",
    },
  ];

  const resturant = [
    {
      img: "/resturant/calleCafe.png",
      qr: "/resturant/qr/calleCafeQR.png",
      label: "calle's cafe",
    },
    {
      img: "/resturant/renatoResturant.png",
      qr: "/resturant/qr/renatoResturantQR.png",
      label: "renato's resturant",
    },
    {
      img: "/resturant/tarainomCafe.png",
      qr: "/resturant/qr/tarainomCafeQR.png",
      label: "tara inom's cafe",
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
            <div
              className="relative mb-3"
              style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
            >
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
            </div>
            {/* picture */}
            <div className="relative h-70 w-full overflow-hidden">
              {/* grid picture */}
              <div className="grid size-full grid-cols-3 justify-center gap-2 p-5">
                {menu.map((i) => (
                  <div
                    className="relative flex size-25 justify-center"
                    key={i.label}
                  >
                    <img
                      src={i.img}
                      alt=""
                      className="size-full rounded-md object-cover"
                    />
                    <div className="absolute -top-5 rounded-xl bg-indigo-900 p-2">
                      <p className="font-miniheader text-md font-bold tracking-widest text-white">
                        {i.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* resturant */}
          <div className="relative ml-3 flex h-full w-75 flex-col gap-3">
            {resturant.map((i) => (
              <div className="relative flex h-25 justify-center" key={i.label}>
                {/* picture */}
                <div className="size-full">
                  <img
                    src={i.img}
                    alt=""
                    className="size-full rounded-lg object-cover"
                  />
                </div>
                {/* QR */}
                <div className="absolute top-2 right-2 size-15">
                  <img src={i.qr} alt="" className="size-full object-cover" />
                </div>
                {/* label */}
                <div className="absolute bottom-0">
                  <p
                    className="text-accent font-supheader text-xl font-bold tracking-widest uppercase"
                    style={{ textShadow: "3px 3px 4px rgba(0,0,0,9)" }}
                  >
                    {i.label}
                  </p>
                </div>
              </div>
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
    </>
  );
}
