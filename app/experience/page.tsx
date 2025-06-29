import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Advay's Professional Experience",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <article
            key={index}
            className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4"
          >
            <div className="mb-2">
              <h2 className="text-lg font-semibold text-black dark:text-white">
                {experience.role}
              </h2>
              <h3 className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                {experience.company}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {experience.start_date} - {experience.end_date}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}