import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1F1C] text-white selection:bg-[#B8FF65] selection:text-[#0B1F1C]">
      {/* Top Fixed Header */}
      <Navbar onOpenContact={() => {}} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section */}
        <About onOpenResume={handleOpenResume} />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Certifications & Achievements Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
