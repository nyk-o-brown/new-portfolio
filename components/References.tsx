"use client";
import { motion } from "framer-motion";

const references = [
  {
    org: "Riara University",
    orgType: "Academic",
    referee: "[ Florence Kimani ]",
    title: "[ Faculty of School of Computing and Informatics ]",
    excerpt:
      "During his studies, Brown consistently demonstrated an exceptional ability to apply software engineering, data analysis, and business strategy to solve complex, real-world organizational challenges.",
    letterUrl: null,
    icon: "🎓",
    color: "from-cyan-500/10 to-transparent",
    border: "hover:border-cyan-500/40",
    tag: "border-cyan-500/20 text-cyan-400",
  },
];

export default function References() {
  return (
    <section id="references" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          REFERENCES
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-12">
          people who can confirm i&apos;m not making this up
        </p>

        <div className="grid gap-6 max-w-md">
          {references.map((ref, i) => (
            <motion.div
              key={ref.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/20 transition-all duration-300 group ${ref.border}`}
              data-hover
            >
              <div className={`h-1.5 bg-gradient-to-r ${ref.color}`} />

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-2xl">{ref.icon}</span>
                    <h3 className="font-bold text-neutral-100 text-base mt-2 leading-snug">
                      {ref.org}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-mono px-2.5 py-0.5 rounded-full border ${ref.tag}`}
                  >
                    {ref.orgType}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-neutral-200">
                    {ref.referee}
                  </p>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">
                    {ref.title}
                  </p>
                </div>

                <blockquote className="text-xs text-neutral-500 italic border-l-2 border-neutral-700 pl-3 leading-relaxed flex-1">
                  {ref.excerpt}
                </blockquote>

                <div className="mt-5">
                  {ref.letterUrl ? (
                    <a
                      href={ref.letterUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-all"
                    >
                      <span>↗</span> View Letter
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 border border-neutral-700 text-neutral-600 rounded-lg cursor-default">
                      <span>⏳</span> Letter pending
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
