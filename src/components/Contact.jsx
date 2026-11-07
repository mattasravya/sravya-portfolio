import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending, trigger mailto fallback, and show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Also trigger a mailto link with encoded subject & body
      const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#102D28] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#7DE5A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163831] border border-[#294B42] text-[#B8FF65] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Let's Work Together.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B6C8C1]">
            Have an opportunity, collaboration idea, or project in mind? I'd love to connect.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Card 1: Email */}
            <div className="p-6 rounded-3xl bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/50 transition-all shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F1C] border border-[#294B42] group-hover:border-[#B8FF65] flex items-center justify-center text-[#B8FF65] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#849E95] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-sm sm:text-base font-bold text-white group-hover:text-[#B8FF65] transition-colors"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-xl bg-[#0B1F1C] hover:bg-[#1A423A] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#B8FF65]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Contact Card 2: Phone */}
            <div className="p-6 rounded-3xl bg-[#163831] border-2 border-[#294B42] hover:border-[#B8FF65]/50 transition-all shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F1C] border border-[#294B42] group-hover:border-[#B8FF65] flex items-center justify-center text-[#7DE5A1] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#849E95] uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-sm sm:text-base font-bold text-white group-hover:text-[#B8FF65] transition-colors"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.contact.phone, 'phone')}
                  className="p-2 rounded-xl bg-[#0B1F1C] hover:bg-[#1A423A] border border-[#294B42] text-[#B6C8C1] hover:text-[#B8FF65] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#B8FF65]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Contact Card 3: Location */}
            <div className="p-6 rounded-3xl bg-[#163831] border-2 border-[#294B42] shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F1C] border border-[#294B42] flex items-center justify-center text-[#B8FF65]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#849E95] uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Banner */}
            <div className="p-6 rounded-3xl bg-[#0B1F1C] border-2 border-[#294B42] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#849E95] uppercase tracking-wider">
                  Social Profiles
                </p>
                <p className="text-sm font-bold text-white mt-0.5">
                  Let's connect professionally
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#163831] border border-[#294B42] text-[#B8FF65] hover:bg-[#B8FF65] hover:text-[#0B1F1C] transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#163831] border border-[#294B42] text-[#B8FF65] hover:bg-[#B8FF65] hover:text-[#0B1F1C] transition-all shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN: CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-[32px] bg-[#163831] border-2 border-[#294B42] shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B8FF65]/20 border-2 border-[#B8FF65] flex items-center justify-center mx-auto text-[#B8FF65]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-[#B6C8C1] max-w-md mx-auto">
                    Your message has been composed and your default mail client has opened. I will review your message and reply as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B8FF65] text-[#0B1F1C] font-bold text-xs uppercase tracking-wider hover:bg-[#A3F052] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#B6C8C1] mb-2 uppercase tracking-wider">
                        Your Name <span className="text-[#B8FF65]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0B1F1C] border text-white text-sm placeholder-[#849E95]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8FF65] focus:border-transparent ${
                          errors.name ? 'border-[#E57373]' : 'border-[#294B42]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[#E57373] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#B6C8C1] mb-2 uppercase tracking-wider">
                        Your Email <span className="text-[#B8FF65]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0B1F1C] border text-white text-sm placeholder-[#849E95]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8FF65] focus:border-transparent ${
                          errors.email ? 'border-[#E57373]' : 'border-[#294B42]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#E57373] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#B6C8C1] mb-2 uppercase tracking-wider">
                      Subject <span className="text-[#B8FF65]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Job Opportunity / Collaboration"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#0B1F1C] border text-white text-sm placeholder-[#849E95]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8FF65] focus:border-transparent ${
                        errors.subject ? 'border-[#E57373]' : 'border-[#294B42]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-[#E57373] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#B6C8C1] mb-2 uppercase tracking-wider">
                      Your Message <span className="text-[#B8FF65]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your inquiry, requirements, or timeline..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#0B1F1C] border text-white text-sm placeholder-[#849E95]/60 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#B8FF65] focus:border-transparent ${
                        errors.message ? 'border-[#E57373]' : 'border-[#294B42]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-[#E57373] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#B8FF65] hover:bg-[#A3F052] text-[#0B1F1C] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(184,255,101,0.3)] hover:shadow-[0_0_30px_rgba(184,255,101,0.5)] transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
