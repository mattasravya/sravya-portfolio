import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#102D28] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#B8FF65]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B6C8C1]">
            Consistently demonstrating academic distinction, analytical dedication, and continuous engineering curiosity.
          </p>
        </div>

        {/* Two-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-7 sm:p-9 rounded-[32px] bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1F1C] border border-[#294B42] group-hover:border-[#B8FF65] flex items-center justify-center text-[#B8FF65] transition-colors shadow-inner">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0B1F1C] text-[#B8FF65] border border-[#294B42]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B8FF65] transition-colors font-display">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#7DE5A1] mt-1 mb-5">
                  {edu.degree}
                </p>

                {/* Score Showcase Banner */}
                <div className="p-4 rounded-2xl bg-[#0B1F1C] border border-[#294B42] flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-[#849E95] uppercase tracking-wider">
                    Academic Score:
                  </span>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#B8FF65]" />
                    <span className="text-xl sm:text-2xl font-extrabold text-[#B8FF65] font-display">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B6C8C1]">
                      <CheckCircle2 className="w-4 h-4 text-[#7DE5A1] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer pill */}
              <div className="pt-4 border-t border-[#294B42]/60 flex items-center justify-between text-xs text-[#849E95]">
                <span>Status:</span>
                <span className="text-white font-medium bg-[#102D28] px-3 py-1 rounded-full border border-[#294B42]">
                  {edu.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
