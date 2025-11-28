import { Code2, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gray-800/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="publc/profile.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 mb-6 flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-6xl font-black text-white">
                  AC
                </div>
              </div> */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Available for freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-400">Based in San Francisco</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer who loves bringing ideas to life through code and design.
              With a focus on creating stunning, user-centric experiences, I blend creativity with
              technical expertise.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, experimenting with
              3D graphics, or contributing to open-source projects. I believe in continuous learning
              and pushing the boundaries of what's possible on the web.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Code2 className="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Clean Code</h3>
                <p className="text-sm text-gray-400">Maintainable & scalable</p>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Palette className="w-10 h-10 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Design First</h3>
                <p className="text-sm text-gray-400">Pixel-perfect UI</p>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Zap className="w-10 h-10 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Fast Deploy</h3>
                <p className="text-sm text-gray-400">Optimized performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
