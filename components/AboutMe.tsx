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
              src="/11.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">About me</h2>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Soluta minus voluptate
            adipisci ratione molestiae commodi earum omnis perferendis dolore
            quisquam!
          </p>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Voluptatum qui maxime
            assumenda quibusdam harum corrupti hic est maiores amet fuga.
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
