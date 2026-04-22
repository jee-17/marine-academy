"use client";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="py-20 px-4 md:px-16 grid md:grid-cols-2 gap-10 items-center">
      <motion.img
        src="/Academic block-1.jpg"
        className="rounded-xl shadow-xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Excellence in Marine Education
        </h2>
        <p>
          Our academy trains future maritime leaders with world-class facilities
          and real ship exposure.
        </p>
      </motion.div>
    </div>
  );
}
