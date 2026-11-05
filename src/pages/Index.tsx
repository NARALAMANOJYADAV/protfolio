import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Lightbulb, 
  Brain, 
  RefreshCw, 
  Users, 
  Sparkles, 
  Code2, 
  Download,
  Bot,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Briefcase,
  X,
  BookOpen,
  Trophy,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/TestimonialsCarousel';
import AllProjectsSection from '@/components/AllProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificatesSection from '@/components/CertificatesSection';
import InternshipsSection from '@/components/InternshipsSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projectsData } from '@/data/projectsData';

type WorkflowTab = 'intro' | 'working' | 'ai' | 'about' | 'contact';

const MishunovInteractiveWorkflow = () => {
  const [activeTab, setActiveTab] = useState<WorkflowTab>('intro');
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');
  const workflowRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: 'working' as const,
      label: 'Working / Projects',
      tagline: 'Full-Stack & Web Engineering',
      icon: Briefcase,
      color: 'bg-rose-500 hover:bg-rose-600 text-white border-rose-400/40 shadow-rose-500/30',
      activeBorder: 'border-rose-500 text-rose-400 bg-rose-500/10',
      description: 'Production web platforms, Flask microservices, and React applications built by Narala Manoj Yadav.'
    },
    {
      id: 'ai' as const,
      label: 'AI & Data Science',
      tagline: 'Deep Learning & Computer Vision',
      icon: Brain,
      color: 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-400/40 shadow-emerald-500/30',
      activeBorder: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
      description: 'YOLOv8 real-time object detection models, PyTorch training pipelines, and machine learning classifiers.'
    },
    {
      id: 'about' as const,
      label: 'About Me',
      tagline: 'Story, NBKRIST & Achievements',
      icon: BookOpen,
      color: 'bg-amber-400 hover:bg-amber-500 text-slate-900 border-amber-300/40 shadow-amber-400/30',
      activeBorder: 'border-amber-400 text-amber-400 bg-amber-400/10',
      description: 'B.Tech in Artificial Intelligence & Data Science at NBKRIST, hackathon winner, and IEEE/ISTE contributor.'
    },
    {
      id: 'contact' as const,
      label: 'Contact / Hire Me',
      tagline: 'Let\'s Build Together',
      icon: Mail,
      color: 'bg-violet-600 hover:bg-violet-700 text-white border-violet-400/40 shadow-violet-600/30',
      activeBorder: 'border-violet-500 text-violet-400 bg-violet-500/10',
      description: 'Open for 2026 roles, internships, and engineering collaborations. Fast response guaranteed.'
    }
  ];

  const handleTabClick = (tabId: WorkflowTab) => {
    setActiveTab(prev => prev === tabId ? 'intro' : tabId);
    if (workflowRef.current) {
      workflowRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div ref={workflowRef} className="relative w-full max-w-6xl mx-auto py-10 px-4 sm:px-6">
      
      {/* Top Editorial Headline (mishunov.me signature aesthetic) */}
      <div className="text-center mb-8 sm:mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-mono text-primary font-bold tracking-wider uppercase">
            Official Portfolio • Interactive Stage
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[1.05]">
          Narala Manoj <span className="text-gradient">Yadav</span>
        </h1>
        
        <p className="mt-3 text-xs sm:text-sm md:text-base font-mono text-muted-foreground tracking-widest uppercase">
          Full-Stack Developer • AI &amp; Data Science • Problem Solver
        </p>
      </div>

      {/* Main Interactive Stage: Centered Character Flanked by Tabs */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[520px]">
        
        {/* Left Side: Dynamic Workflow Detail Box (When a Tab is Active) */}
        {activeTab !== 'intro' && (
          <div className="w-full lg:w-96 rounded-3xl p-6 bg-card border-2 border-primary/30 shadow-2xl backdrop-blur-xl animate-fade-in order-3 lg:order-1">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="text-xs font-mono uppercase">
                {tabs.find(t => t.id === activeTab)?.label}
              </Badge>
              <button
                type="button"
                onClick={() => setActiveTab('intro')}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close section view"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {activeTab === 'working' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Featured Web Projects</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Engineered end-to-end full-stack applications with Flask, PostgreSQL, React, and modern TypeScript.
                </p>
                <div className="space-y-2.5">
                  {projectsData.slice(0, 3).map(p => (
                    <a
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block p-3 rounded-xl bg-background/60 border border-border hover:border-rose-500/50 hover:bg-rose-500/5 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground group-hover:text-rose-400 transition-colors">{p.title}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-rose-400" />
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-1 mt-1">{p.summary}</p>
                    </a>
                  ))}
                </div>
                <a href="/projects" className="inline-flex items-center text-xs font-semibold text-rose-400 hover:underline pt-1">
                  View All Projects in Showcase →
                </a>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">AI &amp; Computer Vision</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Specializing in real-time object detection with YOLOv8, deep learning model fine-tuning, and agricultural diagnostic AI.
                </p>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-background/60 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">Uniform Detection (YOLOv8)</span>
                      <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-400/30">CV Model</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">Real-time uniform compliance surveillance system with PyTorch &amp; OpenCV.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-background/60 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">Plant Leaf Disease Classifier</span>
                      <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-400/30">CNN</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">Convolutional neural network for agricultural foliage health inference.</p>
                  </div>
                </div>
                <a href="#skills" className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:underline pt-1">
                  Explore AI Tech Stack &amp; Models →
                </a>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Academic &amp; Story</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  B.Tech candidate at <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>, Vidyanagar, Nellore.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-background/60 border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Degree:</span>
                    <span className="font-semibold text-foreground">B.Tech (AI &amp; DS)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-background/60 border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Hackathon:</span>
                    <span className="font-semibold text-amber-400">Prize Winner (Gudur)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-background/60 border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Societies:</span>
                    <span className="font-semibold text-foreground">IEEE &amp; ISTE Member</span>
                  </div>
                </div>
                <a href="/about" className="inline-flex items-center text-xs font-semibold text-amber-400 hover:underline pt-1">
                  Read Full Biography &amp; Journey →
                </a>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Direct Collaboration</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Available for 2026 Software Engineering, AI/ML, and Full-Stack roles.
                </p>
                <div className="space-y-2 text-xs">
                  <a href="mailto:manojnarala245@gmail.com" className="p-2.5 rounded-xl bg-background/60 border border-border hover:border-violet-500/50 flex items-center justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-mono text-violet-400 font-semibold">manojnarala245@gmail.com</span>
                  </a>
                  <a href="tel:+918106905004" className="p-2.5 rounded-xl bg-background/60 border border-border hover:border-violet-500/50 flex items-center justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-mono text-foreground font-semibold">+91 8106905004</span>
                  </a>
                  <div className="p-2.5 rounded-xl bg-background/60 border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-semibold text-foreground">Nellore, AP, India</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <a href="mailto:manojnarala245@gmail.com" className="flex-1">
                    <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full text-xs">
                      Send Email
                    </Button>
                  </a>
                  <a href="/NARALA-MANOJ-Resume.pdf" download className="flex-1">
                    <Button size="sm" variant="outline" className="w-full rounded-full text-xs">
                      Resume PDF
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Center: The Iconic Character Stage */}
        <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
          
          {/* Speech Bubble / Greeting (mishunov style) */}
          <div className="relative mb-3 animate-bounce shadow-xl">
            <div className="px-5 py-2 rounded-2xl bg-card border-2 border-primary/40 shadow-xl flex items-center gap-2">
              <span className="text-base">👋</span>
              <span className="font-bold text-xs sm:text-sm text-foreground">
                Hi, I'm Manoj!
              </span>
              <span className="text-xs font-mono text-primary font-semibold">
                (@naralamanojyadav)
              </span>
            </div>
            {/* Pointer arrow */}
            <div className="w-3 h-3 bg-card border-r-2 border-b-2 border-primary/40 rotate-45 mx-auto -mt-1.5" />
          </div>

          {/* Character Container Card */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[340px] rounded-3xl p-3 bg-card border-2 border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-xl group">
            
            {/* View Switcher Pill (3D vs Real Photo) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-md">
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

            {/* Character Visual Frame */}
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card/60 relative border border-border/60 shadow-inner">
              {avatarMode === '3d' ? (
                <picture>
                  <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
                  <img
                    src="/narala-manoj-transparent.png"
                    alt="Narala Manoj Yadav - 3D Character Avatar (Developer, AI & Data Science)"
                    width="704"
                    height="938"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </picture>
              ) : (
                <img
                  src="/narala-manoj-yadav.jpg"
                  alt="Narala Manoj Yadav - Official Portrait"
                  width="704"
                  height="772"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              )}

              {/* Gradient Bottom Fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

              {/* Bottom Character Status Card */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between shadow-lg">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-foreground">Narala Manoj Yadav</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-[11px] font-mono text-muted-foreground">@naralamanojyadav</p>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Iconic Workflow Action Tabs (mishunov.me signature) */}
        <div className="flex flex-col gap-3 w-full sm:w-80 lg:w-72 order-2 lg:order-3">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider text-center lg:text-left mb-1">
            Explore Interactive Workflow:
          </p>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-md group text-left ${
                  isActive
                    ? tab.color
                    : 'bg-card border-border hover:border-primary/40 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-muted group-hover:bg-primary/10'}`}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <div>
                    <h2 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-foreground'}`}>
                      {tab.label}
                    </h2>
                    <p className={`text-[11px] ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {tab.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'translate-x-1 text-white' : 'text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Bottom Social & Profile Dock (mishunov style footer bar) */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto p-2.5 rounded-2xl bg-card/90 border border-border/80 shadow-2xl backdrop-blur-xl">
        <a
          href="https://github.com/NARALAMANOJYADAV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-background/80 border border-border hover:border-primary/50 text-xs font-semibold text-foreground hover:text-primary transition-all shadow-sm"
        >
          <Github className="h-3.5 w-3.5" />
          <span>GitHub (Main)</span>
        </a>

        <a
          href="https://github.com/naralamanoj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-background/80 border border-border hover:border-primary/50 text-xs font-semibold text-foreground hover:text-primary transition-all shadow-sm"
        >
          <Github className="h-3.5 w-3.5" />
          <span>GitHub (Alt)</span>
        </a>

        <a
          href="https://www.linkedin.com/in/narala-manoj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-background/80 border border-border hover:border-primary/50 text-xs font-semibold text-foreground hover:text-primary transition-all shadow-sm"
        >
          <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
          <span>LinkedIn</span>
        </a>

        <a
          href="/NARALA-MANOJ-Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-background/80 border border-border hover:border-primary/50 text-xs font-semibold text-foreground hover:text-primary transition-all shadow-sm"
        >
          <Download className="h-3.5 w-3.5 text-primary" />
          <span>Resume PDF</span>
        </a>

        <a
          href="mailto:manojnarala245@gmail.com"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Email Me</span>
        </a>
      </div>

      {/* Down Arrow Indicator to Scroll Full Content */}
      <div className="flex justify-center mt-10 animate-bounce">
        <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Scroll to portfolio details">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Flask & Django', level: 75 },
    { name: 'React & TypeScript', level: 85 },
    { name: 'YOLOv8 & PyTorch', level: 80 },
    { name: 'Data Structures & Algorithms', level: 80 },
    { name: 'PostgreSQL & MySQL', level: 75 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Linux Shell', level: 70 },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Core Competencies</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Technical Skills &amp; Stack</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="h-3.5 w-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-semibold text-card-foreground">{skill.name}</span>
                </div>
                <span className="text-xs font-mono text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-sm group-hover:shadow-primary/30"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Competitive Coding', 'AI Research', 'YOLOv8', 'Computer Vision', 'Full-Stack Development', 'Data Science'].map((interest) => (
            <Badge key={interest} variant="outline" className="text-xs font-mono py-1.5 px-3 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default">
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrengthsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const strengths = [
    { icon: Lightbulb, title: 'Innovative Problem-Solving', desc: 'Creative approaches to complex challenges' },
    { icon: Brain, title: 'Analytical Thinking', desc: 'Data-driven decision making' },
    { icon: RefreshCw, title: 'Adaptability', desc: 'Quick to learn new technologies' },
    { icon: Users, title: 'Collaborative Leadership', desc: 'Team-oriented development' },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">What Drives Me</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Core Strengths</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="p-3 rounded-xl bg-gradient-primary w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="rounded-3xl bg-gradient-dark p-12 sm:p-16 text-center relative overflow-hidden border border-border/80 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-[60px]" />
          <div className="relative z-10">
            <p className="text-sm font-mono text-white/60 tracking-wider uppercase mb-4">Let's connect</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Something Impactful?
            </h3>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Open for 2026 full-time positions, software engineering internships, and innovative AI/web collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="mailto:manojnarala245@gmail.com">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-8 font-semibold shadow-xl">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Narala Manoj
                </Button>
              </a>
              <a href="tel:+918106905004">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-semibold">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 8106905004
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4" />
              <span>Vidyanagar, Nellore, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Main mishunov.me-Style Interactive Workflow Landing Page */}
      <section className="min-h-screen pt-24 pb-12 flex flex-col justify-center">
        <MishunovInteractiveWorkflow />
      </section>

      {/* Detailed Portfolio Sections Below */}
      <div id="stats">
        <StatsSection />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <AllProjectsSection />
      <InternshipsSection />
      <CertificatesSection />
      <AchievementsSection />
      <StrengthsSection />
      <ContactSection />

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

export default Index;
