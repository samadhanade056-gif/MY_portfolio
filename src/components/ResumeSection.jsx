import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Check, ExternalLink, Briefcase, GraduationCap, Code, Award, Phone, Mail, Linkedin, FileText } from 'lucide-react';

const ResumeSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = `
SAMADHAN ADE
Phone: +91 8484881414 | Email: samadhanade056@gmail.com | LinkedIn: linkedin.com/in/samadhanade

PROFESSIONAL SUMMARY
Electronics and Telecommunication Engineering student with experience across 2 internships and 3 independent projects. Skilled in React.js, Node.js, Express.js, and MongoDB, with a focus on responsive design and clean UI/UX, from building CRUD features to deploying live apps on Render and Vercel.

EDUCATION
JD College of Engineering and Management (2023 – 2027)
B.Tech in Electronics and Telecommunication Engineering

SKILLS
- Programming Languages: Python, JavaScript
- Frontend: HTML, CSS, Bootstrap, React.js
- Backend: Node.js, Express.js, MongoDB, Mongoose, Passport.js
- Tools: Git, GitHub, VS Code, Arduino, Cloudinary, Render
- Design: Canva, Figma
- UI/UX: Responsive Design, UI/UX Principles

WORK EXPERIENCE
1. Frontend Intern – Portage Infotech (Sep 2024 – Sep 2024)
- Built 10+ reusable UI components across 4 technologies (HTML, CSS, JavaScript, React.js, Bootstrap), cutting redundant code by ~25%
- Resolved 15+ layout bugs and refined mobile-view elements across 5+ pages, improving overall usability and cutting UI inconsistencies by ~30%
- Integrated 3+ REST APIs and contributed to sprint planning workflows during a 1-month internship cycle

2. Web Development Intern – Zidio Development (May 2025 – Jun 2025)
- Coded 8+ frontend components for web pages using HTML, CSS, and JavaScript over a 2-month internship
- Built responsive layouts for 6+ web pages and collaborated with a 4-member team through daily agile stand-ups, improving sprint delivery speed by ~20%
- Prototyped 5+ UI screens in Figma applying core UI/UX design principles ahead of development handoff

3. Full Stack MERN Development Intern – EduSkills Foundation (April 2026 – June 2026)
- Completed a Full Stack MERN Development internship, building 2+ responsive web applications with hands-on production practices
- Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js, implementing 10+ RESTful API endpoints and full CRUD operations
- Managed version control via Git & GitHub across 15+ commits, ensuring clean project history and collaboration

PROJECTS
1. Personal Portfolio Website
Live Demo: https://samadhanadeportfolio.vercel.app/ | GitHub: https://github.com/samadhanade056-gif
- Built a personal portfolio site to showcase 3+ projects, technical skills, certifications, and resume
- Designed a modern, user-friendly interface with seamless navigation across desktop and mobile devices
- Tech Stack: React.js, Vite, Tailwind CSS, JavaScript, HTML5, CSS3, Vercel

2. Wanderlust – Full-Stack Travel Accommodation Platform
GitHub: https://github.com/samadhanade056-gif/Wanderlust | Live Demo: https://wanderlust-0rhh.onrender.com
- Built a full-stack travel accommodation platform inspired by Airbnb using 5+ core technologies — Node.js, Express.js, MongoDB, EJS, and Bootstrap — following the MVC architecture
- Added secure user authentication with Passport.js and full CRUD functionality across 2 core modules: property listings and reviews
- Tech Stack: Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, JavaScript, Passport.js, Cloudinary, Joi, Render

CERTIFICATIONS
- Web Development Bootcamp – Simplilearn
- Data Structures and Algorithms (Java)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        {/* Section Headers */}
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Curriculum Vitae
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          My Resume
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 mb-12 clip-button"></div>

        {/* Action Header */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-wrap gap-4 items-center justify-between bg-[#111111]/80 border border-white/10 p-4 clip-card backdrop-blur-md">
          <div className="flex items-center gap-3">
            <FileText className="text-cyan-400" size={24} />
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Samadhan Ade — Resume</h3>
              <p className="font-mono text-xs text-gray-400">Electronics & Telecom Engineer | Full Stack MERN Developer</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCopyText}
              className="clip-button bg-[#0a0a0a] border border-white/10 hover:border-cyan-500 hover:text-cyan-300 text-gray-300 px-4 py-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-all"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>

            <a
              href="/resume.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="clip-button bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-5 py-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              <Download size={14} /> Download / View SVG
            </a>
          </div>
        </div>

        {/* Interactive Resume View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-[#0a0a0a] border border-cyan-500/20 p-6 md:p-12 clip-card relative shadow-[0_0_40px_rgba(0,0,0,0.8)]"
        >
          {/* Header Info */}
          <div className="border-b border-white/10 pb-8 mb-8">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-wide mb-2">
              SAMADHAN ADE
            </h1>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-400 mt-4">
              <a href="tel:+918484881414" className="flex items-center gap-1.5 hover:underline">
                <Phone size={14} /> +91 8484881414
              </a>
              <span className="text-gray-600">|</span>
              <a href="mailto:samadhanade056@gmail.com" className="flex items-center gap-1.5 hover:underline">
                <Mail size={14} /> samadhanade056@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://linkedin.com/in/samadhanade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline text-blue-400">
                <Linkedin size={14} /> linkedin.com/in/samadhanade
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
              <Code size={16} /> PROFESSIONAL SUMMARY
            </h4>
            <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed bg-[#111111] p-4 border-l-2 border-cyan-500">
              Electronics and Telecommunication Engineering student with experience across 2 internships and 3 independent projects. Skilled in React.js, Node.js, Express.js, and MongoDB, with a focus on responsive design and clean UI/UX, from building CRUD features to deploying live apps on Render and Vercel.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
              <GraduationCap size={16} /> EDUCATION
            </h4>
            <div className="bg-[#111111] p-4 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h5 className="font-heading font-bold text-white text-base md:text-lg">JD College of Engineering and Management</h5>
                <p className="font-mono text-xs text-purple-400 mt-1">B.Tech in Electronics and Telecommunication Engineering</p>
              </div>
              <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 border border-cyan-500/20 mt-2 md:mt-0">
                2023 – 2027
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
              <Code size={16} /> SKILLS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">Programming Languages:</span>
                <span className="text-gray-200">Python, JavaScript</span>
              </div>
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">Frontend:</span>
                <span className="text-gray-200">HTML, CSS, Bootstrap, React.js</span>
              </div>
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">Backend:</span>
                <span className="text-gray-200">Node.js, Express.js, MongoDB, Mongoose, Passport.js</span>
              </div>
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">Tools & Platforms:</span>
                <span className="text-gray-200">Git, GitHub, VS Code, Arduino, Cloudinary, Render</span>
              </div>
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">Design:</span>
                <span className="text-gray-200">Canva, Figma</span>
              </div>
              <div className="bg-[#111111] p-3 border border-white/5">
                <span className="text-gray-400 font-bold block mb-1">UI/UX:</span>
                <span className="text-gray-200">Responsive Design, UI/UX Principles</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-2">
              <Briefcase size={16} /> WORK EXPERIENCE
            </h4>

            <div className="space-y-6">
              {/* Portage Infotech */}
              <div className="bg-[#111111] p-5 border-l-2 border-cyan-400">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h5 className="font-heading font-bold text-white text-base">Frontend Intern – <span className="text-cyan-400">Portage Infotech</span></h5>
                  <span className="font-mono text-xs text-cyan-300">Sep 2024 – Sep 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  <li>Built 10+ reusable UI components across 4 technologies (HTML, CSS, JavaScript, React.js, Bootstrap), cutting redundant code by ~25%</li>
                  <li>Resolved 15+ layout bugs and refined mobile-view elements across 5+ pages, improving overall usability and cutting UI inconsistencies by ~30%</li>
                  <li>Integrated 3+ REST APIs and contributed to sprint planning workflows during a 1-month internship cycle</li>
                </ul>
              </div>

              {/* Zidio Development */}
              <div className="bg-[#111111] p-5 border-l-2 border-purple-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h5 className="font-heading font-bold text-white text-base">Web Development Intern – <span className="text-purple-400">Zidio Development</span></h5>
                  <span className="font-mono text-xs text-purple-300">May 2025 – Jun 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  <li>Coded 8+ frontend components for web pages using HTML, CSS, and JavaScript over a 2-month internship</li>
                  <li>Built responsive layouts for 6+ web pages and collaborated with a 4-member team through daily agile stand-ups, improving sprint delivery speed by ~20%</li>
                  <li>Prototyped 5+ UI screens in Figma applying core UI/UX design principles ahead of development handoff</li>
                </ul>
              </div>

              {/* EduSkills Foundation */}
              <div className="bg-[#111111] p-5 border-l-2 border-blue-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h5 className="font-heading font-bold text-white text-base">Full Stack MERN Development Intern – <span className="text-blue-400">EduSkills Foundation</span></h5>
                  <span className="font-mono text-xs text-blue-300">April 2026 – June 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  <li>Completed a Full Stack MERN Development internship, building 2+ responsive web applications with hands-on production practices</li>
                  <li>Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js, implementing 10+ RESTful API endpoints and full CRUD operations</li>
                  <li>Managed version control via Git & GitHub across 15+ commits, ensuring clean project history and collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-2">
              <Award size={16} /> PROJECTS
            </h4>

            <div className="space-y-6">
              {/* Personal Portfolio */}
              <div className="bg-[#111111] p-5 border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h5 className="font-heading font-bold text-white text-base">Personal Portfolio Website</h5>
                  <div className="flex gap-3 text-xs font-mono">
                    <a href="https://samadhanadeportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">Live <ExternalLink size={12} /></a>
                    <a href="https://github.com/samadhanade056-gif" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1">GitHub <ExternalLink size={12} /></a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  <li>Built a personal portfolio site to showcase 3+ projects, technical skills, certifications, and resume</li>
                  <li>Designed a modern, user-friendly interface with seamless navigation across desktop and mobile devices</li>
                  <li>Structured adaptive layouts for an optimal viewing experience across all screen sizes</li>
                  <li>Added a contact section and project gallery for easy communication and exploration</li>
                  <li>Hosted the site on Vercel for fast, reliable delivery</li>
                </ul>
                <div className="mt-3 font-mono text-xs text-gray-400">
                  <span className="text-cyan-400 font-bold">Tech Stack:</span> React.js, Vite, Tailwind CSS, JavaScript, HTML5, CSS3, Vercel
                </div>
              </div>

              {/* Wanderlust */}
              <div className="bg-[#111111] p-5 border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h5 className="font-heading font-bold text-white text-base">Wanderlust – Full-Stack Travel Accommodation Platform</h5>
                  <div className="flex gap-3 text-xs font-mono">
                    <a href="https://wanderlust-0rhh.onrender.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">Live <ExternalLink size={12} /></a>
                    <a href="https://github.com/samadhanade056-gif/Wanderlust" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1">GitHub <ExternalLink size={12} /></a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  <li>Built a full-stack travel accommodation platform inspired by Airbnb using 5+ core technologies — Node.js, Express.js, MongoDB, EJS, and Bootstrap — following the MVC architecture</li>
                  <li>Added secure user authentication with Passport.js and full CRUD functionality across 2 core modules: property listings and reviews</li>
                  <li>Integrated Cloudinary for image uploads and styled a mobile-friendly interface with Bootstrap</li>
                  <li>Hosted the application on Render for public access</li>
                </ul>
                <div className="mt-3 font-mono text-xs text-gray-400">
                  <span className="text-cyan-400 font-bold">Tech Stack:</span> Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, JavaScript, Passport.js, Cloudinary, Joi, Render
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
              <Award size={16} /> CERTIFICATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#111111] p-3 border border-white/5 text-gray-200">
                • Web Development Bootcamp – Simplilearn
              </div>
              <div className="bg-[#111111] p-3 border border-white/5 text-gray-200">
                • Data Structures and Algorithms (Java)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
