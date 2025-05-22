import React from "react";
import Image from "next/image";

const AboutMe = () => {
  const skilss = [
    { name: "UX", percent: 80 },
    { name: "Website Design", percent: 90 },
    { name: "App Design", percent: 75 },
    { name: "Graphic Design", percent: 70 },
  ];
  return (
    <section className="py-16" id="about">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex">
          <div className="relative w-64 h-64">
            <Image
              src="/ChatGPT Image 22 May 2025 03_20_52.png"
              alt="Profile Photo"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">About me</h2>
          <p className="mb-6 text-gray-500">
            Hi! I m Ahmet Aydın, a Full Stack Developer passionate about
            building scalable, user-centric web applications. With a strong
            command of modern technologies like React, Next.js, Node.js, and
            TypeScript, I specialize in creating seamless front-end experiences
            and robust back-end systems that work together harmoniously.
          </p>
          <p className="mb-6 text-gray-500">
            Beyond just writing code, I focus on clean architecture,
            maintainable solutions, and delivering high-quality user
            experiences. I thrive in collaborative environments and am always
            eager to learn and adapt to new technologies. My goal is to turn
            creative ideas into impactful digital products.
          </p>

          <div className="space-y-6 mt-8">
            {skilss.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.percent}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full ">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
