"use client";
import { motion } from "framer-motion";

const badges = [
  { label: "Next.js", color: "black", logo: "next.js" },
  { label: "React", color: "61DAFB", logo: "react&logoColor=black" },
  { label: "Vue.js", color: "4FC08D", logo: "vue.js&logoColor=white" },
  { label: "TypeScript", color: "3178C6", logo: "typescript&logoColor=white" },
  { label: "Tailwind CSS", color: "06B6D4", logo: "tailwindcss&logoColor=white" },
  { label: "Node.js", color: "339933", logo: "node.js&logoColor=white" },
  { label: "PHP", color: "777BB4", logo: "php&logoColor=white" },
  { label: "Python", color: "3776AB", logo: "python&logoColor=white" },
  { label: "MongoDB", color: "47A248", logo: "mongodb&logoColor=white" },
  { label: "PostgreSQL", color: "4169E1", logo: "postgresql&logoColor=white" },
  { label: "MySQL", color: "4479A1", logo: "mysql&logoColor=white" },
  { label: "Flutter", color: "02569B", logo: "flutter&logoColor=white" },
  { label: "Git", color: "F05032", logo: "git&logoColor=white" },
  { label: "GitHub", color: "181717", logo: "github&logoColor=white" },
  { label: "Figma", color: "F24E1E", logo: "figma&logoColor=white" },
  { label: "Firebase", color: "FFCA28", logo: "firebase&logoColor=black" },
  { label: "Postman", color: "FF6C37", logo: "postman&logoColor=white" },
];

export default function TechBadges() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          THE ARSENAL
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-10">
          tools i reach for at 2am
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((b, i) => (
            <motion.a
              key={b.label}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              data-hover
            >
              <img
                src={`https://img.shields.io/badge/${encodeURIComponent(b.label)}-${b.color}?style=for-the-badge&logo=${b.logo}`}
                alt={b.label}
                className="h-7"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
