"use client";
import React from "react";
import { User2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-pink-100",
  },
  {
    id: 6,
    name: "Ramazan Kayış",
    position: "Frontend Developer",
    feedback: "Ziraat Bank uzman frontend developer ",
    bgColor: "bg-red-100",
  },
];

const Testimonial = () => {
  return (
    <section className="py-10" id="testimonials">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl text-center text-amber-500 font-bold">
          Testimonial
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem
          id magnam dicta impedit sequi aspernatur amet, omnis accusamus
          mollitia doloremque sint fugit inventore ad nulla repudiandae.
          Possimus, ab esse.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <div
                  className={`w-full h-full rounded-lg p-6 flex flex-col items-center gap-6 ${item.bgColor}`}
                >
                  <div className="w-24 h-24 ">
                    <User2 className="w-full h-full text-gray-500" />
                  </div>
                  <div className="flex-1 text-center ">
                    <FaQuoteLeft className="text-amber-500 text-2xl mb-2" />
                    <p className="text-gray-500 mb-4"> {item.feedback}</p>
                    <p className="text-gray-500 font-semibold"> {item.name}</p>
                    <p className="text-gray-500 mb-4"> {item.position}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
