import type { Project } from "@/lib/types";

export const projects: Project[] = [
  // {
  //   title: "YouTube Intelligence Platform",
  //   description: "A full-stack web platform for monitoring claims and narratives from public health video forum content.",
  //   tags: ["Next.js", "Python", "Ollama", "AWS Bedrock", "FastAPI", "Supabase", "Render"],
  //   links: {
  //     code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
  //   },
  //   highlight: "Senior Capstone Project, mentored by Dr. Selim Sarac."
  // },
  {
    title: "BlueBlood",
    description: "A research tool for forecasting blood biomarker changes after clinical prescription adminstration.",
    tags: ["Python", "Time-Series Forecasting", "TensorFlow", "Keras", "AWS SageMaker", "Amazon S3", "EC2", "Google BigQuery", ],
    links: { code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
    },
  },
  // {
  //   title: "SOCR: Sankrit OCR Tool",
  //   description: "Brief decsription",
  //   tags: ["Tools Used"],
  //   links: {
  //     code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
  //   },
  // },
  // {
  //   title: "PropSight",
  //   description: "asdf",
  //   tags: ["asdf"],
  //   links: {
  //     code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
  //   },
  // },
  {
    title: "Invasive Ductal Carcinoma Detection Pipeline",
    description: "End-to-end ML diagnostic pipeline for classifying cancerous breast-histopathology scans.",
    tags: ["Python", "TensorFlow", "Keras", "Clinical Research"],
    links: {
      code: "https://github.com/AdvayChandramouli/IDC-Detection",
    },
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
