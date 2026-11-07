import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Layers, 
  Eye, 
  FileText, 
  Search, 
  BarChart3,
  Cpu,
  ChevronRight,
  X
} from 'lucide-react';
import { projects } from '../data/portfolioData';

// Interactive Mockup for AI Resume Analyzer
function ResumeAnalyzerMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0E2622] rounded-2xl p-4 sm:p-5 border border-[#294B42] flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#294B42] text-[#849E95]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#E57373]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFD54F]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#81C784]/80 inline-block"></span>
          <span className="ml-2 text-[11px] text-[#B6C8C1]">streamlit_app.py — Resume Analyzer</span>
        </div>
        <span className="text-[10px] text-[#B8FF65] bg-[#163831] px-2 py-0.5 rounded border border-[#294B42]">
          TF-IDF Model: Active
        </span>
      </div>

      {/* Main Analysis Display */}
      <div className="grid grid-cols-12 gap-3 py-3">
        {/* Left Stats */}
        <div className="col-span-12 sm:col-span-5 bg-[#163831] p-3 rounded-xl border border-[#294B42]/70 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-[#849E95] uppercase tracking-wider block">Resume Match Score</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-[#B8FF65] font-sans">88.5%</span>
              <span className="text-[11px] text-[#7DE5A1]">High Alignment</span>
            </div>
          </div>

          <div className="space-y-1.5 mt-3">
            <div className="flex justify-between text-[10px] text-[#B6C8C1]">
              <span>Skill Overlap</span>
              <span className="text-[#B8FF65]">92%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0B1F1C] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#7DE5A1] to-[#B8FF65] w-[92%] rounded-full" />
            </div>

            <div className="flex justify-between text-[10px] text-[#B6C8C1]">
              <span>Semantic Similarity</span>
              <span className="text-[#B8FF65]">85%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0B1F1C] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#7DE5A1] to-[#B8FF65] w-[85%] rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Keyword Insights */}
        <div className="col-span-12 sm:col-span-7 bg-[#163831] p-3 rounded-xl border border-[#294B42]/70 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-[#849E95] uppercase tracking-wider block mb-1.5">
              Extracted Keywords & Gaps
            </span>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#B8FF65]/40 text-[#B8FF65] text-[10px]">
                ✓ Python
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#B8FF65]/40 text-[#B8FF65] text-[10px]">
                ✓ NLP
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#B8FF65]/40 text-[#B8FF65] text-[10px]">
                ✓ TF-IDF
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#B8FF65]/40 text-[#B8FF65] text-[10px]">
                ✓ Streamlit
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#E57373]/40 text-[#E57373] text-[10px]">
                ! PyTorch (Gap)
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0B1F1C] border border-[#B8FF65]/40 text-[#B8FF65] text-[10px]">
                ✓ Scikit-Learn
              </span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-[#294B42] text-[10px] text-[#7DE5A1] flex items-center justify-between">
            <span>Cosine Distance: 0.115</span>
            <span className="text-[#849E95]">Streamlit v1.35</span>
          </div>
        </div>
      </div>

      {/* Terminal log status */}
      <div className="bg-[#0B1F1C] px-3 py-1.5 rounded-lg border border-[#294B42] text-[10px] text-[#B6C8C1] flex items-center justify-between">
        <span className="text-[#B8FF65] truncate">$ analyze --resume Matta_Sravya_CV.pdf --jd Senior_SWE.txt</span>
        <span className="text-[#7DE5A1] shrink-0">Done (0.42s)</span>
      </div>
    </div>
  );
}

