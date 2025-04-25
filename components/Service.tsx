import React from "react";
import {
  FaPencilRuler,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaCloud,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaPencilRuler size={40} className="text-amber-500" />,
    title: "UI/UX Design",
    description: "Creating intuitive and attractive user interfaces.",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={40} className="text-amber-500" />,
    title: "Web Development",
    description: "Building fast and responsive websites and apps.",
  },
  {
    id: 3,
    icon: <FaMobileAlt size={40} className="text-amber-500" />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications.",
  },
  {
    id: 4,
    icon: <FaPaintBrush size={40} className="text-amber-500" />,
    title: "Graphic & Visual Design",
    description: "Designing logos, banners, and branding assets.",
  },
  {
    id: 5,
    icon: <FaServer size={40} className="text-amber-500" />,
    title: "Backend Development",
    description: "Creating scalable and secure server-side systems.",
  },
  {
    id: 6,
    icon: <FaCloud size={40} className="text-amber-500" />,
    title: "Cloud Services",
    description: "Deploying and managing applications on the cloud.",
  },
  {
    id: 7,
    icon: <FaDatabase size={40} className="text-amber-500" />,
    title: "Database Management",
    description: "Designing and optimizing databases for performance.",
  },
  {
    id: 8,
    icon: <FaLock size={40} className="text-amber-500" />,
    title: "Cyber Security",
    description: "Securing applications and protecting user data.",
  },
];

const Service = () => {
  return (
    <section className="py-10" id="services">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-amber-500 font-bold">Services</h2>
          <p className="text-gray-500 mt-2">
            I offer a wide range of services to help you build, design, and grow
            your digital presence — from UI/UX design to full-stack development
            and cloud integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg p-6 flex flex-col items-start transform transition duration-500 hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
