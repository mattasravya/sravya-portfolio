import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { personalInfo, educationList, experiences, projects } from '../data/portfolioData';
import { certificatesData } from '../data/certificates';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#163831] rounded-3xl border-2 border-[#B8FF65]/70 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 bg-[#0B1F1C] border-b border-[#294B42] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#163831] border border-[#294B42] flex items-center justify-center text-[#B8FF65]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Professional Curriculum Vitae
              </h3>
              <p className="text-xs text-[#7DE5A1]">
                Matta Sravya • Full-Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href="./resume.pdf"
              download="Matta_Sravya_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#B8FF65] text-[#0B1F1C] font-bold text-xs hover:bg-[#A3F052] transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#163831] hover:bg-[#1A423A] border border-[#294B42] text-white hover:border-[#B8FF65] transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#163831] hover:bg-[#E57373]/20 border border-[#294B42] text-[#B6C8C1] hover:text-[#E57373] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B1F1C] text-white">
          
          {/* Resume Header */}
          <div className="border-b border-[#294B42] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white font-display tracking-tight">
                  MATTA SRAVYA
                </h1>
                <p className="text-[#B8FF65] font-semibold text-sm mt-1">
                  Full-Stack Developer | Java Developer | AI/ML Enthusiast
                </p>
              </div>

              <div className="text-xs text-[#B6C8C1] space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#B8FF65]" />
                  <span>{personalInfo.contact.email}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#7DE5A1]" />
                  <span>{personalInfo.contact.phone}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B8FF65]" />
                  <span>{personalInfo.contact.location}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#294B42]/50 text-xs text-[#7DE5A1]">
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn: linkedin.com/in/matta-sravya
              </a>
              <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> GitHub: github.com/mattasravya
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-2 border-b border-[#294B42] pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-[#B6C8C1] leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-3 border-b border-[#294B42] pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start text-sm">
                  <div>
                    <h3 className="font-bold text-white">{edu.institution}</h3>
                    <p className="text-xs text-[#7DE5A1]">{edu.degree}</p>
                  </div>
                  <div className="text-xs text-right mt-1 sm:mt-0">
                    <span className="font-bold text-[#B8FF65]">{edu.score}</span>
                    <span className="text-[#849E95] block">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-3 border-b border-[#294B42] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#163831] border border-[#294B42]">
                <span className="font-bold text-white block mb-1">Programming Languages:</span>
                <span className="text-[#B6C8C1]">Java (Core & OOP), Python, JavaScript (ES6+)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#163831] border border-[#294B42]">
                <span className="font-bold text-white block mb-1">Frontend Development:</span>
                <span className="text-[#B6C8C1]">HTML5, CSS3, React.js, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#163831] border border-[#294B42]">
                <span className="font-bold text-white block mb-1">Backend & Frameworks:</span>
                <span className="text-[#B6C8C1]">JDBC, Spring Boot, Hibernate, REST APIs, Node.js, Express.js</span>
              </div>
              <div className="p-3 rounded-xl bg-[#163831] border border-[#294B42]">
                <span className="font-bold text-white block mb-1">Databases & Tools:</span>
                <span className="text-[#B6C8C1]">MySQL, MongoDB, Git, GitHub, Postman, Copilot, Streamlit, ServiceNow</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-3 border-b border-[#294B42] pb-1">
              Internship Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                    <h3 className="font-bold text-white text-sm">{exp.role} — <span className="text-[#7DE5A1]">{exp.company}</span></h3>
                    <span className="text-[#849E95] text-xs">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-[#B6C8C1] space-y-1 pl-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-3 border-b border-[#294B42] pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                    <span className="text-[#B8FF65] font-mono">{proj.technologies.join(', ')}</span>
                  </div>
                  <p className="text-[#B6C8C1]">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-3 border-b border-[#294B42] pb-1">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B6C8C1]">
              {certificatesData.map((c, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF65] shrink-0 mt-0.5" />
                  <span><strong className="text-white">{c.title}</strong> — {c.organization} ({c.date})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0B1F1C] border-t border-[#294B42] flex items-center justify-between text-xs text-[#849E95]">
          <span>Direct recruiter download ready in PDF format</span>
          <a
            href="./resume.pdf"
            download="Matta_Sravya_Resume.pdf"
            className="text-[#B8FF65] hover:underline font-bold"
          >
            Download PDF File
          </a>
        </div>
      </motion.div>
    </div>
  );
}
