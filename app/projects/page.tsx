import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "LTW Logistics Order Management System",
      description:
        "comprehensive order management system built for logistics companies. features real-time tracking, automated workflows, and detailed analytics.",
      role: "creator and maintainer",
      tech: [
        "next.js",
        "typescript",
        "tailwindcss",
        "prisma",
        "postgresql",
        "kindeAuth",
      ],
      github: null,
      demo: "https://ltwlogistics.com",
      stars: null,
      status: "active",
    },
    {
      name: "VT Logistic Website",
      description:
        "full website revamp for hungarian logistics company with modern design and improved user experience.",
      role: "lead developer",
      tech: ["next.js", "typescript", "tailwindcss", "framer-motion"],
      github: null,
      demo: "https://vtlogistic.com",
      stars: null,
      status: "active",
    },
    {
      name: "VTL Vámügynökség Website",
      description:
        "complete website redesign for customs brokerage company with focus on professional presentation and user engagement.",
      role: "lead developer",
      tech: ["next.js", "typescript", "tailwindcss", "framer-motion"],
      github: null,
      demo: "https://vtlvam.com",
      stars: null,
      status: "active",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            back to home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#899878] mb-3">
              * projects
            </h1>
            <p className="text-gray-400 text-lg">
              things i've built and contributed to
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 bg-[#222725]/30 border border-gray-800 rounded-lg hover:bg-[#222725]/80 hover:border-gray-700 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-[#899878] transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-[#899878] text-sm font-medium mb-3">
                    {project.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 ml-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                  {project.stars && (
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Star className="w-3 h-3" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === "active"
                      ? "bg-green-900/30 text-green-400 border border-green-800"
                      : project.status === "maintained"
                      ? "bg-yellow-900/30 text-yellow-400 border border-yellow-800"
                      : "bg-gray-800/50 text-gray-400 border border-gray-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
