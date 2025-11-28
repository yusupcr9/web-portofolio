import { Code, Smartphone, Database, Cpu, Sparkles, Layers } from 'lucide-react';

const skills = [
  {
    icon: Code,
    name: 'Frontend',
    techs: ['React', 'Vue', 'Next.js'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    name: 'Mobile Dev',
    techs: ['React Native', 'Flutter'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Database,
    name: 'Backend',
    techs: ['Node.js', 'Python', 'Go'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cpu,
    name: 'DevOps',
    techs: ['Docker', 'AWS', 'CI/CD'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Sparkles,
    name: '3D Graphics',
    techs: ['Three.js', 'WebGL', 'Blender'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Layers,
    name: 'Design',
    techs: ['Figma', 'Tailwind', 'Framer'],
    color: 'from-indigo-500 to-purple-500'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">Technologies I love working with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{skill.name}</h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600/50 hover:border-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-6 h-1 bg-gradient-to-r ${skill.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
