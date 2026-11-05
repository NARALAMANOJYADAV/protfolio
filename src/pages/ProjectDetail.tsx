import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Cpu, 
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  Sparkles,
  CreditCard,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/projectsData';
import NotFound from '@/pages/NotFound';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;

    const previousTitle = document.title;
    document.title = `${project.title} | Narala Manoj Yadav`;

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href');
    if (canonical) {
      canonical.setAttribute('href', `https://tech4.in/projects/${project.slug}`);
    }

    return () => {
      document.title = previousTitle;
      if (canonical && prevCanonical) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `https://tech4.in/projects/${project.slug}#code`,
    "name": project.title,
    "description": project.summary,
    "codeRepository": project.githubUrl,
    "programmingLanguage": project.techStack,
    "author": {
      "@type": "Person",
      "@id": "https://tech4.in/#person",
      "name": "Narala Manoj Yadav",
      "identifier": "naralamanojyadav",
      "url": "https://tech4.in/"
    }
  };

  // Find next project
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-[#1E1B4B] font-sans selection:bg-[#FFCC00] selection:text-black">
      <Navigation />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/about#cards"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFCC00] border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <CreditCard className="h-4 w-4" />
              <span>Identity Cards</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black border-2 border-black font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
            >
              <User className="h-4 w-4" />
              <span>About Manoj</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Case Study Header Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00] border border-black">
              {project.category}
            </span>
            <span className="text-xs font-mono font-bold text-neutral-600">Release Year: {project.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono font-bold text-neutral-700">
            <span>Engineering Architecture by:</span>
            <Link to="/about" className="text-black font-black underline hover:text-[#E3170A]">
              Narala Manoj Yadav (@naralamanojyadav)
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFCC00] hover:bg-neutral-800 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
            >
              <Github className="h-4 w-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A86B] text-white hover:bg-[#008f5a] font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Launch Live Application</span>
              </a>
            )}
          </div>
        </div>

        {/* Content Section: Summary & Problem & Solution */}
        <div className="space-y-8">
          
          {/* Executive Overview */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2.5 mb-3">
              <Cpu className="h-5 w-5 text-[#E3170A]" />
              <h2 className="text-xl font-black uppercase tracking-tight text-black">
                Executive Overview
              </h2>
            </div>
            <p className="text-base text-neutral-800 leading-relaxed font-medium">
              {project.summary}
            </p>
          </div>

          {/* Challenge vs Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* The Challenge */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFF1F2] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-black text-[#E3170A] mb-3">
                  <ShieldAlert className="h-5 w-5" />
                  <h3 className="text-lg text-black uppercase tracking-tight">The Challenge</h3>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                  {project.problem}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black/10 text-[10px] font-mono font-bold text-neutral-600 uppercase">
                Problem Statement
              </div>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F0FDF4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-black text-[#00A86B] mb-3">
                  <Lightbulb className="h-5 w-5" />
                  <h3 className="text-lg text-black uppercase tracking-tight">The Solution</h3>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black/10 text-[10px] font-mono font-bold text-neutral-600 uppercase">
                Architectural Resolution
              </div>
            </div>

          </div>

          {/* Key Features */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase tracking-tight text-black mb-6 flex items-center gap-2.5">
              <Layers className="h-5 w-5 text-[#8B5CF6]" />
              Architectural &amp; Functional Highlights
            </h3>
            <ul className="space-y-3.5">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4 flex items-center gap-2.5">
              <Code2 className="h-5 w-5 text-[#0077B5]" />
              Technologies &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-neutral-100 text-black border-2 border-black font-mono font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Author & ID Card Anchor Banner */}
          <div className="p-8 rounded-3xl bg-[#FEF3C7] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-black text-[#FFCC00]">
                Verified Engineer
              </span>
              <h4 className="text-xl font-black text-black uppercase tracking-tight mt-1">
                Built by Narala Manoj Yadav
              </h4>
              <p className="text-xs text-neutral-800 font-bold max-w-md">
                B.Tech in Artificial Intelligence &amp; Data Science at NBKRIST. View verified ATM, Aadhar, Driving License, and Voter ID cards.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                to="/about#cards"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black text-[#FFCC00] font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:scale-95"
              >
                <CreditCard className="h-3.5 w-3.5" />
                <span>ID Cards</span>
              </Link>
              <Link
                to={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:scale-95 hover:bg-neutral-100"
              >
                <span>Next Project →</span>
              </Link>
            </div>
          </div>

        </div>

      </main>

      {/* Persistent Footer */}
      <footer className="w-full py-8 border-t-4 border-black bg-white text-black px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black text-[#FFCC00] font-black">NMY</span>
            <span>Narala Manoj Yadav • Case Study</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <a href="/NARALA-MANOJ-Resume.pdf" download className="hover:underline">Resume</a>
          </div>
          <p className="text-neutral-600">&copy; 2026 Narala Manoj Yadav.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
