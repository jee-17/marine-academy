"use client";
import { motion } from "framer-motion";
import { FaStar, FaAward, FaGlobe } from "react-icons/fa";
// export default function Hero() {
//   return (
//     <div className="relative h-screen overflow-hidden z-0">
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute w-full h-full object-cover z-0"
//       >
//         <source src="/ocean.mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Navigate Your Future at Sea
//         </h1>

//         <p className="mb-6">
//           Professional Marine Training with Global Certification
//         </p>

//         <button className="btn">Explore Courses</button>
//       </div>
//       <div className="text-center text-white">
//         <h1 className="text-5xl font-bold mb-4">
//           Maritime Excellence for Global Careers
//         </h1>

//         <p className="mb-6">Ranked among top marine institutes</p>

//         <div className="flex gap-4 justify-center">
//           <button className="btn">Explore Programs</button>
//           <button className="border px-6 py-3 rounded">Apply Now</button>
//         </div>
//         <div className="flex gap-6 justify-center mt-6 text-sm text-white/90 flex-wrap">
//           <div className="flex items-center gap-2">
//             <FaStar className="text-yellow-400" />
//             <span>NAAC A+</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <FaAward className="text-yellow-400" />
//             <span>30+ Years</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <FaGlobe className="text-yellow-400" />
//             <span>Global Placements</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Hero() {
  return (
    <div className="relative h-[80vh] md:h-screen overflow-x-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/ocean.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Reaching Nautical Miles in Life
        </h1>

        <p className="text-white mb-6 text-sm md:text-lg">
          Navigate Your Future at Sea , Professional Marine Training with Global
          Certification
        </p>

        <button className="bg-yellow-400 px-6 py-3 rounded">
          Explore Courses
        </button>
      </div>
    </div>
  );
}
