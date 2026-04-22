"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaShip, FaBriefcase, FaGlobe } from "react-icons/fa";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaUserGraduate />,
      value: 5000,
      label: "Students Trained",
    },
    {
      icon: <FaShip />,
      value: 120,
      label: "Training Ships",
    },
    {
      icon: <FaBriefcase />,
      value: 95,
      label: "Placement Rate",
    },
    {
      icon: <FaGlobe />,
      value: 30,
      label: "Countries",
    },
  ];

  return (
    <div ref={ref} className="relative py-20 md:py-24">
      {/* 🎥 BACKGROUND VIDEO */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      > */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        {" "}
        <source src="/Foundation day video-1.mp4" type="video/mp4" />
      </video> */}

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔢 CONTENT */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl text-center mb-14 text-yellow-400 font-bold">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-xl hover:scale-110 transition duration-300"
            >
              <div className="text-4xl mb-4 text-yellow-400 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-white">
                {inView && <CountUp end={item.value} duration={2} />}+
              </h3>

              <p className="mt-2 text-gray-200 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
