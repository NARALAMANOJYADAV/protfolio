import { Github, ExternalLink, Star, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Repo = {
  name: string;
  desc: string;
  url: string;
  live?: string;
  lang: string;
  account: 'NARALAMANOJYADAV' | 'naralamanoj';
};

const repos: Repo[] = [
  // NARALAMANOJYADAV
  { name: 'counseling', desc: 'Full-stack student counselling platform built with Python.', url: 'https://github.com/NARALAMANOJYADAV/counseling', live: 'https://counseling-1.onrender.com', lang: 'Python', account: 'NARALAMANOJYADAV' },
  { name: 'mainproject', desc: 'Academic-year-based Student Library Portal.', url: 'https://github.com/NARALAMANOJYADAV/mainproject', live: 'https://naralamanojyadav.github.io/mainproject/', lang: 'HTML', account: 'NARALAMANOJYADAV' },
  { name: 'project1', desc: 'Modern responsive Restaurant Website.', url: 'https://github.com/NARALAMANOJYADAV/project1', live: 'https://naralamanojyadav.github.io/project1/', lang: 'HTML', account: 'NARALAMANOJYADAV' },
  { name: 'complete-uniform-detection-YOLOv8', desc: 'Real-time uniform detection using YOLOv8 object detection.', url: 'https://github.com/NARALAMANOJYADAV/complete-uniform-detection-YOLOv8', lang: 'Python', account: 'NARALAMANOJYADAV' },
  { name: 'face-mask-and-plant-disease-detection', desc: 'AI-powered face mask & plant disease classifier.', url: 'https://github.com/NARALAMANOJYADAV/face-mask-and-plant-disease-detection', lang: 'HTML', account: 'NARALAMANOJYADAV' },
  { name: 'smartatt', desc: 'Smart attendance system experiment in Python.', url: 'https://github.com/NARALAMANOJYADAV/smartatt', lang: 'Python', account: 'NARALAMANOJYADAV' },
  { name: 'ai-traveller', desc: 'AI-powered travel assistant prototype.', url: 'https://github.com/NARALAMANOJYADAV/ai-traveller', lang: 'Python', account: 'NARALAMANOJYADAV' },
  { name: 'gravience', desc: 'Python experimental project.', url: 'https://github.com/NARALAMANOJYADAV/gravience', lang: 'Python', account: 'NARALAMANOJYADAV' },
  { name: 'chatbot', desc: 'Web-based chatbot interface.', url: 'https://github.com/NARALAMANOJYADAV/chatbot', lang: 'HTML', account: 'NARALAMANOJYADAV' },
  { name: 'helmate', desc: 'Helmet detection / safety project.', url: 'https://github.com/NARALAMANOJYADAV/helmate', lang: 'HTML', account: 'NARALAMANOJYADAV' },
  { name: 'handi', desc: 'TypeScript handcrafted project.', url: 'https://github.com/NARALAMANOJYADAV/handi', lang: 'TypeScript', account: 'NARALAMANOJYADAV' },
  { name: 'club', desc: 'Club management interface in TypeScript.', url: 'https://github.com/NARALAMANOJYADAV/club', lang: 'TypeScript', account: 'NARALAMANOJYADAV' },
  { name: 'ChatGPT-CodeReview', desc: 'Code review bot powered by ChatGPT.', url: 'https://github.com/NARALAMANOJYADAV/ChatGPT-CodeReview', lang: 'JavaScript', account: 'NARALAMANOJYADAV' },

  // naralamanoj
  { name: 'ai-community', desc: 'AI community platform built with TypeScript.', url: 'https://github.com/naralamanoj/ai-community', live: 'https://ai-community-omega.vercel.app', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'hospital', desc: 'Hospital management web app.', url: 'https://github.com/naralamanoj/hospital', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'saas', desc: 'SaaS starter built with TypeScript.', url: 'https://github.com/naralamanoj/saas', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'fullstack', desc: 'Fullstack TypeScript project.', url: 'https://github.com/naralamanoj/fullstack', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'mernstack', desc: 'MERN stack application.', url: 'https://github.com/naralamanoj/mernstack', lang: 'JavaScript', account: 'naralamanoj' },
  { name: 'learning', desc: 'Online learning platform.', url: 'https://github.com/naralamanoj/learning', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'online', desc: 'Online services web project.', url: 'https://github.com/naralamanoj/online', lang: 'JavaScript', account: 'naralamanoj' },
  { name: 'rating', desc: 'Rating/review web app.', url: 'https://github.com/naralamanoj/rating', lang: 'JavaScript', account: 'naralamanoj' },
  { name: 'rest', desc: 'Restaurant web project.', url: 'https://github.com/naralamanoj/rest', lang: 'JavaScript', account: 'naralamanoj' },
  { name: 'chatbot', desc: 'TypeScript chatbot.', url: 'https://github.com/naralamanoj/chatbot', lang: 'TypeScript', account: 'naralamanoj' },
  { name: 'counsiling', desc: 'Counselling platform variant in Python.', url: 'https://github.com/naralamanoj/counsiling', lang: 'Python', account: 'naralamanoj' },
  { name: 'college', desc: 'College website project.', url: 'https://github.com/naralamanoj/college', lang: 'HTML', account: 'naralamanoj' },
  { name: 'js', desc: 'JavaScript playground.', url: 'https://github.com/naralamanoj/js', lang: 'CSS', account: 'naralamanoj' },
  { name: 'html5', desc: 'HTML5 experiments.', url: 'https://github.com/naralamanoj/html5', lang: 'HTML', account: 'naralamanoj' },
  { name: 'advanced-css3', desc: 'Advanced CSS3 patterns and demos.', url: 'https://github.com/naralamanoj/advanced-css3', lang: 'HTML', account: 'naralamanoj' },
];

const langColors: Record<string, string> = {
  Python: 'from-blue-500 to-yellow-400',
  TypeScript: 'from-blue-500 to-blue-700',
  JavaScript: 'from-yellow-400 to-amber-500',
  HTML: 'from-orange-500 to-red-500',
  CSS: 'from-sky-400 to-blue-600',
};

const filters = ['All', 'NARALAMANOJYADAV', 'naralamanoj', 'Python', 'TypeScript', 'JavaScript', 'HTML'];

const AllProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = repos.filter((r) => {
    if (filter === 'All') return true;
    if (filter === r.account) return true;
    return r.lang === filter;
  });

  const visible = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section id="all-projects" className="py-24 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-10">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Open Source</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">All GitHub Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {repos.length} repositories across two GitHub accounts — spanning AI, full-stack, frontend, and experimental builds.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
                filter === f
                  ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-lg shadow-primary/30'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((repo, i) => (
            <a
              key={`${repo.account}-${repo.name}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${Math.min(i * 50, 600)}ms` }}
            >
              <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${langColors[repo.lang] || 'from-primary to-accent'} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${langColors[repo.lang] || 'from-primary to-accent'} shadow shrink-0`}>
                      <Code2 className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm text-card-foreground truncate group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary shrink-0 ml-2" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 min-h-[2rem]">
                  {repo.desc}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Badge variant="secondary" className="text-[10px] font-mono py-0">{repo.lang}</Badge>
                    {repo.live && (
                      <Badge className="text-[10px] font-mono py-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20">
                        ● Live
                      </Badge>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/60 truncate">
                    @{repo.account === 'NARALAMANOJYADAV' ? 'main' : 'alt'}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length > 9 && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full px-8"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </Button>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center mt-10">
          <a href="https://github.com/NARALAMANOJYADAV?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Github className="mr-2 h-4 w-4" />
              View Main Account
            </Button>
          </a>
          <a href="https://github.com/naralamanoj" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Github className="mr-2 h-4 w-4" />
              View Alt Account
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllProjectsSection;
