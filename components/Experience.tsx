"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
   {
    num: "01",
    role: "Software Development Lead / Full Stack Developer",
    company: "Nile Flow",
    period: "Jan 2026 – Present",
    location: "Nairobi, Kenya",
    points: [
    "Headed software development at Nile Flow, leading end-to-end design and implementation of core platforms and intergration into the play-store.",

    "Built a supplier dashboard that streamlined onboarding and engagement, driving growth in supplier participation.",

    "Developed a rider dashboard to assign drivers efficiently and track deliveries in real time, improving operational reliability .",

    "Created an admin dashboard leveraging data science to generate actionable insights, supporting strategic business decisions and contributing to Nile Flow securing pre-seed funding from Riara University.",
    ],
  },
  {
    num: "02",
    role: "Team Lead / Full Stack Developer",
    company: "Lixnet Technologies",
    period: "Sep 2025 – Jan 2026",
    location: "Nairobi, Kenya",
    points: [
      "Promoted from Intern to Team Lead as the company prepares to go public; platform currently in testing phase.",
      "Co-developed a full-featured Property Manager app using React, PHP, and MySQL.",
      "Conducted on-site field research with property managers and tenants to validate usability.",
      "Implemented responsive UI components, integrated back-end APIs, and optimized data flows for tenant and unit management.",
    ],
  },
  {
    num: "03",
    role: "Founder & Full Stack Developer",
    company: "Egress Hall",
    period: "Jun 2025 – Present",
    location: "Nairobi, Kenya",
    points: [
      "Founded Egress Hall, a tech-driven initiative building scalable full stack solutions using React, Node.js, and MongoDB.",
      "Developed CareCraft, a platform linking barbers to customers — averaging 5 customers/day over its first 2 months on the google play store.",
      "Integrated ML models for predictive analytics and intelligent UX across products.",
      "Managed cross-functional teams, UI/UX design, back-end architecture, and agile sprint planning.",
      
    ],
  },
  {
    num: "04",
    role: "Contracted Full Stack Developer",
    company: "Crisiz Web Development Services",
    period: "Jan 2025 – Present",
    location: "Nairobi, Kenya",
    points: [
      "Contracted to deliver multiple websites with modern, user-friendly designs.",
      "Integrated Zoho API, Daraja API, Pesapal, and Bulk-SMS systems into client platforms.",
      "Collaborated with clients to ensure seamless workflows and scalable solutions.",
    ],
  },
  {
    num: "05",
    role: "Frontend Developer",
    company: "Debogen Consulting",
    period: "Jan 2025 – May 2025",
    location: "Nairobi, Kenya",
    points: [
      "Designed, developed, and maintained responsive, user-centric websites using HTML, CSS, JavaScript, and React/Next.js.",
      "Developed the Debogen Groups website, which generated over 300 inquiries in 10 months.",
      "Implemented SEO best practices and collaborated across design, marketing, and back-end teams.",
    ],
  },
  {
    num: "06",
    role: "Hackathon Winner — Team Lead",
    company: "Jagedo & Moringa Hackathon",
    period: "2025",
    location: "Nairobi, Kenya",
    points: [
      "Led the winning team, developing a machine learning–powered solution for the construction industry.",
      "Utilized ML categorization to streamline material classification and site data analysis.",
      "Improved operational efficiency and decision-making under tight deadlines.",
    ],
  },
  {
    num: "07",
    role: "Bachelor of Science — Business & Information Technology",
    company: "Riara University",
    period: ".",
    location: "Nairobi, Kenya",
    points: [
      "Full stack development, data analysis, business strategy, and machine learning applied to real-world challenges.",
      "Experienced in SEO, CRM systems, budgeting, and ERP platforms like SAP and Oracle.",
      "Active in hackathons, startup projects, and collaborative tech initiatives.",
    ],
  },
];

export default function Experience() {
  const [funFactOpen, setFunFactOpen] = useState(false);

  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          EXPERIENCE
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-14">
          the journey so far
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-20"
              >
                <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 flex items-center justify-center">
                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    {exp.num}
                  </span>
                </div>

                <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/20 hover:border-cyan-500/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-neutral-100 text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-mono text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-neutral-500">
                        {exp.period}
                      </p>
                      <p className="text-xs text-neutral-600">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-neutral-400 flex gap-2"
                      >
                        <span className="text-cyan-500 shrink-0 mt-0.5">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.company === "Egress Hall" && (
                    <button
                      onClick={() => setFunFactOpen(true)}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 border border-yellow-500/30 text-yellow-400 rounded-full hover:bg-yellow-500/10 transition-colors"
                    >
                      <span>✦</span> fun fact about the name
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {funFactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setFunFactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full bg-[#0f0f0f] border border-yellow-500/30 rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFunFactOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-200 transition-colors font-mono text-lg leading-none"
              >
                ✕
              </button>

              <p className="font-mono text-yellow-400 text-xs tracking-widest mb-3">
                ✦ FUN FACT
              </p>

              <h3 className="text-xl font-black text-neutral-100 mb-1">
                Why &ldquo;Egress Hall&rdquo;?
              </h3>
              <p className="font-mono text-xs text-neutral-500 mb-5">
                Adventure Time — Season 7, Episode 24 &bull; aired March 5, 2016
              </p>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  <span className="text-yellow-400 font-semibold">&ldquo;Hall of Egress&rdquo;</span> is
                  one of the most cryptic, philosophical episodes in Adventure
                  Time. Finn finds himself trapped in a dungeon with a door he
                  can only pass through when his eyes are closed — a puzzle
                  that cannot be solved by force or logic, only by surrender
                  and perception.
                </p>
                <p>
                  It is a story about <span className="text-cyan-400">growth</span>,{" "}
                  <span className="text-cyan-400">letting go</span>, and seeing
                  the world differently. When Finn finally walks out, he is no
                  longer the wide-eyed boy hero — the series shifts into its
                  most mature, philosophical arc.
                </p>
                <p className="text-neutral-500 italic border-l-2 border-yellow-500/40 pl-3">
                  That transition — from brute-forcing problems to building
                  things with intention — is exactly what Egress Hall the
                  company is about.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
