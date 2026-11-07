import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1F1C]/90 backdrop-blur-md py-3.5 border-b border-[#294B42]/80 shadow-[0_4px_20px_rgba(0,0,0,0.35)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF65] rounded-lg py-1 px-1.5"
            aria-label="Matta Sravya Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-[#163831] border border-[#294B42] flex items-center justify-center group-hover:border-[#B8FF65] transition-colors shadow-sm">
              <span className="font-extrabold text-lg text-[#B8FF65]">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#B8FF65] transition-colors font-display">
              SRAVYA<span className="text-[#B8FF65]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#102D28]/80 px-4 py-1.5 rounded-full border border-[#294B42]/70 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#0B1F1C] font-semibold'
                      : 'text-[#B6C8C1] hover:text-white hover:bg-[#163831]/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#B8FF65] rounded-full shadow-[0_0_12px_rgba(184,255,101,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-semibold text-sm hover:bg-[#A3F052] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(184,255,101,0.25)] hover:shadow-[0_0_25px_rgba(184,255,101,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65]/50 focus:outline-none focus:ring-2 focus:ring-[#B8FF65]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#0E2622]/98 border-b border-[#294B42] backdrop-blur-xl"
          >
            <div className="px-5 py-6 space-y-2 max-w-lg mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#B8FF65] text-[#0B1F1C] font-semibold shadow-sm'
                        : 'text-[#B6C8C1] hover:text-white hover:bg-[#163831]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[#294B42]/60 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#B8FF65] text-[#0B1F1C] font-semibold text-center hover:bg-[#A3F052] transition-colors shadow-md"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
