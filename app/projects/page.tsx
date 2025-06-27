import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "project-name",
      description:
        "open-source tool for developers to streamline their workflow. built with typescript and react.",
      role: "creator and maintainer",
      tech: ["typescript", "react", "node.js", "postgresql"],
      github: "https://github.com/username/project-name",
      demo: "https://project-name.com",
      stars: "5.2k",
      status: "active",
    },
    {
      name: "task-manager-pro",
      description:
        "full-stack web application for task management and team collaboration with real-time updates.",
      role: "lead developer",
      tech: ["next.js", "prisma", "websockets", "tailwind"],
      github: "https://github.com/username/task-manager-pro",
      demo: "https://taskmanager-pro.com",
      stars: "1.8k",
      status: "active",
    },
    {
      name: "habit-tracker",
      description:
        "mobile app for tracking personal habits and goals with data visualization and offline support.",
      role: "solo project",
      tech: ["react native", "expo", "sqlite", "redux"],
      github: "https://github.com/username/habit-tracker",
      demo: null,
      stars: "892",
      status: "maintenance",
    },
    {
      name: "code-snippet-manager",
      description:
        "desktop application for organizing and searching code snippets with syntax highlighting.",
      role: "creator",
      tech: ["electron", "vue.js", "codemirror", "sqlite"],
      github: "https://github.com/username/code-snippet-manager",
      demo: null,
      stars: "456",
      status: "archived",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            back to home
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">projects</h1>
          <p className="text-gray-400">things i've built and contributed to</p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border-b border-gray-800 pb-12 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {project.name}
                </h2>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-gray-400 text-sm">{project.role}</span>
                {project.stars && (
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                )}
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === "active"
                      ? "bg-green-900 text-green-300"
                      : project.status === "maintenance"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
