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
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const About = () => {
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "About Narala Manoj Yadav | AI & Data Science | Portfolio";

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
        "description": "Biography, education, technical skills, and verified profiles of Narala Manoj Yadav (naralamanojyadav).",
        "dateCreated": "2026-06-10T18:10:36+05:30",
        "dateModified": "2026-11-05T21:30:00+05:30",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://tech4.in/#person",
          "name": "Narala Manoj Yadav",
          "identifier": "naralamanojyadav",
          "description": "B.Tech in Artificial Intelligence & Data Science at NBKRIST, Full Stack Developer specializing in Python, Java, and modern web applications.",
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
      description: 'Focusing on Machine Learning, Deep Learning, Computer Vision (YOLOv8), Data Structures & Algorithms, and Distributed Web Architectures. Active participant in technical clubs and hackathons.',
      badge: 'Academic Foundation',
      icon: GraduationCap,
      color: 'text-purple-400'
    },
    {
      period: '2024 - 2025',
      title: 'Full-Stack & AI Engineering Internships',
      institution: 'Multiple Industry Engagements',
      location: 'Remote / Hybrid',
      description: 'Built scalable backend microservices with Python (Flask/Django), automated computer vision pipelines with YOLOv8 for uniform and mask detection, and delivered responsive web frontends with React and TypeScript.',
      badge: 'Practical Experience',
      icon: Briefcase,
      color: 'text-cyan-400'
    },
    {
      period: '2023 - Present',
      title: 'Open-Source AI & Web Ecosystem',
      institution: 'GitHub (NARALAMANOJYADAV & naralamanoj)',
      location: 'Global',
      description: 'Authored and published 25+ open-source repositories spanning AI chatbots, student counselling portals, restaurant management systems, and computer vision models.',
      badge: 'Community & Code',
      icon: Code2,
      color: 'text-emerald-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* JSON-LD ProfilePage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <a href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Hero Section: Avatar Card & Personal Story */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Interactive Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px]">
              
              {/* Halo Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-primary/25 to-purple-600/20 blur-2xl pointer-events-none" />

              {/* Showcase Frame */}
              <div className="relative rounded-3xl p-3 bg-card border-2 border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-xl">
                
                {/* Switcher Pill */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1 p-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md">
                  <button
                    type="button"
                    onClick={() => setAvatarMode('3d')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      avatarMode === '3d'
                        ? 'bg-gradient-primary text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    ✨ 3D
                  </button>
                  <button
                    type="button"
                    onClick={() => setAvatarMode('photo')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      avatarMode === 'photo'
                        ? 'bg-gradient-primary text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    📷 Photo
                  </button>
                </div>

                {/* Avatar Image Frame */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card/60 relative border border-border/60 shadow-inner">
                  {avatarMode === '3d' ? (
                    <picture>
                      <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
                      <img
                        src="/narala-manoj-transparent.png"
                        alt="Narala Manoj Yadav - 3D Character Avatar (AI & Data Science Engineer)"
                        width="704"
                        height="938"
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        loading="eager"
                      />
                    </picture>
                  ) : (
                    <img
                      src="/narala-manoj-yadav.jpg"
                      alt="Narala Manoj Yadav - Official Professional Portrait"
                      width="704"
                      height="772"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                  )}

                  {/* Gradient bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

                  {/* Verified Badge inside Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between shadow-lg">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-foreground">Narala Manoj Yadav</span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground">@naralamanojyadav</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      NBKRIST 2026
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="hidden sm:flex absolute -top-3 -left-4 z-10 items-center gap-1.5 px-3 py-1 rounded-xl bg-card/95 border border-purple-500/40 shadow-lg text-xs font-semibold text-purple-400">
                  <Brain className="h-3.5 w-3.5" />
                  <span>AI &amp; ML</span>
                </div>
                <div className="hidden sm:flex absolute top-12 -right-4 z-10 items-center gap-1.5 px-3 py-1 rounded-xl bg-card/95 border border-cyan-500/40 shadow-lg text-xs font-semibold text-cyan-400">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Full-Stack</span>
                </div>
              </div>
            </div>

            {/* Profile Meta Cards */}
            <div className="w-full max-w-[340px] mt-6 space-y-3">
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 flex items-center justify-between text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> Location:
                </span>
                <span className="font-semibold text-foreground">Nellore, Andhra Pradesh, IN</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 flex items-center justify-between text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-accent" /> Email:
                </span>
                <a href="mailto:manojnarala245@gmail.com" className="font-mono text-primary hover:underline">
                  manojnarala245@gmail.com
                </a>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 flex items-center justify-between text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" /> Phone:
                </span>
                <a href="tel:+918106905004" className="font-mono text-foreground hover:text-primary">
                  +91 8106905004
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-primary font-semibold">About Narala Manoj Yadav</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">ID: naralamanojyadav</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Bridging <span className="text-gradient">Intelligent AI</span> &amp; Modern <span className="text-gradient-accent">Web Systems</span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am <strong className="text-foreground">Narala Manoj Yadav</strong> (<span className="text-primary font-mono text-sm">naralamanojyadav</span>), an Artificial Intelligence &amp; Data Science engineer and Full-Stack Developer currently pursuing my B.Tech at <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>.
              </p>
              <p>
                My passion is solving real-world challenges with code. Over the past four years, I have architected solutions that span both ends of the technological spectrum — from computer vision object detection systems (YOLOv8) and machine learning classifiers to robust backend APIs in Python (Flask/Django) and interactive reactive interfaces in React and TypeScript.
              </p>
              <p>
                I believe that impactful software combines mathematical rigor with thoughtful user experience. Whether training models on custom datasets, structuring database schemas, or polishing frontend micro-interactions, I focus on clean architecture, performance, and reliability.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-gradient">10+</div>
                <div className="text-xs font-mono text-muted-foreground">Full Projects</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-xs font-mono text-muted-foreground">Internships</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-purple-400">25+</div>
                <div className="text-xs font-mono text-muted-foreground">Repositories</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-xs font-mono text-muted-foreground">Graduation</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/NARALA-MANOJ-Resume.pdf" download>
                <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 px-6 font-semibold shadow-lg shadow-primary/25">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="/projects">
                <Button variant="outline" className="rounded-full px-6 font-semibold bg-card border-border hover:border-primary/50">
                  Explore Projects &amp; Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:manojnarala245@gmail.com">
                <Button variant="ghost" className="rounded-full px-5 text-muted-foreground hover:text-foreground">
                  <Mail className="mr-2 h-4 w-4 text-accent" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-card border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 shadow-xl shadow-purple-500/5 group">
            <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">Education</h3>
              <Badge variant="outline" className="text-[10px] font-mono border-purple-500/30 text-purple-400">2022-2026</Badge>
            </div>
            <p className="text-sm font-semibold text-foreground">B.Tech in AI &amp; Data Science</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              NBKR Institute of Science &amp; Technology (NBKRIST), Vidyanagar, Nellore. Rigorous training in algorithmic problem solving, machine learning theory, statistics, and system design.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 shadow-xl shadow-cyan-500/5 group">
            <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">Recognition</h3>
              <Badge variant="outline" className="text-[10px] font-mono border-cyan-500/30 text-cyan-400">Winner</Badge>
            </div>
            <p className="text-sm font-semibold text-foreground">Hackathons &amp; Competitions</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Prize Winner at Narayana Engineering College Hackathon (Gudur) and AI Career Forge. Demonstrated rapid prototyping, team leadership, and innovative technical problem-solving.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 shadow-xl shadow-emerald-500/5 group">
            <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">Memberships</h3>
              <Badge variant="outline" className="text-[10px] font-mono border-emerald-500/30 text-emerald-400">Active</Badge>
            </div>
            <p className="text-sm font-semibold text-foreground">IEEE &amp; ISTE Professional Bodies</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Active student member of IEEE and Indian Society for Technical Education (ISTE). Regular participant in technical workshops, guest lectures, and student mentorship initiatives.
            </p>
          </div>
        </div>

        {/* Career & Academic Timeline */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="text-xs font-mono text-primary tracking-wider uppercase font-semibold mb-2">Milestones &amp; Journey</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Education &amp; Experience Timeline</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6 group"
                >
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors shrink-0">
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                        <Badge variant="outline" className="text-[10px] font-mono">{item.badge}</Badge>
                      </div>
                      <span className="text-xs font-mono text-primary font-semibold">{item.period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.institution}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="text-xs font-mono text-primary tracking-wider uppercase font-semibold mb-2">Technical Profile</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Core Competencies &amp; Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Code2 className="h-5 w-5" />
                <h3 className="font-bold text-foreground">Languages &amp; Core CS</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Strong fundamentals in Object-Oriented Programming, Data Structures, Algorithms, and computational complexity.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Python', 'Java', 'Data Structures & Algorithms', 'C Basics', 'Linux Shell', 'OOP Design'].map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all space-y-4">
              <div className="flex items-center gap-2.5 text-purple-400">
                <Brain className="h-5 w-5" />
                <h3 className="font-bold text-foreground">AI &amp; Machine Learning</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Computer vision object detection, model fine-tuning, dataset preprocessing, and intelligent automation systems.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['YOLOv8', 'PyTorch Basics', 'NumPy', 'Pandas', 'OpenCV', 'Model Evaluation', 'Computer Vision'].map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-400">
                <Layers className="h-5 w-5" />
                <h3 className="font-bold text-foreground">Web &amp; Databases</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                End-to-end web architectures, reactive client applications, RESTful microservices, and relational databases.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Django', 'PostgreSQL', 'MySQL', 'REST APIs'].map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Profiles Box */}
        <div className="rounded-3xl bg-card border-2 border-primary/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary font-semibold">Identity Verification</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">Official Online Profiles</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              To verify my identity, open-source work, and academic background across external platforms, refer to these canonical profiles belonging to <strong>Narala Manoj Yadav</strong>:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/NARALAMANOJYADAV"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-background/60 border border-border hover:border-primary/50 hover:bg-muted/60 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Github className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">GitHub (Main Profile)</p>
                    <p className="text-xs font-mono text-muted-foreground">github.com/NARALAMANOJYADAV</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/naralamanoj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-background/60 border border-border hover:border-primary/50 hover:bg-muted/60 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Github className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">GitHub (Alternative)</p>
                    <p className="text-xs font-mono text-muted-foreground">github.com/naralamanoj</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/in/narala-manoj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-background/60 border border-border hover:border-primary/50 hover:bg-muted/60 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">LinkedIn</p>
                    <p className="text-xs font-mono text-muted-foreground">linkedin.com/in/narala-manoj</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="mailto:manojnarala245@gmail.com"
                className="p-5 rounded-2xl bg-background/60 border border-border hover:border-primary/50 hover:bg-muted/60 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Direct Email</p>
                    <p className="text-xs font-mono text-muted-foreground">manojnarala245@gmail.com</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold">
            <span className="text-gradient font-black">NMY</span>
            <span className="text-muted-foreground ml-1 font-mono text-xs">/ narala manoj yadav</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/NARALAMANOJYADAV" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (NARALAMANOJYADAV)" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://github.com/naralamanoj" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (naralamanoj)" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/narala-manoj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:manojnarala245@gmail.com" aria-label="Email Narala Manoj Yadav" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">&copy; 2026 Narala Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
