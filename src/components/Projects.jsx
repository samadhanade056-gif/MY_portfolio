import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Photography Website",
    description: "A cinematic photography portfolio website showcasing visual storytelling with modern UI design and smooth transitions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://moments-cinematic-s.vercel.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Edge Detection Project",
    description: "An image processing project implementing edge detection techniques using computer vision to detect object boundaries in images.",
    tech: ["Python", "OpenCV"],
    live: null,
    github: "https://github.com/samadhanade056-gif/Edge_Detection_Project",
    image: "https://images.unsplash.com/photo-1506102383123-c8ce1be16ce8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Smart Internship Portal",
    description: "A full-stack platform designed to help students discover and manage internship opportunities with an intuitive and modern interface.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://smart-internship-portal-xi.vercel.app/",
    github: "https://github.com/samadhanade056-gif/Smart-Internship-Portal",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> My Work
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-16 clip-button"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-tech clip-card group overflow-hidden flex flex-col p-4 bg-[#161616]"
            >
              {/* Image Preview */}
              <div className="relative h-48 overflow-hidden clip-card border border-white/5 mb-6">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-2xl font-bold text-[#f0f0f0] group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="font-sans text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 border-t border-white/10 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[0.65rem] tracking-widest px-2 py-1 bg-white/5 text-gray-400 uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="clip-button bg-[#0a0a0a] border border-white/20 px-5 py-2.5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#f0f0f0] hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="clip-button bg-cyan-600 hover:bg-cyan-500 px-5 py-2.5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-black font-bold transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
