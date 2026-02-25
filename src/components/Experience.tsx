import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="p-6 bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl shadow-glass transition-all duration-300 ease-out hover:bg-glass-bg-hover hover:border-glass-border-hover hover:shadow-glass hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h3 className="font-sans text-lg font-medium text-foreground">
                {job.role}
              </h3>
              <span className="font-sans text-sm text-muted-light">
                {job.dates}
              </span>
            </div>
            <p className="font-sans text-muted mb-4">{job.company}</p>
            <ul className="space-y-2">
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="font-serif text-foreground text-[1.05rem] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-muted-light"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
