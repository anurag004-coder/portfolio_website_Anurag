export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureNote?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "Education" | "Experience" | "Milestone" | "Active Research";
  summary: string;
  points: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  code: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Anurag Ashu",
    shortName: "Anurag",
    title: "BTech CSE | AI/ML & Agentic Systems Developer",
    subtitle: "BTech CSE | AI/ML & Agentic Systems Developer",
    status: "Currently Engineering Agentic AI & Autonomous LLM Systems",
    location: "India",
    email: "anuragjha724@gmail.com",
    github: "https://github.com/anurag004-coder",
    linkedin: "https://www.linkedin.com/in/anurag-ashu-834837263",
    tagline: "Engineering autonomous agentic workflows and fine-tuned Transformer systems with mathematical rigor.",
    bioShort:
      "BTech CSE developer specializing in Agentic AI architectures, Autonomous LLM Workflows, Transformer Fine-Tuning, and production-grade Machine Learning software.",
    bioLong: [
      "I am an AI/ML developer and Computer Science & Engineering student specializing in building practical, high-leverage intelligent systems. My current research and active development focus heavily on Agentic AI and Large Language Models (LLMs)—architecting autonomous reasoning loops, multi-agent coordination, structured tool calling, and high-precision RAG pipelines.",
      "Beyond agentic systems, I develop and deploy custom fine-tuned Transformer models (such as DistilRoBERTa for domain-specific financial sentiment analysis on Hugging Face Hub) and classical predictive architectures (like XGBoost regressors for biometric telemetry).",
      "I approach software engineering with a philosophy of architectural minimalism, uncompromising precision, and deep mathematical grounding—transforming state-of-the-art AI research into resilient, production-ready applications."
    ],
    currentFocus: {
      title: "Agentic AI & LLMs",
      subtitle: "Active Engineering & R&D",
      summary:
        "Actively designing autonomous multi-agent systems, ReAct planning loops, tool-augmented LLMs, and deterministic execution graphs for complex problem solving.",
      pillars: [
        {
          name: "Autonomous Agent Architectures",
          detail: "Building self-reflecting, multi-agent frameworks with dynamic delegation and feedback loops."
        },
        {
          name: "LLM Fine-Tuning & Quantization",
          detail: "Specializing sequence models for domain accuracy, parameter efficiency (LoRA/PEFT), and edge inference."
        },
        {
          name: "Advanced RAG & Knowledge Retrieval",
          detail: "Dense vector indexing, hybrid semantic-keyword retrieval, and context compression."
        }
      ]
    },
    stats: [
      { label: "Active Core Focus", value: "Agentic AI & LLMs" },
      { label: "Public ML Repos", value: "5+" },
      { label: "Fine-Tuned Models", value: "Transformers" },
      { label: "Live Cloud Deployments", value: "Active" }
    ]
  },

  skills: [
    {
      category: "Agentic AI & Large Language Models",
      code: "SYS.01",
      description: "Autonomous reasoning agents, multi-agent collaboration, tool integration, and specialized LLMs",
      skills: [
        { name: "Agentic Workflows" },
        { name: "Multi-Agent Systems" },
        { name: "LangGraph / LangChain" },
        { name: "Tool & Function Calling" },
        { name: "ReAct & Planning Loops" },
        { name: "RAG & Vector Retrieval" },
        { name: "LLM Fine-Tuning (PEFT/LoRA)" },
        { name: "Prompt & Reasoning Design" }
      ]
    },
    {
      category: "Machine Learning & Deep Learning",
      code: "SYS.02",
      description: "Neural network architectures, model training, sequence classification, and computer vision",
      skills: [
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "Hugging Face Transformers" },
        { name: "DistilRoBERTa & BERT" },
        { name: "Scikit-Learn" },
        { name: "XGBoost & Ensembles" },
        { name: "CNNs & Computer Vision" },
        { name: "Tokenization & Embeddings" }
      ]
    },
    {
      category: "Engineering & Web Delivery",
      code: "SYS.03",
      description: "Robust languages and frontend/backend systems for intelligent software execution",
      skills: [
        { name: "Python (NumPy, Pandas)" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Streamlit (Full-Stack ML)" },
        { name: "Next.js & React" },
        { name: "FastAPI / REST APIs" },
        { name: "C / C++" },
        { name: "Tailored Modern CSS" }
      ]
    },
    {
      category: "Data, Infrastructure & Cloud",
      code: "SYS.04",
      description: "Vector indexing, model serialization, containerization, and interactive cloud deployment",
      skills: [
        { name: "Git & GitHub" },
        { name: "Hugging Face Hub" },
        { name: "Streamlit Cloud" },
        { name: "Vector DBs & Embeddings" },
        { name: "Linux / Bash" },
        { name: "Model Serialization (Pickle/SAV)" },
        { name: "Vercel & Cloud CI/CD" },
        { name: "Jupyter & Colab" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "custom-sentiment-dashboard",
      title: "Custom Sentiment Analysis Dashboard",
      category: "Natural Language Processing",
      badge: "Hugging Face Fine-Tuned",
      architectureNote: "Transformer Encoder • Sequence Classification • Hugging Face Hub",
      description:
        "Interactive web-based NLP platform powered by a custom fine-tuned Transformer model hosted on the Hugging Face Hub, delivering real-time sentiment classification and batch dataset processing.",
      highlights: [
        "Custom fine-tuned Transformer sequence classification model migrated to Hugging Face Model Hub",
        "Real-time text inference with percentage-based confidence scoring",
        "Batch CSV/Excel ingestion pipeline for bulk enterprise sentiment extraction",
        "Deployed on Streamlit Community Cloud with optimized memory footprint"
      ],
      tech: ["Python", "Hugging Face Transformers", "PyTorch", "Streamlit", "Cloud Deployment"],
      githubUrl:
        "https://github.com/anurag004-coder/Custom-Sentiment-Analysis-Dashboard-fine-tuned-AI-model.",
      liveUrl:
        "https://custom-sentiment-analysis-dashboard-fine-tuned-ai-model-pkgxql.streamlit.app/",
      featured: true
    },
    {
      id: "financial-sentiment-analyzer",
      title: "Context-Aware Financial Sentiment Analyzer",
      category: "Financial NLP & Deep Learning",
      badge: "DistilRoBERTa Specialization",
      architectureNote: "Domain-Adapted Transformer • Financial PhraseBank • Real-Time Scoring",
      description:
        "End-to-end Machine Learning web application tailored to decode specialized financial terminology and market vernacular, classifying corporate statements into Positive, Negative, or Neutral sentiment.",
      highlights: [
        "Built on domain-optimized DistilRoBERTa architecture for specialized financial vocabulary",
        "Resolves common NLP pitfalls with business jargon (e.g. 'cost cutting' or 'headcount optimization')",
        "Automated Financial PhraseBank ingestion with dynamic batch size evaluation (1–50 items)",
        "Real-time confidence metrics and interactive color-coded sentiment telemetry"
      ],
      tech: [
        "Python",
        "DistilRoBERTa",
        "Hugging Face",
        "PyTorch",
        "Streamlit",
        "Pandas"
      ],
      githubUrl: "https://github.com/anurag004-coder/Financial_Sentiment_Analyzer",
      liveUrl: "https://financialsentimentanalyzer04.streamlit.app/",
      featured: true
    },
    {
      id: "calories-burnt-prediction",
      title: "Calories Burnt Prediction & Bio-Metric Analytics",
      category: "Predictive Modeling & Regressors",
      badge: "XGBoost Architecture",
      architectureNote: "Gradient Boosted Trees • Biometric Telemetry • Serialized Model",
      description:
        "Machine Learning web application estimating calorie expenditure during exercise sessions by processing multi-dimensional physiological and biometric data.",
      highlights: [
        "High-performance XGBoost Regressor trained on extensive exercise and physiological telemetry",
        "Integrated BMI calculator, metabolic activity level classifier, and metric tracking",
        "Model serialization and caching for sub-50ms inference times",
        "Interactive graphical analytics and downloadable prediction breakdown reports"
      ],
      tech: ["Python", "XGBoost", "Scikit-Learn", "NumPy", "Pandas", "Streamlit", "Matplotlib"],
      githubUrl: "https://github.com/anurag004-coder/CaloriesBurntPrediction_App",
      featured: true
    },
    {
      id: "computer-vision-cnn",
      title: "Deep Learning Vision & CNN Diagnostic Suite",
      category: "Computer Vision & Deep Learning",
      badge: "Convolutional Neural Nets",
      architectureNote: "Multi-layer CNN • OpenCV Augmentation • Spatial Feature Maps",
      description:
        "Comprehensive deep learning and computer vision repository featuring custom CNN architectures for face mask detection, digit classification, and diagnostic image recognition.",
      highlights: [
        "Custom multi-layer Convolutional Neural Network (CNN) trained with OpenCV preprocessing",
        "Robust image augmentation pipeline to handle lighting variations and occlusions",
        "Comparative benchmark against classical ML baselines (SVM, Random Forests)",
        "Jupyter Notebook workflow with loss/accuracy convergence curves and confusion matrices"
      ],
      tech: ["Python", "PyTorch", "TensorFlow / Keras", "OpenCV", "Scikit-Learn", "Jupyter"],
      githubUrl: "https://github.com/anurag004-coder/ml_projects",
      featured: true
    },
    {
      id: "diabetes-prediction-app",
      title: "Clinical Diagnostic & Health Risk Evaluator",
      category: "Medical Diagnostics & Classification",
      badge: "Predictive Analytics",
      architectureNote: "Supervised Classifier • Risk Stratification • Streamlit GUI",
      description:
        "Diagnostic health evaluation web app analyzing 8 clinical biomarkers to assess diabetes risk probabilities with instant confidence gauges.",
      highlights: [
        "Supervised classification model trained on clinical diagnostic dataset",
        "Probability confidence visualization and risk stratification tiers (Low, Moderate, High)",
        "Interactive multi-parameter sliders for glucose, insulin, BMI, and blood pressure",
        "Instant visual summary bar charts for patient health telemetry"
      ],
      tech: ["Python", "Scikit-Learn", "Streamlit", "NumPy", "Pandas", "Pickle"],
      githubUrl: "https://github.com/anurag004-coder/Streamlit_Projects",
      featured: false
    }
  ] as Project[],

  experience: [
    {
      period: "Current Focus",
      title: "Agentic AI & Autonomous LLM Systems Research",
      organization: "Autonomous AI R&D",
      location: "Independent Research",
      type: "Active Research",
      summary:
        "Actively designing, implementing, and evaluating autonomous agent frameworks powered by modern Large Language Models (LLMs), structured tool use, and multi-agent delegation.",
      points: [
        "Developing autonomous reasoning agents utilizing ReAct and planning graphs for deterministic, multi-step problem solving.",
        "Architecting high-recall Retrieval-Augmented Generation (RAG) pipelines integrating dense embeddings with semantic search.",
        "Investigating LLM context optimization, function/tool-calling reliability, and autonomous memory management."
      ],
      tags: ["Agentic AI", "LLMs", "LangGraph", "Multi-Agent", "RAG", "Autonomous Systems"]
    },
    {
      period: "2023 – Present",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Engineering University",
      location: "India",
      type: "Education",
      summary:
        "Pursuing comprehensive undergraduate engineering education with an intense focus on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and Distributed Computing.",
      points: [
        "Core coursework in Machine Learning, Deep Neural Networks, Natural Language Processing, Operating Systems, Database Management Systems, and Software Engineering.",
        "Hands-on research and prototyping in Transformer fine-tuning, sequence classification, and computer vision CNN architectures.",
        "Active technical contributor and project builder with multiple open-source ML implementations and deployed web applications."
      ],
      tags: ["BTech CSE", "AI / ML", "Deep Learning", "Algorithms", "Mathematics for ML"]
    },
    {
      period: "2023 – Present",
      title: "AI/ML Developer & Model Engineer",
      organization: "Independent & Open Source Projects",
      location: "Remote / GitHub",
      type: "Experience",
      summary:
        "Engineering, training, fine-tuning, and deploying end-to-end machine learning and NLP applications using modern open-source toolchains.",
      points: [
        "Trained and fine-tuned Transformer models (DistilRoBERTa, BERT variants) for financial text and sentiment classification, publishing weights to Hugging Face Hub.",
        "Engineered production-ready Streamlit web applications with real-time inference, batch dataset ingestion, and interactive telemetry dashboards.",
        "Applied ensemble machine learning algorithms (XGBoost, Random Forests) and deep CNNs for predictive regression and computer vision tasks.",
        "Maintained rigorous version control and deployment pipelines connecting GitHub repositories with Streamlit Community Cloud and Vercel."
      ],
      tags: ["Hugging Face", "PyTorch", "Transformers", "Streamlit", "Python", "Git/GitHub"]
    },
    {
      period: "Milestones",
      title: "Key Projects & Model Deployments",
      organization: "Hugging Face & Streamlit Community Cloud",
      location: "Cloud Deployments",
      type: "Milestone",
      summary:
        "Milestones in deploying live interactive AI systems accessible worldwide for domain-specific evaluation.",
      points: [
        "Deployed live Custom Sentiment Analysis Dashboard on Streamlit Cloud with Hugging Face integration.",
        "Architected Context-Aware Financial Sentiment Analyzer processing real-world financial phrases with contextual nuance.",
        "Built predictive biomedical regressor estimating exercise caloric burn with XGBoost."
      ],
      tags: ["Live Demos", "Cloud Deployment", "Production ML", "Open Source"]
    }
  ] as ExperienceItem[]
};
