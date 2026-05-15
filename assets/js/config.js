/* ===========================
   Portfolio Configuration
   Edit this file to update every piece of content on the site.
   =========================== */
const PORTFOLIO_CONFIG = {

  // ── Identity ──────────────────────────────────────────────
  name:        'Dang Thai Gia Thuan',
  shortName:   'Thuan.',           // loader logo + nav logo + footer logo
  title:       'AI Engineer | QC Specialist | Creative Developer',
  email:       'giathuandang16031999@gmail.com',
  location:    'Ho Chi Minh City, Vietnam',
  github:      'https://github.com/giathuan0506',
  linkedin:    'https://www.linkedin.com/in/giathuandang/',
  // twitter:     'your-twitter-handle',
  // huggingface: 'your-hf-profile',
  resumeUrl:   'assets/resume.pdf',
  avatarEmoji: '🧑‍💻',           // shown until you add a real photo
  avatarImage: 'assets/images/avatar.jpg',  // uncomment to use a photo

  // ── Meta / SEO ────────────────────────────────────────────
  meta: {
    description:   'Personal portfolio of Dang Thai Gia Thuan — AI Engineer, QC Specialist, and Creative Technologist.',
    ogTitle:       'Gia Thuan | AI Engineer & Creative Developer',
    ogDescription: 'Building intelligent Vision systems and ensuring high-quality digital products.',
    faviconEmoji:  '⚡',
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    availableBadge: 'Available for opportunities',
    greeting:       "Hi, I'm",
    description:    'I build intelligent systems and craft beautiful digital experiences — from training neural networks to designing products that people love. Passionate about the intersection of AI and creative technology.',
    primaryBtn:     { label: 'View My Work',  href: '#projects' },
    secondaryBtn:   { label: "Let's Talk →",  href: '#contact'  },
    floatingBadges: [
      { emoji: '🤖', label: 'AI Engineer',  position: 'top-left'    },
      { emoji: '🛡️', label: 'QC/QA Expert', position: 'bottom-right' },
      { emoji: '🎨', label: 'Creative AI',  position: 'top-right'   },
    ],
  },

  // ── Typewriter roles ──────────────────────────────────────
  roles: [
    'AI Engineer',
    'Machine Learning Dev',
    'QC Specialist',
    'Creative Technologist',
  ],

  // ── Hero stats ────────────────────────────────────────────
  stats: [
    { value: 3,  suffix: '+', label: 'Years Experience'   },
    { value: 20, suffix: '+', label: 'Projects Built'     },
    { value: 10, suffix: '+', label: 'AI Models Deployed' },
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    label:          'About Me',
    titleLine1:     'Where Technical Precision Meets',
    titleHighlight: 'Creative Innovation',
    paragraphs: [
      "I am a Computer Science graduate from VNU-HCM University of Science. I possess a solid foundation in AI and a rigorous approach to Quality Control (QC/QA), ensuring that neural networks aren't just accurate, but production-ready.",
      "I am passionate about leveraging Generative AI for creative workflows — ranging from automated OCR systems to high-end commercial video production using multi-model pipelines (ChatGPT, Dreamina, and Canva).",
    ],
    yearsBuilding: 3,
    cards: [
      { icon: '🧠', title: 'AI / ML',         desc: 'YOLOv8, OpenCV, Image Transformation'     },
      { icon: '💻', title: 'AI Deployment',   desc: 'Gradio, API Integration & OCR Pipelines'  },
      { icon: '🛡️', title: 'Quality Control', desc: 'Technical QA & Product Quality Excellence'},
      { icon: '🎨', title: 'Creative Design', desc: 'GenAI Workflows, Motion Ads & Styling'    },
    ],
  },

  // ── Skills ────────────────────────────────────────────────
  skills: {
    label:          'Technical Expertise',
    title:          'Skills & ',
    titleHighlight: 'Technologies',
    desc:           'A versatile toolkit blending system development, quality assurance, and aesthetic design.',
    categories: [
      {
        icon:  '🤖',
        title: 'AI & Machine Learning',
        items: [
          { name: 'PyTorch / TensorFlow',             level: 90 },
          { name: 'NLP / Transformers (HuggingFace)', level: 85 },
          { name: 'Computer Vision (OpenCV, YOLO)',   level: 80 },
          { name: 'LLM Fine-tuning / RAG',            level: 82 },
          { name: 'Generative AI (Diffusion, GANs)',  level: 75 },
        ],
      },
      {
        icon:  '🛡️',
        title: 'QC & Quality Assurance',
        items: [
          { name: 'Technical QC/QA',          level: 90 },
          { name: 'Image Quality Validation', level: 85 },
          { name: 'Process Optimization',     level: 80 },
        ],
      },
      {
        icon:  '🎨',
        title: 'Design & Creative',
        items: [
          { name: 'AI Video Production (Dreamina)', level: 85 },
          { name: 'Graphic Design (Canva/Figma)',   level: 80 },
          { name: 'Digital Image Editing',          level: 85 },
          { name: 'Workflow Automation',            level: 88 },
          { name: 'Brand & Visual Identity',        level: 78 },
        ],
      },
    ],
    badges: [
      '🐍 Python', '🔥 PyTorch', '👁️ OpenCV', '📦 YOLOv8',
      '🤖 VietOCR', '⚡ Gradio', '🤗 HuggingFace', '🎨 Canva', 
      '📊 Pandas', '🧮 NumPy', '🐙 Git / GitHub',
      '🎭 Stable Diffusion', '✨ Dreamina'
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: {
    label:          'Portfolio',
    title:          'Featured ',
    titleHighlight: 'Projects',
    viewAllLabel:   'View More on GitHub',
    items: [
      {
        featured:        true,
        category:        'design',
        icon:            '🧴',
        previewEmoji:    '🎬',
        previewGradient: 'gallery-grad-4',
        title:           'AI Luxury Serum Ad',
        desc:            'A high-end product commercial created via a full AI pipeline: ChatGPT for concepting, Dreamina for motion generation, and Canva for visual messaging optimization.',
        tags:            ['GenAI', 'Dreamina', 'Canva', 'Motion'],
        language:        { name: 'AI Motion', color: '#3572A5' },
      },
      {
        category: 'ai',
        icon:     '🎨',
        title:    'Image Style Transformation',
        desc:     'Developed an AI pipeline using Stable Diffusion XL and InstantID to transform portraits into anime styles while preserving identity. Integrated ControlNet (Pose/Canny) and InsightFace for precise structural control.',
        tags:     ['Stable Diffusion XL', 'InstantID', 'ControlNet', 'PyTorch'],
        github:   'https://github.com/giathuan0506/Image-style-transformation',
        language: { name: 'Python', color: '#3572A5' },
      },
      {
        category: 'ai',
        icon:     '🥤',
        title:    'Drink Detection System',
        desc:     'Real-time beverage recognition system using YOLOv8, trained on a custom dataset with a Gradio-based web interface.',
        tags:     ['YOLOv8', 'Gradio', 'Computer Vision'],
        language: { name: 'Python', color: '#ec4899' },
      },
      {
        category: 'ai',
        icon:     '🧾',
        title:    'OCR Invoice Pipeline',
        desc:     'Automated data extraction pipeline for invoices using VLM models and VietOCR, reducing manual entry time by 80%.',
        tags:     ['OCR', 'VietOCR', 'Automation'],
        github:   'https://github.com/giathuan0506/INVOICE_EXTRACTION',
        language: { name: 'Python', color: '#f1e05a' },
      },
    ],
  },

  // ── Creative Gallery ──────────────────────────────────────
  creative: {
    label:          'Creative Portfolio',
    title:          'Design & ',
    titleHighlight: 'Creative Work',
    desc:           'Visual designs, motion graphics, AI-generated art, and creative experiments.',
    items: [
      { type: 'motion', size: 'wide',   gradient: 'gallery-grad-4', emoji: '🎬', subtitle: 'AI Commercial',      title: 'Luxury Serum Ad',         info: 'Dreamina + Canva',            videoSrc:  'assets/videos/20_ Chiết xuất keo ong Kháng khuẩn, bảo vệ da và tăng cường sức khỏe làn da..mp4' },
      { type: 'ai-art', size: 'wide',   gradient: 'gallery-grad-3', emoji: '🎨', subtitle: 'Anime Style Transfer', title: 'Photo → Anime',           info: 'Stable Diffusion + ControlNet', imageSrc: 'assets/images/report/result_p17_0.jpg' },
      { type: 'ai-art', size: 'square', gradient: 'gallery-grad-2', emoji: '🎨', subtitle: 'Pixar Style Transfer',  title: 'Photo → Pixar',           info: 'Stable Diffusion + InstantID',  imageSrc: 'assets/images/report/result_p24_0.jpg' },
      { type: 'ai-art', size: 'wide',   gradient: 'gallery-grad-6', emoji: '🎨', subtitle: 'Disney Style Transfer', title: 'Photo → Disney',          info: 'Stable Diffusion + InstantID',  imageSrc: 'assets/images/report/result_p27_0.jpg' },
      { type: 'ui',     size: 'tall',   gradient: 'gallery-grad-1', emoji: '📄', subtitle: 'Design Report',         title: 'Project Report',          info: 'PDF Document',                  reportUrl: 'assets/report/Report.pdf' },
    ],
  },

  // ── Career ────────────────────────────────────────────────
  career: {
    label:          'My Journey',
    title:          'Career & ',
    titleHighlight: 'Ambitions',
    desc:           "Where I've been — and where I'm headed.",
    timeline: [
      {
        date:    '2022 – Present',
        role:    'Quality Control Specialist',
        company: 'KBM Company · Ho Chi Minh City',
        desc:    'Overseeing product and image quality. Implementing analytical techniques to optimize output standards and ensure visual consistency.',
      },
      {
        date:    '2021 – 2022',
        role:    'AI Engineer',
        company: 'Emage Development',
        desc:    'Developed computer vision models for image recognition and classification tasks.',
      },
      {
        date:    '2017 – 2022',
        role:    'B.Sc. Computer Science',
        company: 'University of Science, VNU-HCM',
        desc:    'Majored in AI & Data Science. Graduated with distinction. Focused on Transformer models and Deep Learning research.',
      },
    ],
    ambitions: [
      { icon: '🚀', title: 'AI Creative Studio', desc: 'Founding a creative lab driven by AI-powered automation.'},
      { icon: '🛡️', title: 'Quality Innovation', desc: 'Redefining QA/QC processes with cutting-edge AI solutions.'},

    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    label:          'Get In Touch',
    title:          "Let's ",
    titleHighlight: 'Work Together',
    desc:           "Whether it's an AI project, full-stack development, creative collaboration, or just a good conversation about technology — my inbox is always open.",
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    text:  '© 2025 Thuan. Built with ❤️ and lots of cà phê.',
    links: [
      { label: 'About',    href: '#about'    },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact',  href: '#contact'  },
    ],
  },

  // ── GitHub live projects fetch ────────────────────────────
  showGithubProjects: false,
};

