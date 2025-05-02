import Hero from "@/components/Hero";
import Fast from "@/components/Fast";
import AboutMe from "@/components/AboutMe";
import Service from "@/components/Service";
import Project from "@/components/Project";
//import Image from "next/image";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero />
      <Fast />
      <AboutMe />
      <Service />
      <Project />
      <Testimonial />
    </div>
  );
}
