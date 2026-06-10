import { Code, Brain, GraduationCap, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Code, label: 'Tech Stack', value: 'Full-Stack', desc: 'Python, Java, Flask, Django' },
    { icon: Brain, label: 'Specialization', value: 'AI & DS', desc: 'Artificial Intelligence' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech', desc: 'NBKRIST, Vidyanagar' },
    { icon: Rocket, label: 'Projects', value: '3+', desc: 'Web & AI Projects' },
  ];

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-dark opacity-95" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-xl bg-gradient-primary">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white/80">{stat.label}</div>
              <div className="text-xs text-white/50 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