// Interactive Mockup for Student Database Management System
function StudentDbMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0E2622] rounded-2xl p-4 sm:p-5 border border-[#294B42] flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#294B42] text-[#849E95]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#E57373]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFD54F]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#81C784]/80 inline-block"></span>
          <span className="ml-2 text-[11px] text-[#B6C8C1]">StudentDAO.java — MySQL 8.0</span>
        </div>
        <span className="text-[10px] text-[#7DE5A1] bg-[#163831] px-2 py-0.5 rounded border border-[#294B42]">
          JDBC: Connection Pool Active
        </span>
      </div>

      {/* Database Table Records */}
      <div className="my-2 bg-[#163831] rounded-xl border border-[#294B42]/70 overflow-hidden">
        <div className="grid grid-cols-12 bg-[#0B1F1C] p-2 text-[10px] font-bold text-[#849E95] border-b border-[#294B42]">
          <span className="col-span-3">ROLL NO</span>
          <span className="col-span-4">NAME</span>
          <span className="col-span-3">BRANCH</span>
          <span className="col-span-2 text-right">CGPA</span>
        </div>
        <div className="p-2 space-y-1.5 text-[11px]">
          <div className="grid grid-cols-12 text-[#B6C8C1] border-b border-[#294B42]/30 pb-1">
            <span className="col-span-3 text-[#B8FF65]">23BFA05245</span>
            <span className="col-span-4 text-white font-sans font-medium">Matta Sravya</span>
            <span className="col-span-3 text-[#7DE5A1]">CSE</span>
            <span className="col-span-2 text-right font-bold text-[#B8FF65]">9.20</span>
          </div>
          <div className="grid grid-cols-12 text-[#B6C8C1] border-b border-[#294B42]/30 pb-1">
            <span className="col-span-3 text-[#849E95]">23BFA05246</span>
            <span className="col-span-4 text-white font-sans font-medium">Rahul Verma</span>
            <span className="col-span-3 text-[#7DE5A1]">CSE</span>
            <span className="col-span-2 text-right font-bold">8.95</span>
          </div>
          <div className="grid grid-cols-12 text-[#B6C8C1]">
            <span className="col-span-3 text-[#849E95]">23BFA05247</span>
            <span className="col-span-4 text-white font-sans font-medium">Ananya Rao</span>
            <span className="col-span-3 text-[#7DE5A1]">CSE</span>
            <span className="col-span-2 text-right font-bold">9.05</span>
          </div>
        </div>
      </div>

      {/* SQL CRUD Terminal */}
      <div className="bg-[#0B1F1C] p-2.5 rounded-lg border border-[#294B42] text-[10px] text-[#B6C8C1]">
        <div className="flex items-center justify-between text-[#849E95] mb-1">
          <span className="text-[#B8FF65]">SQL QUERY EXECUTION</span>
          <span>jdbc:mysql://localhost:3306/student_db</span>
        </div>
        <p className="text-white truncate">
          SELECT * FROM students WHERE branch = 'CSE' ORDER BY cgpa DESC;
        </p>
        <p className="text-[#7DE5A1] text-[9px] mt-0.5">
          ✓ Query OK, 12 rows returned in 2.3ms (PreparedStatements)
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#102D28] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            My Recent Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B6C8C1]">
            Explore prominent software projects engineered with full-stack technologies, machine learning, and enterprise architectures.
          </p>
        </div>

        {/* Project Cards (Large Pixion-Inspired Presentation) */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-[32px] sm:rounded-[40px] bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/50 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Mockup / Image Preview Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                      {project.id === 'ai-resume-analyzer' ? (
                        <ResumeAnalyzerMockup />
                      ) : (
                        <StudentDbMockup />
                      )}
                    </div>
                  </div>

                  {/* Project Details Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Top Meta Line: Number and Category */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B1F1C] text-[#B8FF65] border border-[#294B42]">
                          {project.category}
                        </span>
                        <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#294B42] group-hover:text-[#B8FF65]/40 transition-colors">
                          {project.number}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#B8FF65] transition-colors font-display">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[#7DE5A1] mt-1 mb-4">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#B6C8C1] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="space-y-2 mb-6">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#B6C8C1]">
                            <CheckCircle2 className="w-4 h-4 text-[#B8FF65] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-xl bg-[#102D28] text-xs font-medium text-[#B8FF65] border border-[#294B42]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#294B42]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B1F1C] hover:bg-[#1A423A] text-white border border-[#294B42] hover:border-[#B8FF65] text-xs sm:text-sm font-semibold transition-all shadow-sm"
                      >
                        <Github className="w-4 h-4 text-[#B8FF65]" />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF65] text-[#0B1F1C] hover:bg-[#A3F052] text-xs sm:text-sm font-bold transition-all shadow-[0_0_15px_rgba(184,255,101,0.25)]"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Interactive Details</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#163831] rounded-3xl border-2 border-[#B8FF65]/50 p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#0B1F1C] text-[#B6C8C1] hover:text-white border border-[#294B42] hover:border-[#B8FF65]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8FF65] bg-[#0B1F1C] px-3 py-1 rounded-full border border-[#294B42]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-display">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#7DE5A1] font-medium mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-[#B6C8C1] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Key Technical Features & Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0B1F1C] border border-[#294B42] flex items-start gap-2.5 text-xs text-[#B6C8C1]">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF65] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-xl bg-[#102D28] text-xs font-medium text-[#B8FF65] border border-[#294B42]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#294B42]">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-bold text-sm hover:bg-[#A3F052] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-[#B6C8C1] hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
