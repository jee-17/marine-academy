"use client";

export default function Announcements() {
  const announcements = [
    {
      title: "PhD Admission Open 2026",
      desc: "Apply now for doctoral programs",
    },
    {
      title: "Marine Engineering Batch 2026",
      desc: "Limited seats available",
    },
    {
      title: "Campus Interview Drive",
      desc: "Top shipping companies visiting",
    },
    {
      title: "Scholarship Program",
      desc: "Merit-based scholarships available",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#0b1f3a] py-6">
      <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
        {/* 🔁 Duplicate for infinite loop */}
        {[...announcements, ...announcements].map((item, i) => (
          <div
            key={i}
            className="min-w-[280px] md:min-w-[320px] bg-white text-black p-4 rounded-lg shadow-md"
          >
            <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>

            <p className="text-xs md:text-sm text-gray-600 mt-1">{item.desc}</p>

            <button className="text-blue-600 mt-2 text-sm">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
