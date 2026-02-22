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
                  className="inline-flex items-center gap-1.5 font-semibold text-muted hover:text-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
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
