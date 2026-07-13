import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualifications from "@/components/Qualifications";
import DanceStyles from "@/components/DanceStyles";
import TeachingExperience from "@/components/TeachingExperience";
import WhatITeach from "@/components/WhatITeach";
import Achievements from "@/components/Achievements";
import WhyChooseMe from "@/components/WhyChooseMe";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <DanceStyles />
        <TeachingExperience />
        <WhatITeach />
        <Achievements />
        <WhyChooseMe />
        <Gallery />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
