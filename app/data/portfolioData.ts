export interface FlagshipProject {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  measuredResult: {
    value: string;
    label: string;
    method: string;
  };
  designNotes: string;
  stack: string[];
  imageSrc?: string;
  diagramSrc?: string;
  imageAlt?: string;
  diagramAlt?: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface CompactProject {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  measuredResult: {
    value: string;
    label: string;
    method: string;
  };
  designNotes: string;
  stack: string[];
  imageSrc?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface InternshipItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const portfolioData = {
  personal: {
    name: "Anurag Ashu",
    shortName: "Anurag",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    university: "Adamas University",
    availability: "Graduating 2027 · open to ML internships and full-time roles",
    proofLine: "6 shipped projects with live demos",
    tagline: "Building computer vision, RAG with citations, and NLP systems end to end.",
    bio: "Final-year student specializing in practical AI systems. I focus on spatial computer vision, retrieval-augmented generation with verified source citations, and domain-adapted NLP sequence classification.",
    location: "Kolkata, India",
    email: "anuragjha724@gmail.com",
    github: "https://github.com/anurag004-coder",
    linkedin: "https://www.linkedin.com/in/anurag-ashu-834837263",
    canonicalUrl: "https://portfolio-website-anurag.vercel.app"
  },

  education: {
    university: "Adamas University",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    graduation: "Expected 2027",
    cgpa: "8.08 / 10.0 (through semester 6)",
    location: "Kolkata, India",
    coursework: [
      "Machine Learning & Pattern Recognition",
      "Deep Learning & Computer Vision",
      "Natural Language Processing",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems"
    ]
  },

  internships: [
    {
      role: "Data Scientist Intern",
      company: "Magillabs Technology Private Limited",
      period: "Jun 2026 – Jul 2026",
      location: "Remote",
      description: "Exploratory data analysis and baseline ML modeling on enterprise datasets.",
      bullets: [
        "Preprocessed multi-source tabular datasets and conducted distribution analysis for statistical anomaly detection.",
        "Built predictive machine learning baseline models and assembled reporting dashboards for metric tracking."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "InAmigos Foundation",
      period: "Jun 2026",
      location: "Remote",
      description: "Operational metric analysis and structured reporting.",
      bullets: [
        "Analyzed operational engagement data and compiled structured summary reports.",
        "Awarded Certificate of Appreciation for technical commitment and timely delivery."
      ]
    }
  ] as InternshipItem[],

  certifications: [
    {
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Aug 2026",
      credentialId: "330864404AAI26OFA"
    },
    {
      title: "Gen AI Tools Assessment (NSQF Level 5, Gold - 94%)",
      issuer: "IT-ITeS NASSCOM & Govt. of India",
      date: "Sep 2026",
      credentialId: "FSP/2026/9/10375254"
    },
    {
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      date: "2026",
      credentialId: "gn63wcnfm7nf-1787653034"
    },
    {
      title: "Claude with the Anthropic API",
      issuer: "Anthropic",
      date: "2026",
      credentialId: "ajeropc7do2r-1787637410"
    },
    {
      title: "Elements of AI (2 ECTS Credits)",
      issuer: "University of Helsinki & MinnaLearn",
      date: "Aug 2026",
      credentialId: "mooc.fi: vl3o2m921or"
    }
  ] as CertificationItem[],

  skills: [
    {
      category: "Languages",
      items: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL"]
    },
    {
      category: "Machine Learning & Vision",
      items: ["PyTorch", "YOLOv11x", "ByteTrack", "OpenCV", "Scikit-Learn", "XGBoost", "Hugging Face Transformers"]
    },
    {
      category: "RAG & Backend Systems",
      items: ["FastAPI", "Qdrant Vector DB", "BM25 Retrieval", "SQLite", "Docker", "Next.js", "Streamlit"]
    },
    {
      category: "Data & Evaluation Tools",
      items: ["Pandas", "NumPy", "Plotly", "Matplotlib", "Git", "Linux / Bash"]
    }
  ],

  // 3 Flagship Projects (Expanded)
  flagshipProjects: [
    {
      id: "football-analysis-computer-vision",
      title: "Autonomous Football Computer Vision & Tactical Pipeline",
      category: "Computer Vision & Spatial Analytics",
      problem:
        "Single-camera broadcast football footage lacks automated 2D pitch coordinates, space control maps, and player physical telemetry without costly multi-camera stadium rigs.",
      approach:
        "Implemented a two-pass computer vision pipeline coupling YOLOv11x detection with a modified ByteTrack algorithm, HSV pitch-masked K-Means kit clustering, 4-point planar homography projection onto FIFA pitch dimensions, and dynamic Voronoi space control partitions.",
      measuredResult: {
        value: "Feed: 1080p @ 30/60 fps",
        label: "Processed Input",
        method: "Evaluated on single uncalibrated broadcast footage without wearable GPS tracking"
      },
      designNotes:
        "YOLOv11x + ByteTrack tracking, 105m × 68m FIFA pitch model, dynamic Voronoi space partitions, passing volume network graphs. Tracking ID stability not formally benchmarked on standard MOT test datasets.",
      stack: ["Python", "PyTorch", "YOLOv11x", "ByteTrack", "OpenCV", "Docker", "Vercel"],
      imageSrc: "/projects/football-cv.jpg",
      diagramSrc: "/projects/football-cv-arch.svg",
      imageAlt: "Football computer vision tracking showing player bounding boxes and tactical radar",
      diagramAlt: "Football analytics computer vision pipeline architecture diagram",
      liveUrl: "https://football-analysis-computer-vision-eight.vercel.app/",
      githubUrl: "https://github.com/anurag004-coder/football-analysis-computer-vision"
    },
    {
      id: "studymind",
      title: "StudyMind — Grounded Study Assistant with Verified Citations",
      category: "Retrieval-Augmented Generation (RAG)",
      problem:
        "Conventional conversational LLMs frequently hallucinate facts and lack verbatim citations when students query dense textbooks, lecture slides, and research papers.",
      approach:
        "Developed a retrieval pipeline combining Reciprocal Rank Fusion of dense embeddings and lexical BM25 search, untrusted context fencing to mitigate prompt injection, deterministic quote-matching with PDF split-viewer highlighting, and explicit abstention when evidence is insufficient.",
      measuredResult: {
        value: "Verbatim Quote-Matching",
        label: "Grounding Precision",
        method: "Every factual claim bound to verified source chunk; clean abstention when evidence is weak"
      },
      designNotes:
        "Hybrid retrieval (dense vector embeddings + lexical BM25), Qdrant vector database, sliding-window rate limit (60 req/min per user), tenant data isolation.",
      stack: ["Python", "FastAPI", "Qdrant", "SQLAlchemy", "BM25", "Docker", "Vercel"],
      diagramSrc: "/projects/studymind-arch.svg",
      diagramAlt: "StudyMind grounded retrieval and citation verification architecture diagram",
      liveUrl: "https://frontend-mu-seven-gmmp4fw1jh.vercel.app",
      githubUrl: "https://github.com/anurag004-coder/studymind"
    },
    {
      id: "mono-time",
      title: "Mono Time — Timepiece Storefront & Wrist-Fit Sizing Calculator",
      category: "Full-Stack Web & Sizing Heuristics",
      problem:
        "Online watch buyers cannot verify whether a specific case diameter and lug-to-lug span will fit their wrist circumference, leading to sizing return rates, while standard e-commerce bots lack inventory-grounded recommendation logic.",
      approach:
        "Built a boutique storefront combining procedural 3D chronometer rendering in Three.js, a trigonometric wrist-fit calculator mapping circumference to flat wrist width to evaluate lug overhang, and an AI horology assistant with local offline RAG fallback and persistent SQLite order storage.",
      measuredResult: {
        value: "Lug Overhang Check",
        label: "Fit Validation",
        method: "Trigonometric evaluation mapping wrist circumference to flat wrist surface width"
      },
      designNotes:
        "Next.js App Router, Three.js WebGL procedural watch model, FastAPI REST backend, in-memory IP rate limiter (6 req/min), SQLite relational database for orders.",
      stack: ["Next.js", "TypeScript", "FastAPI", "SQLite", "Three.js", "Tailwind CSS"],
      imageSrc: "/projects/mono-time.png",
      imageAlt: "Mono Time storefront interface with watch details and sizing calculations",
      githubUrl: "https://github.com/anurag004-coder/mono-time"
    }
  ] as FlagshipProject[],

  // Compact Projects
  compactProjects: [
    {
      id: "financial-sentiment-analyzer",
      title: "Context-Aware Financial Sentiment Analyzer",
      category: "Financial NLP & Sequence Modeling",
      problem:
        "General sentiment models misinterpret financial idioms, treating cost-cutting or restructuring as negative rather than positive investor signals.",
      approach:
        "Deployed a specialized DistilRoBERTa sequence classification pipeline to evaluate corporate earnings statements, tested against Financial PhraseBank with dynamic batch evaluation (1–50 items).",
      measuredResult: {
        value: "98.23% Accuracy",
        label: "Benchmark Accuracy",
        method: "Evaluated on Financial PhraseBank (sentences_allagree test set, batch size 1–50)"
      },
      designNotes:
        "DistilRoBERTa backbone (mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis), 3-class softmax (Positive, Negative, Neutral), Streamlit web interface.",
      stack: ["Python", "DistilRoBERTa", "Hugging Face", "PyTorch", "Streamlit", "Pandas"],
      liveUrl: "https://financialsentimentanalyzer04.streamlit.app/",
      githubUrl: "https://github.com/anurag004-coder/Financial_Sentiment_Analyzer"
    },
    {
      id: "custom-sentiment-dashboard",
      title: "Custom Sentiment Analysis Transformer Dashboard",
      category: "NLP & Sequence Classification",
      problem:
        "Off-the-shelf sentiment models lack domain-adapted sequence classification and intuitive interfaces for batch dataset analysis.",
      approach:
        "Fine-tuned a DistilBERT sequence classification model (Anurag4848/sentiment-analysis-custom), published weights to Hugging Face Hub, and engineered an interactive Streamlit application supporting single-sentence evaluation and bulk CSV ingestion.",
      measuredResult: {
        value: "Inference Verified",
        label: "Model Execution",
        method: "Batch and single-text evaluation verified; not formally benchmarked on a public held-out split"
      },
      designNotes:
        "DistilBERT sequence classification encoder (66.95M parameters) hosted on Hugging Face Model Hub, Streamlit Cloud deployment with Plotly distribution charts.",
      stack: ["Python", "PyTorch", "Hugging Face Transformers", "Streamlit", "Plotly"],
      liveUrl: "https://custom-sentiment-analysis-dashboard-fine-tuned-ai-model-pkgxql.streamlit.app/",
      githubUrl: "https://github.com/anurag004-coder/Custom-Sentiment-Analysis-Dashboard-fine-tuned-AI-model."
    }
  ] as CompactProject[],

  // Compact "More Projects" Row
  moreProjects: [
    {
      id: "calories-burnt-prediction",
      title: "Calorie Expenditure Prediction Engine",
      category: "Predictive Modeling & Regression",
      problem:
        "Estimating caloric burn during exercise requires non-linear regression across multiple correlated physiological and telemetry signals.",
      approach:
        "Cleaned and normalized multi-dimensional exercise telemetry, trained an XGBoost Regressor on 15,000 samples (80/20 train/test split: 12,000 train, 3,000 test), and serialized the model with Pickle for low-latency web inference.",
      measuredResult: {
        value: "MAE = 1.48 kcal",
        label: "Mean Absolute Error",
        method: "Measured on 3,000 held-out test samples (7 biometric features: heart rate, duration, body temp, weight, height, age, sex)"
      },
      designNotes:
        "XGBoost Regressor (300 estimators, learning rate 0.05, max depth 5), serialized model file cached in memory, Streamlit GUI with BMI calculation.",
      stack: ["Python", "XGBoost", "Scikit-Learn", "NumPy", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/anurag004-coder/CaloriesBurntPrediction_App"
    }
  ] as CompactProject[]
};
