"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="border-t border-neutral-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-mono text-cyan-400 font-black text-xl mb-2">
              BN
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Building things that work, in Nairobi and on the internet.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-neutral-500 tracking-widest mb-4">
              QUICK LINKS
            </p>
            <div className="space-y-2">
              {["#about", "#skills", "#experience", "#projects", "#contact"].map(
                (href) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-sm text-neutral-500 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {href.slice(1).toUpperCase()}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-neutral-500 tracking-widest mb-4">
              NEWSLETTER
            </p>
            <p className="text-sm text-neutral-500 mb-4">
              Occasional updates on projects and things I figure out.{" "}
              <em>No spam. Probably.</em>
            </p>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-mono text-cyan-400"
              >
                ✓ you&apos;re in. nice.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm font-mono text-neutral-300 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-neutral-700"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 text-black text-sm font-mono font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                  data-hover
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-neutral-900">
          <p className="text-xs font-mono text-neutral-700">
            © {new Date().getFullYear()} Brown Nyakako — built with Next.js,
            Tailwind, and too much coffee.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nyk-o-brown"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-600 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brown-nyakako"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-600 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
