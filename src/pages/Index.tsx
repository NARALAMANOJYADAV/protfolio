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

const MishunovHero = () => {
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');

  return (
    <section 
      id="frontpage" 
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 py-6 select-none overflow-hidden text-[#111]"
      style={{ backgroundColor: '#FFE01B' }}
    >
      {/* Top Banner / Heading (Denys Mishunov style) */}
      <header className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 sm:pt-4 z-20">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111] uppercase leading-none font-sans drop-shadow-sm">
            Narala Manoj Yadav
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#222] uppercase mt-2 font-bold flex items-center justify-center sm:justify-start gap-2">
            <span>Developer</span>
            <span>•</span>
            <span>AI &amp; Data Science</span>
            <span>•</span>
            <span>Problem Solver</span>
          </p>
        </div>

        {/* 3D / Real Photo Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-black/10 backdrop-blur-md border border-black/15 shadow-sm">
          <button
            type="button"
            onClick={() => setAvatarMode('3d')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              avatarMode === '3d'
                ? 'bg-[#111] text-[#FFE01B] shadow-sm'
                : 'text-[#222] hover:text-black'
            }`}
          >
            ✨ 3D Character
          </button>
          <button
            type="button"
            onClick={() => setAvatarMode('photo')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              avatarMode === 'photo'
                ? 'bg-[#111] text-[#FFE01B] shadow-sm'
                : 'text-[#222] hover:text-black'
            }`}
          >
            📷 Real Photo
          </button>
        </div>
      </header>

      {/* Center Stage: Character + Navigation Stripes (Exact Mishunov Layout) */}
      <div className="relative w-full max-w-6xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center my-auto py-4 z-10">
        
        {/* Character in Center */}
        <div className="relative flex flex-col items-center justify-end h-[46vh] sm:h-[52vh] lg:h-[60vh] max-h-[560px]">
          {/* Speech Bubble */}
          <div className="absolute -top-3 sm:-top-5 z-20 px-4 py-1.5 rounded-full bg-[#111] text-white text-xs sm:text-sm font-bold shadow-xl animate-float flex items-center gap-1.5 border border-white/10">
            <span>Hi, I'm Manoj!</span>
            <span className="text-[#FFE01B]">👋</span>
            <span className="text-white/70 font-mono text-[11px] hidden sm:inline ml-1">(naralamanojyadav)</span>
          </div>

          {avatarMode === '3d' ? (
            <picture className="h-full flex items-end">
              <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
              <img
                src="/narala-manoj-transparent.png"
                alt="Narala Manoj Yadav - 3D Character (AI & Full-Stack Developer)"
                className="h-full max-h-[560px] w-auto object-contain object-bottom drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </picture>
          ) : (
            <div className="h-full max-h-[500px] aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#111] shadow-2xl">
              <img
                src="/narala-manoj-yadav.jpg"
                alt="Narala Manoj Yadav - Professional Portrait"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          )}
        </div>

        {/* 4 Mishunov Navigation Stripes */}
        <div className="w-full lg:w-auto lg:absolute lg:right-4 xl:right-8 flex flex-col gap-2.5 sm:gap-3 mt-4 lg:mt-0 z-20 max-w-md lg:max-w-none">
          <a
            href="#projects"
            className="group flex items-center justify-between gap-6 px-6 py-3.5 rounded-2xl bg-[#E3170A] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base border-2 border-black/10"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🛠️</span>
              <span>Working</span>
            </div>
            <span className="text-xs font-mono uppercase bg-white/20 px-2.5 py-0.5 rounded-full group-hover:bg-white group-hover:text-[#E3170A] transition-colors">
              Projects &amp; Apps &rarr;
            </span>
          </a>

          <a
            href="#skills"
            className="group flex items-center justify-between gap-6 px-6 py-3.5 rounded-2xl bg-[#2EC4B6] text-[#05383B] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base border-2 border-black/10"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🧠</span>
              <span>AI &amp; Data Science</span>
            </div>
            <span className="text-xs font-mono uppercase bg-black/10 px-2.5 py-0.5 rounded-full group-hover:bg-[#05383B] group-hover:text-white transition-colors">
              YOLOv8 &amp; ML &rarr;
            </span>
          </a>

          <a
            href="/about"
            className="group flex items-center justify-between gap-6 px-6 py-3.5 rounded-2xl bg-[#FFF3B0] text-[#4A3E00] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base border-2 border-black/10"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🎓</span>
              <span>About Me</span>
            </div>
            <span className="text-xs font-mono uppercase bg-black/10 px-2.5 py-0.5 rounded-full group-hover:bg-[#4A3E00] group-hover:text-[#FFF3B0] transition-colors">
              Bio &amp; NBKRIST &rarr;
            </span>
          </a>

          <a
            href="#contact"
            className="group flex items-center justify-between gap-6 px-6 py-3.5 rounded-2xl bg-[#2C1D2F] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base border-2 border-black/10"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">📬</span>
              <span>Not-Working / Contact</span>
            </div>
            <span className="text-xs font-mono uppercase bg-white/20 px-2.5 py-0.5 rounded-full group-hover:bg-white group-hover:text-[#2C1D2F] transition-colors">
              Let's Connect &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Dock / Contacts (Exact Mishunov footer) */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pb-2 sm:pb-3 z-20">
        {/* Social Link Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <a
            href="https://www.linkedin.com/in/narala-manoj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-105"
          >
            <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
            <span className="text-[10px] text-white/60 hidden sm:inline">• Professional</span>
          </a>

          <a
            href="https://github.com/NARALAMANOJYADAV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-105"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub (Main)</span>
            <span className="text-[10px] text-white/60 hidden sm:inline">• Code</span>
          </a>

          <a
            href="https://github.com/naralamanoj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-105"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub (Alt)</span>
          </a>

          <a
            href="/NARALA-MANOJ-Resume.pdf"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-105"
          >
            <Download className="h-3.5 w-3.5 text-[#FFE01B]" />
            <span>Resume</span>
          </a>

          <a
            href="mailto:manojnarala245@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-105"
          >
            <Mail className="h-3.5 w-3.5 text-[#FFE01B]" />
            <span>Email</span>
            <span className="text-[10px] text-white/60 hidden sm:inline">• Let's talk :)</span>
          </a>
        </div>

        {/* Scroll Prompt */}
        <a
          href="#about-section"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-[#FFE01B] text-xs font-bold font-mono shadow-md hover:bg-black/80 transition-all animate-bounce"
        >
          <span>Scroll for Full Portfolio</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </footer>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Mishunov-Style Signature Landing Page Screen */}
      <MishunovHero />

      {/* Detailed Portfolio Sections Below */}
      <div id="about-section">
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <AllProjectsSection />
        <InternshipsSection />
        <CertificatesSection />
        <AchievementsSection />
        <StrengthsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold">
            <span className="text-gradient">NMY</span>
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
            <span className="text-gradient">NMY</span>
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
          <p className="text-xs text-muted-foreground">© 2026 Narala Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
