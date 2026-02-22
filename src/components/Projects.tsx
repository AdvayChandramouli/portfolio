import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group p-6 bg-background-light border border-border rounded-lg transition-all duration-200 hover:border-accent/50 hover:bg-background-hover hover:shadow-sm"
          >
            <h3 className="font-sans text-lg font-medium text-foreground mb-2">
              {project.title}
            </h3>
            <p className="font-serif text-muted text-[1.05rem] leading-relaxed mb-4">
              {project.description}
            </p>
            {project.highlight && (
              <p className="font-sans text-sm text-accent/90 mb-4">
                {project.highlight}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs px-2.5 py-1 rounded bg-muted-subtle text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 font-sans text-sm">
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  Demo
                </a>
              )}
              {project.links.writeup && (
                <a
                  href={project.links.writeup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  Writeup
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
