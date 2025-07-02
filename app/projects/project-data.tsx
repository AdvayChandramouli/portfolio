export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
    {
    title: "BlueBlood: Predicting Medication Impact on Blood Biomarkers",
    year: 2025,
    description: "Medical diagnostic tool leveraging ML to analyze pre-treatment blood profiles and prescription medications to forecast post-treatment changes",
    url: "https://github.com/vaipos/Blue-Blood-ACM-Research",
  },
  {
    title: "Invasive Ductal Carcinoma (IDC) Detection",
    year: 2024,
    description: "Machine learning pipeline for breast cancer detection using whole-mount histopathology images",
    url: "https://github.com/AdvayChandramouli/IDC-Detection",
  },
  {
    title: "SafeDrive",
    year: 2023,
    description: "Mobile app featuring real-time collision detection, user analytics and interactive checklists for on-road accountability and assistance",
    url: "https://github.com/acm-projects/SafeDrive",
  },
];
