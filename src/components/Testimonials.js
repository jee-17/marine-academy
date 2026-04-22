"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const data = [
  {
    title: "Innovative Training",
    text: "Our academy provides world-class marine training with real ship exposure and industry partnerships.",
    points: [
      "100+ training sessions annually",
      "Global certification programs",
      "Hands-on ship experience",
      "Experienced faculty",
    ],
    img1: "/Centanery Block.jpg",
    img2: "/Fire mockup.jpg",
  },
  {
    title: "Global Placements",
    text: "We ensure students get placed in top shipping companies across the globe.",
    points: [
      "95% placement rate",
      "Top recruiters worldwide",
      "Internship programs",
      "Career guidance support",
    ],
    img1: "/Gate-1.jpeg",
    img2: "/shoremeeting.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((index - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % data.length);
  };

  return (
    <section className="py-20 bg-gray-50 transition-all duration-700">
      <h2 className="text-center text-sm tracking-widest text-gray-500 mb-2">
        EXCELLENCE IN EDUCATION
      </h2>

      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-16">
        Why Choose Our Marine Academy
      </h1>

      {/* MAIN SLIDER */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center px-4">
        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <Image
            src={data[index].img1}
            alt=""
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 text-[#0b1f3a]">
            {data[index].title}
          </h3>

          <p className="text-gray-600 mb-6">{data[index].text}</p>

          <ul className="space-y-3">
            {data[index].points.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-2 justify-center md:justify-start"
              >
                <span className="w-5 h-5 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block">
          <Image
            src={data[index].img2}
            alt=""
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 border rounded-full flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        {/* DOTS */}
        <div className="flex gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#0b1f3a]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 border rounded-full flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
