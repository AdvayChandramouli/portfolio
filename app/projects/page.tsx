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
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {
          <div>
            {projects.map((project, index) => (
              <article
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 sm:gap-x-4 mb-4"
              >
                {/* <h2 className="text-black dark:text-white font-medium">{project.title}</h2> */}
                <h2 className="text-black dark:text-white font-medium text-xl">{project.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
              </article>
            ))}
          </div>
        }
      </div>
    </section>
  );
}
