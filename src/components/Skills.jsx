import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Globe, 
  Palette, 
  Layers, 
  Database, 
  Server, 
  Boxes, 
  Workflow, 
  Cpu, 
  Network, 
  HardDrive, 
  GitBranch, 
  Github, 
  Send, 
  Sparkles, 
  MonitorPlay, 
  CloudCog,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon string name to Lucide Icon component
const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Globe,
  Palette,
  Layers,
  Database,
  Server,
  Boxes,
  Workflow,
  Cpu,
  Network,
  HardDrive,
  GitBranch,
  Github,
  Send,
  Sparkles,
  MonitorPlay,
  CloudCog
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === "All"
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#0B1F1C] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#B8FF65]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            My Skills & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B6C8C1]">
            Comprehensive technical repertoire covering full-stack development, enterprise backend engineering, and developer tooling.
          </p>

          {/* Core Skill vs Internship Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#163831] border border-[#B8FF65]/40 text-[#B8FF65]">
              <span className="w-2 h-2 rounded-full bg-[#B8FF65]"></span>
              <span className="font-semibold">Core Skill:</span> Primary Academic & Applied Mastery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#163831] border border-[#7DE5A1]/40 text-[#7DE5A1]">
              <span className="w-2 h-2 rounded-full bg-[#7DE5A1]"></span>
              <span className="font-semibold">Internship Exposure:</span> Real-World Industry Practice
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#B8FF65] text-[#0B1F1C] shadow-[0_0_15px_rgba(184,255,101,0.35)] scale-105'
                    : 'bg-[#163831] text-[#B6C8C1] hover:text-white hover:bg-[#1A423A] border border-[#294B42]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories & Cards */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup, groupIdx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              {/* Category Subheading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 rounded-full bg-[#B8FF65]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-display">
                  {catGroup.category}
                </h3>
                <span className="text-xs text-[#849E95] hidden sm:inline">
                  — {catGroup.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {catGroup.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  const isCore = skill.type === "Core Skill";

                  return (
                    <div
                      key={skill.name}
                      className="group relative p-5 rounded-2xl bg-[#163831] hover:bg-[#1A423A] border border-[#294B42] hover:border-[#B8FF65]/70 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1"
                    >
                      {/* Top Bar with Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0B1F1C] border border-[#294B42] group-hover:border-[#B8FF65] flex items-center justify-center text-[#B8FF65] transition-colors">
                          <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Distinction Tag */}
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                            isCore
                              ? 'bg-[#B8FF65]/10 text-[#B8FF65] border-[#B8FF65]/30'
                              : 'bg-[#7DE5A1]/10 text-[#7DE5A1] border-[#7DE5A1]/30'
                          }`}
                        >
                          {skill.type}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-bold text-white group-hover:text-[#B8FF65] transition-colors font-display">
                        {skill.name}
                      </h4>

                      {/* Technical Level / Subtext */}
                      <p className="text-xs text-[#B6C8C1] mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#294B42] group-hover:bg-[#B8FF65] transition-colors" />
                        <span>{skill.level}</span>
                      </p>

                      {/* Subtle Bottom Glow Line */}
                      <div className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#B8FF65]/0 to-transparent group-hover:via-[#B8FF65]/60 transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
