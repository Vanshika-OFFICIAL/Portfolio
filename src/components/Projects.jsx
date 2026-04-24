import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#07070f]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Real-world applications built with focus on performance, scalability, and user experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}