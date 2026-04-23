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
          Excellence in Marine Education in Thoothukudi
        </h2>
        <p>
          St. Francis Xavier Maritime academy is a new venture in the annals of
          the Catholic diocese of Thoothukudi, Tamilnadu. The educational
          institution is constructed as a centennial monument and dedicated for
          the fisherfolk community mainly on the Coromandel coast. It has aimed
          to commence the courses in the near future.
        </p>
      </motion.div>
    </div>
  );
}
