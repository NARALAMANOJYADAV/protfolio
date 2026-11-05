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
  Sparkles
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
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `https://tech4.in/projects/${project.slug}#software`,
        "name": project.title,
        "description": project.summary,
        "applicationCategory": project.category,
        "operatingSystem": "Web",
        "author": {
          "@id": "https://tech4.in/#person"
        },
        "creator": {
          "@type": "Person",
          "name": "Narala Manoj Yadav",
          "url": "https://tech4.in/"
        },
        "url": `https://tech4.in/projects/${project.slug}`,
        "codeRepository": project.githubUrl,
        "dateCreated": project.date
      },
      {
        "@type": "TechArticle",
        "@id": `https://tech4.in/projects/${project.slug}#article`,
        "headline": `${project.title} - Architectural Overview and Implementation by Narala Manoj Yadav`,
        "description": project.summary,
        "author": {
          "@type": "Person",
          "name": "Narala Manoj Yadav",
          "url": "https://tech4.in/"
        },
        "publisher": {
          "@id": "https://tech4.in/#person"
        },
        "mainEntityOfPage": `https://tech4.in/projects/${project.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Projects
          </Link>
          <Link to="/about" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
            About Narala Manoj Yadav
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted-foreground">Released {project.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground">
            <span>Engineering Architecture:</span>
            <Link to="/about" className="text-primary hover:underline font-semibold">
              Narala Manoj Yadav (@naralamanojyadav)
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-5 bg-card border-border hover:border-primary/50 font-semibold">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Repository
              </Button>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary text-primary-foreground rounded-full px-6 hover:opacity-90 font-semibold shadow-lg shadow-primary/25">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Launch Live Application
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Content Section: Summary & Problem & Solution */}
        <div className="space-y-8">
          {/* Executive Overview */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xl">
            <div className="flex items-center gap-2.5 mb-3 text-primary">
              <Cpu className="h-5 w-5" />
              <h2 className="text-lg font-bold text-foreground">Project Overview</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-rose-500/30 hover:border-rose-500/50 transition-colors shadow-lg shadow-rose-500/5">
              <div className="flex items-center gap-2 text-rose-400 font-bold mb-3">
                <ShieldAlert className="h-5 w-5" />
                <h3 className="text-base text-foreground">The Challenge</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-emerald-500/30 hover:border-emerald-500/50 transition-colors shadow-lg shadow-emerald-500/5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
                <Lightbulb className="h-5 w-5" />
                <h3 className="text-base text-foreground">The Solution</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2.5">
              <Layers className="h-5 w-5 text-primary" />
              Architectural &amp; Functional Highlights
            </h3>
            <ul className="space-y-3.5">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/80">
            <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-4 flex items-center gap-2 font-semibold">
              <Code2 className="h-4 w-4" />
              Technology Stack &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs py-1 px-3 bg-muted/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Card & Two-Way Internal Link */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border-2 border-primary/20 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/40 shadow-lg">
              <img
                src="/narala-manoj-yadav.jpg"
                alt="Narala Manoj Yadav - Creator"
                width="80"
                height="80"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-lg font-bold text-foreground">Developed by Narala Manoj Yadav</h3>
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                B.Tech in Artificial Intelligence &amp; Data Science at NBKRIST. Dedicated to building high-performance machine learning systems, automated computer vision pipelines, and scalable web solutions.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 justify-center sm:justify-start pt-1">
                <Link to="/about" className="inline-flex items-center text-xs font-semibold text-primary hover:underline">
                  Read Full Biography <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
                <Link to="/projects" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
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

export default ProjectDetail;
