import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Flare",
    description:
      "A night-shift console that turns produced-water telemetry into a repair plan a technician can run from a phone or Ray-Ban Meta glasses.",
    tags: [
      "Next.js",
      "TypeScript",
      "Swift",
      "Gemini",
      "TimescaleDB",
      "Meta Wearables SDK",
      "Photon",
      "ElevenLabs",
    ],
    links: {
      code: "https://github.com/Siriapps/HackUTD-26",
    },
    detailedDescription:
      "Full-stack application, built at HackUTD 2026 for EOG Resources' Track, that reads facility telemetry and forecasts failures with a cost-effective solution. Field technicians are notified using Photon, with a recommended plan.  ElevenLabs acts as the night-time voice agent, to provide them with a briefing of the outage. These diagnostics are transmitted from TigerData (TimescaleDB) to Gemini 3.8 Live, where technicians are guided through the repair plan from their Wearable Devices (Meta RayBans) with runbooks and operator handoff documentation autonomously created in the background.",
    highlight: "Winner of MLH Best Use of Tiger Data at HackUTD 2026",
  },
  {
    title: "ATLAS",
    description:
      "Multimodal deep learning for U.S. data center classification from satellite imagery and environmental features.",
    tags: ["Python", "Amazon S3", "Multimodal AI", "ResNet-18", "SmallCNN", "Google Earth Engine"],
    links: {
      code: "https://github.com/acm-research-f26/ATLAS",
    },
    detailedDescription:
      "Fall 2026 ACM Research project applying multimodal deep learning to classify data centers and estimate operational scale from high-resolution satellite imagery and structured environmental and infrastructure features. A triple-encoder architecture combines ResNet-18 image embeddings, SmallCNN for USGS DEMs with an MLP over tabular inputs, trained on AWS with a four-way ablation study.",
  },
  {
    title: "StateOfMind",
    description:
      "A privacy-first macOS menubar app that turns spoken thoughts into structured journal entries.",
    tags: ["Swift", "SwiftUI", "Whisper", "Ollama", "SwiftData", "macOS"],
    links: {
      code: "https://github.com/AdvayChandramouli/StateOfMind",
    },
    detailedDescription:
      "Menu-bar journaling app for macOS. Hold a key, speak, and release \u2014 the app transcribes your thoughts locally (Whisper/Apple Speech), then uses Ollama to clean up the text, tag themes, and analyze sentiment. All data stays on disk in SwiftData with no cloud sync or account required. A menubar dashboard tracks streaks and word counts, and a 988 safety banner surfaces when high-risk signals are detected in recent entries.",
  },
  {
    title: "YouTube Intelligence Platform",
    description:
      "A full-stack web platform for monitoring emerging trends in public health video forum content.",
    tags: [
      "Next.js",
      "Python",
      "Amazon Bedrock",
      "AWS Lambda",
      "Amazon ECR",
      "Ollama",
      "FastAPI",
      "Supabase",
      "Render",
    ],
    links: {
      code: "https://github.com/orgs/CS4485-Team-10/repositories",
    },
    detailedDescription:
      "A full-stack web platform that allows users to monitor narratives and discourse from public health video forum content. It leverages LLMs and Natural-Language Processing (NLP) pipelines to transform raw video data into structured, generalizable insights.",
    image: "/projects/YTIP_HomePage.png",
    imageCaption:
      "Home page of the YouTube Intelligence Platform, outlining video metadata and generated structured insights.",
    highlight: "Senior Capstone Design Project, mentored by Dr. Selim Sarac.",
  },
  {
    title: "BlueBlood",
    description:
      "A research tool for forecasting blood biomarker changes after clinical prescription adminstration.",
    tags: [
      "Python",
      "TensorFlow/Keras",
      "AWS SageMaker",
      "Amazon EC2",
      "Amazon S3",
      "Google BigQuery",
    ],
    links: {
      code: "https://github.com/vaipos/Blue-Blood-ACM-Research",
    },
    detailedDescription:
      "BlueBlood explores how time-series models can anticipate biomarker changes following prescription administration, giving clinicians an early signal of adverse drug reactions (ADRs). The pipeline ingests raw clinical records from MIMIC-III via Google BigQuery, trains forecasting models in TensorFlow/Keras on AWS SageMaker, and surfaces per-patient predictions through a lightweight research interface.",
    image: "/projects/BlueBlood_Temp.jpg",
    imageCaption: "Showcasing BlueBlood at ACM Research Symposium (Spring 2025).",
  },
  {
    title: "Invasive Ductal Carcinoma (IDC) Detection",
    description:
      "End-to-end ML diagnostic pipeline for classifying cancerous breast-histopathology scans.",
    tags: ["Python", "TensorFlow", "Keras", "Clinical Research"],
    links: {
      code: "https://github.com/AdvayChandramouli/IDC-Detection",
    },
    detailedDescription:
      "A convolutional pipeline that processes whole-slide histopathology patches and flags regions consistent with invasive ductal carcinoma. The project covers the full lifecycle: dataset preparation, augmentation, model training in TensorFlow/Keras, and evaluation against held-out clinical samples.",
    image: "/projects/IDC-Detection-Poster.jpg",
    imageCaption: "Project poster, nominated for AI4ALL's Research Symposium.",
  },
  {
    title: "SafeDrive",
    description: "Full-stack mobile application for distracted-driving risk mitigation.",
    tags: ["Flutter", "Dart", "Computer Vision", "YOLOv5", "Firebase"],
    links: {
      code: "https://github.com/acm-projects/SafeDrive",
    },
    detailedDescription:
      "SafeDrive pairs an on-device computer vision model with a Flutter mobile app to detect distracted-driving behaviors in real time. A YOLOv5 detector classifies driver state from the front-facing camera, while Firebase syncs trip metadata and alerts so drivers and trusted contacts can review risk patterns over time.",
    image: "/projects/SafeDrive.jpg",
    imageCaption: "Team SafeDrive at ACM Projects Presentation Night (Fall 2023).",
  },
];
