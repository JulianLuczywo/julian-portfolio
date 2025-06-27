"use client";

import Link from "next/link";
import {
  MapPin,
  Briefcase,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            <TypewriterText text="Julian Luczywo" />
          </h1>

          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Budapest, Hungary</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Founder/CTO @ RefractedAI</span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            i'm a 23 year old developer living budapest, hungary. i'm half
            polish and half korean. i love building and solving problems. i
            enjoy working on full-stack web applications, creating meaningful
            digital experiences or optimising businesses. if i'm not coding then
            i'm probably obsessing over tea/coffee or playing golf/padel.
          </p>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-[#899878] text-xl font-bold mb-6">
            * tech stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "nextjs",
              "typescript",
              "tailwindcss",
              "react",
              "node.js",
              "postgresql",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section className="mb-16">
          <h2 className="text-[#899878] text-xl font-bold mb-6">* work</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1 hover:text-[#899878] transition-colors cursor-pointer">
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                  className="inline-flex items-center gap-1"
                >
                  <Link
                    href="https://refractedai.com"
                    className="inline-flex items-center gap-1"
                  >
                    <span>RefractedAI</span>
                    <motion.div
                      variants={{
                        initial: { opacity: 0, x: -4 },
                        hover: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ArrowUpRight size={20} className="text-[#899878]" />
                    </motion.div>
                  </Link>
                </motion.div>
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Founder/CTO (mar 2025 - present)
              </p>
              <p className="text-gray-300 leading-relaxed">
                We create AI-powered tools for businesses to improve their
                workflow and productivity.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-1">UTOPIUM</h3>
              <p className="text-gray-400 text-sm mb-2">
                Founder/Co-CEO (jan 2024 - jan 2025)
              </p>
              <p className="text-gray-300 leading-relaxed">
                Music tech startup for artists to create more revenue by selling
                directly to their fans.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-[#899878] text-xl font-bold mb-6">* projects</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1 hover:text-[#899878] transition-colors cursor-pointer">
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                  className="inline-flex items-center gap-1"
                >
                  <Link
                    href="https://ltwlogistics.com"
                    className="inline-flex items-center gap-1"
                  >
                    <span>LTW Logistics Order Management System</span>
                    <motion.div
                      variants={{
                        initial: { opacity: 0, x: -4 },
                        hover: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ArrowUpRight size={20} className="text-[#899878]" />
                    </motion.div>
                  </Link>
                </motion.div>
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                creator and maintainer
              </p>
              <p className="text-gray-300 leading-relaxed">
                full-stack web application for logistics companies to manage
                their orders and shipments.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                another-project
              </h3>
              <p className="text-gray-400 text-sm mb-2">lead developer</p>
              <p className="text-gray-300 leading-relaxed">
                full-stack web application for task management and team
                collaboration. features real-time updates, file sharing, and
                integration with popular productivity tools.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                side-project
              </h3>
              <p className="text-gray-400 text-sm mb-2">solo project</p>
              <p className="text-gray-300 leading-relaxed">
                mobile app built with react native for tracking personal habits
                and goals. includes data visualization, push notifications, and
                offline support.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <motion.div
              whileHover="hover"
              initial="initial"
              variants={{
                initial: {},
                hover: {},
              }}
              className="inline-flex items-center gap-1"
            >
              <Link
                href="/projects"
                className="text-[#899878] hover:underline inline-flex items-center gap-1"
              >
                <span>see more projects</span>
                <motion.div
                  variants={{
                    initial: { x: -4, y: 0 },
                    hover: { x: 2, y: -2 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center gap-1"
                >
                  <ArrowUpRight size={20} className="text-[#899878]" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section>
          <h2 className="text-[#899878] text-xl font-bold mb-6">* blog</h2>

          <div className="space-y-4">
            <Link
              href="/blog/building-scalable-react-apps"
              className="block group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white group-hover:text-[#344532] transition-colors">
                  building scalable react applications
                </h3>
                <span className="text-gray-500 text-sm">dec 2024</span>
              </div>
            </Link>

            <Link
              href="/blog/typescript-best-practices"
              className="block group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white group-hover:text-[#344532] transition-colors">
                  typescript best practices for large codebases
                </h3>
                <span className="text-gray-500 text-sm">nov 2024</span>
              </div>
            </Link>

            <Link href="/blog/nextjs-performance" className="block group">
              <div className="flex items-center justify-between">
                <h3 className="text-white group-hover:text-[#344532] transition-colors">
                  optimizing next.js applications for performance
                </h3>
                <span className="text-gray-500 text-sm">oct 2024</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <motion.div
              whileHover="hover"
              initial="initial"
              variants={{
                initial: {},
                hover: {},
              }}
              className="inline-flex items-center gap-1"
            >
              <Link
                href="/blog"
                className="text-[#899878] hover:underline inline-flex items-center gap-1"
              >
                <span>all posts</span>
                <motion.div
                  variants={{
                    initial: { x: -4, y: 0 },
                    hover: { x: 2, y: -2 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center gap-1"
                >
                  <ArrowUpRight size={20} className="text-[#899878]" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-16">
          <h2 className="text-[#899878] text-xl font-bold mb-6">* links</h2>
          <div className="flex gap-4">
            <Link
              href="https://github.com/julianluczywo"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/julianluczywo"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://twitter.com/julianluczywo"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="mailto:julian@refracted.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
