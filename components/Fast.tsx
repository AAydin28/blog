"use client";
//import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const techItems = [
  { src: "/dijango.png", label: "Django" },
  { src: "/react.png", label: "React" },
  { src: "/next-js-icon-logo-png_seeklogo-449825.png", label: "Next.js" },
  { src: "/nod.js.png", label: "Node.js" },
  { src: "/tailwind.png", label: "Tailwind CSS" },
  { src: "/typescript.png", label: "TypeScript" },
  { src: "/mongo.db.png", label: "MongoDB" },
  { src: "/pyhton.png", label: "Python" },
];

const Fast = () => {
  const repeatedTechItems = [...techItems, ...techItems];
  const reversedTechItems = [...techItems].reverse();

  return (
    <div className="relative w-full h-[280px] md:h-[400px] z-0 my-1 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2 rotate-6 -ml-[20%]">
        <Marquee
          speed={55}
          className="bg-black text-white dark:bg-white py-6 px-8 font-bold text-2xl"
        >
          {repeatedTechItems.map((item, index) => (
            <div className="flex items-center mx-8 gap-2" key={index}>
              <Image
                src={item.src}
                alt={item.label}
                width={50}
                height={50}
                className="object-contain"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="absolute top-1/2 left-0 w-[130%] -translate-y-1/2 -rotate-[8deg] -ml-[20%]">
        <Marquee
          speed={35}
          className="bg-black text-white dark:bg-white py-6 px-8 font-bold text-2xl"
        >
          {reversedTechItems.map((item, index) => (
            <div className="flex items-center mx-8 gap-2" key={index}>
              <Image
                src={item.src}
                alt={item.label}
                width={50}
                height={50}
                className="object-contain"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Fast;
