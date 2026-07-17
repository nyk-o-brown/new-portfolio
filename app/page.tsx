import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechBadges from "@/components/TechBadges";
import SkillIcons from "@/components/SkillIcons";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <TechBadges />
        <SkillIcons />
        <Certifications />
        <Experience />
        <Projects />
        <SystemDesign />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
