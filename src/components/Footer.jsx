import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F1C] border-t border-[#294B42] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#B8FF65]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          
          {/* Logo & Brand Message */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#163831] border border-[#294B42] flex items-center justify-center group-hover:border-[#B8FF65] transition-colors">
                <span className="font-extrabold text-sm text-[#B8FF65]">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#B8FF65] transition-colors font-display">
                SRAVYA<span className="text-[#B8FF65]">.</span>
              </span>
            </a>

            <p className="text-sm text-[#B6C8C1] max-w-sm leading-relaxed">
              Building meaningful digital experiences through code.
            </p>
            <p className="text-xs text-[#849E95]">
              Computer Science & Engineering • Sri Venkateswara College of Engineering
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-[#B6C8C1] hover:text-[#B8FF65] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#B8FF65] text-[#0B1F1C] hover:bg-[#A3F052] transition-all ml-2 shadow-[0_0_15px_rgba(184,255,101,0.25)]"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-[#294B42]/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#849E95] gap-4">
          <p>
            © {currentYear} Matta Sravya. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed with Pixion Aesthetics</span>
            <span>•</span>
            <span className="text-[#B8FF65]">Crafted in React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
