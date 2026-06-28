import skills from "../data/skills.json";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiMysql,
} from "react-icons/si";

import { RiShieldKeyholeLine } from "react-icons/ri";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const iconMap = {
  react: FaReact,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  git: FaGitAlt,
  github: FaGithub,
  postman: SiPostman,
  jwt: RiShieldKeyholeLine,
  mysql: SiMysql,
};

export default function Skills() {
  const { scrollYProgress } = useScroll();

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#07070f] px-6 py-28 md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p
            className="text-[11px] uppercase tracking-[0.35em] text-violet-300/70"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Capability Snapshot
          </p>

          <h2
            className="mt-4 text-5xl font-bold text-white md:text-6xl"
            style={{
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Technologies I{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            The technologies I use to build full-stack
            applications, experiment with ideas, and
            continuously improve through hands-on
            projects.
          </p>
        </motion.div>

        {/* Tech Wall */}

        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, (index % 4) * 20]
            );

            return (
              <motion.div
                key={skill.name}
                style={{ y }}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_65%)]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                    <Icon
                      size={34}
                      className="text-violet-300"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Exploring */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold text-white">
            Currently Exploring
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "AWS",
              "System Design",
              "Backend Optimization",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}