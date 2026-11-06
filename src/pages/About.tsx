import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Code2, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Bot, 
  Cpu,
  Brain,
  Layers,
  GraduationCap,
  Calendar,
  Briefcase,
  ExternalLink,
  CreditCard,
  FolderGit2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { DeveloperCards } from '@/components/DeveloperCards';

const About = () => {
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('photo');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "About Narala Manoj Yadav | AI & Data Science | Official Portfolio";

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href');
    if (canonical) {
      canonical.setAttribute('href', 'https://tech4.in/about');
    }

    return () => {
      document.title = previousTitle;
      if (canonical && prevCanonical) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, []);

  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://tech4.in/about#webpage",
        "url": "https://tech4.in/about",
        "name": "About Narala Manoj Yadav - AI & Data Science Engineer",
        "description": "Biography, education, technical skills, and verified identity cards of Narala Manoj Yadav (naralamanojyadav).",
        "dateCreated": "2026-06-10T18:10:36+05:30",
        "dateModified": "2026-11-05T22:30:00+05:30",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://tech4.in/#person",
          "name": "Narala Manoj Yadav",
          "identifier": "naralamanojyadav",
          "description": "B.Tech in Artificial Intelligence & Data Science at NBKRIST, Full Stack Developer specializing in Python, Java, Machine Learning, and modern web applications.",
          "alternateName": [
            "Narala Manoj",
            "naralamanoj",
            "naralamanojyadav",
            "Manoj Narala"
          ],
          "url": "https://tech4.in/",
          "image": "https://tech4.in/narala-manoj-yadav.jpg",
          "jobTitle": "AI & Data Science Engineer | Full Stack Developer",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "NBKR Institute of Science & Technology",
            "url": "https://www.nbkrist.co.in/"
          },
          "email": "mailto:manojnarala245@gmail.com",
          "telephone": "+918106905004",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vidyanagar",
            "addressRegion": "Nellore, Andhra Pradesh",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://github.com/NARALAMANOJYADAV",
            "https://github.com/naralamanoj",
            "https://www.linkedin.com/in/narala-manoj"
          ]
        }
      }
    ]
  };

  const timeline = [
    {
      period: '2022 - 2026 (Expected)',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'NBKR Institute of Science & Technology (NBKRIST)',
      location: 'Vidyanagar, Nellore, AP',
      description: 'Core focus on Machine Learning, Deep Learning, Computer Vision (YOLOv8), Data Structures & Algorithms, Database Management Systems, and Distributed Web Architectures. Active participant in technical symposiums and coding hackathons.',
      badge: 'Academic Foundation',
      icon: GraduationCap,
      color: 'bg-[#FFCC00] text-black'
    },
    {
      period: '2024 - 2025',
      title: 'Full-Stack & AI Engineering Internships',
      institution: 'Industry Engagements & Applied AI Work',
      location: 'Remote / Hybrid',
      description: 'Engineered scalable backend microservices with Python (Flask/Django), automated computer vision workflows using YOLOv8 for uniform and mask detection, and delivered responsive web frontends with React and TypeScript.',
      badge: 'Practical Experience',
      icon: Briefcase,
      color: 'bg-[#E3170A] text-white'
    },
    {
      period: '2023 - Present',
      title: 'Open-Source AI & Web Ecosystem',
      institution: 'GitHub (NARALAMANOJYADAV & naralamanoj)',
      location: 'Global',
      description: 'Authored and published 25+ open-source repositories spanning AI chatbots, student counselling portals, restaurant management systems, and computer vision models. Actively maintaining clean documentation and modular code.',
      badge: 'Open Source',
      icon: Github,
      color: 'bg-[#00A86B] text-white'
    }
  ];

  const skillGroups = [
    {
      category: 'Artificial Intelligence & Vision',
      icon: Brain,
      color: 'border-[#E3170A] bg-[#FFF1F2]',
      tagBg: 'bg-[#FFE4E6] text-[#9F1239] border-[#E3170A]/30',
      skills: ['YOLOv8 Object Detection', 'Computer Vision (OpenCV)', 'Machine Learning (Scikit-Learn)', 'Deep Learning (PyTorch, CNN)', 'Natural Language Processing', 'Data Preprocessing & Pandas']
    },
    {
      category: 'Full-Stack & Backend Systems',
      icon: Cpu,
      color: 'border-[#00A86B] bg-[#F0FDF4]',
      tagBg: 'bg-[#DCFCE7] text-[#166534] border-[#00A86B]/30',
      skills: ['Python (Flask, FastAPI)', 'Java & Object-Oriented Design', 'SQL & Relational Databases (MySQL, PostgreSQL)', 'RESTful API Architecture', 'Authentication & Session Handling', 'MVC Architecture']
    },
    {
      category: 'Frontend Engineering & UI/UX',
      icon: Layers,
      color: 'border-[#3B82F6] bg-[#EFF6FF]',
      tagBg: 'bg-[#DBEAFE] text-[#1E40AF] border-[#3B82F6]/30',
      skills: ['React.js & Modern Hooks', 'TypeScript & JavaScript (ES6+)', 'Tailwind CSS & Styling', 'Responsive Mobile Design', 'Vite & Frontend Tooling', 'Web Performance & Accessibility']
    },
    {
      category: 'Developer Tooling & DevOps',
      icon: Code2,
      color: 'border-[#8B5CF6] bg-[#F5F3FF]',
      tagBg: 'bg-[#EDE9FE] text-[#5B21B6] border-[#8B5CF6]/30',
      skills: ['Git Version Control & GitHub Actions', 'Postman API Testing', 'Linux Terminal & Shell Scripting', 'Render & Netlify Cloud Deployment', 'Schema.org JSON-LD Structured Data', 'SEO Optimization']
    }
  ];

  const avatarSrc = avatarMode === 'photo' 
    ? '/narala-manoj-yadav.jpg' 
    : '/narala-manoj-transparent.png';

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#18181B] font-sans selection:bg-[#FFCC00] selection:text-black">
      <Navigation />

      {/* JSON-LD ProfilePage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </a>

          <div className="flex items-center gap-2">
            <a 
              href="#cards" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFCC00] border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <CreditCard className="h-4 w-4" />
              <span>Identity Cards</span>
            </a>
            <a 
              href="/projects" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-[#FFCC00] border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 text-[#FFCC00]" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            HERO DOSSIER: AVATAR & BIOGRAPHY
            ========================================================================= */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Portrait & Identity Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Photo Card with Switcher */}
              <div className="relative w-full max-w-[340px]">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-black bg-[#FFCC00] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <img
                    src={avatarSrc}
                    alt="Narala Manoj Yadav - Professional Portrait"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Top Switcher Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 p-1 rounded-full bg-black/90 border border-white/20">
                    <button
                      type="button"
                      onClick={() => setAvatarMode('photo')}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                        avatarMode === 'photo' ? 'bg-[#FFCC00] text-black' : 'text-white'
                      }`}
                    >
                      Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarMode('3d')}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                        avatarMode === '3d' ? 'bg-[#FFCC00] text-black' : 'text-white'
                      }`}
                    >
                      3D
                    </button>
                  </div>

                  {/* Bottom Identity Card Banner */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-white border-2 border-black shadow-md flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-xs text-black">Narala Manoj Yadav</span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00A86B]" />
                      </div>
                      <p className="text-[10px] font-mono font-bold text-neutral-600">@naralamanojyadav</p>
                    </div>
                    <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-full bg-[#FFCC00] border border-black text-black">
                      NBKRIST 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="w-full max-w-[340px] mt-6 space-y-2.5">
                <div className="p-3 rounded-2xl bg-neutral-50 border-2 border-black flex items-center justify-between text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#E3170A]" /> Location:
                  </span>
                  <span className="text-black">Nellore, Andhra Pradesh, IN</span>
                </div>
                <div className="p-3 rounded-2xl bg-neutral-50 border-2 border-black flex items-center justify-between text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#0077B5]" /> Email:
                  </span>
                  <a href="mailto:manojnarala245@gmail.com" className="font-mono text-black hover:text-[#E3170A] underline">
                    manojnarala245@gmail.com
                  </a>
                </div>
                <div className="p-3 rounded-2xl bg-neutral-50 border-2 border-black flex items-center justify-between text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#00A86B]" /> Phone:
                  </span>
                  <a href="tel:+918106905004" className="font-mono text-black hover:text-[#00A86B]">
                    +91 8106905004
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FFCC00] font-black text-xs uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  Engineering Dossier
                </span>
                <span className="text-xs font-mono font-bold text-neutral-600">ID: naralamanojyadav</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                Engineering <span className="bg-[#FFCC00] px-2 py-0.5 rounded-lg border-2 border-black">AI &amp; Full-Stack</span> Systems
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
                <p>
                  I am <strong className="text-black font-black">Narala Manoj Yadav</strong> (<span className="font-mono text-xs font-bold bg-neutral-100 px-2 py-0.5 rounded border border-black/20">@naralamanojyadav</span>), an Artificial Intelligence &amp; Data Science engineer and Full-Stack Developer currently in my final years of B.Tech at <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>, Vidyanagar.
                </p>
                <p>
                  My engineering philosophy focuses on bringing practical machine intelligence to production software. Rather than treating AI as an isolated model, I build end-to-end applications where deep learning models (such as YOLOv8 for edge computer vision) integrate seamlessly into performant backends (Python Flask, Java) and responsive user interfaces (React, TypeScript, Tailwind CSS).
                </p>
                <p>
                  From streamlining academic student counseling with customized portals to training real-time vision algorithms for campus safety and uniform detection, every project I architect emphasizes clean code, relational schema integrity, and high responsiveness.
                </p>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                <div className="p-4 rounded-2xl bg-[#FFF1F2] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="text-3xl font-black text-[#E3170A]">10+</div>
                  <div className="text-xs font-mono font-bold text-neutral-700 uppercase mt-0.5">Full Projects</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#EFF6FF] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="text-3xl font-black text-[#0077B5]">3+</div>
                  <div className="text-xs font-mono font-bold text-neutral-700 uppercase mt-0.5">Internships</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0FDF4] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="text-3xl font-black text-[#00A86B]">25+</div>
                  <div className="text-xs font-mono font-bold text-neutral-700 uppercase mt-0.5">Repositories</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FEF3C7] border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="text-3xl font-black text-black">2026</div>
                  <div className="text-xs font-mono font-bold text-neutral-700 uppercase mt-0.5">B.Tech Batch</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="/NARALA-MANOJ-Resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFCC00] hover:bg-neutral-800 font-black text-xs tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume PDF</span>
                </a>

                <a 
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-100 font-black text-xs tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a 
                  href="mailto:manojnarala245@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E3170A] text-white hover:bg-[#C91408] font-black text-xs tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: OFFICIAL DEVELOPER CARDS WALLET (ATM, AADHAR, DL, VOTER ID)
            ========================================================================= */}
        <section id="cards" className="mb-20">
          <DeveloperCards />
        </section>

        {/* =========================================================================
            SECTION 3: THREE CORE HIGHLIGHT PILLARS
            ========================================================================= */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-[#FEF3C7] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-black text-[#FFCC00] w-fit mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-black text-black text-xl mb-1">Academic Education</h3>
              <p className="text-xs font-mono font-bold text-neutral-700 mb-3">NBKRIST • Vidyanagar (2022-2026)</p>
              <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                Pursuing B.Tech in Artificial Intelligence &amp; Data Science at NBKR Institute of Science &amp; Technology. Comprehensive foundation in Algorithms, Operating Systems, Machine Learning, and Big Data.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t-2 border-black/20 text-xs font-mono font-bold text-black">
              Specialization: AI &amp; DS
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#F0FDF4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-black text-[#00A86B] w-fit mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="font-black text-black text-xl mb-1">Applied AI &amp; Vision</h3>
              <p className="text-xs font-mono font-bold text-neutral-700 mb-3">Computer Vision &amp; Deep Learning</p>
              <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                Hands-on training of YOLOv8 object detection pipelines, convolutional neural networks for classification, and custom dataset preprocessing for edge deployment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t-2 border-black/20 text-xs font-mono font-bold text-[#00A86B]">
              YOLOv8 • PyTorch • OpenCV
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#EFF6FF] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-black text-[#0077B5] w-fit mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="font-black text-black text-xl mb-1">Full-Stack Architecture</h3>
              <p className="text-xs font-mono font-bold text-neutral-700 mb-3">Python • Flask • React • SQL</p>
              <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                Developing resilient web services with Python (Flask/Django), robust relational database models in MySQL, and rich reactive frontends with React and TypeScript.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t-2 border-black/20 text-xs font-mono font-bold text-[#0077B5]">
              Python • React • PostgreSQL
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: TECHNICAL SKILLS & CAPABILITIES MATRIX
            ========================================================================= */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
              Skill Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mt-2">
              Technical Capabilities
            </h2>
            <p className="text-sm sm:text-base font-bold text-neutral-700 mt-1 max-w-xl mx-auto">
              Technologies and frameworks utilized across production and academic engineering work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div 
                  key={group.category}
                  className={`p-6 sm:p-7 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${group.color}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-2xl bg-black text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-black text-xl text-black">
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
        </section>

        {/* =========================================================================
            SECTION 5: CAREER & EDUCATION TIMELINE
            ========================================================================= */}
        <section className="mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-4 border-black">
              <div className="p-3 rounded-2xl bg-black text-[#FFCC00]">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
                  Education &amp; Experience Journey
                </h2>
                <p className="text-xs sm:text-sm font-bold text-neutral-600">
                  Chronological progression of engineering milestones and practical internships.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative pl-6 sm:pl-8 border-l-4 border-black">
                    {/* Circle Node */}
                    <div className="absolute -left-[14px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#FFCC00]" />
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-50 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-full border border-black ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-neutral-600">{item.period}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-black leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#E3170A] mt-0.5">
                        {item.institution} • {item.location}
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed font-medium mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: VERIFIED SOCIAL & IDENTITY FOOTER
            ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-[#FFCC00] uppercase tracking-tight">
              Connect with Narala Manoj Yadav
            </h3>
            <p className="text-sm text-neutral-300 max-w-xl font-medium">
              Actively open for AI Engineering roles, Full-Stack internships, and collaborative software projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://github.com/NARALAMANOJYADAV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white border-2 border-white/20 font-black text-xs transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub (Main)</span>
            </a>

            <a
              href="https://github.com/naralamanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white border-2 border-white/20 font-black text-xs transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub (Alt)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/narala-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0077B5] hover:bg-[#005f93] text-white border-2 border-black font-black text-xs transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:manojnarala245@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#FFCC00] hover:bg-[#FFE066] text-black font-black text-xs transition-transform active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>Email Manoj</span>
            </a>
          </div>
        </section>

      </main>

      {/* Persistent Footer */}
      <footer className="w-full py-8 border-t-4 border-black bg-white text-black px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black text-[#FFCC00] font-black">NMY</span>
            <span>Narala Manoj Yadav • tech4.in</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="#cards" className="hover:underline">ID Cards</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/NARALA-MANOJ-Resume.pdf" download className="hover:underline">Resume</a>
          </div>
          <p className="text-neutral-600">&copy; 2026 Narala Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
