"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="font-mono text-cyan-500 text-sm mb-4 tracking-widest">
            &gt; HELLO WORLD
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-2">
            BROWN
            <br />
            <span className="text-gradient">NYAKAKO</span>
          </h1>
          <p className="font-mono text-neutral-500 text-sm mb-6">
            Full Stack Web & Mobile Developer
          </p>

          <div className="border-l-2 border-cyan-500 pl-4 mb-8">
            <p className="text-neutral-300 text-lg">
              WHO AM I?
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              <em>
                &ldquo;A developer who Googles things confidently.&rdquo;
              </em>
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed mb-6 max-w-lg">
            Business-focused full stack developer based in{" "}
            <span className="text-cyan-400 font-mono">Nairobi, Kenya</span>.
            Currently Team Lead at Lixnet Technologies, Founder of{" "}
            <span className="text-cyan-400 font-mono">Egress Hall</span>, and winner
            of the Jagedo & Moringa Hackathon. I build systems that ship,
            scale, and actually get used.
          </p>

          <p className="text-neutral-500 text-sm italic mb-8">
            *(Juggling a BBIT degree, a young company, and an insatiable curiosity.
            Sleep is a myth.)*
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors font-mono text-sm"
            >
              SEE MY WORK
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-mono text-sm rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/40 glow">
              <Image
                src="/headshot.jpg"
                alt="Brown Nyakako"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-cyan-500/30 rounded-full px-4 py-1">
              <span className="font-mono text-xs text-cyan-400">
                Available for partnerships
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
