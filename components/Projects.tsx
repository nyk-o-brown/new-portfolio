"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "CARECRAFT",
    description:
      "A platform connecting barbers to customers, built under Egress Hall. Averaging 5 customers per day in its first 2 months — because finding a good barber shouldn't require 3 WhatsApp forwards.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/nyk-o-brown",
    live: null,
    accent: "cyan",
    images: ["/carecraft1.png", "/carecraft2.png", "/carecraft3.png"],
  },
  {
    title: "EVOLVE PROPERTY MANAGER",
    description:
      "Full-featured property management app built for Lixnet Technologies. Handles tenant tracking, unit management, and payments — built with field research straight from the landlords and tenants who use it.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
    github: "https://github.com/nyk-o-brown",
    live: null,
    accent: "emerald",
    images: ["/evolvepm1.png", "/evolvepm2.png", "/evolvepm3.png"],
  },
  {
    title: "TANGAZA",
    description:
      "An AI-driven application that creates personalized virtual tutors. Think of it as a teacher who actually adapts to how you learn — unlike the ones who just read off slides.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Firebase"],
    github: "https://github.com/nyk-o-brown/tangaza/blob/main/README.md",
    live: null,
    accent: "violet",
    images: ["/tangaza1.png", "/tangaza2.png", "/tangaza3.png"],
  },
  {
    title: "CADVISOR",
    description:
      "A comprehensive business intelligence tool that provides actionable insights through data visualization and analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/nyk-o-brown/cadvisor",
    live: null,
    accent: "orange",
    images: ["/cadvisor1.png", "/cadvisor2.png", "/cadvisor3.png"],
  },
];

const badgeColors: Record<string, string> = {
  "Next.js": "000000",
  TypeScript: "3178C6",
  OpenAI: "412991",
  Firebase: "FFCA28&logoColor=black",
  React: "61DAFB&logoColor=black",
  "Node.js": "339933",
  PostgreSQL: "4169E1",
  Tailwind: "06B6D4",
  MongoDB: "47A248&logoColor=white",
  PHP: "777BB4&logoColor=white",
  MySQL: "4479A1&logoColor=white",
};

const accentBorder: Record<string, string> = {
  cyan: "hover:border-cyan-500/40",
  emerald: "hover:border-emerald-500/40",
  violet: "hover:border-violet-500/40",
  orange: "hover:border-orange-500/40",
};

const accentBar: Record<string, string> = {
  cyan: "from-cyan-500/60 to-transparent",
  emerald: "from-emerald-500/60 to-transparent",
  violet: "from-violet-500/60 to-transparent",
  orange: "from-orange-500/60 to-transparent",
};

const accentThumb: Record<string, string> = {
  cyan: "border-cyan-400",
  emerald: "border-emerald-400",
  violet: "border-violet-400",
  orange: "border-orange-400",
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 gap-2">
      <span className="font-mono text-3xl text-neutral-700">[ ]</span>
      <span className="font-mono text-xs text-neutral-600 text-center px-4">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  onLightbox,
}: {
  project: (typeof projects)[0];
  onLightbox: (src: string) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <div
      className={`group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/20 transition-all duration-300 ${accentBorder[project.accent]}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      {/* Gallery area */}
      <div
        className="relative h-52 overflow-hidden cursor-zoom-in"
        onClick={() =>
          !imgErrors[activeIdx] && onLightbox(project.images[activeIdx])
        }
      >
        {/* Active image */}
        {imgErrors[activeIdx] ? (
          <ImagePlaceholder
            label={`Add design screenshot to /public/projects/`}
          />
        ) : (
          <img
            src={project.images[activeIdx]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() =>
              setImgErrors((prev) => ({ ...prev, [activeIdx]: true }))
            }
          />
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Accent bar top */}
        <div
          className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accentBar[project.accent]}`}
        />

        {/* Expand hint */}
        <AnimatePresence>
          {hovered && !imgErrors[activeIdx] && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-3 right-3 font-mono text-xs text-white/60 bg-black/50 px-2 py-0.5 rounded pointer-events-none"
            >
              click to expand ↗
            </motion.span>
          )}
        </AnimatePresence>

        {/* Thumbnail strip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-3"
            >
              {project.images.map((src, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(i);
                  }}
                  className={`relative w-12 h-9 rounded overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                    i === activeIdx
                      ? accentThumb[project.accent]
                      : "border-neutral-600/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  {imgErrors[i] ? (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                      <span className="text-neutral-600 text-xs">?</span>
                    </div>
                  ) : (
                    <img
                      src={src}
                      alt={`thumb ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [i]: true }))
                      }
                    />
                  )}
                </button>
              ))}

              {/* Dot indicators */}
              <div className="absolute -bottom-0 left-0 right-0 flex justify-center gap-1 pb-0.5">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-200 ${
                      i === activeIdx ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-black text-2xl text-neutral-100 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-3 py-1.5 border border-neutral-700 rounded-lg text-neutral-400 hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <span>⌥</span> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono px-3 py-1.5 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-all flex items-center gap-1.5"
              >
                <span>↗</span> Live
              </a>
            )}
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <img
              key={t}
              src={`https://img.shields.io/badge/${encodeURIComponent(t)}-${badgeColors[t] ?? "555555"}?style=flat-square&logo=${encodeURIComponent(t.toLowerCase())}`}
              alt={t}
              className="h-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-1 section-title in-view">
          TALK IS CHEAP.
        </h2>
        <h2 className="text-3xl font-black mb-2 text-cyan-400">
          SHOW ME THE CODE.
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-12">
          things i built instead of sleeping
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <ProjectCard project={project} onLightbox={setLightbox} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/nyk-o-brown"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-neutral-500 hover:text-cyan-400 transition-colors"
          >
            more on GitHub &rarr;
          </a>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt="Full size preview"
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white rounded-full font-mono text-sm transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
