import Image from "next/image";
import Contact from "../ui/contact-us.png";
import Gmail from "../ui/gmail.png";
import Facebook from "../ui/facebook.png";
import Website from "../ui/world-wide-web.png";
import Call from "../ui/phone-call.png";
import Info from "../ui/info.png";
import Car from "../ui/traveling.png";
import People from "../ui/travelling.png";
import Ball from "../ui/ball.png";
export default function PageFinal() {
  const info = [
    {
      img: Gmail,
      label: "montalbanpublicinformation@gmail.com",
    },
    {
      img: Facebook,
      label: "Bagong Montalban ",
    },
    {
      img: Website,
      label: "montalbanrizalph.com",
    },
    {
      img: Call,
      label: "0998-346-0676",
    },
  ];

  const logo = [
    {
      id: "Montalban",
      img: "/contact/logo.png",
    },
    {
      id: "School",
      img: "/title/school__logo.png",
    },
  ];

  return (
    <>
      <div className="relative flex h-240 w-100 flex-col overflow-hidden">
        {/* Background  */}
        <div className="absolute inset-0 -left-90">
          <img
            src="/bgOne.jpeg"
            className="size-full object-cover brightness-[0.3] sepia-[0.9]"
            alt=""
          />
        </div>
        {/* banner */}
        <div className="bg-accent/30 absolute mx-5 mt-50 h-full w-90" />
        {/* content */}
        <div className="z-1 size-full">
          {/* header Photo */}
          <div className="relative mt-10 h-75">
            {/* 1st */}
            <div className="absolute top-3">
              <div className="border-accent relative size-70 rounded-full border-5 p-2">
                <div className="absolute size-65 overflow-hidden rounded-full">
                  <img
                    src="/contact/pamintinan.png"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="absolute right-1">
              <div className="relative size-65 rounded-full border-5 border-green-800 p-2">
                <div className="absolute top-0.5 size-60 overflow-hidden rounded-full">
                  <img
                    src="/contact/forest.png"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="mx-5 h-full">
            {/* contact info */}
            <div className="h-85">
              {/* header */}
              <header className="relative flex h-20 items-center justify-center">
                {/* icon */}
                <div className="absolute bottom-3 left-10 size-10 -rotate-6">
                  <Image
                    src={Contact}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                {/* text */}
                <div className="ml-10">
                  <h1 className="font-supbody text-4xl font-bold tracking-widest text-white uppercase">
                    Contact Us
                  </h1>
                </div>
              </header>
              <div className="mx-5 mt-5 flex h-40.5 flex-col gap-5">
                {/* info */}
                {info.map((i) => (
                  <div key={i.label} className="flex items-center gap-5">
                    <div className="size-10">
                      <Image
                        src={i.img}
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-header text-[13px] font-bold tracking-wide text-white">
                        {i.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* qr */}
            <div className="relative flex h-50 flex-col items-center justify-center gap-2">
              <div className="relative">
                {/* ui */}
                <div className="absolute top-7 left-29 size-10">
                  <Image src={Car} alt=" " className="size-full object-cover" />
                </div>
                <div className="absolute top-24 -left-5 size-20">
                  <Image
                    src={People}
                    alt=" "
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute top-26 -right-7 size-20">
                  <Image
                    src={Ball}
                    alt=" "
                    className="size-full object-cover"
                  />
                </div>
                <h1 className="font-supbody mb-5 text-2xl font-bold text-white uppercase">
                  for more information
                </h1>
              </div>
              <div className="size-30 border-5">
                <img
                  src="/montalbalQR.png"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* logo section */}
            <section className="absolute -bottom-18 left-30 flex h-60 items-center justify-center gap-10">
              {logo.map((i) => (
                <div key={i.id} className="size-15">
                  <img src={i.img} alt="" className="size-full object-cover" />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
