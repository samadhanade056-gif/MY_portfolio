import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: "Wanderlust – Travel Accommodation Platform",
    description: "A full-stack travel accommodation platform inspired by Airbnb using Node.js, Express.js, MongoDB, EJS, and Bootstrap following the MVC architecture. Features Passport.js authentication, CRUD operations for listings/reviews, Cloudinary image upload, and Render hosting.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Passport.js", "Cloudinary", "Render"],
    live: "https://wanderlust-0rhh.onrender.com",
    github: "https://github.com/samadhanade056-gif/Wanderlust",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    badge: "Featured MERN Project"
  },
  {
    title: "Personal Portfolio Website",
    description: "Personal portfolio site designed to showcase 3+ projects, technical skills, certifications, and interactive resume with responsive layouts, modern UI, and fast Vercel deployment.",
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    live: "https://samadhanadeportfolio.vercel.app/",
    github: "https://github.com/samadhanade056-gif",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    badge: "Featured Portfolio"
  },
  {
    title: "Smart Internship Portal",
    description: "A full-stack platform designed to help students discover and manage internship opportunities with an intuitive and modern interface.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    live: "https://smart-internship-portal-xi.vercel.app/",
    github: "https://github.com/samadhanade056-gif/Smart-Internship-Portal",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    badge: "Full-Stack Portal"
  },
  {
    title: "Photography Website",
    description: "A cinematic photography portfolio website showcasing visual storytelling with modern UI design and smooth transitions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://moments-cinematic-s.vercel.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    badge: "Frontend UI"
  },
  {
    title: "Edge Detection Project",
    description: "An image processing project implementing edge detection techniques using computer vision to detect object boundaries in images.",
    tech: ["Python", "OpenCV"],
    live: null,
    github: "https://github.com/samadhanade056-gif/Edge_Detection_Project",
    image: "https://images.unsplash.com/photo-1506102383123-c8ce1be16ce8?q=80&w=800&auto=format&fit=crop",
    badge: "Computer Vision"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> My Portfolio
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Featured Projects
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
              className="card-tech clip-card group overflow-hidden flex flex-col p-4 bg-[#161616] relative border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image Preview */}
              <div className="relative h-48 overflow-hidden clip-card border border-white/5 mb-6">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0"
                />
                {project.badge && (
                  <div className="absolute top-3 right-3 z-20 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-widest text-cyan-300 backdrop-blur-sm clip-button flex items-center gap-1">
                    <Star size={10} className="text-cyan-400 fill-cyan-400" /> {project.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold text-[#f0f0f0] group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
                
                <p className="font-sans text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6 border-t border-white/10 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[0.6rem] tracking-widest px-2 py-0.5 bg-white/5 text-gray-300 uppercase border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="clip-button bg-[#0a0a0a] border border-white/20 px-4 py-2.5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#f0f0f0] hover:text-cyan-400 hover:border-cyan-400 transition-all flex-1 justify-center"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="clip-button bg-cyan-600 hover:bg-cyan-500 px-4 py-2.5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-black font-bold transition-all flex-1 justify-center shadow-[0_0_12px_rgba(34,211,238,0.3)]"
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
