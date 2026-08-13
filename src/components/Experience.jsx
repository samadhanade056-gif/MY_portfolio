import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack MERN Development Intern",
    company: "EduSkills Foundation",
    duration: "April 2026 – June 2026",
    type: "Remote · Internship",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git", "GitHub"],
    bullets: [
      "Completed a Full Stack MERN Development internship, building 2+ responsive web applications with hands-on production practices.",
      "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js, implementing 10+ RESTful API endpoints and full CRUD operations.",
      "Managed version control via Git & GitHub across 15+ commits, ensuring clean project history and collaboration."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Zidio Development",
    duration: "May 2025 – Jun 2025",
    type: "Remote · Internship",
    skills: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX", "Agile"],
    bullets: [
      "Coded 8+ frontend components for web pages using HTML, CSS, and JavaScript over a 2-month internship.",
      "Built responsive layouts for 6+ web pages and collaborated with a 4-member team through daily agile stand-ups, improving sprint delivery speed by ~20%.",
      "Prototyped 5+ UI screens in Figma applying core UI/UX design principles ahead of development handoff."
    ]
  },
  {
    role: "Frontend Intern",
    company: "Portage Infotech",
    duration: "Sep 2024 – Sep 2024",
    type: "Remote · Internship",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "REST APIs"],
    bullets: [
      "Built 10+ reusable UI components across 4 technologies (HTML, CSS, JavaScript, React.js, Bootstrap), cutting redundant code by ~25%.",
      "Resolved 15+ layout bugs and refined mobile-view elements across 5+ pages, improving overall usability and cutting UI inconsistencies by ~30%.",
      "Integrated 3+ REST APIs and contributed to sprint planning workflows during a 1-month internship cycle."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Career Journey
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Work Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-16 clip-button"></div>

        <div className="max-w-4xl border-l-[1px] border-cyan-500/30 pl-8 md:pl-12 space-y-12 relative mx-auto lg:mx-0">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-6 w-[3px] h-6 bg-cyan-500 group-hover:h-12 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>

              <div className="card-tech clip-card p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 bg-[#161616] border border-white/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#f0f0f0] group-hover:text-cyan-400 mb-2">
                       {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[0.85rem] font-mono uppercase tracking-widest text-purple-400">
                      <Briefcase size={14} /> {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="flex items-center gap-2 text-cyan-300 bg-cyan-500/10 py-1.5 px-3 border border-cyan-500/20 font-mono text-[0.65rem] uppercase tracking-widest clip-button">
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">[{exp.type}]</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 font-sans text-gray-300 mb-6 leading-relaxed text-[0.95rem]">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="font-mono text-[0.6rem] tracking-widest px-2 py-1 bg-white/5 text-gray-400 uppercase group-hover:text-cyan-300 border border-white/5 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center lg:justify-start"
        >
          <a 
            href="https://linkedin.com/in/samadhanade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="clip-button bg-cyan-600 hover:bg-cyan-500 text-black px-8 py-3.5 font-bold tracking-widest text-[0.85rem] uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            LinkedIn Profile <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
