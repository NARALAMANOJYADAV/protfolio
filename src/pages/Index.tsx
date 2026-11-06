import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Brain, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  ChevronDown,
  CreditCard,
  User,
  FolderGit2,
  Calendar,
  Send,
  Check,
  Copy
} from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { DeveloperCards } from '@/components/DeveloperCards';

const Index = () => {
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');

  const copyEmail = () => {
    navigator.clipboard.writeText('manojnarala245@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const categories = ['All', 'Full Stack', 'AI & Computer Vision', 'Web Development', 'Machine Learning'];
  const filteredProjects = projectFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectFilter);

  const skillGroups = [
    {
      category: 'Artificial Intelligence & Computer Vision',
      icon: Brain,
      color: 'bg-[#FFF1F2] border-[#E3170A]',
      tagBg: 'bg-[#FFE4E6] text-[#9F1239] border-[#E3170A]/30',
      skills: ['YOLOv8 Real-Time Vision', 'OpenCV Video Processing', 'Machine Learning (Scikit-Learn)', 'Deep Learning (PyTorch, CNN)', 'Custom Dataset Annotation', 'Image Classification']
    },
    {
      category: 'Full-Stack & Backend Microservices',
      icon: Cpu,
      color: 'bg-[#F0FDF4] border-[#00A86B]',
      tagBg: 'bg-[#DCFCE7] text-[#166534] border-[#00A86B]/30',
      skills: ['Python (Flask, FastAPI)', 'Java & OOP Design', 'Relational Databases (MySQL, PostgreSQL)', 'RESTful API Architecture', 'Session Auth & JWT', 'Microservices']
    },
    {
      category: 'Frontend Engineering & Interfaces',
      icon: Layers,
      color: 'bg-[#EFF6FF] border-[#3B82F6]',
      tagBg: 'bg-[#DBEAFE] text-[#1E40AF] border-[#3B82F6]/30',
      skills: ['React.js & TypeScript', 'Tailwind CSS & Styling', 'Responsive Mobile Layouts', 'Vite & Web Tooling', 'Component Architecture', 'Performance Optimization']
    },
    {
      category: 'DevOps, Tooling & Cloud Platforms',
      icon: Code2,
      color: 'bg-[#F5F3FF] border-[#8B5CF6]',
      tagBg: 'bg-[#EDE9FE] text-[#5B21B6] border-[#8B5CF6]/30',
      skills: ['Git Version Control & GitHub', 'Linux Shell & Terminal', 'Postman API Testing', 'Render & Netlify Cloud Hosting', 'Structured Data (Schema.org)', 'Production Debugging']
    }
  ];

  const timeline = [
    {
      period: '2022 - 2026',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'NBKR Institute of Science & Technology (NBKRIST)',
      location: 'Vidyanagar, Nellore, AP',
      badge: 'Academic Foundation',
      description: 'Core coursework in Algorithms, Machine Learning, Deep Learning, DBMS, Operating Systems, and Distributed Architectures. Active developer in college hackathons and coding clubs.',
      color: 'bg-[#FFCC00] text-black'
    },
    {
      period: '2024 - 2025',
      title: 'Full-Stack & AI Engineering Internships',
      institution: 'Applied AI & Web Industry Engagements',
      location: 'Remote / Hybrid',
      badge: 'Practical Experience',
      description: 'Built scalable Python microservices (Flask), integrated real-time YOLOv8 object detection pipelines, and developed interactive frontend systems with React and TypeScript.',
      color: 'bg-[#E3170A] text-white'
    },
    {
      period: '2023 - Present',
      title: 'Open-Source AI & Web Ecosystem',
      institution: 'GitHub (NARALAMANOJYADAV & naralamanoj)',
      location: 'Global',
      badge: 'Open Source',
      description: 'Authored 25+ open-source repositories spanning AI chatbots, student counseling portals, restaurant systems, and computer vision models.',
      color: 'bg-[#00A86B] text-white'
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans bg-[#FFCC00] text-[#18181B] selection:bg-black selection:text-[#FFCC00]">
      
      {/* =========================================================================
          TOP STICKY FLOATING NAVBAR
          ========================================================================= */}
      <nav className="fixed top-3 inset-x-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl rounded-full bg-white/95 backdrop-blur-md border-3 border-black text-black px-4 sm:px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto flex items-center justify-between">
          
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="px-2.5 py-1 rounded-xl bg-black text-[#FFCC00] font-black text-xs sm:text-sm tracking-wider shadow-sm group-hover:bg-[#E3170A] group-hover:text-white transition-colors">
              NMY
            </span>
            <div className="flex flex-col text-left">
              <span className="font-black text-xs sm:text-sm tracking-tight leading-none text-black">
                NARALA MANOJ YADAV
              </span>
              <span className="font-mono text-[9px] font-bold text-neutral-600 hidden sm:inline">
                @naralamanojyadav
              </span>
            </div>
          </a>

          {/* Quick Anchor Links */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-black">
            <a href="#about" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">About</a>
            <a href="#cards" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">Cards</a>
            <a href="#skills" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">Skills</a>
            <a href="#projects" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">Projects</a>
            <a href="#experience" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">Experience</a>
            <a href="#contact" className="px-3 py-1.5 rounded-xl hover:bg-[#FFCC00] transition-colors">Contact</a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/NARALA-MANOJ-Resume.pdf"
              download
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black border-2 border-black font-black text-xs transition-transform active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-black" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#E3170A] hover:bg-[#C91408] text-white border-2 border-black font-black text-xs transition-transform active:scale-95 shadow-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </nav>


      {/* =========================================================================
          SECTION 1: HERO / STARTING STAGE (#home)
          Clean, proportional Mishunov composition with balanced typography
          ========================================================================= */}
      <header id="home" className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-24 pb-8 bg-[#FFCC00]">
        
        {/* Typographic Title Area */}
        <div className="w-full max-w-4xl text-center mb-4 sm:mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#FFCC00] font-black text-[11px] uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
            <span>AI &amp; Data Science Engineer • Full-Stack Developer</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black uppercase leading-[1.05]">
            Narala Manoj Yadav
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800">
            NBKRIST Class of 2026 • Computer Vision • Scalable Web Systems
          </p>
        </div>

        {/* Central Character Presentation Flanked by Quick Jump Buttons */}
        <div className="w-full max-w-4xl my-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          
          {/* Center Character Box */}
          <div className="relative flex flex-col items-center">
            
            {/* Interactive Cartoon Speech Bubble */}
            <div className="relative mb-2 animate-bounce z-20">
              <div className="px-3.5 py-1.5 rounded-2xl bg-black text-[#FFCC00] border-2 border-black shadow-lg flex items-center gap-2">
                <span className="text-sm">👋</span>
                <span className="font-black text-xs sm:text-sm tracking-tight">
                  Hi, I'm Manoj!
                </span>
                <span className="text-[10px] font-mono text-neutral-300">
                  (@naralamanojyadav)
                </span>
              </div>
              <div className="w-2.5 h-2.5 bg-black rotate-45 mx-auto -mt-1.5" />
            </div>

            {/* Avatar Frame with 3D / Real Switcher */}
            <div className="relative w-[260px] sm:w-[300px] rounded-3xl p-3 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
              
              {/* Switcher Toggle Pill */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 rounded-full bg-black/90 backdrop-blur-md shadow-md">
                <button
                  type="button"
                  onClick={() => setAvatarMode('3d')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                    avatarMode === '3d'
                      ? 'bg-[#FFCC00] text-black shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  ✨ 3D
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarMode('photo')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                    avatarMode === 'photo'
                      ? 'bg-[#FFCC00] text-black shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  📷 Photo
                </button>
              </div>

              {/* Avatar Image Frame */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFF9D2] relative border-2 border-black shadow-inner">
                {avatarMode === '3d' ? (
                  <picture>
                    <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
                    <img
                      src="/narala-manoj-transparent.png"
                      alt="Narala Manoj Yadav - 3D Character Avatar"
                      width="704"
                      height="938"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </picture>
                ) : (
                  <img
                    src="/narala-manoj-yadav.jpg"
                    alt="Narala Manoj Yadav - Official Portrait"
                    width="704"
                    height="772"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                )}

                {/* Lower Plaque Badge */}
                <div className="absolute bottom-2.5 inset-x-2.5 p-2 rounded-xl bg-white/95 border-2 border-black shadow-md flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-black text-xs text-black">Narala Manoj Yadav</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <p className="text-[9px] font-mono text-neutral-600">NBKRIST • B.Tech AI &amp; DS</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-600 text-emerald-800 text-[9px] font-black">
                    2026 Batch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Jump Buttons Column */}
          <div className="flex flex-col gap-2.5 w-full sm:w-[320px]">
            <a
              href="#about"
              className="p-3.5 rounded-2xl bg-white hover:bg-neutral-50 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#FFF8CC] text-black border border-black">
                  <User className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h2 className="font-black text-sm text-black">About Narala Manoj</h2>
                  <p className="text-[10px] text-neutral-600 font-bold">Biography, Philosophy &amp; Vision</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#cards"
              className="p-3.5 rounded-2xl bg-[#FFF9D2] hover:bg-[#FFF3A3] text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-black text-[#FFCC00]">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h2 className="font-black text-sm text-black">Information Cards</h2>
                  <p className="text-[10px] text-neutral-600 font-bold">Structured Developer Containers</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#skills"
              className="p-3.5 rounded-2xl bg-[#00A86B] hover:bg-[#00925c] text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-[#00A86B]">
                  <Cpu className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h2 className="font-black text-sm text-white">Skills &amp; Capabilities</h2>
                  <p className="text-[10px] text-white/80 font-bold">AI, YOLOv8, Flask, React, SQL</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="p-3.5 rounded-2xl bg-[#E3170A] hover:bg-[#c91408] text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-[#E3170A]">
                  <FolderGit2 className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h2 className="font-black text-sm text-white">Featured Projects</h2>
                  <p className="text-[10px] text-white/80 font-bold">Counseling, YOLOv8 &amp; Live Demos</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Social Dock & Scroll Indicator */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-3 mt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black border-2 border-black text-[#FFCC00] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            <a
              href="https://github.com/NARALAMANOJYADAV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub (Main)</span>
            </a>

            <a
              href="https://github.com/naralamanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub (Alt)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/narala-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#00A0DC] font-bold text-xs transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE066] text-black font-black text-xs transition-all shadow-sm active:scale-95"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{copiedEmail ? 'Copied!' : 'Email Me'}</span>
            </button>
          </div>

          <a 
            href="#about" 
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black/80 hover:text-black transition-colors"
          >
            <span>Scroll to explore full portfolio</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </header>


      {/* =========================================================================
          SECTION 2: ABOUT NARALA MANOJ YADAV (#about)
          Rich narrative, background, and academic pillars
          ========================================================================= */}
      <section id="about" className="w-full bg-[#FFFBEB] border-t-4 border-black py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
              Biography &amp; Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black mt-2">
              About Narala Manoj Yadav
            </h2>
            <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1 max-w-xl mx-auto">
              Artificial Intelligence &amp; Data Science engineer with a track record of bridging applied machine learning with full-stack web architectures.
            </p>
          </div>

          {/* Narrative & Metrics */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Story Box */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
              <h3 className="text-xl font-black text-black">
                Engineering Philosophy
              </h3>
              <p>
                I am <strong className="text-black font-black">Narala Manoj Yadav</strong> (<span className="font-mono text-xs font-bold bg-neutral-100 px-2 py-0.5 rounded border border-black/20">@naralamanojyadav</span>), pursuing my Bachelor of Technology in <strong>Artificial Intelligence &amp; Data Science</strong> at <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>, Vidyanagar (2022–2026).
              </p>
              <p>
                My passion is architecting production systems where machine learning models don't just stay in Jupyter notebooks, but power real-time software applications. Over the last four years, I have built real-time computer vision classifiers with YOLOv8, created comprehensive student counseling platforms in Python Flask, and delivered modern frontend applications in React and TypeScript.
              </p>
              <p>
                Whether designing relational database schemas in MySQL, fine-tuning neural networks for campus safety, or polishing responsive user interfaces, I emphasize maintainable code, low latency, and intuitive user experiences.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href="/about"
                  className="px-4 py-2 rounded-xl bg-black text-[#FFCC00] font-black text-xs hover:bg-neutral-800 transition-colors"
                >
                  View Dedicated About Page →
                </a>
                <a
                  href="/NARALA-MANOJ-Resume.pdf"
                  download
                  className="px-4 py-2 rounded-xl bg-neutral-100 text-black border-2 border-black font-black text-xs hover:bg-neutral-200 transition-colors"
                >
                  Download Resume PDF
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#FFF1F2] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-3xl font-black text-[#E3170A]">10+</div>
                <div className="text-[11px] font-mono font-bold text-neutral-700 uppercase mt-0.5">Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#EFF6FF] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-3xl font-black text-[#0077B5]">3+</div>
                <div className="text-[11px] font-mono font-bold text-neutral-700 uppercase mt-0.5">Internships</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F0FDF4] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-3xl font-black text-[#00A86B]">25+</div>
                <div className="text-[11px] font-mono font-bold text-neutral-700 uppercase mt-0.5">Repositories</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FEF3C7] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-3xl font-black text-black">2026</div>
                <div className="text-[11px] font-mono font-bold text-neutral-700 uppercase mt-0.5">B.Tech Batch</div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-2.5 rounded-2xl bg-[#FFCC00] text-black w-fit mb-3 border-2 border-black">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-black text-base text-black mb-1">Education at NBKRIST</h3>
              <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                Autonomous institution NAAC A+ accredited. Rigorous training in Computer Science, Data Structures, and Applied Artificial Intelligence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-2.5 rounded-2xl bg-[#00A86B] text-white w-fit mb-3 border-2 border-black">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-black text-base text-black mb-1">AI &amp; Computer Vision</h3>
              <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                Real-world experience in YOLOv8, PyTorch, OpenCV, transfer learning, and deploying inference pipelines to edge cameras and servers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-2.5 rounded-2xl bg-[#0077B5] text-white w-fit mb-3 border-2 border-black">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-black text-base text-black mb-1">Full-Stack Development</h3>
              <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                Building responsive frontend web applications in React/TypeScript, combined with high-throughput Python and Java microservices.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: DEVELOPER CARD CONTAINERS (#cards)
          Card-type containers with structured fields as requested by user
          ========================================================================= */}
      <section id="cards" className="w-full bg-[#FFFFFF] border-t-4 border-black py-16 px-4 sm:px-6">
        <DeveloperCards />
      </section>


      {/* =========================================================================
          SECTION 4: TECHNICAL SKILLS & CAPABILITIES (#skills)
          ========================================================================= */}
      <section id="skills" className="w-full bg-[#F0FDF4] border-t-4 border-black py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black mt-2">
              Skills &amp; Technology Matrix
            </h2>
            <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1 max-w-xl mx-auto">
              Production frameworks, programming languages, and engineering libraries utilized across academic and industry projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div 
                  key={group.category}
                  className={`p-6 rounded-3xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${group.color}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-black text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-black text-base text-black">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-black font-mono px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${group.tagBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: FEATURED PROJECTS SHOWCASE (#projects)
          "Main thing is projects" - Real-world applications, demos, repos
          ========================================================================= */}
      <section id="projects" className="w-full bg-[#E0F2FE] border-t-4 border-black py-16 px-4 sm:px-6 text-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b-3 border-black">
            <div>
              <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
                Engineering Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black mt-2">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1 max-w-xl">
                Real-world full-stack architectures, deep learning models, and computer vision systems built by Narala Manoj Yadav.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black text-[#FFCC00] hover:bg-neutral-800 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <span>Dedicated Projects Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Project Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setProjectFilter(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                  projectFilter === c
                    ? 'bg-[#E3170A] text-white -translate-y-0.5'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Projects Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="p-5 sm:p-6 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full bg-black text-white">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">{project.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-black mb-1.5 group-hover:text-[#E3170A] transition-colors leading-snug">
                    <a href={`/projects/${project.slug}`}>
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-xs text-neutral-700 leading-relaxed font-medium mb-3 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlight Solution */}
                  <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-300 mb-4 text-[11px] font-medium text-neutral-700 line-clamp-2">
                    <strong className="text-black font-bold">Solution:</strong> {project.solution}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map(t => (
                      <span key={t} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-neutral-100 text-black border border-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-black hover:text-[#E3170A] underline"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-black text-[#FFCC00] hover:bg-neutral-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#00A86B] text-white hover:bg-[#008f5a] transition-colors"
                        title="Live Application Demo"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: EDUCATION & EXPERIENCE TIMELINE (#experience)
          ========================================================================= */}
      <section id="experience" className="w-full bg-[#FAF5FF] border-t-4 border-black py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black mt-2">
              Education &amp; Experience Journey
            </h2>
            <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1 max-w-xl mx-auto">
              Academic progression at NBKRIST, engineering internships, and continuous open-source software contributions.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div 
                key={item.title}
                className="p-6 rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border border-black ${item.color}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-600">{item.period}</span>
                  </div>

                  <h3 className="text-lg font-black text-black leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono font-bold text-[#E3170A]">
                    {item.institution} • {item.location}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 flex md:flex-col items-center gap-2">
                  <a
                    href="/about"
                    className="px-4 py-2 rounded-xl bg-black text-[#FFCC00] font-black text-xs hover:bg-neutral-800 transition-colors whitespace-nowrap"
                  >
                    View Bio Details →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: CONTACT / HIRE ME (#contact)
          ========================================================================= */}
      <section id="contact" className="w-full bg-[#18181B] text-white border-t-4 border-black py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border-3 border-white/20 shadow-[8px_8px_0px_0px_rgba(255,204,0,1)]">
            
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-[#FFCC00] text-black">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FFCC00] mt-3">
                Let's Build Something Together
              </h2>
              <p className="text-xs sm:text-sm font-bold text-neutral-300 mt-1 max-w-lg mx-auto">
                Open for Artificial Intelligence &amp; Full-Stack engineering roles, internships, and collaborative open-source projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-xs font-bold">
              <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-[#FFCC00]" /> Email:
                </span>
                <a href="mailto:manojnarala245@gmail.com" className="font-mono text-white hover:text-[#FFCC00] underline">
                  manojnarala245@gmail.com
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#00A86B]" /> Phone:
                </span>
                <a href="tel:+918106905004" className="font-mono text-white hover:text-[#00A86B]">
                  +91 8106905004
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#E3170A]" /> Location:
                </span>
                <span className="text-white">Nellore, Andhra Pradesh, IN</span>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-[#0077B5]" /> Institution:
                </span>
                <span className="text-white">NBKRIST (2022–2026)</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:manojnarala245@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFCC00] text-black font-black text-xs uppercase tracking-wider hover:bg-[#ffe066] transition-transform active:scale-95 shadow-md"
              >
                <Send className="h-4 w-4" />
                <span>Send Direct Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/narala-manoj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077B5] text-white font-black text-xs uppercase tracking-wider hover:bg-[#005f93] transition-transform active:scale-95 shadow-md"
              >
                <Linkedin className="h-4 w-4" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="/NARALA-MANOJ-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 text-white border border-neutral-600 font-black text-xs uppercase tracking-wider hover:bg-neutral-700 transition-transform active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          PERSISTENT SITE FOOTER
          ========================================================================= */}
      <footer className="w-full py-8 border-t-4 border-black bg-white text-black px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black text-[#FFCC00] font-black">NMY</span>
            <span>Narala Manoj Yadav • tech4.in</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline">Top</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#cards" className="hover:underline">Cards</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          <p className="text-neutral-600">&copy; 2026 Narala Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Index;
