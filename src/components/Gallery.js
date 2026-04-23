"use client";

import Image from "next/image";

const images = [
  {
    src: "/voc-trust-meeting.jpeg",
    title: "To meet VOC Port Trust Chairman Mr.Susanta Kumar Purohit, IRSEE ",
  },
  {
    src: "/Kallamozhi meeting.jpeg",
    title: "Kallamozhi Meeting",
  },
  {
    src: "/honoring.jpg",
    title: "Bishop Honors with Mr.Micheal Motha",
  },
  {
    src: "/Eco friendly campus.jpg",
    title: "Eco Friendly Campus",
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-20">
      {/* TITLE */}
      <h2 className="text-center text-[#0b1f3a] text-2xl md:text-3xl font-bold mb-12">
        Campus Life
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {images.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-4 flex-grow flex items-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
