import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  FolderGit2,
  Brain,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Projects by Narala Manoj Yadav | AI & Full Stack Portfolio";

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

  const categories = ['All', 'AI & Computer Vision', 'Full Stack', 'Web Development', 'Machine Learning'];

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
        "name": "Projects by Narala Manoj Yadav - AI & Full Stack Portfolio",
        "description": "Featured open-source artificial intelligence, computer vision, and full-stack software projects created by Narala Manoj Yadav (naralamanojyadav).",
        "isPartOf": {
          "@id": "https://tech4.in/#website"
        },
        "about": {
          "@id": "https://tech4.in/#person"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": projectsData.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://tech4.in/projects/${project.slug}`,
            "name": project.title
          }))
        }
      }
    ]
  };

  const getCategoryColor = (cat: string) => {
    if (cat.includes('AI') || cat.includes('Vision')) return 'border-purple-500/30 text-purple-400 bg-purple-500/10';
    if (cat.includes('Full Stack')) return 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10';
    if (cat.includes('Machine Learning')) return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10';
    return 'border-primary/30 text-primary bg-primary/10';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* JSON-LD CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <a href="/about" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
            About Narala Manoj Yadav
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <FolderGit2 className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-mono text-primary font-semibold">Architecture &amp; Code</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Featured Projects by <span className="text-gradient">Narala Manoj Yadav</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Real-world software architectures, deep learning models, and full-stack applications designed and built by <strong className="text-foreground">Narala Manoj Yadav</strong> (<span className="text-primary font-mono text-xs">naralamanojyadav</span>). Each project includes technical case studies detailing the problem statement, engineering architecture, and live links.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs font-mono border transition-all ${
                filter === c
                  ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-lg shadow-primary/30 font-semibold'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-card'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  <a href={`/projects/${project.slug}`}>
                    {project.title}
                  </a>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] font-mono py-0.5 px-2 bg-muted/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline underline-offset-4"
                >
                  Read Case Study
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <div className="flex items-center gap-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-muted/60 hover:bg-muted text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`Visit live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creator Backlink Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-card border-2 border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Interested in Custom AI Systems or Full-Stack Solutions?</h3>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Explore more about Narala Manoj Yadav's academic background at NBKRIST, technical awards, and contact details.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 justify-center">
            <a href="/about">
              <Button variant="outline" className="rounded-full px-5 bg-background border-border hover:border-primary/50 font-semibold">
                About The Author
              </Button>
            </a>
            <a href="mailto:manojnarala245@gmail.com">
              <Button className="bg-gradient-primary text-primary-foreground rounded-full px-6 hover:opacity-90 font-semibold shadow-lg shadow-primary/25">
                Contact Narala Manoj
              </Button>
            </a>
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

export default Projects;
