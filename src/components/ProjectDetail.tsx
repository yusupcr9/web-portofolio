import { X, ExternalLink, Github, Calendar, User, Briefcase, Check, Zap } from 'lucide-react';
import { Project } from '../data/projectsData';
import { useEffect } from 'react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-md border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-colors group z-50"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <div className="space-y-8">
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-black text-white mb-4">{project.title}</h1>
                <p className="text-xl text-gray-300 max-w-3xl">{project.description}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className={`w-2 h-8 bg-gradient-to-b ${project.gradient} rounded-full`}></div>
                    About This Project
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-xs text-gray-500">Year</p>
                        <p className="text-white font-semibold">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                      <User className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-xs text-gray-500">Role</p>
                        <p className="text-white font-semibold">{project.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                      <Briefcase className="w-5 h-5 text-pink-400" />
                      <div>
                        <p className="text-xs text-gray-500">Category</p>
                        <p className="text-white font-semibold">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-400" />
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-yellow-400 font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.gallery.slice(1).map((image, index) => (
                        <div key={index} className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
                          <img
                            src={image}
                            alt={`${project.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-white mb-6">Technologies</h3>

                  {project.technologies.frontend && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.frontend.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.technologies.backend && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.backend.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.technologies.database && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3">Database</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.database.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.technologies.tools && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-pink-400 mb-3">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.tools.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-gray-800 space-y-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold text-white border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
