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
    description: "Medical diagnostic tool, leveraging ML to analyzes pre-treatment blood profiles and prescription medications to forecast post-treatment changes",
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
    description: "Mobile application with accountability and assistance features to mitigate the risks of distracted driving",
    url: "https://github.com/acm-projects/SafeDrive",
  },
];
