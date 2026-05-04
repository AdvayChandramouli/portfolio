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
    description:
      "A research tool for forecasting blood biomarker changes after clinical prescription adminstration.",
    detailedDescription:
      "BlueBlood explores how time-series models can anticipate biomarker trajectories following prescription events, giving clinicians an early signal of treatment response. The pipeline ingests longitudinal lab data from BigQuery, trains forecasting models in TensorFlow/Keras on SageMaker, and surfaces per-patient predictions through a lightweight research interface.",
    tags: [
      "Python",
      "Time-Series Forecasting",
      "TensorFlow",
      "Keras",
      "AWS SageMaker",
      "Amazon S3",
      "EC2",
      "Google BigQuery",
    ],
    links: { code: "https://github.com/vaipos/Blue-Blood-ACM-Research" },
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
    description:
      "End-to-end ML diagnostic pipeline for classifying cancerous breast-histopathology scans.",
    detailedDescription:
      "A convolutional pipeline that processes whole-slide histopathology patches and flags regions consistent with invasive ductal carcinoma. The project covers the full lifecycle: dataset preparation, augmentation, model training in TensorFlow/Keras, and evaluation against held-out clinical samples.",
    tags: ["Python", "TensorFlow", "Keras", "Clinical Research"],
    links: {
      code: "https://github.com/AdvayChandramouli/IDC-Detection",
    },
  },
  {
    title: "SafeDrive",
    description: "Full-stack mobile application for distracted-driving risk mitigation.",
    detailedDescription:
      "SafeDrive pairs an on-device computer vision model with a Flutter mobile app to detect distracted-driving behaviors in real time. A YOLOv5 detector classifies driver state from the front-facing camera, while Firebase syncs trip metadata and alerts so drivers and trusted contacts can review risk patterns over time.",
    tags: ["Flutter", "Dart", "Computer Vision", "YOLOv5", "Firebase"],
    links: {
      code: "https://github.com/acm-projects/SafeDrive",
    },
  },
];
