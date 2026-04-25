import skillsData from "../data/skills.json";

export default function Skills() {
  const totalCategories = skillsData.length;
  const totalSkills = skillsData.reduce((count, group) => count + group.skills.length, 0);
  const averageLevel = Math.round(
    skillsData.reduce((sum, group) => sum + group.skills.reduce((groupSum, skill) => groupSum + skill.level, 0), 0) /
      totalSkills
  );
  const strongestSkill = skillsData
    .flatMap((group) => group.skills)
    .reduce((best, skill) => (skill.level > best.level ? skill : best));

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden min-h-screen bg-[#07070f] px-6 md:px-12 lg:px-20 py-24 scroll-mt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute -bottom-40 -left-28 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-violet-300/70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Capability snapshot
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.02] text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Skills &{" "}
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A production-ready stack I use to architect, build, and scale real-world applications with clean UI, fast interactions, and stable backends.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Frontend", "Backend", "Database", "Deployment"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/3 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Average proficiency
            </p>
            <p className="mt-4 text-4xl font-bold text-white tabular-nums" style={{ fontFamily: "'Syne', sans-serif" }}>
              {averageLevel}%
            </p>
            <p className="mt-2 text-sm text-slate-400">Across the current stack.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Strongest skill
            </p>
            <p className="mt-4 text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              {strongestSkill.name}
            </p>
            <p className="mt-2 text-sm text-violet-300">{strongestSkill.level}% mastery</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Categories
            </p>
            <p className="mt-4 text-4xl font-bold text-white tabular-nums" style={{ fontFamily: "'Syne', sans-serif" }}>
              {totalCategories}
            </p>
            <p className="mt-2 text-sm text-slate-400">Frontend, backend, database, and language systems.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Skills tracked
            </p>
            <p className="mt-4 text-4xl font-bold text-white tabular-nums" style={{ fontFamily: "'Syne', sans-serif" }}>
              {totalSkills}
            </p>
            <p className="mt-2 text-sm text-slate-400">Always expanding, never padded.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="group relative rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition-all duration-300 md:group-hover:-translate-y-1 md:group-hover:border-violet-400/40 md:group-hover:bg-white/5"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 transition duration-300 md:group-hover:opacity-100 pointer-events-none">
                <div className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_65%)]" />
              </div>

              <div className="relative z-10 flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-violet-300/70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Category
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {group.category}
                    </h3>
                  </div>

                  <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-300">
                    {group.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="font-medium text-violet-300 tabular-nums">{skill.level}%</span>
                      </div>

                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 shadow-[0_0_18px_rgba(168,85,247,0.35)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2 text-xs uppercase tracking-[0.18em] text-slate-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {group.category} systems tuned for production
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}