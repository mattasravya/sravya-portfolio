import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Printer,
  Sparkles
} from 'lucide-react';

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
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-[#163831] rounded-3xl border-2 border-[#B8FF65]/70 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 bg-[#0B1F1C] border-b border-[#294B42] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#163831] border border-[#294B42] flex items-center justify-center text-[#B8FF65]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Original Professional Resume
              </h3>
              <p className="text-xs text-[#7DE5A1]">
                Matta Sravya • Full-Stack Developer • Final Year B.Tech CSE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href="./resume.pdf"
              download="Matta_Sravya_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B8FF65] text-[#0B1F1C] font-bold text-xs hover:bg-[#A3F052] transition-colors shadow-sm"
              title="Download Original Resume PDF"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden sm:inline">Download Resume</span>
            </a>

            {/* Open in full tab button */}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#163831] hover:bg-[#1A423A] border border-[#294B42] text-white hover:border-[#B8FF65] transition-colors"
              title="Open in Full Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

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

        {/* Scrollable PDF Viewer Body */}
        <div className="p-3 sm:p-5 overflow-hidden flex-1 bg-[#0E2622] flex flex-col items-center justify-center">
          <div className="w-full h-[76vh] rounded-2xl overflow-hidden border border-[#294B42] bg-white shadow-2xl">
            <object
              data="./resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src="./resume.pdf"
                className="w-full h-full border-none"
                title="Matta Sravya Official Resume"
              >
                <div className="p-6 text-center text-gray-800">
                  <p className="mb-4 text-base font-semibold">Your browser does not support inline PDF viewing.</p>
                  <a
                    href="./resume.pdf"
                    download="Matta_Sravya_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102D28] text-[#B8FF65] font-bold text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Original Resume PDF</span>
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-[#0B1F1C] border-t border-[#294B42] flex items-center justify-between text-xs text-[#849E95] px-6">
          <span>Official 1-Page Resume • Verified PDF Document</span>
          <a
            href="./resume.pdf"
            download="Matta_Sravya_Resume.pdf"
            className="text-[#B8FF65] hover:underline font-bold inline-flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Matta_Sravya_Resume.pdf</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
