import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  User,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const personalDetails = [
    { label: "Name", value: personalInfo.name, icon: User },
    { label: "Education", value: "B.Tech CSE (2023–2027)", icon: GraduationCap },
    { label: "College", value: "SVCE, Tirupati", icon: BookOpen },
    { label: "Location", value: "Cuddapah, AP, India", icon: MapPin },
    { label: "Email", value: personalInfo.contact.email, icon: Mail, isLink: true, href: `mailto:${personalInfo.contact.email}` },
    { label: "Phone", value: personalInfo.contact.phone, icon: Phone, isLink: true, href: `tel:${personalInfo.contact.phone}` }
  ];

  return (
    <section id="about" className="py-24 bg-[#102D28] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            About Me
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-[#7DE5A1] font-medium">
            Passionate About Building Meaningful Software.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Photo & Quick Profile Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Rounded Dark-Green Container */}
              <div className="relative rounded-[32px] bg-[#163831] border-2 border-[#294B42] p-5 shadow-2xl">
                
                {/* Photo Frame */}
                <div className="relative aspect-[4/4.8] rounded-2xl overflow-hidden border border-[#B8FF65]/40 mb-5 group">
                  <img
                    src="./profile.png"
                    alt="Matta Sravya"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/80 to-transparent">
                    <p className="text-white font-bold text-sm">Matta Sravya</p>
                    <p className="text-xs text-[#B8FF65]">Computer Science & Engineering</p>
                  </div>
                </div>

                {/* Focus Areas Badges */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-[#0B1F1C]/80 border border-[#294B42]">
                    <span className="text-[#B6C8C1]">Academic Standing</span>
                    <span className="text-[#B8FF65] font-bold">9.20 CGPA</span>
                  </div>
                  <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-[#0B1F1C]/80 border border-[#294B42]">
                    <span className="text-[#B6C8C1]">Primary Focus</span>
                    <span className="text-[#7DE5A1] font-semibold">Full-Stack & Java</span>
                  </div>
                  <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-[#0B1F1C]/80 border border-[#294B42]">
                    <span className="text-[#B6C8C1]">Current Year</span>
                    <span className="text-white font-semibold">3rd Year B.Tech</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#B8FF65]/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side: Description and Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Main Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#B6C8C1] leading-relaxed mb-8">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="bg-[#163831]/40 p-4 rounded-2xl border border-[#294B42]/50 hover:border-[#B8FF65]/30 transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {personalDetails.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#163831] border border-[#294B42] hover:border-[#B8FF65]/40 transition-colors flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0B1F1C] border border-[#294B42] flex items-center justify-center text-[#B8FF65] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] text-[#849E95] font-semibold uppercase tracking-wider">
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <a 
                          href={item.href}
                          className="text-sm font-semibold text-white hover:text-[#B8FF65] transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-white truncate block">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-bold text-sm hover:bg-[#A3F052] active:scale-95 transition-all shadow-[0_0_20px_rgba(184,255,101,0.25)]"
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#163831] hover:bg-[#1A423A] text-white border border-[#294B42] hover:border-[#B8FF65]/50 font-semibold text-sm transition-all"
              >
                <span>View Full Resume</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
