import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import MainHero from "../components/Sections/HeroSections/MainHero";
import FeatureHero from "../components/Sections/HeroSections/FeatureHero";
import TestimonialsHero from "../components/Sections/HeroSections/TestimonialsHero";
import CTASection from "../components/Sections/CTASection";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import StatsSection from "../components/Sections/Stats";
import Footer from "../components/Layout/Footer";


const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userDetails = {
    name: "John Doe",
    avatar: "/avatar.png",
    initials: "JD"
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-grow overflow-y-auto">
        <Header
          onSidebarToggle={toggleSidebar}
          userDetails={userDetails}
        />
        <main>
          <MainHero />
          <FeatureHero />
          <Projects />
          <StatsSection/>
          <TestimonialsHero />
          <CTASection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
