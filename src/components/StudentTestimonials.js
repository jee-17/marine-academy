"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Arun Kumar",
    course: "Marine Engineering",
    quote:
      "This academy transformed my career. I got placed in a top shipping company.",
    image: "/students_from_marine.jpg",
  },
  {
    name: "Priya Sharma",
    course: "Nautical Science",
    quote:
      "Excellent training and real ship exposure helped me succeed globally.",
    image: "/students_parade.jpg",
  },
  {
    name: "Rahul Verma",
    course: "Diploma in Maritime Studies",
    quote:
      "The practical training and industry exposure gave me the edge I needed.",
    image: "/students_in_training.jpg",
  },
];

export default function StudentTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4">
      {/* BOX CONTAINER */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl relative h-[400px] md:h-[500px]">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${testimonials[index].image})`,
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />

          <p className="text-white text-lg md:text-2xl max-w-2xl mb-4">
            {testimonials[index].quote}
          </p>

          <h3 className="text-yellow-400 text-lg font-semibold">
            {testimonials[index].name}
          </h3>

          <p className="text-gray-300 text-sm">{testimonials[index].course}</p>
        </div>

        {/* ARROWS */}
        <button
          onClick={() =>
            setIndex((index - 1 + testimonials.length) % testimonials.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => setIndex((index + 1) % testimonials.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
