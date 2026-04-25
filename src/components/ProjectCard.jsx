export default function ProjectCard({ project }) {
  const { title, problem, impact, tech, github, live, image } = project;
  const imageSrc = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <article className="group flex flex-col h-full rounded-xl border border-white/10 bg-[#0f0f1c] overflow-hidden transition md:hover:-translate-y-1 hover:border-white/20">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col grow p-5 gap-4">

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        {/* PROBLEM */}
        <p className="text-sm text-slate-400">
          {problem}
        </p>

        {/* IMPACT */}
        <p className="text-sm text-white font-medium">
          {impact}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* PUSH BUTTONS DOWN */}
        <div className="mt-auto flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm px-3 py-2 border border-white/15 rounded hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm px-3 py-2 bg-violet-600 text-white rounded hover:bg-violet-500 transition"
          >
            Live
          </a>
        </div>
      </div>
    </article>
  );
}