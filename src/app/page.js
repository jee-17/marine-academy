import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Wave from "@/components/Wave";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Announcements from "@/components/Announcements";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import StudentTestimonials from "@/components/StudentTestimonials";

export default function Home() {
  return (
    <>
      {/* ✅ STICKY HEADER */}
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      <Hero />
      <Stats />
      <Testimonials />
      <Wave />
      <Story />
      <Gallery />
      <Features />
      {/* <VideoSection /> */}
      <Announcements />
      <StudentTestimonials />
      <CTA />
      <WhatsApp />
      <Footer />
    </>
  );
}
