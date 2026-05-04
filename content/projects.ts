import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "YouTube Intelligence Platform",
    description:
      "A full-stack web platform for monitoring emerging trends in public health video forum content.",
    detailedDescription:
      "A full-stack web platform that allows users to monitor claims and narratives from public health video forum content. It leverages LLMs and Natural-Language Processing (NLP) pipelines to transform raw video data into structured, generalizable insights.",
    tags: [
      "Next.js",
      "Python",
      "AWS Lambda",
      "Amazon Bedrock",
      "Amazon ECR",
      "Ollama",
      "FastAPI",
      "Supabase",
      "Render",
    ],
    links: {
      code: "https://github.com/orgs/CS4485-Team-10/repositories",
    },
    highlight: "Senior Capstone Project, mentored by Dr. Selim Sarac.",
  },
  {
    title: "BlueBlood",
    description:
      "A research tool for forecasting blood biomarker changes after clinical prescription adminstration.",
    detailedDescription:
      "BlueBlood explores how time-series models can anticipate biomarker changes following prescription administration, giving clinicians an early signal of adverse drug reactions (ADRs). The pipeline ingests raw clinical records from MIMIC-III via Google BigQuery, trains forecasting models in TensorFlow/Keras on AWS SageMaker, and surfaces per-patient predictions through a lightweight research interface.",
    tags: [
      "Python",
      "TensorFlow/Keras",
      "AWS SageMaker",
      "Amazon S3",
      "Amazon EC2",
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
    image: "/projects/IDC-Detection-Poster.jpg",
    imageCaption: "Project poster, nominated for AI4ALL's Research Symposium.",
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
    image: "/projects/SafeDrive.jpg",
    imageCaption: "Team SafeDrive at ACM Projects Presentation Night (Fall 2023).",
    links: {
      code: "https://github.com/acm-projects/SafeDrive",
    },
  },
];
