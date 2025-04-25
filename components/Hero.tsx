"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex-1">
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1">
          <p className="text-gray-400 text-xl mb-4">Hello I am</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Ahmet Aydın</h1>

          <TypeAnimation
            sequence={[" FullStack Developer", 2000, ""]}
            wrapper="span"
            speed={50}
            className="text-3xl md:text-5xl font-bold font-poppins text-amber-500 mt-2 mb-8"
            repeat={Infinity}
          />
          <p className="text-gray-400 text-lg mb-6 max-w-md mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>

          <div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-6">
              Hire me
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/11.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Button
              variant="secondary"
              className="cursor-pointer hover:scale-125 transation-all duration-700"
            >
              <AiFillTwitterCircle
                size={32}
                className="cursor-pointer hover:scale-125 transation-all duration-700"
              />
            </Button>
            <Button variant="secondary">
              <AiFillInstagram
                size={32}
                className="cursor-pointer hover:scale-125 transation-all duration-700"
              />
            </Button>
            <Button variant="secondary">
              <AiFillFacebook
                size={32}
                className="cursor-pointer hover:scale-125 transation-all duration-700"
              />
            </Button>
            <Button variant="secondary">
              <AiFillLinkedin
                size={32}
                className="cursor-pointer hover:scale-125 transation-all duration-700"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
