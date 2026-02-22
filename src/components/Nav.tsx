"use client";

import { useState, useEffect, useCallback } from "react";

const navItems = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#publications", label: "Publications", id: "publications" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const SECTION_IDS = navItems.map((item) => item.id);

function getActiveSection(): string | null {
  if (typeof window === "undefined") return null;
  const scrollY = window.scrollY;
  const viewportThird = window.innerHeight / 3;
  let active: string | null = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= viewportThird) {
      active = id;
    }
  }
  return active;
}

function updateHash(sectionId: string | null) {
  if (typeof window === "undefined") return;
  const url = sectionId
    ? `${window.location.pathname}#${sectionId}`
    : window.location.pathname;
  history.replaceState(null, "", url);
}

export function Nav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const next = getActiveSection();
    setActiveSection(next);
  }, []);

  useEffect(() => {
    updateHash(activeSection);
  }, [activeSection]);

  useEffect(() => {
    setActiveSection(getActiveSection());
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-content mx-auto px-6 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded ${
                    isActive
                      ? "text-accent font-medium underline underline-offset-4 decoration-accent"
                      : "text-muted hover:text-accent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
