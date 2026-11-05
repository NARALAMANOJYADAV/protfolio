import { useState, useEffect } from 'react';
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
  ExternalLink
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

const TypingAnimation = () => {
  const roles = ['B.Tech in AI & Data Science', 'Full Stack Developer', 'Python Enthusiast', 'AI/ML Explorer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentIndex]);

  return (
    <p className="mt-3 text-xl sm:text-2xl font-medium text-muted-foreground h-9">
      {displayed}<span className="animate-pulse text-primary">|</span>
    </p>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Flask', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'Frontend Dev', level: 85 },
    { name: 'Data Structures', level: 80 },
    { name: 'AI / ML', level: 75 },
    { name: 'GitHub', level: 85 },
    { name: 'Linux', level: 70 },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Expertise</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Skills & Technologies</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
          {['Competitive Coding', 'AI Research', 'Blogging', 'Photography', 'Data Science'].map((interest) => (
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
    <section className="py-24 px-6 bg-muted/50 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">What drives me</p>
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
        <div className="rounded-3xl bg-gradient-dark p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-[60px]" />
          <div className="relative z-10">
            <p className="text-sm font-mono text-white/60 tracking-wider uppercase mb-4">Let's connect</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
              Looking for internship opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="mailto:manojnarala245@gmail.com">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-8 font-semibold shadow-xl">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
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

const HeroSection = () => {
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');
  const [activeDomain, setActiveDomain] = useState<'ai' | 'fullstack' | 'systems' | 'available'>('ai');

  const domains = [
    {
      id: 'ai' as const,
      title: 'AI & Machine Learning',
      badge: 'Core Specialty',
      icon: Brain,
      color: 'from-purple-500/20 via-purple-500/10 to-indigo-500/10 border-purple-500/40 text-purple-400',
      glow: 'shadow-purple-500/20 border-purple-500',
      description: 'Designing custom deep learning architectures, object detection pipelines with YOLOv8, computer vision, and intelligent predictive data systems.',
      tags: ['YOLOv8', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Flask API', 'Model Training'],
      link: '#projects',
      linkText: 'Explore AI Projects'
    },
    {
      id: 'fullstack' as const,
      title: 'Full-Stack Engineering',
      badge: 'Web & Systems',
      icon: Code2,
      color: 'from-cyan-500/20 via-cyan-500/10 to-blue-500/10 border-cyan-500/40 text-cyan-400',
      glow: 'shadow-cyan-500/20 border-cyan-500',
      description: 'Building end-to-end responsive web applications with React, modern TypeScript, Python backends (Django, Flask), and robust relational databases.',
      tags: ['React', 'TypeScript', 'Django', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'RESTful APIs'],
      link: '#projects',
      linkText: 'View Web Apps'
    },
    {
      id: 'systems' as const,
      title: 'Software & Data Science',
      badge: 'Foundations',
      icon: Cpu,
      color: 'from-amber-500/20 via-amber-500/10 to-orange-500/10 border-amber-500/40 text-amber-400',
      glow: 'shadow-amber-500/20 border-amber-500',
      description: 'Strong foundation in Data Structures & Algorithms, Java OOP, high-performance data processing, model evaluation, and backend architectures.',
      tags: ['Java', 'Python', 'Data Structures & Algorithms', 'Pandas & NumPy', 'Linux', 'Git & CI/CD'],
      link: '#skills',
      linkText: 'View Technical Skills'
    },
    {
      id: 'available' as const,
      title: 'Available for Roles (2026)',
      badge: 'Open to Work',
      icon: Sparkles,
      color: 'from-emerald-500/20 via-emerald-500/10 to-teal-500/10 border-emerald-500/40 text-emerald-400',
      glow: 'shadow-emerald-500/20 border-emerald-500',
      description: 'Actively seeking Software Engineer, AI/ML, and Full-Stack Developer internships and full-time opportunities. Fast learner and collaborative team player.',
      tags: ['Internships', 'Full-Time Positions', 'On-Site & Remote', 'Immediate Joiner'],
      link: '#contact',
      linkText: 'Connect With Me'
    }
  ];

  const currentDomain = domains.find(d => d.id === activeDomain) || domains[0];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Dynamic Atmospheric Ambient Glows */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-purple-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main Balanced 2-Column Hero Grid (No Empty Spaces!) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Rich Personal Branding & Credentials */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-primary font-semibold">B.Tech in Artificial Intelligence &amp; Data Science</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for 2026 Roles</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono text-primary font-bold tracking-widest uppercase mb-2">
                Official Portfolio • Personal Identity
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                I'm{' '}
                <span className="text-gradient">Narala Manoj</span>
                <br />
                <span className="text-gradient">Yadav</span>
              </h1>
              <TypingAnimation />
            </div>

            {/* Bio with Highlighted Keywords */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm <strong className="text-foreground font-semibold">Narala Manoj Yadav</strong> (<span className="text-primary font-mono text-sm">naralamanojyadav</span> / <span className="text-primary font-mono text-sm">naralamanoj</span>) — an AI &amp; Data Science engineer and Full-Stack Developer currently studying at <strong className="text-foreground">NBKRIST</strong>. I bridge state-of-the-art computer vision models (YOLOv8), predictive machine learning pipelines, and modern reactive web applications with Python, Java, and React.
            </p>

            {/* Quick Hero Highlights Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              <div className="p-3 rounded-xl bg-card/80 border border-border/80">
                <div className="text-xl font-bold text-gradient">10+</div>
                <div className="text-[11px] font-mono text-muted-foreground">Projects Built</div>
              </div>
              <div className="p-3 rounded-xl bg-card/80 border border-border/80">
                <div className="text-xl font-bold text-accent">3+</div>
                <div className="text-[11px] font-mono text-muted-foreground">Internships</div>
              </div>
              <div className="p-3 rounded-xl bg-card/80 border border-border/80">
                <div className="text-xl font-bold text-purple-400">YOLOv8</div>
                <div className="text-[11px] font-mono text-muted-foreground">Computer Vision</div>
              </div>
              <div className="p-3 rounded-xl bg-card/80 border border-border/80">
                <div className="text-xl font-bold text-emerald-400">2026</div>
                <div className="text-[11px] font-mono text-muted-foreground">Graduate Ready</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects">
                <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity px-6 shadow-xl shadow-primary/25 h-11 font-semibold">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/about">
                <Button variant="outline" className="rounded-full px-6 h-11 border-border/80 hover:border-primary/50 font-semibold bg-card/60">
                  About My Story
                </Button>
              </a>
              <a href="/NARALA-MANOJ-Resume.pdf" download>
                <Button variant="outline" className="rounded-full px-5 h-11 border-border/80 hover:border-primary/50 font-semibold bg-card/60">
                  <Download className="mr-2 h-4 w-4 text-primary" />
                  Resume
                </Button>
              </a>
              <a href="mailto:manojnarala245@gmail.com">
                <Button variant="outline" className="rounded-full px-5 h-11 border-border/80 hover:border-primary/50 font-semibold bg-card/60">
                  <Mail className="mr-2 h-4 w-4 text-accent" />
                  Contact
                </Button>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
              <span className="font-mono text-xs text-muted-foreground mr-1">Verified:</span>
              <a 
                href="https://github.com/NARALAMANOJYADAV" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 border border-border/80 hover:border-primary/50 hover:text-foreground transition-all shadow-sm"
              >
                <Github className="h-3.5 w-3.5 text-foreground" />
                <span>GitHub (Main)</span>
              </a>
              <a 
                href="https://github.com/naralamanoj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 border border-border/80 hover:border-primary/50 hover:text-foreground transition-all shadow-sm"
              >
                <Github className="h-3.5 w-3.5 text-foreground" />
                <span>GitHub (Alt)</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/narala-manoj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 border border-border/80 hover:border-primary/50 hover:text-foreground transition-all shadow-sm"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Character Presentation Showcase */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in relative pt-4 sm:pt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Ambient Studio Halo Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-primary/30 to-purple-600/25 blur-2xl animate-pulse-glow pointer-events-none" />

              {/* Main Character Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-card via-card/95 to-background border-2 border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-xl group">
                
                {/* View Mode Switcher Pill */}
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

                {/* Character Visual Container */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card/60 relative border border-border/60 shadow-inner">
                  {avatarMode === '3d' ? (
                    <picture>
                      <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
                      <img
                        src="/narala-manoj-transparent.png"
                        alt="Narala Manoj Yadav - 3D Character Avatar (AI & Full Stack Developer)"
                        width="704"
                        height="938"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                    </picture>
                  ) : (
                    <img
                      src="/narala-manoj-yadav.jpg"
                      alt="Narala Manoj Yadav - Professional Portrait"
                      width="704"
                      height="772"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                  )}

                  {/* Gradient Fade at base */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

                  {/* Bottom Status & Verified Tag inside Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between shadow-lg">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-foreground">Narala Manoj Yadav</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground">@naralamanojyadav</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ready</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badges around Avatar (Desktop & Tablet) */}
                <div className="hidden sm:flex absolute -top-4 -left-6 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/95 backdrop-blur-md border border-purple-500/40 shadow-xl animate-float">
                  <Brain className="h-4 w-4 text-purple-400" />
                  <span className="text-xs font-semibold text-foreground">AI &amp; Deep Learning</span>
                </div>

                <div className="hidden sm:flex absolute top-14 -right-6 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/95 backdrop-blur-md border border-cyan-500/40 shadow-xl animate-float-delayed">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-foreground">React &amp; Full-Stack</span>
                </div>

                <div className="hidden sm:flex absolute bottom-24 -left-8 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/95 backdrop-blur-md border border-amber-500/40 shadow-xl animate-float-slow">
                  <Bot className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-semibold text-foreground">Python &amp; YOLOv8</span>
                </div>

                <div className="hidden sm:flex absolute -bottom-3 -right-4 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/95 backdrop-blur-md border border-emerald-500/40 shadow-xl animate-float">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-foreground">Java &amp; Algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialization Domains Showcase (Inspired by High-Energy Color Pillars) */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-mono text-primary tracking-wider uppercase font-semibold">Specializations &amp; Pillars</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What I Specialize In &amp; Build</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-card/80 px-3 py-1 rounded-full border border-border">
              <span>Select a domain to inspect:</span>
            </div>
          </div>

          {/* 4 Interactive Domain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveDomain(domain.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? `bg-gradient-to-br ${domain.color} shadow-xl ${domain.glow} scale-[1.02]`
                      : 'bg-card border-border hover:border-primary/40 hover:bg-muted/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-background/80 shadow-sm' : 'bg-muted'}`}>
                      <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80">
                      {domain.badge}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-1.5 leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {domain.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Domain Detailed Spotlight Panel */}
          <div className="mt-4 p-6 rounded-2xl bg-card border border-primary/20 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-500">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <currentDomain.icon className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-lg sm:text-xl text-foreground">{currentDomain.title}</h4>
                <Badge variant="outline" className="text-xs font-mono">{currentDomain.badge}</Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentDomain.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentDomain.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs font-mono py-1 px-2.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={currentDomain.link}>
                <Button className="bg-gradient-primary text-white rounded-full px-6 shadow-lg shadow-primary/25 hover:opacity-90">
                  {currentDomain.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Scroll to Skills">
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Detailed Portfolio Sections Below */}
      <StatsSection />
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
