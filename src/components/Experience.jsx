import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ExternalLink,
  Award
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience({ onOpenCertificates }) {
  return (
    <section id="experience" className="py-24 bg-[#0B1F1C] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            My Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B6C8C1]">
            Practical hands-on industry virtual internships with enterprise platforms and modern full-stack web architectures.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#B8FF65] via-[#294B42] to-[#7DE5A1]" />
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Center Marker */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#163831] border-2 border-[#B8FF65] items-center justify-center z-10 shadow-[0_0_15px_rgba(184,255,101,0.4)]">
                    <Briefcase className="w-4 h-4 text-[#B8FF65]" />
                  </div>

                  {/* Card Left/Right Placement */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}>
                    <div className="relative group p-6 sm:p-8 rounded-[28px] bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/60 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                      
                      {/* Duration & Period Tag */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B1F1C] text-[#B8FF65] border border-[#294B42]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#102D28] text-[#7DE5A1] border border-[#294B42]">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B8FF65] transition-colors font-display">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-[#7DE5A1] mt-1 mb-4">
                        {exp.company}
                      </h4>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {exp.highlights.map((item, hIdx) => (
                          <div 
                            key={hIdx} 
                            className={`flex items-start gap-2 text-xs sm:text-sm text-[#B6C8C1] ${isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#B8FF65] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#0B1F1C] text-xs font-medium text-[#B8FF65] border border-[#294B42]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Certificate link jump */}
                      <div className={`mt-5 pt-4 border-t border-[#294B42]/50 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <a
                          href="#certifications"
                          className="inline-flex items-center gap-1.5 text-xs text-[#7DE5A1] hover:text-[#B8FF65] font-semibold transition-colors"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>View Official Completion Certificate</span>
                        </a>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
