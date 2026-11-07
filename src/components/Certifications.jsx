import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  Download, 
  X, 
  CheckCircle2, 
  Eye, 
  FileText, 
  Sparkles,
  Maximize2,
  ShieldCheck
} from 'lucide-react';
import { certificatesData } from '../data/certificates';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 bg-[#0B1F1C] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-16 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-16 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Certifications & Achievements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#7DE5A1] font-medium">
            Continuous learning, practical experience, and professional growth.
          </p>
          <p className="mt-2 text-sm text-[#B6C8C1] max-w-2xl mx-auto">
            Verified credentials from industry leaders including ServiceNow University, Cisco Networking Academy, SmartBridge (APSCHE), byteXL, and APSSDC.
          </p>
        </div>

        {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[28px] bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
            >
              <div>
                {/* 1. Certificate Preview Image Container */}
                <div 
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F1C] border-b border-[#294B42] cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.imagePath}
                    alt={`${cert.title} Certificate Preview`}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Gradient Hover Overlay with Eye Icon */}
                  <div className="absolute inset-0 bg-[#0B1F1C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-bold text-xs shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Certificate</span>
                    </span>
                  </div>

                  {/* Badge Label */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0B1F1C]/90 text-[#B8FF65] border border-[#294B42] backdrop-blur-sm">
                      <ShieldCheck className="w-3 h-3 text-[#B8FF65]" />
                      <span>{cert.badgeText}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* 3. Issuing Organization & 4. Issue Date */}
                  <div className="flex items-center justify-between gap-2 text-xs text-[#849E95] mb-2">
                    <span className="font-semibold text-[#7DE5A1] truncate">
                      {cert.organization}
                    </span>
                    <span className="shrink-0 text-[11px] text-[#B6C8C1]">
                      {cert.date}
                    </span>
                  </div>

                  {/* 2. Certificate Title */}
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="text-lg font-bold text-white group-hover:text-[#B8FF65] transition-colors font-display line-clamp-2 cursor-pointer"
                  >
                    {cert.title}
                  </h3>

                  {/* 5. Short Description */}
                  <p className="text-xs text-[#B6C8C1] leading-relaxed mt-2.5 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Credential ID or Topics Peek */}
                  <div className="mt-4 pt-3 border-t border-[#294B42]/60 flex items-center justify-between text-[11px]">
                    <span className="text-[#849E95]">Verification ID:</span>
                    <span className="font-mono text-[#B8FF65] font-semibold">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* 6. View Certificate Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0B1F1C] hover:bg-[#B8FF65] text-white hover:text-[#0B1F1C] border border-[#294B42] hover:border-[#B8FF65] text-xs font-bold transition-all duration-200 group-hover:shadow-[0_0_15px_rgba(184,255,101,0.2)]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* ================= CERTIFICATE LIGHTBOX / MODAL ================= */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#163831] rounded-3xl border-2 border-[#B8FF65]/70 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 bg-[#0B1F1C] border-b border-[#294B42] flex items-center justify-between shrink-0">
                <div className="overflow-hidden pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8FF65] bg-[#163831] px-2.5 py-0.5 rounded-full border border-[#294B42]">
                      {selectedCert.organization}
                    </span>
                    <span className="text-xs text-[#849E95]">{selectedCert.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white truncate mt-1 font-display">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Download button */}
                  <a
                    href={selectedCert.documentPath}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#163831] hover:bg-[#1A423A] border border-[#294B42] text-[#B8FF65] hover:border-[#B8FF65] transition-colors"
                    title="Download Original File"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  {/* Open in new tab */}
                  <a
                    href={selectedCert.documentPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#163831] hover:bg-[#1A423A] border border-[#294B42] text-white hover:border-[#B8FF65] transition-colors"
                    title="Open in Full Tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-[#163831] hover:bg-[#E57373]/20 border border-[#294B42] text-[#B6C8C1] hover:text-[#E57373] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
                
                {/* Full Certificate View (High Quality, Natural Aspect Ratio, No Crop) */}
                <div className="rounded-2xl overflow-hidden bg-[#0B1F1C] border border-[#294B42] flex items-center justify-center p-2 shadow-inner">
                  {selectedCert.documentType === 'pdf' ? (
                    <div className="w-full flex flex-col items-center">
                      <img
                        src={selectedCert.imagePath}
                        alt={selectedCert.title}
                        className="max-h-[60vh] w-auto object-contain rounded-lg"
                      />
                      <div className="w-full mt-3 p-3 bg-[#102D28] rounded-xl border border-[#294B42] flex items-center justify-between text-xs text-[#B6C8C1]">
                        <span>Official APSSDC Skill Development Document (PDF)</span>
                        <a
                          href={selectedCert.documentPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#B8FF65] hover:underline font-semibold"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Open PDF Document</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedCert.imagePath}
                      alt={selectedCert.title}
                      className="max-h-[62vh] w-auto object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Detailed Topics & Verification Information */}
                <div className="bg-[#102D28] p-5 rounded-2xl border border-[#294B42]">
                  <h4 className="text-xs font-bold text-[#B8FF65] uppercase tracking-wider mb-2">
                    Key Topics Covered & Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B6C8C1]">
                    {selectedCert.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7DE5A1] shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  {selectedCert.disclaimer && (
                    <p className="mt-3 text-[11px] text-[#849E95] italic border-t border-[#294B42] pt-2">
                      Note: {selectedCert.disclaimer}
                    </p>
                  )}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#0B1F1C] border-t border-[#294B42] flex items-center justify-between text-xs text-[#849E95]">
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#163831] text-[#B8FF65] text-[10px]">Esc</kbd> or click outside to close</span>
                <span className="text-[#B8FF65] font-semibold">Verified Credential</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
