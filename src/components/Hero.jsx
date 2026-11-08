import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code, 
  Terminal, 
  Database,
  Award,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Animated CountUp Component
function CountUpNumber({ end, decimals = 0, duration = 1.5, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * end;
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString().padStart(prefix ? 2 : 1, '0');

  return (
    <span>
      {formatted}{suffix}
    </span>
  );
}

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0B1F1C]"
    >
      {/* Background Grid Pattern & Ambient Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B8FF65]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#7DE5A1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-[#102D28]/60 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small introduction pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B8FF65] animate-ping" />
              <span>{personalInfo.greeting}</span>
              <span className="text-[#B6C8C1]/40">|</span>
              <span className="text-[#B6C8C1] font-normal normal-case text-xs">SVCE Tirupati</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 font-display">
              MATTA <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F8EE] to-[#B8FF65]">
                SRAVYA
              </span>
            </h1>

            {/* Dynamic Animated Role */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 overflow-hidden">
              <span className="text-[#B6C8C1]">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-[#B8FF65] border-b-2 border-[#B8FF65]/60 pb-0.5 inline-block font-bold"
                >
                  {personalInfo.animatedRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#B6C8C1] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-bold text-sm sm:text-base hover:bg-[#A3F052] active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(184,255,101,0.3)] hover:shadow-[0_0_35px_rgba(184,255,101,0.5)] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="./resume.pdf"
                download="Matta_Sravya_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#163831] hover:bg-[#1A423A] text-white border border-[#294B42] hover:border-[#B8FF65]/60 font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 group shadow-sm"
              >
                <Download className="w-4 h-4 text-[#B8FF65] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & Status */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#294B42]/50 w-full">
              <span className="text-xs font-semibold tracking-wider text-[#849E95] uppercase">
                Connect:
              </span>
              
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65]/50 hover:bg-[#1A423A] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65]/50 hover:bg-[#1A423A] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] hover:border-[#B8FF65]/50 hover:bg-[#1A423A] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-[#B6C8C1] bg-[#102D28] px-3.5 py-1.5 rounded-full border border-[#294B42]">
                <span className="w-2 h-2 rounded-full bg-[#B8FF65] inline-block animate-pulse"></span>
                <span>Open for Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN (Actual Profile Photo Presentation) ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Pixion-Style Rounded Portrait Container */}
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Outer Decorative Shape with Forest Green & Lime Gradient */}
              <div className="absolute inset-1 sm:inset-2 rounded-[38px] sm:rounded-[44px] bg-gradient-to-tr from-[#163831] via-[#1A423A] to-[#102D28] border-2 border-[#294B42] shadow-[0_25px_50px_rgba(0,0,0,0.65)]" />

              {/* Decorative Lime Circle Behind Portrait */}
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#B8FF65] opacity-25 blur-3xl -top-6 -right-6 pointer-events-none" />
              <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-[#B8FF65]/30 -bottom-5 -left-5 animate-spin-slow pointer-events-none" />
              
              {/* Geometric Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#B8FF65] rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#B8FF65] rounded-bl-xl" />

              {/* Inner Portrait Frame Holding Matta Sravya's Actual Photo */}
              <div className="relative z-10 w-[88%] h-[88%] rounded-[30px] sm:rounded-[36px] overflow-hidden bg-[#0E2622] border-2 border-[#B8FF65]/70 shadow-[0_0_30px_rgba(184,255,101,0.2)] group">
                
                {/* Real Profile Photograph */}
                <img
                  src="./profile.png"
                  alt="Matta Sravya - Professional Developer Photograph"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Overlay on bottom for readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1F1C]/95 via-[#0B1F1C]/60 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base leading-tight font-display drop-shadow-sm">
                        Matta Sravya
                      </h3>
                      <p className="text-[#B8FF65] text-xs font-semibold drop-shadow-sm">
                        Full-Stack & Java Developer
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#163831]/90 border border-[#294B42] text-[11px] text-[#B6C8C1] backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF65] animate-pulse"></span>
                      <span>SVCE • Final Year</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left: React / Frontend */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-left-6 z-20 px-3.5 py-2 rounded-2xl bg-[#163831]/95 border border-[#294B42] backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-semibold text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-[#0B1F1C] flex items-center justify-center text-[#B8FF65]">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#849E95] font-normal leading-none">Frontend</span>
                  <span className="text-[#B8FF65]">React.js</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Top Right: Java & Spring */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-3 sm:-right-6 z-20 px-3.5 py-2 rounded-2xl bg-[#163831]/95 border border-[#294B42] backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-semibold text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-[#0B1F1C] flex items-center justify-center text-[#7DE5A1]">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#849E95] font-normal leading-none">Backend</span>
                  <span className="text-[#7DE5A1]">Java • Spring</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 - Bottom Left: AI/ML & Python */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-2xl bg-[#163831]/95 border border-[#294B42] backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-semibold text-white"
              >
                <div className="w-6 h-6 rounded-lg bg-[#0B1F1C] flex items-center justify-center text-[#B8FF65]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#849E95] font-normal leading-none">Intelligence</span>
                  <span className="text-[#B8FF65]">AI/ML • NLP</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ================= THREE PROFESSIONAL STATISTICS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-[#294B42]/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Stat 1: 9.20 CGPA */}
            <div className="relative group p-6 rounded-3xl bg-[#163831]/80 hover:bg-[#1A423A] border border-[#294B42] hover:border-[#B8FF65]/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8FF65] bg-[#0B1F1C] px-3 py-1 rounded-full border border-[#294B42]">
                  Academics
                </span>
                <Award className="w-5 h-5 text-[#B8FF65]" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 flex items-baseline gap-1">
                <CountUpNumber end={9.20} decimals={2} />
                <span className="text-lg text-[#849E95] font-normal">/ 10</span>
              </div>
              <div className="text-base font-semibold text-white mt-1">
                9.20 CGPA
              </div>
              <p className="text-xs text-[#B6C8C1] mt-1">
                Sri Venkateswara College of Engineering (SVCE)
              </p>
            </div>

            {/* Stat 2: 02 Featured Projects */}
            <div className="relative group p-6 rounded-3xl bg-[#163831]/80 hover:bg-[#1A423A] border border-[#294B42] hover:border-[#B8FF65]/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7DE5A1] bg-[#0B1F1C] px-3 py-1 rounded-full border border-[#294B42]">
                  Portfolio
                </span>
                <Code className="w-5 h-5 text-[#7DE5A1]" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 flex items-baseline gap-1">
                <CountUpNumber end={2} prefix="0" />
                <span className="text-2xl text-[#B8FF65]">+</span>
              </div>
              <div className="text-base font-semibold text-white mt-1">
                02 Featured Projects
              </div>
              <p className="text-xs text-[#B6C8C1] mt-1">
                AI Resume Analyzer & Student Database System
              </p>
            </div>

            {/* Stat 3: 03 Internship Experiences */}
            <div className="relative group p-6 rounded-3xl bg-[#163831]/80 hover:bg-[#1A423A] border border-[#294B42] hover:border-[#B8FF65]/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8FF65] bg-[#0B1F1C] px-3 py-1 rounded-full border border-[#294B42]">
                  Industry Experience
                </span>
                <Database className="w-5 h-5 text-[#B8FF65]" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 flex items-baseline gap-1">
                <CountUpNumber end={3} prefix="0" />
                <span className="text-2xl text-[#7DE5A1]">+</span>
              </div>
              <div className="text-base font-semibold text-white mt-1">
                03 Internship Experiences
              </div>
              <p className="text-xs text-[#B6C8C1] mt-1">
                Full Stack, ServiceNow & byteXL Internships
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
