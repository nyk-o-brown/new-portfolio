"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    id: "frontend",
    icon: "⚡",
    label: "Frontend",
    tooltip: "React, Next.js, TypeScript, Tailwind CSS — making pixels behave since 2022.",
  },
  {
    id: "backend",
    icon: "🛠",
    label: "Backend",
    tooltip: "Node.js, Python, PostgreSQL, Firebase — the stuff users never see but always blame.",
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Mobile",
    tooltip: "Flutter & Dart — one codebase, two platforms, zero excuses.",
  },
  {
    id: "blockchain",
    icon: "⛓",
    label: "Data Engineering",
    tooltip: "Exploring Web3 and smart contracts. Still figuring out if it's the future or just vibes.",
  },
  {
    id: "tutorial",
    icon: "📚",
    label: "Machine Learning",
    tooltip: "Breaking down complex concepts until even I understand them. That's the real test.",
  },
];

export default function SkillIcons() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          WHAT I DO
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-12">
          click to find out more
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <button
                data-hover
                onClick={() => setActive(active === s.id ? null : s.id)}
                className={`w-28 h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border transition-all duration-300 ${
                  active === s.id
                    ? "border-cyan-500 bg-cyan-500/10 glow"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-cyan-500/50"
                }`}
                style={{
                  animation: `float ${2.5 + i * 0.3}s ease-in-out infinite`,
                }}
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xs font-mono text-neutral-400">{s.label}</span>
              </button>

              <AnimatePresence>
                {active === s.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-neutral-900 border border-cyan-500/30 rounded-xl p-3 text-xs text-neutral-300 leading-relaxed z-10"
                  >
                    {s.tooltip}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-l border-t border-cyan-500/30 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
