import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certificates = [
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL / Coursera',
      date: '2025',
      skills: ['Python', 'NumPy', 'Pandas'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Oracle Academy',
      date: '2024',
      skills: ['Java', 'OOP', 'DSA'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Online Bootcamp',
      date: '2025',
      skills: ['HTML', 'CSS', 'JS', 'Flask'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'AI & Machine Learning Basics',
      issuer: 'Google / AICTE',
      date: '2025',
      skills: ['ML', 'AI', 'TensorFlow'],
      color: 'from-fuchsia-500 to-purple-500',
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'GeeksforGeeks',
      date: '2024',
      skills: ['DSA', 'Problem Solving'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Hackathon Participation',
      issuer: 'AI Career Forge',
      date: '2025',
      skills: ['Teamwork', 'Rapid Prototyping'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Credentials</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Completion Certificates</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Continuous learning through certifications, courses, and hands-on training programs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cert.color} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-[10px] font-mono py-0.5">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-10 font-mono opacity-70">
          * Share your actual certificates and I'll plug them in with download links.
        </p>
      </div>
    </section>
  );
};

export default CertificatesSection;
