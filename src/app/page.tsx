import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Imagination from "@/components/Imagination";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content">
        <HeroBanner />
        <Skill />
        <Experience />
        <Imagination />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
