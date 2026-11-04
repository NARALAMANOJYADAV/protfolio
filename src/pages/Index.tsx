import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Phone, MapPin, Lightbulb, Brain, RefreshCw, Users, Sparkles, Code2, Download } from 'lucide-react';
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-primary">Available for opportunities</span>
              </div>
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  I'm{' '}
                  <span className="text-gradient">Narala Manoj</span>
                  <br />
                  <span className="text-gradient">Yadav</span>
                </h1>
                <TypingAnimation />
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                A passionate AI &amp; Data Science engineer and Full-Stack Developer bridging complex machine learning models, intelligent automation, and scalable web solutions with Python, Java, and modern frameworks.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/about">
                  <Button variant="outline" className="rounded-full px-6">
                    About Me
                  </Button>
                </a>
                <a href="mailto:manojnarala245@gmail.com">
                  <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity px-6 shadow-lg shadow-primary/25">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/NARALA-MANOJ-Resume.pdf" download>
                  <Button variant="outline" className="rounded-full px-6">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </a>
                <a href="https://github.com/NARALAMANOJYADAV?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (NARALAMANOJYADAV)">
                  <Button variant="outline" className="rounded-full px-6">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub (Main)
                  </Button>
                </a>
                <a href="https://github.com/naralamanoj" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (naralamanoj)">
                  <Button variant="outline" className="rounded-full px-6">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub (Alt)
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/narala-manoj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Button variant="outline" className="rounded-full px-6">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Visual - Profile Photo */}
            <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-primary opacity-30 blur-3xl absolute -inset-4 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative w-80 h-80 rounded-full p-1.5 bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <img
                      src="/narala-manoj-yadav.jpg"
                      alt="Narala Manoj Yadav - AI & Data Science Engineer and Full Stack Developer"
                      width="320"
                      height="320"
                      loading="eager"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-muted-foreground">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 animate-bounce">
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

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
