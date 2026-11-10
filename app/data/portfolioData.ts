export interface CaseStudyProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  problem: string;
  approach: string;
  architectureDetails: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  verifiedStatus: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  focus: string;
  coursework: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Anurag Ashu",
    shortName: "Anurag",
    headline: "AI & ML Engineer",
    role: "Final-Year B.Tech in AI & ML",
    tagline: "Building end-to-end computer vision pipelines, grounded RAG agents, and fine-tuned transformer models.",
    summary:
      "Final-year B.Tech student in Artificial Intelligence and Machine Learning. I build working AI systems from data pipeline to deployment—specializing in spatial computer vision, retrieval-augmented generation with verified citations, and domain-adapted Transformer fine-tuning.",
    location: "India",
    email: "anuragjha724@gmail.com",
    github: "https://github.com/anurag004-coder",
    linkedin: "https://www.linkedin.com/in/anurag-ashu-834837263",
    canonicalUrl: "https://portfolio-website-anurag.vercel.app"
  },

  skills: [
    {
      category: "Computer Vision & Spatial Intelligence",
      skills: ["YOLOv11", "ByteTrack", "OpenCV", "Planar Homography", "HSV Color Masking", "Voronoi Partitioning"]
    },
    {
      category: "LLMs, RAG & Agentic Systems",
      skills: ["FastAPI", "Qdrant Vector DB", "Reciprocal Rank Fusion (RRF)", "BM25 Retrieval", "Citation Verification", "LangChain / Graph Flow"]
    },
    {
      category: "Deep Learning & Transformers",
      skills: ["PyTorch", "Hugging Face Transformers", "DistilBERT", "DistilRoBERTa", "Model Fine-Tuning", "Tokenization"]
    },
    {
      category: "Classical ML & Predictive Systems",
      skills: ["Scikit-Learn", "XGBoost", "Feature Engineering", "Model Serialization (Pickle/SAV)", "NumPy", "Pandas"]
    },
    {
      category: "Engineering & Cloud Deployment",
      skills: ["Python", "TypeScript", "Next.js", "Docker", "Streamlit Cloud", "Vercel", "Git & GitHub", "REST APIs"]
    }
  ] as SkillGroup[],

  projects: [
    {
      id: "football-analysis-computer-vision",
      title: "Autonomous Football Computer Vision & Tactical Analytics Pipeline",
      category: "Computer Vision & Spatial Intelligence",
      badge: "Spatial CV Pipeline",
      problem:
        "Broadcast match video lacks 2D metric pitch coordinates, dynamic space ownership partitions, and player physical telemetry without costly stadium multi-camera tracking systems.",
      approach:
        "Built a two-pass computer vision pipeline coupling YOLOv11x object detection with a modified ByteTrack algorithm, HSV color-space torso extraction with K-Means kit clustering, FIFA planar homography projection, dynamic Voronoi space control partitions, and directed passing networks.",
      architectureDetails: [
        "YOLOv11x detection paired with modified ByteTrack multi-object tracking",
        "HSV color-space torso masking with K-Means clustering for zero-label squad identification",
        "Planar perspective projection mapping 1080p broadcast pixels onto FIFA 105m × 68m coordinates",
        "Dynamic Voronoi space dominance computation and passing volume network graphs"
      ],
      metrics: [
        { label: "ID Switch Rate", value: "0.00%", description: "Zero identity switches across complex occlusion sequences" },
        { label: "Homography Error", value: "<0.1 px", description: "Planar projection error mapped to 105m × 68m pitch" },
        { label: "Feed Resolution", value: "1080p @ 60fps", description: "Processes single-camera broadcast video without sensors" }
      ],
      tech: ["Python", "PyTorch", "YOLOv11x", "ByteTrack", "OpenCV", "Docker", "Vercel"],
      githubUrl: "https://github.com/anurag004-coder/football-analysis-computer-vision",
      liveUrl: "https://football-analysis-computer-vision-eight.vercel.app/",
      verifiedStatus: "Live Demo Verified (HTTP 200)"
    },
    {
      id: "studymind",
      title: "StudyMind — Grounded Study Assistant & Anti-Hallucination RAG",
      category: "Agentic RAG & Knowledge Retrieval",
      badge: "Grounded RAG",
      problem:
        "Conventional conversational LLMs frequently hallucinate facts and fail to provide verifiable citations when students query dense academic textbooks, lecture slides, and research papers.",
      approach:
        "Engineered a 5-layer anti-hallucination RAG pipeline combining Reciprocal Rank Fusion of dense embeddings and lexical BM25 search, prompt-injection context fencing, deterministic quote-matching with PDF split-viewer highlighting, and explicit abstention when retrieval evidence is insufficient.",
      architectureDetails: [
        "Hybrid retrieval (dense vector embeddings + lexical BM25) with Reciprocal Rank Fusion",
        "Untrusted context fencing to prevent prompt injection inside user documents",
        "Deterministic quote-matching and bounding-box synchronization to jump directly to PDF source pages",
        "Natural language inference claim verification with clean refusal when evidence is weak"
      ],
      metrics: [
        { label: "Citation Rule", value: "100% Verifiable", description: "Every factual claim bound to an exact verbatim source chunk" },
        { label: "Hallucination Defense", value: "5-Layer Pipeline", description: "NLI claim checking with deterministic refusal" },
        { label: "Rate Limiting", value: "60 req / min", description: "Sliding-window limiter with tenant workspace isolation" }
      ],
      tech: ["Python", "FastAPI", "Qdrant Vector DB", "SQLAlchemy 2.0", "BM25", "Docker", "Vercel"],
      githubUrl: "https://github.com/anurag004-coder/studymind",
      liveUrl: "https://frontend-mu-seven-gmmp4fw1jh.vercel.app",
      verifiedStatus: "Live Demo Verified (HTTP 200)"
    },
    {
      id: "mono-time",
      title: "Mono Time — Luxury Horology Commerce & Multi-Agent Concierge",
      category: "Full-Stack AI & Intelligent Commerce",
      badge: "Multi-Agent System",
      problem:
        "Luxury timepiece e-commerce suffers from flat 2D catalogs, wrist-fit sizing uncertainty, and disconnected chatbots that hallucinate inventory or spam intrusive cards.",
      approach:
        "Engineered a full-stack boutique platform combining Three.js procedural 3D chronometer rendering, top-down SVG wrist-fit calculation (evaluating circumference to flat wrist width and lug-to-lug proportions), and a Google Gemini AI concierge with offline local RAG fallback and relational order persistence.",
      architectureDetails: [
        "Procedural 3D chronometer engine built with Three.js / WebGL",
        "Trigonometric wrist-fit calculator mapping circumference to flat width and lug-to-lug overhang",
        "Docked Gemini concierge with offline local RAG fallback and token cost capping",
        "FastAPI REST gateway with relational SQLite persistence for orders and dwell sessions"
      ],
      metrics: [
        { label: "Sizing Logic", value: "0mm Overhang", description: "Trigonometric evaluation of lug overhang on flat wrist width" },
        { label: "Cost Guard", value: "6 req / min", description: "Per-IP sliding limiter with local offline RAG fallback" },
        { label: "Data Store", value: "Persistent SQLite", description: "Relational order transactions with admin session inspection" }
      ],
      tech: ["Next.js 14", "TypeScript", "FastAPI", "SQLite", "Three.js", "Tailwind CSS", "Google Gemini"],
      githubUrl: "https://github.com/anurag004-coder/mono-time",
      verifiedStatus: "Full-Stack Repository Verified"
    },
    {
      id: "custom-sentiment-dashboard",
      title: "Custom Sentiment Analysis Transformer Dashboard",
      category: "Natural Language Processing",
      badge: "Hugging Face Fine-Tuned",
      problem:
        "Standard off-the-shelf sentiment models lack domain-specific sequence classification accuracy and do not offer intuitive interfaces for bulk dataset processing.",
      approach:
        "Fine-tuned a DistilBERT sequence classification model (`Anurag4848/sentiment-analysis-custom`, 66.9M parameters), published weights to Hugging Face Model Hub, and engineered an interactive Streamlit dashboard supporting real-time text scoring and bulk CSV/Excel ingestion with distribution charts.",
      architectureDetails: [
        "DistilBERT sequence classification encoder fine-tuned and hosted on Hugging Face Hub",
        "Real-time tokenization and Softmax confidence score computation",
        "Batch CSV/Excel ingestion pipeline with automated distribution bar charts",
        "Resource-cached model loading for low-memory Streamlit Cloud execution"
      ],
      metrics: [
        { label: "Model Weights", value: "66.9M Params", description: "Fine-tuned DistilBERT model weights hosted on Hugging Face" },
        { label: "Inference Latency", value: "<100ms", description: "Cached in-memory model evaluation per text input" },
        { label: "Batch Pipeline", value: "CSV / Excel", description: "Bulk dataset ingestion with downloadable analysis reports" }
      ],
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "Streamlit", "Plotly"],
      githubUrl: "https://github.com/anurag004-coder/Custom-Sentiment-Analysis-Dashboard-fine-tuned-AI-model.",
      liveUrl: "https://custom-sentiment-analysis-dashboard-fine-tuned-ai-model-pkgxql.streamlit.app/",
      verifiedStatus: "Live Demo Verified (Streamlit Cloud)"
    },
    {
      id: "financial-sentiment-analyzer",
      title: "Context-Aware Financial Sentiment Analyzer",
      category: "Financial NLP & Deep Learning",
      badge: "DistilRoBERTa Specialization",
      problem:
        "Generic NLP sentiment analyzers invert polarity on financial terms (e.g. treating 'cost cutting' or 'headcount optimization' as negative rather than positive for company margins).",
      approach:
        "Trained a domain-specialized DistilRoBERTa sequence classification pipeline on the Financial PhraseBank dataset, contextualizing corporate statements into Positive, Negative, and Neutral sentiment with calibrated confidence scores.",
      architectureDetails: [
        "Domain-adapted DistilRoBERTa sequence classification architecture",
        "Financial PhraseBank integration for specialized corporate market vocabulary",
        "Real-time confidence scoring and dynamic batch testing (1–50 items)",
        "Streamlit web interface with immediate feedback telemetry"
      ],
      metrics: [
        { label: "Benchmark Dataset", value: "Financial PhraseBank", description: "Evaluated on corporate market disclosures and earnings" },
        { label: "Dynamic Batching", value: "1–50 Statements", description: "Evaluates batched financial phrases with error bounds" },
        { label: "Polarity Classes", value: "3-Class Softmax", description: "Calibrated Positive, Negative, and Neutral score gauges" }
      ],
      tech: ["Python", "DistilRoBERTa", "Hugging Face", "PyTorch", "Streamlit", "Pandas"],
      githubUrl: "https://github.com/anurag004-coder/Financial_Sentiment_Analyzer",
      liveUrl: "https://financialsentimentanalyzer04.streamlit.app/",
      verifiedStatus: "Live Demo Verified (Streamlit Cloud)"
    },
    {
      id: "calories-burnt-prediction",
      title: "Biometric Calorie Expenditure Prediction Engine",
      category: "Predictive Regressors & Analytics",
      badge: "XGBoost Regressor",
      problem:
        "Forecasting real-time caloric expenditure during physical activity requires non-linear regression across multiple correlated physiological and telemetry signals.",
      approach:
        "Trained and hyperparameter-tuned an XGBoost Regressor on exercise telemetry datasets (heart rate, body temperature, duration, age, weight), serialized the pipeline with Pickle, and deployed an interactive Streamlit application with BMI classification.",
      architectureDetails: [
        "XGBoost Regressor trained on biometric and physical activity telemetry",
        "Feature scaling and data preprocessing pipeline with Scikit-Learn",
        "Serialized model file (SAV/Pickle) cached for sub-50ms web inference",
        "Integrated BMI calculator and metabolic activity classification"
      ],
      metrics: [
        { label: "Inference Latency", value: "<50ms", description: "Sub-50ms cached execution via serialized model pipeline" },
        { label: "Biometric Features", value: "7 Parameters", description: "Heart rate, duration, body temp, height, weight, age, sex" },
        { label: "Model Type", value: "Gradient Boosted Trees", description: "XGBoost regressor with non-linear feature interaction" }
      ],
      tech: ["Python", "XGBoost", "Scikit-Learn", "NumPy", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/anurag004-coder/CaloriesBurntPrediction_App",
      verifiedStatus: "Repository Verified"
    }
  ] as CaseStudyProject[],

  education: [
    {
      period: "2023 – Present (Final Year)",
      degree: "B.Tech in Artificial Intelligence & Machine Learning / CSE",
      institution: "Undergraduate Engineering",
      location: "India",
      focus: "Machine Learning, Deep Neural Networks, Natural Language Processing, and Distributed Systems.",
      coursework: [
        "Machine Learning & Pattern Recognition",
        "Deep Learning & Computer Vision",
        "Natural Language Processing",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems"
      ]
    }
  ] as EducationItem[]
};
