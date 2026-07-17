"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Design", href: "#system-design" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-5 py-2.5 rounded-full border transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-neutral-800"
          : "bg-[#0a0a0a]/40 backdrop-blur-md border-neutral-800/50"
      }`}
    >
      <span className="font-mono text-cyan-500 text-sm mr-3 font-bold tracking-tight">
        BN
      </span>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="px-3 py-1 text-sm text-neutral-400 hover:text-cyan-400 transition-colors rounded-full hover:bg-cyan-500/10"
        >
          {l.label}
        </a>
      ))}
      <a
        href="/brown-nyakako-cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="ml-2 px-3 py-1 text-sm font-mono bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition-colors"
      >
        CV
      </a>
    </motion.nav>
  );
}
