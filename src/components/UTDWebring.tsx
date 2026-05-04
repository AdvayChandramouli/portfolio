import { site } from "@/lib/content";

const RING_ORIGIN = "https://ecs.utdring.com";
const WHITE_ICON_SRC = `${RING_ORIGIN}/icon.white.svg`;

function ringHref(nav?: "prev" | "next") {
  const base = `${RING_ORIGIN}/#${site.url}`;
  if (!nav) return base;
  return `${base}?nav=${nav}`;
}

const linkMuted =
  "text-muted hover:text-accent transition-colors duration-200 ease-out motion-reduce:transition-none rounded-md";

export function UTDWebring() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-glass-border bg-glass-bg px-2 py-1 font-sans text-xs font-normal leading-none text-muted shadow-glass backdrop-blur-md glass-backdrop-md transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:bg-glass-bg-hover hover:border-glass-border-hover hover:shadow-glass motion-reduce:transition-none">
      <a
        href={ringHref("prev")}
        target="_blank"
        rel="noopener noreferrer"
        className={`-mx-px inline-flex shrink-0 select-none px-1 py-0.5 ${linkMuted}`}
        aria-label="Previous site in UTD ECS Webring"
      >
        ←
      </a>
      <a
        href={ringHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`-mx-px inline-flex shrink-0 items-center px-1 py-0.5 group ${linkMuted}`}
        aria-label="UTD ECS Webring"
      >
        <span
          aria-hidden
          className="pointer-events-none aspect-[72/20] h-4 shrink-0 bg-muted opacity-40 transition-[background-color,opacity] duration-200 ease-out motion-reduce:transition-none group-hover:bg-accent group-hover:opacity-100 group-focus-visible:bg-accent group-focus-visible:opacity-100"
          style={{
            maskImage: `url("${WHITE_ICON_SRC}")`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url("${WHITE_ICON_SRC}")`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      </a>
      <a
        href={ringHref("next")}
        target="_blank"
        rel="noopener noreferrer"
        className={`-mx-px inline-flex shrink-0 select-none px-1 py-0.5 ${linkMuted}`}
        aria-label="Next site in UTD ECS Webring"
      >
        →
      </a>
    </div>
  );
}
