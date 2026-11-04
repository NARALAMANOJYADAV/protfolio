import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Award, BookOpen, Code2, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const About = () => {
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
        "dateModified": "2026-11-04T22:00:00+05:30",
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* JSON-LD ProfilePage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <div className="relative group w-56 h-56 rounded-3xl p-1 bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/20 mb-6">
              <div className="w-full h-full rounded-[22px] overflow-hidden border-2 border-background">
                <img
                  src="/narala-manoj-yadav.jpg"
                  alt="Narala Manoj Yadav - Professional Portrait"
                  width="224"
                  height="224"
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground">Narala Manoj Yadav</h2>
            <p className="text-xs font-mono text-primary mt-1">@naralamanojyadav</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-center">
              <MapPin className="h-3 w-3" /> Vidyanagar, Nellore, AP
            </p>

            <div className="flex gap-2 mt-4">
              <a href="https://github.com/NARALAMANOJYADAV" target="_blank" rel="noopener noreferrer" aria-label="GitHub NARALAMANOJYADAV" className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://github.com/naralamanoj" target="_blank" rel="noopener noreferrer" aria-label="GitHub naralamanoj" className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/narala-manoj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:manojnarala245@gmail.com" aria-label="Email" className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary">About Me</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Hi, I'm <span className="text-gradient">Narala Manoj Yadav</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an Artificial Intelligence &amp; Data Science engineer and Full-Stack Developer currently pursuing my B.Tech at <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>. I specialize in developing end-to-end applications that combine scalable backend architectures with intuitive, modern user interfaces.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              My core technical interests lie at the intersection of machine learning algorithms, data engineering, and full-stack software development. Whether building full-featured counselling platforms in Python Flask, reactive applications with TypeScript and React, or algorithmic problem-solving in Java and Python, I focus on clean code, performance, and user impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/NARALA-MANOJ-Resume.pdf" download>
                <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="/#projects">
                <Button variant="outline" className="rounded-full">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:manojnarala245@gmail.com">
                <Button variant="ghost" className="rounded-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-3">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-1">Education</h3>
            <p className="text-sm font-medium text-foreground">B.Tech in AI &amp; Data Science</p>
            <p className="text-xs text-muted-foreground mt-1">NBKR Institute of Science &amp; Technology (2022 - 2026)</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-3">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-1">Recognition</h3>
            <p className="text-sm font-medium text-foreground">Hackathon Prize Winner</p>
            <p className="text-xs text-muted-foreground mt-1">Narayana Engineering College, Gudur &amp; AI Career Forge</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-3">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-1">Memberships</h3>
            <p className="text-sm font-medium text-foreground">IEEE &amp; ISTE</p>
            <p className="text-xs text-muted-foreground mt-1">Active student chapter participant &amp; technical contributor</p>
          </div>
        </div>

        {/* Technical Competencies */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Technical Profile</p>
            <h2 className="text-3xl font-bold text-foreground">Core Competencies &amp; Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Languages &amp; Core Computer Science</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong foundation in Object-Oriented Programming (OOP), Data Structures &amp; Algorithms, and systems programming.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'Data Structures & Algorithms', 'C Basics', 'Linux Shell', 'Git / GitHub'].map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">AI, Machine Learning &amp; Web Stack</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experience in building intelligent data workflows, RESTful backend APIs, and modern responsive frontends.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Django', 'REST APIs', 'NumPy', 'Pandas', 'PostgreSQL / MySQL'].map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Profiles Box */}
        <div className="rounded-3xl bg-card border border-border p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Official &amp; Verified Online Profiles</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            To verify my identity and work across platforms, use the following official profiles associated with Narala Manoj Yadav:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/NARALAMANOJYADAV"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/40 hover:bg-muted transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">GitHub (Main)</p>
                  <p className="text-xs font-mono text-muted-foreground">github.com/NARALAMANOJYADAV</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </a>

            <a
              href="https://github.com/naralamanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/40 hover:bg-muted transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">GitHub (Alternative)</p>
                  <p className="text-xs font-mono text-muted-foreground">github.com/naralamanoj</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/narala-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/40 hover:bg-muted transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                  <p className="text-xs font-mono text-muted-foreground">linkedin.com/in/narala-manoj</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </a>

            <a
              href="mailto:manojnarala245@gmail.com"
              className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/40 hover:bg-muted transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Direct Email</p>
                  <p className="text-xs font-mono text-muted-foreground">manojnarala245@gmail.com</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
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

export default About;

