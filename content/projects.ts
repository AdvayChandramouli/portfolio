import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "BlueBlood",
    description: "A research tool for forecasting blood biomarker changes after clinical prescription adminstration.",
    tags: ["Python", "Time-Series Forecasting", "TensorFlow", "Keras", "AWS SageMaker", "Amazon S3", "EC2", "Google BigQuery", ],
    links: {
      code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
    },
    highlight: "Processed 10M+ records with sub-second query latency.",
  },
  {
    title: "Invasive Ductal Carcinoma Detection Pipeline",
    description: "End-to-end ML diagnostic pipeline for classifying cancerous breast-histopathology scans.",
    tags: ["Python", "TensorFlow", "Keras", "Clinical Research"],
    links: {
      code: "https://github.com/AdvayChandramouli/IDC-Detection",
    },
    highlight: "500+ weekly downloads on npm.",
  },
  {
    title: "SafeDrive",
    description: "Full-stack mobile application for distracted-driving risk mitigation.",
    tags: ["Flutter", "Dart", "Computer Vision", "YOLOv5", "Firebase"],
    links: {
      code: "https://github.com/acm-projects/SafeDrive",
    },
  },
];
