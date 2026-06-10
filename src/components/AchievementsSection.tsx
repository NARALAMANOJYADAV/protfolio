import { Trophy, Users, Award, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    {
      icon: Trophy,
      title: 'Hackathon Prize Winner',
      org: 'Narayana Engineering College, Gudur',
      desc: 'Won prize money for building an innovative solution during the inter-college hackathon.',
      tag: 'Winner',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'AI Career Forge Hackathon',
      org: 'Active Participant',
      desc: 'Engaged in AI-focused problem-solving challenges, building rapid prototypes under tight deadlines.',
      tag: 'Hackathon',
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'IEEE Member',
      org: 'Institute of Electrical and Electronics Engineers',
      desc: 'Active participation in IEEE events, technical sessions and student-chapter initiatives.',
      tag: 'Community',
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'ISTE Active Member',
      org: 'Indian Society for Technical Education',
      desc: 'Contributing member supporting student technical growth, workshops, and peer learning.',
      tag: 'Membership',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Recognition</p>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Achievements & Memberships</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Beyond code — competitions, communities, and contributions that shape my journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${it.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              <div className="flex items-start gap-4 relative">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${it.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <it.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-card-foreground">{it.title}</h3>
                    <Badge variant="outline" className="text-[10px] font-mono">{it.tag}</Badge>
                  </div>
                  <p className="text-xs font-mono text-primary mb-2">{it.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
