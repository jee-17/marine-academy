"use client";

export default function Announcements() {
  const announcements = [
    {
      title: "Training for General Purpose Rating(GP Ratings)",
      desc: "Apply now (6 months course)",
    },
    {
      title: "Electro Technical Officer(ETO)",
      desc: "Apply Now (4 months course)",
    },
    {
      title: "Basic Safety Training(BST)",
      desc: "Apply Now (12 Days course)",
    },
    {
      title:
        "Security Training for Seafarers with Designated Security Duties(STSDSD)",
      desc: "Apply Now (2 Days course)",
    },
    {
      title: "Refresher Training for Proficiency in FPFF (RFPFF)",
      desc: "Apply Now (1 Day course)",
    },
    {
      title: "Refresher Training for Proficiency in PST (RPST)",
      desc: "Apply Now (1 Day course)",
    },
    {
      title:
        "Basic Training for Oil and Chemical Tanker Cargo Operations (OCTCO)",
      desc: "Apply Now (6 Days course)",
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
