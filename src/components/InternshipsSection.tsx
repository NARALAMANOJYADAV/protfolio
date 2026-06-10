import { Briefcase, Linkedin, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const InternshipsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="internships" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className={`max-w-4xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12 text-center">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Experience</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Internships & Training</h2>
        </div>

        <div className="relative p-10 sm:p-14 rounded-3xl bg-card border border-dashed border-primary/30 text-center overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-6 shadow-xl shadow-primary/30">
              <Briefcase className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Ready to add your real internships
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              I can't pull internships from LinkedIn automatically. Share the details below and I'll plug them in with proper company logos, dates, and roles.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
              {[
                'Company name',
                'Role / position',
                'Duration (start – end)',
                'Key responsibilities',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 border border-border">
                  <Plus className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-sm font-mono text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://www.linkedin.com/in/narala-manoj" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Visit My LinkedIn
                </Button>
              </a>
              <a href="mailto:manojnarala245@gmail.com">
                <Button className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90">
                  Share Internship Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
