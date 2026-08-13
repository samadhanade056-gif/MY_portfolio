import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react';

const certificates = [
  { name: "Alpha (DSA with Java)", category: "Data Structures & Algorithms", image: "/cert-java-dsa.png" },
  { name: "Java Full Stack Internship", category: "Software Development", image: "/cert2.png" },
  { name: "Cybersecurity Virtual Internship", category: "Security", image: "/cert3.png" },
  { name: "Web Development Internship", category: "Web Technologies", image: "/cert4.png" },
  { name: "Android Development", category: "Mobile App Development", image: "/cert1.png" },
  { name: "AI-ML Virtual Internship", category: "Artificial Intelligence", image: "/cert5.png" }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-24 relative z-10 font-sans" onKeyDown={handleKeyDown}>
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Achievements
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-16 clip-button"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-tech clip-card p-4 flex flex-col relative group cursor-pointer overflow-hidden border-t-2 border-t-cyan-500/10 hover:border-t-cyan-500 hover:shadow-[0_0_30px_rgba(255,80,0,0.2)] bg-[#161616]"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="w-full h-52 overflow-hidden mb-5 relative clip-button border border-white/5 bg-[#0a0a0a]">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale-[50%] group-hover:grayscale-0" 
                />
                
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="flex items-center gap-2 text-white font-bold font-mono text-[0.7rem] uppercase tracking-widest border border-cyan-500 px-4 py-2 clip-button bg-cyan-600 shadow-[0_0_15px_rgba(255,80,0,0.5)]">
                    <ZoomIn size={14} /> View Certificate
                  </span>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="font-heading text-xl font-bold text-[#f0f0f0] mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[#f0f0f0]/50 mt-auto">
                  [{cert.category}]
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-4xl w-full flex justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-gray-400 hover:text-cyan-400 transition-colors z-50 p-2"
              >
                <X size={32} />
              </button>
              
              <div className="relative border border-white/10 p-2 bg-[#111111] shadow-[0_0_50px_rgba(255,80,0,0.2)] rounded-sm">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name} 
                  className="max-h-[80vh] w-auto object-contain rounded-sm" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
