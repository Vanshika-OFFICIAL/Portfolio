import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#07070f] px-6 md:px-12 lg:px-20 py-24 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl">
            Building real-world applications and working across full-stack systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8 flex flex-col gap-12">

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-7 top-27 w-4 h-4 bg-violet-500 rounded-full border-2 border-[#07070f]" />

              {/* Card */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0f0f1c]/70 backdrop-blur-xl p-7 transition-all duration-300 md:hover:-translate-y-1 hover:border-violet-400/40">

                {/* Glow (same as contact) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="w-full h-full bg-violet-500/10 blur-2xl rounded-2xl" />
                </div>

                <div className="relative z-10 flex flex-col gap-5">

                  {/* Top */}
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>

                    <span className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-violet-400 text-sm font-medium">
                    {exp.company}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="flex flex-col gap-2 text-slate-300 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-violet-400">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}