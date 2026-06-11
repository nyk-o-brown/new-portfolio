"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  {
    title: "Front-End Web Development",
    issuer: "ALX Africa",
    image: "/cert-frontend.png",
    status: "completed",
    link: "https://savanna.alxafrica.com/certificates/Y9nSPNZzEp",
  },
  {
    title: "Back End Development",
    issuer: "ALX Africa",
    image: "/70-back-end-web-development-certificate-brown-nyakako.png",
    status: "completed",
    link: "https://savanna.alxafrica.com/certificates/meyFpG8ZCX",
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    image: "/cert-ai.png",
    status: "completed",
    link: "https://savanna.alxafrica.com/certificates/E2Xn3ZB7TG",
  },
  {
    title: "Professional Foundations",
    issuer: "ALX Africa",
    image: "/cert-profoundations.png",
    status: "completed",
    link: "https://savanna.alxafrica.com/certificates/LxGnyep6PB",
  },
  {
    title: "AWS Educate Badge",
    issuer: "Amazon Web Services",
    image: "/AWS ML foundations.png",
    status: "completed",
    link: "https://www.credly.com/badges/b6273a53-10dd-4f23-b658-994dbf9ab9ba/public_url",
  },
  {
    title: " Software Engineering Job Simulation",
    issuer: "Hewlett Packard",
    image: "/HP job simulation.png",
    status: "completed",
    link: null,
  },
  {
    title: "KCNA",
    issuer: "Linux Foundations",
    image: "/KCNA.jpg",
    status: "completed",
    link: null,
  },
  {
    title: "Ocharstrate Agent Hackerthon",
    issuer: "Hacker Rank",
    image:  "/HackeRank Ochastrate.png",
    status: "participated",
    link: null,
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          CERTIFICATIONS
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-10">
          proof i did my homework
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/30 hover:border-cyan-500/40 transition-all duration-300 group"
              data-hover
              {...(cert.link ? { onClick: () => window.open(cert.link!, "_blank") } : {})}
              style={cert.link ? { cursor: "pointer" } : {}}
            >
              {cert.image ? (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center bg-neutral-900 border-b border-neutral-800">
                  <span className="font-mono text-4xl text-neutral-700">?</span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm text-neutral-200 leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded-full ${
                      cert.status === "completed"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : cert.status === "participated"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {cert.status === "completed"
                      ? "✓ done"
                      : cert.status === "participated"
                      ? "★ participated"
                      : "⏳ wip"}
                  </span>
                </div>
              </div>
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
            href="https://www.credly.com/users/brown-odoyo/badges#credly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 border border-cyan-500/40 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors"
          >
            <span>🏅</span> check the certs on Credly →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
