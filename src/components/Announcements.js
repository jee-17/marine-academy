"use client";

export default function Announcements() {
  return (
    <div className="overflow-hidden bg-[#0b1f3a] py-6">
      <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="min-w-[300px] bg-white text-black p-4 rounded shadow"
          >
            <h3 className="font-semibold">PhD Admission Open 2026</h3>
            <p className="text-sm">Apply now for doctoral programs</p>
            <button className="text-blue-600 mt-2">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
