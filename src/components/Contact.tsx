import { Mail, Github, Twitter, Linkedin, Send, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socials = [
    { icon: Github, href: 'https://github.com/yusupcr9', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Instagram, href: 'https://instagram.com/yspfrmnsyah', label: 'Instagram', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yusup-firmansyah-40456221b/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:yusupf.dev@gmail.com', label: 'Email', color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">Got a project in mind? Let's make it happen.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-400 mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>

                  <div className="space-y-4">
                    {socials.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`flex items-center gap-4 p-4 rounded-2xl bg-gray-700/30 border border-gray-600/30 hover:border-gray-500 transition-all duration-300 hover:scale-105 group/item ${social.color}`}
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-gray-400 group-hover/item:text-current transition-colors" />
                          </div>
                          <span className="text-gray-300 font-medium">{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <form onSubmit={handleSubmit} className="relative bg-gray-800/40 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
