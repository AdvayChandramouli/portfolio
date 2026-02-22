import { publications } from "@/lib/content";

export function Publications() {
  return (
    <section
      id="publications"
      className="scroll-mt-20"
      aria-labelledby="publications-heading"
    >
      <h2
        id="publications-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Publications
      </h2>
      <ul className="space-y-6">
        {publications.map((pub) => (
          <li
            key={pub.title}
            className="border-b border-border pb-6 last:border-0 last:pb-0"
          >
            <p className="font-serif text-[1.05rem] text-foreground leading-relaxed mb-1">
              {pub.title}
            </p>
            <p className="font-sans text-sm text-muted-light mb-2">
              {pub.venue}
            </p>
            {pub.links && (
              <div className="flex flex-wrap gap-4 font-sans text-sm">
                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    Paper
                  </a>
                )}
                {pub.links.code && (
                  <a
                    href={pub.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    Code
                  </a>
                )}
                {pub.links.abstract && (
                  <a
                    href={pub.links.abstract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    Abstract
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
