import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projectsData';
import ProjectDetail from './ProjectDetail';

const highlightedProjects = projects.slice(0, 3);

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Featured Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Projects
            </h2>
            <p className="text-gray-400 text-lg">Showcasing my best work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
            {highlightedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>

                <div className="relative bg-gray-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105 cursor-pointer h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>

                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 rounded-full bg-gray-700/50 text-gray-300 text-xs font-medium border border-gray-600/50 hover:border-gray-500 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-cyan-500/50 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
