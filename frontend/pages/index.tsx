import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import MainHero from "../components/Sections/HeroSections/MainHero";
import FeatureHero from "../components/Sections/HeroSections/FeatureHero";
import TestimonialsHero from "../components/Sections/HeroSections/TestimonialsHero";
import CTASection from "../components/Sections/CTASection";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Layout/Footer";

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-grow overflow-y-auto">
        <Header
          onSidebarToggle={toggleSidebar}
          isDarkMode={isDarkMode}
          onThemeToggle={toggleTheme}
        />
        <main>
          <MainHero />
          <FeatureHero />
          <Projects />
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
