"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "API Integration",
  "Performance Optimization",
  "Code Review",
  "Consulting",
  
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: ((e.clientX - cx) / rect.width) * 20,
        y: ((e.clientY - cy) / rect.height) * 20,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/3 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black mb-2 section-title in-view inline-block">
            LET&apos;S BUILD SOMETHING
          </h2>
          <p className="text-neutral-500 font-mono text-sm mt-4">
            I don&apos;t bite. the code might, but I won&apos;t.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href="mailto:odoyobrown@gmail.com"
              data-hover
              className="flex items-center gap-4 p-5 border border-neutral-800 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-xs font-mono text-neutral-500 mb-0.5">
                  EMAIL
                </p>
                <p className="text-neutral-200 group-hover:text-cyan-300 transition-colors font-mono text-sm">
                  odoyobrown@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/254708606980"
              target="_blank"
              rel="noreferrer"
              data-hover
              className="flex items-center gap-4 p-5 border border-neutral-800 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-xs font-mono text-neutral-500 mb-0.5">
                  WHATSAPP
                </p>
                <p className="text-neutral-200 group-hover:text-cyan-300 transition-colors font-mono text-sm">
                  +254 708 606 980
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/brown-nyakako"
              target="_blank"
              rel="noreferrer"
              data-hover
              className="flex items-center gap-4 p-5 border border-neutral-800 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <span className="text-2xl">🔗</span>
              <div>
                <p className="text-xs font-mono text-neutral-500 mb-0.5">
                  LINKEDIN
                </p>
                <p className="text-neutral-200 group-hover:text-cyan-300 transition-colors font-mono text-sm">
                  brown-nyakako
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-mono text-xs text-neutral-500 mb-4 tracking-widest">
              AVAILABLE FOR
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-3 py-1.5 text-xs font-mono border border-neutral-800 rounded-full text-neutral-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                  data-hover
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
