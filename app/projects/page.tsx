import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Advay's Project Experience",
};

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        {
          <div className="space-y-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 sm:gap-x-4 border-l-2 border-neutral-200 dark:border-neutral-700 pl-4"
              >
                <Link href={project.url}>
                  <h2 className="text-black dark:text-white font-medium text-xl hover:underline cursor-pointer">{project.title}</h2>
                </Link>
    
                <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
              </article>
            ))}
          </div>
        }
      </div>
    </section>
  );
}
