"use client";

import { useCallback, useRef, useState } from "react";
import type { Project } from "@/lib/types";
import { ExpandableProjectCard } from "@/components/ExpandableProjectCard";
import { ProjectDetailOverlay } from "@/components/ProjectDetailOverlay";
import { projects } from "@/lib/content";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const handleOpen = useCallback((project: Project, opener: HTMLElement) => {
    openerRef.current = opener;
    setSelected(project);
  }, []);

  const handleDismiss = useCallback(() => {
    setSelected(null);
    requestAnimationFrame(() => openerRef.current?.focus({ preventScroll: true }));
    openerRef.current = null;
  }, []);

  return (
    <section id="projects" className="scroll-mt-20" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ExpandableProjectCard key={project.title} project={project} onOpen={handleOpen} />
        ))}
      </div>

      {selected ? (
        <ProjectDetailOverlay key={selected.title} project={selected} onDismiss={handleDismiss} />
      ) : null}
    </section>
  );
}
