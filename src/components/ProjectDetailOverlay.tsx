"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Project } from "@/lib/types";

const TRANSITION_MS = 280;

export function ProjectDetailOverlay({
  project,
  onDismiss,
}: {
  project: Project;
  onDismiss: () => void;
}) {
  const overlayId = useId();
  const titleId = `${overlayId}-title`;
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const closeRequestedRef = useRef(false);

  const requestClose = useCallback(() => {
    if (closeRequestedRef.current) return;
    closeRequestedRef.current = true;
    setLeaving(true);
    window.setTimeout(() => onDismiss(), TRANSITION_MS);
  }, [onDismiss]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        requestClose();
      }
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [requestClose]);

  const dimmed = leaving || !visible ? "opacity-0" : "opacity-100";
  const modalAnim =
    leaving || !visible
      ? "opacity-0 md:translate-y-2 md:scale-[0.99]"
      : "opacity-100 md:translate-y-0 md:scale-100";

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden" aria-live="polite">
      <div
        role="presentation"
        aria-hidden
        onClick={requestClose}
        className={`fixed inset-0 z-[60] bg-foreground/[0.08] backdrop-blur-sm transition-opacity duration-[280ms] ease-out motion-reduce:backdrop-blur-none motion-reduce:transition-none ${dimmed}`}
      />

      <div className="relative z-[61] mx-auto flex min-h-full justify-center px-4 py-16 md:items-center md:px-6 md:py-20 pointer-events-none">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          className={`pointer-events-auto my-auto w-full max-w-6xl rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md glass-backdrop-md shadow-glass duration-[280ms] ease-out transition-[opacity,transform] motion-reduce:transition-none ${modalAnim}`}
        >
          <button
            type="button"
            autoFocus
            onClick={() => requestClose()}
            aria-label="Close project details"
            className="absolute top-4 right-4 z-[1] flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:bg-muted-subtle hover:text-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="p-6 sm:p-8 pr-14">
            <div
              className={`flex flex-col gap-8 ${project.image ? "md:flex-row md:items-start md:gap-10" : ""}`}
            >
              {project.image ? (
                <figure className="w-full shrink-0 space-y-3 md:w-[44%] md:max-w-none md:self-start">
                  {/* Intrinsic height so the panel tracks the asset; cap very tall images in the viewport. */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- natural dimensions for layout */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-auto max-h-[min(75vh,720px)] w-full rounded-xl border border-border bg-muted-subtle object-contain"
                  />
                  {project.imageCaption ? (
                    <figcaption className="font-serif text-sm text-muted leading-relaxed text-center md:text-left">
                      {project.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}

              <div className="min-w-0 flex-1 flex flex-col gap-4">
                <h3
                  id={titleId}
                  className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-foreground"
                >
                  {project.title}
                </h3>
                <p className="font-serif text-[1.05rem] text-muted leading-relaxed">
                  {project.detailedDescription?.trim()
                    ? project.detailedDescription
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs px-2.5 py-1 rounded bg-muted-subtle text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.highlight ? (
                  <p className="font-sans text-sm text-accent/90">{project.highlight}</p>
                ) : null}
                <div className="flex flex-wrap gap-4 pt-2 font-sans text-sm">
                  {project.links.code ? (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-muted hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Code
                    </a>
                  ) : null}
                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      Demo
                    </a>
                  ) : null}
                  {project.links.writeup ? (
                    <a
                      href={project.links.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      Writeup
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
