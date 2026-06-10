import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Restaurant Website',
      description: 'A modern, responsive restaurant website with advanced frontend development techniques, smooth animations, and intuitive UI/UX design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
      color: 'from-purple-500 to-pink-500',
      liveUrl: 'https://naralamanojyadav.github.io/project1/',
      githubUrl: 'https://github.com/NARALAMANOJYADAV/project1',
    },
    {
      title: 'Student Library Portal',
      description: 'Academic year-based library system designed to be user-friendly for students. Built entirely with frontend technologies for seamless browsing.',
      tags: ['React', 'Frontend', 'UI/UX'],
      color: 'from-blue-500 to-cyan-500',
      liveUrl: 'https://naralamanojyadav.github.io/mainproject/',
      githubUrl: 'https://github.com/NARALAMANOJYADAV/mainproject',
    },
    {
      title: 'Student Counselling Page',
      description: 'Full-stack counselling platform that saves students time with efficient scheduling. Built with both frontend and backend development.',
      tags: ['Full Stack', 'Flask', 'Python', 'Database'],
      color: 'from-emerald-500 to-teal-500',
      liveUrl: 'https://counseling-1.onrender.com',
      githubUrl: 'https://github.com/NARALAMANOJYADAV',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">My Work</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Projects I've Built
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Real-world applications spanning frontend development, full-stack platforms, and creative web solutions — all live and deployed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group border border-border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.color} transition-all duration-500 group-hover:h-2`} />
              
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                      title="View Source"
                    >
                      <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                >
                  View Live Project
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
