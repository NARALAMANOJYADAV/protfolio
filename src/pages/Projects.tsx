import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Github, 
  Linkedin,
  Mail,
  ExternalLink, 
  Code2, 
  Sparkles, 
  FolderGit2,
  Brain,
  Layers,
  Terminal,
  Cpu,
  CreditCard,
  User,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Projects by Narala Manoj Yadav | AI, Computer Vision & Full Stack Systems";

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href');
    if (canonical) {
      canonical.setAttribute('href', 'https://tech4.in/projects');
    }

    return () => {
      document.title = previousTitle;
      if (canonical && prevCanonical) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, []);

  const categories = ['All', 'Full Stack', 'AI & Computer Vision', 'Web Development', 'Machine Learning'];

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://tech4.in/projects#webpage",
        "url": "https://tech4.in/projects",
        "name": "Projects by Narala Manoj Yadav - AI, Computer Vision & Full Stack",
        "description": "Comprehensive portfolio of software engineering projects, deep learning systems, and full-stack architectures built by Narala Manoj Yadav.",
        "about": {
          "@type": "Person",
          "@id": "https://tech4.in/#person",
          "name": "Narala Manoj Yadav",
          "identifier": "naralamanojyadav"
        },
        "hasPart": projectsData.map((p) => ({
          "@type": "SoftwareSourceCode",
          "name": p.title,
          "description": p.summary,
          "codeRepository": p.githubUrl,
          "programmingLanguage": p.techStack,
          "author": {
            "@type": "Person",
            "name": "Narala Manoj Yadav"
          }
        }))
      }
    ]
  };

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'AI & Computer Vision':
        return {
          pill: 'bg-[#E3170A] text-white',
          cardBg: 'bg-white',
          accent: 'border-[#E3170A]'
        };
      case 'Full Stack':
        return {
          pill: 'bg-[#00A86B] text-white',
          cardBg: 'bg-white',
          accent: 'border-[#00A86B]'
        };
      case 'Machine Learning':
        return {
          pill: 'bg-[#8B5CF6] text-white',
          cardBg: 'bg-white',
          accent: 'border-[#8B5CF6]'
        };
      case 'Web Development':
      default:
        return {
          pill: 'bg-[#0077B5] text-white',
          cardBg: 'bg-white',
          accent: 'border-[#0077B5]'
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F2FE] text-[#0F172A] font-sans selection:bg-[#FFCC00] selection:text-black">
      <Navigation />

      {/* JSON-LD CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
              href="/about#cards" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFCC00] border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <CreditCard className="h-4 w-4" />
              <span>Identity Cards</span>
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <User className="h-4 w-4" />
              <span>About Manoj</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Page Header Poster Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FFCC00] font-black text-xs uppercase tracking-wider">
              <FolderGit2 className="h-3.5 w-3.5 text-[#FFCC00]" />
              Engineering Portfolio
            </span>
            <span className="text-xs font-mono font-bold text-neutral-600">Architect: Narala Manoj Yadav</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
            Featured <span className="bg-[#FFCC00] px-2 py-0.5 rounded-lg border-2 border-black">Projects</span> &amp; Systems
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            Production-ready software architectures, deep learning models, and computer vision systems built by <strong className="text-black font-black">Narala Manoj Yadav</strong> (<span className="font-mono text-xs font-bold bg-neutral-100 px-2 py-0.5 rounded border border-black/20">naralamanojyadav</span>). Each project includes complete source code repositories, technical challenge breakdowns, and live deployments.
          </p>

          {/* Quick Stats Pill Bar */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t-2 border-black/10">
            <div className="px-3 py-1 rounded-xl bg-neutral-100 border border-black/20 text-xs font-mono font-bold text-neutral-800">
              ⚡ 6 Production Projects
            </div>
            <div className="px-3 py-1 rounded-xl bg-neutral-100 border border-black/20 text-xs font-mono font-bold text-neutral-800">
              👁️ YOLOv8 Real-Time Vision
            </div>
            <div className="px-3 py-1 rounded-xl bg-neutral-100 border border-black/20 text-xs font-mono font-bold text-neutral-800">
              🐍 Python Flask &amp; Java Microservices
            </div>
            <div className="px-3 py-1 rounded-xl bg-neutral-100 border border-black/20 text-xs font-mono font-bold text-neutral-800">
              ⚛️ React &amp; TypeScript Frontends
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                filter === c
                  ? 'bg-black text-[#FFCC00] -translate-y-1'
                  : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const theme = getCategoryTheme(project.category);
            return (
              <div
                key={project.slug}
                className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-mono font-black uppercase px-3 py-1 rounded-full border border-black ${theme.pill}`}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">{project.date}</span>
                  </div>

                  <h2 className="text-2xl font-black text-black mb-2 group-hover:text-[#E3170A] transition-colors leading-snug">
                    <a href={`/projects/${project.slug}`}>
                      {project.title}
                    </a>
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Architecture Highlight Box */}
                  <div className="p-3 rounded-2xl bg-neutral-50 border-2 border-black/20 mb-4 text-xs">
                    <span className="font-mono font-black text-black block mb-0.5 text-[10px] uppercase">
                      Engineering Highlight:
                    </span>
                    <p className="text-neutral-700 line-clamp-2 leading-normal">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg bg-neutral-100 text-black border border-black/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-black/15 flex items-center justify-between">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:text-[#E3170A] underline underline-offset-4"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-black text-[#FFCC00] hover:bg-neutral-800 border border-black transition-transform active:scale-95"
                      aria-label={`View ${project.title} source on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#00A86B] text-white hover:bg-[#008f5a] border border-black transition-transform active:scale-95"
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creator Identity & Collaboration Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#FEF3C7] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#FFCC00] text-xs font-mono font-black uppercase">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#00A86B]" />
              Verified Developer
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Looking for Custom AI or Full-Stack Engineering?
            </h3>
            <p className="text-xs sm:text-sm font-bold text-neutral-800 max-w-xl leading-relaxed">
              Explore Narala Manoj Yadav's verified ID cards (ATM, Aadhar, Driving License, Voter ID), academic credentials at NBKRIST, and open-source contributions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0 justify-center">
            <a 
              href="/about#cards"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-100 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
            >
              <CreditCard className="h-4 w-4" />
              <span>Inspect ID Cards</span>
            </a>

            <a 
              href="mailto:manojnarala245@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E3170A] text-white hover:bg-[#C91408] font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Manoj</span>
            </a>
          </div>
        </div>

      </main>

      {/* Persistent Footer */}
      <footer className="w-full py-8 border-t-4 border-black bg-white text-black px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black text-[#FFCC00] font-black">NMY</span>
            <span>Narala Manoj Yadav • Projects Portfolio</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/about#cards" className="hover:underline">ID Cards</a>
            <a href="/NARALA-MANOJ-Resume.pdf" download className="hover:underline">Resume</a>
          </div>
          <p className="text-neutral-600">&copy; 2026 Narala Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
