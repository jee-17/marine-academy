import { FaAnchor, FaGlobe, FaShip } from "react-icons/fa";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="title text-[#0b1f3a]">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="card">
          <FaAnchor className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold">20+ Years Experience</h3>
        </div>

        <div className="card">
          <FaGlobe className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold">Global Certification</h3>
        </div>

        <div className="card">
          <FaShip className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold">Real Ship Training</h3>
        </div>
      </div>
    </section>
  );
}
