import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, CheckCircle2, Code2, Layers, Cpu, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Projects
          </Link>
          <Link to="/about" className="text-primary hover:underline font-medium">
            About Narala Manoj Yadav →
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs font-mono text-primary border-primary/30">
              {project.category}
            </Badge>
            <span className="text-xs font-mono text-muted-foreground">Released {project.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-sm font-mono text-muted-foreground flex items-center gap-2">
            <span>Engineering &amp; Architecture:</span>
            <Link to="/about" className="text-primary hover:underline font-semibold">
              Narala Manoj Yadav (naralamanojyadav)
            </Link>
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Source
              </Button>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Launch Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Content Section: Summary & Problem & Solution */}
        <div className="space-y-10">
          {/* Executive Overview */}
          <div className="p-8 rounded-3xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Cpu className="h-5 w-5" />
              <h2 className="text-lg font-bold text-foreground">Project Overview</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                The Challenge
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                The Technical Solution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="p-8 rounded-3xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Key Architectural Features
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Technology Stack &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Card & Two-Way Internal Link */}
          <div className="p-8 rounded-3xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-border shadow-md">
              <img
                src="/narala-manoj-yadav.jpg"
                alt="Narala Manoj Yadav - Creator"
                width="80"
                height="80"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground">Developed by Narala Manoj Yadav</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                B.Tech in Artificial Intelligence &amp; Data Science at NBKRIST. Dedicated to building high-performance machine learning systems, automated data pipelines, and scalable web solutions.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
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

export default ProjectDetail;
