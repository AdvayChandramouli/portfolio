export interface Experience {
  role: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string
}

// Add latest experiences to top of this list
export const experiences: Experience[] = [
    {
        role: "5G Radio Frequency Engineering Co-Op",
        company: "Verizon",
        description: "Incoming Fall 2025 GN&T Co-Op",
        start_date: "July 2025",
        end_date: "December 2025"
    },
    {
        role: "NSF Research Intern",
        company: "Marshall University",
        description: "NSF REU for Undergraduate Research in Data Analytics (URDA)",
        start_date: "May 2025",
        end_date: "July 2025"
    },
    {
        role: "Software Engineer Intern",
        company: "InGenius Studios",
        description: "Worked on building API data ingestion systems and CSV extraction pipelines.",
        start_date: "June 2024",
        end_date: "October 2024"
    },
    {
        role: "Front End Developer & Project Partner Liaison", 
        company: "Autism Treatment Center - UTDesign EPICS",
        description: "Developed a patient tracking app for an healthcare NPO, in partnership w/ UTD's Engineering Projects in Community Service (EPICS) program.",
        start_date: "August 2023",
        end_date: "December 2023",
    }
];
