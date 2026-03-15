import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('Message Sent Successfully! ✅');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('Server offline or unreachable ❌');
    }
    
    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Reach Out
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Contact Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-16 clip-button"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#111111]/50 border border-white/5 p-8 md:p-12 clip-card">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-2xl font-bold text-cyan-400 mb-8 tracking-wide">
              Send a Message
            </h3>
            <form className="space-y-6 flex-1" onSubmit={handleSubmit}>
              <div>
                <label className="block font-mono text-gray-500 text-[0.7rem] uppercase tracking-widest mb-2" htmlFor="name">Name_</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3.5 text-[#f0f0f0] font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors clip-button"
                />
              </div>
              
              <div>
                <label className="block font-mono text-gray-500 text-[0.7rem] uppercase tracking-widest mb-2" htmlFor="email">Email_</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3.5 text-[#f0f0f0] font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors clip-button"
                />
              </div>
              
              <div>
                <label className="block font-mono text-gray-500 text-[0.7rem] uppercase tracking-widest mb-2" htmlFor="message">Message_</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..." 
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3.5 text-[#f0f0f0] font-sans text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors clip-button"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest text-[0.85rem] py-4 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all clip-button"
              >
                Send Message <Send size={16} />
              </button>
              
              {status && (
                <div className={`mt-4 font-mono text-sm text-center ${status.includes('Failed') || status.includes('offline') ? 'text-red-400' : 'text-cyan-400'}`}>
                  {status}
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Info container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8 lg:pl-12 lg:border-l border-white/5 mt-10 lg:mt-0"
          >
             <p className="font-sans text-gray-400 mb-4 max-w-sm">
              Let's build something amazing together. Feel free to reach out for collaborations, opportunities, or just a quick hello.
            </p>

            <a href="mailto:samadhanade056@gmail.com" className="card-tech clip-card p-6 flex items-center gap-6 group cursor-pointer border-transparent bg-[#0a0a0a]">
              <div className="w-12 h-12 bg-[#111111] border border-white/5 text-cyan-400 flex items-center justify-center group-hover:border-cyan-500 transition-colors clip-button">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#f0f0f0] group-hover:text-cyan-400 transition-colors">Email</h4>
                <div className="font-mono text-xs text-gray-500 tracking-wider">samadhanade056@gmail.com</div>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/samadhan-ade-b634762bb" target="_blank" rel="noopener noreferrer" className="card-tech clip-card p-6 flex items-center gap-6 group cursor-pointer border-transparent bg-[#0a0a0a]">
              <div className="w-12 h-12 bg-[#111111] border border-white/5 text-blue-400 flex items-center justify-center group-hover:border-blue-500 transition-colors clip-button">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#f0f0f0] group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                <div className="font-mono text-xs text-gray-500 tracking-wider">Connect with me</div>
              </div>
            </a>
            
            <a href="https://github.com/samadhanade056-gif" target="_blank" rel="noopener noreferrer" className="card-tech clip-card p-6 flex items-center gap-6 group cursor-pointer border-transparent bg-[#0a0a0a]">
              <div className="w-12 h-12 bg-[#111111] border border-white/5 text-purple-400 flex items-center justify-center group-hover:border-purple-500 transition-colors clip-button">
                <Github size={20} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#f0f0f0] group-hover:text-purple-400 transition-colors">GitHub</h4>
                <div className="font-mono text-xs text-gray-500 tracking-wider">Check out my repos</div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
