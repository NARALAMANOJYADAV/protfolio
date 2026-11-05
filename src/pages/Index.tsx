import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Brain, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Trophy, 
  GraduationCap, 
  ArrowUpRight,
  ShieldCheck,
  Award,
  ChevronDown,
  CreditCard
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projectsData';
import { DeveloperCards } from '@/components/DeveloperCards';

type ActiveSection = 'home' | 'working' | 'ai' | 'about' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [avatarMode, setAvatarMode] = useState<'3d' | 'photo'>('3d');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ActiveSection;
      if (['working', 'ai', 'about', 'contact'].includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openSection = (sec: ActiveSection) => {
    setActiveSection(sec);
    if (sec === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = sec;
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('manojnarala245@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const categories = ['All', 'Full Stack', 'AI & Computer Vision', 'Web Development', 'Machine Learning'];
  const filteredProjects = projectFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectFilter);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans select-none bg-[#FFCC00]">
      
      {/* =========================================================================
          SECTION 1: FRONTPAGE / STARTING PAGE (Mishunov.me signature workflow)
          ========================================================================= */}
      <main className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 py-6 bg-[#FFCC00] text-[#18181B]">
        
        {/* Top Navbar Header */}
        <header className="w-full max-w-6xl flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-tighter bg-black text-[#FFCC00] px-2.5 py-1 rounded-lg shadow-md">
              NMY
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-tight text-black hidden sm:inline">
              / narala manoj yadav
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#cards"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black border-2 border-black font-black text-xs transition-transform active:scale-95 shadow-md hover:bg-neutral-100"
            >
              <CreditCard className="h-3.5 w-3.5" />
              <span>ID Cards</span>
            </a>

            <a
              href="/NARALA-MANOJ-Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-[#FFCC00] hover:bg-black/80 font-bold text-xs transition-transform active:scale-95 shadow-md"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={() => openSection('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black border-2 border-black hover:bg-neutral-100 font-black text-xs transition-transform active:scale-95 shadow-md"
            >
              Hire Me
            </button>
          </div>
        </header>

        {/* Central Stage: Balanced, Zero-Void Mishunov Composition */}
        <div className="w-full max-w-5xl my-auto py-6 flex flex-col items-center justify-center z-10">
          
          {/* Top Big Editorial Typographic Headline */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black uppercase leading-[0.95] drop-shadow-sm">
              Narala Manoj Yadav
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-black/80">
              Developer • Artificial Intelligence &amp; Data Science • Problem Solver
            </p>
          </div>

          {/* Centered Stage: Character In Middle Flanked by 4 Interactive Tabs */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
            
            {/* Center Character Presentation */}
            <div className="relative flex flex-col items-center">
              
              {/* Interactive Speech Bubble (Mishunov.me signature) */}
              <div className="relative mb-2.5 animate-bounce z-20">
                <div className="px-4 py-1.5 rounded-2xl bg-black text-[#FFCC00] border-2 border-black shadow-xl flex items-center gap-2">
                  <span className="text-sm">👋</span>
                  <span className="font-black text-xs sm:text-sm tracking-tight">
                    Hi, I'm Manoj!
                  </span>
                  <span className="text-[11px] font-mono opacity-80">
                    (@naralamanojyadav)
                  </span>
                </div>
                <div className="w-3 h-3 bg-black rotate-45 mx-auto -mt-1.5" />
              </div>

              {/* Character Box */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px] rounded-3xl p-3 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                
                {/* Switcher Pill (3D vs Real Photo) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 rounded-full bg-black/90 backdrop-blur-md shadow-md">
                  <button
                    type="button"
                    onClick={() => setAvatarMode('3d')}
                    className={`px-3 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                      avatarMode === '3d'
                        ? 'bg-[#FFCC00] text-black shadow-sm'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    ✨ 3D
                  </button>
                  <button
                    type="button"
                    onClick={() => setAvatarMode('photo')}
                    className={`px-3 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                      avatarMode === 'photo'
                        ? 'bg-[#FFCC00] text-black shadow-sm'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    📷 Photo
                  </button>
                </div>

                {/* Avatar Image Frame */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFF9D2] relative border-2 border-black shadow-inner">
                  {avatarMode === '3d' ? (
                    <picture>
                      <source srcSet="/narala-manoj-transparent.webp" type="image/webp" />
                      <img
                        src="/narala-manoj-transparent.png"
                        alt="Narala Manoj Yadav - 3D Character Avatar (Developer, AI & Data Science)"
                        width="704"
                        height="938"
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </picture>
                  ) : (
                    <img
                      src="/narala-manoj-yadav.jpg"
                      alt="Narala Manoj Yadav - Official Portrait"
                      width="704"
                      height="772"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  )}

                  {/* Character Card Lower Plaque */}
                  <div className="absolute bottom-2.5 inset-x-2.5 p-2.5 rounded-xl bg-white/95 border-2 border-black shadow-md flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-black text-xs text-black">Narala Manoj Yadav</span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <p className="text-[10px] font-mono text-neutral-600">NBKRIST • B.Tech AI &amp; DS</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-100 border border-green-600 text-green-800 text-[10px] font-bold">
                      2026 Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The 4 Iconic Mishunov Workflow Tabs */}
            <div className="flex flex-col gap-3.5 w-full max-w-[320px] sm:w-80">
              <p className="text-xs font-black uppercase tracking-wider text-black/70 mb-0.5">
                Select A Section To Explore:
              </p>

              {/* Tab 1: Working (Projects) */}
              <button
                type="button"
                onClick={() => openSection('working')}
                className="w-full p-4 rounded-2xl bg-[#E3170A] hover:bg-[#C91207] text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-all flex items-center justify-between group active:translate-x-0 active:translate-y-0"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-black/20 group-hover:bg-black/30 transition-colors">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-black text-base tracking-tight leading-none text-white">Working</h2>
                    <p className="text-xs text-white/90 mt-1 font-medium">Projects &amp; Web Apps</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Tab 2: AI & Vision */}
              <button
                type="button"
                onClick={() => openSection('ai')}
                className="w-full p-4 rounded-2xl bg-[#00A86B] hover:bg-[#00915C] text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-all flex items-center justify-between group active:translate-x-0 active:translate-y-0"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-black/20 group-hover:bg-black/30 transition-colors">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-black text-base tracking-tight leading-none text-white">AI &amp; Vision</h2>
                    <p className="text-xs text-white/90 mt-1 font-medium">YOLOv8 &amp; Machine Learning</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Tab 3: About Me */}
              <button
                type="button"
                onClick={() => openSection('about')}
                className="w-full p-4 rounded-2xl bg-[#FFF8CC] hover:bg-[#FFF3B0] text-black border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-all flex items-center justify-between group active:translate-x-0 active:translate-y-0"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-black/10 group-hover:bg-black/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-black" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-black text-base tracking-tight leading-none text-black">About Me</h2>
                    <p className="text-xs text-black/80 mt-1 font-medium">NBKRIST, Story &amp; Cards</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-black/80 group-hover:text-black group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Tab 4: Not-Working / Contact */}
              <button
                type="button"
                onClick={() => openSection('contact')}
                className="w-full p-4 rounded-2xl bg-[#2C1D2F] hover:bg-[#201422] text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-all flex items-center justify-between group active:translate-x-0 active:translate-y-0"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-black text-base tracking-tight leading-none text-white">Not-Working</h2>
                    <p className="text-xs text-white/80 mt-1 font-medium">Contact &amp; Hire Me</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Bottom Social & Profile Dock (Mishunov Footer) */}
        <footer className="w-full max-w-4xl py-3 z-20 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-black border-2 border-black text-[#FFCC00] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
            <a
              href="https://github.com/NARALAMANOJYADAV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub (Main)</span>
            </a>

            <a
              href="https://github.com/naralamanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub (Alt)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/narala-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#00A0DC] font-bold text-xs transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/NARALA-MANOJ-Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#FFCC00] font-bold text-xs transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume PDF</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE066] text-black font-black text-xs transition-all shadow-sm active:scale-95"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{copiedEmail ? 'Copied!' : 'Email Me'}</span>
            </button>
          </div>

          {/* Smooth Scroll Indicator */}
          <a 
            href="#cards" 
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black/75 hover:text-black transition-colors"
          >
            <span>Scroll down for ID Cards &amp; Full Projects</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </footer>
      </main>


      {/* =========================================================================
          SCROLLABLE SECTION 1: DEVELOPER CARDS (ATM, AADHAR, VOTER, DRIVING LICENSE)
          ========================================================================= */}
      <section id="cards" className="w-full bg-[#FFF8CC] border-t-4 border-black py-20 px-4 sm:px-6">
        <DeveloperCards />
      </section>


      {/* =========================================================================
          SCROLLABLE SECTION 2: FEATURED PROJECTS (The Main Thing!)
          ========================================================================= */}
      <section id="projects-showcase" className="w-full bg-white border-t-4 border-black py-20 px-4 sm:px-6 text-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b-4 border-black">
            <div>
              <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-black text-[#FFCC00]">
                Core Engineering Portfolio
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-3">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base font-bold text-neutral-700 mt-1 max-w-xl">
                Real-world full-stack architectures, deep learning models, and computer vision systems built by Narala Manoj Yadav.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFCC00] hover:bg-neutral-800 font-black text-xs tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <span>Explore Dedicated Projects Page</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Project Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setProjectFilter(c)}
                className={`px-4 py-2 rounded-2xl text-xs font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                  projectFilter === c
                    ? 'bg-[#E3170A] text-white -translate-y-0.5'
                    : 'bg-neutral-100 text-black hover:bg-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Projects Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="p-6 rounded-3xl bg-neutral-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1.5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full bg-black text-white">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">{project.date}</span>
                  </div>

                  <h3 className="text-2xl font-black text-black mb-2 group-hover:text-[#E3170A] transition-colors leading-snug">
                    <a href={`/projects/${project.slug}`}>
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map(t => (
                      <span key={t} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-neutral-200 flex items-center justify-between">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#E3170A] group-hover:underline"
                  >
                    Read Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#E3170A] text-white hover:bg-black transition-colors"
                        aria-label="Launch Live App"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SCROLLABLE SECTION 3: ACADEMIC CREDENTIALS & STORY TEASER
          ========================================================================= */}
      <section className="w-full bg-[#18181B] text-white border-t-4 border-black py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFCC00]">
              NBKRIST • B.Tech AI &amp; Data Science (2022–2026)
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Want To Know The Full Story?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Discover Narala Manoj Yadav's academic journey at NBKRIST, hackathon victories in Gudur, IEEE &amp; ISTE contributions, and core engineering philosophy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/about"
              className="px-6 py-3 rounded-full bg-[#FFCC00] text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,204,0,0.5)] hover:bg-white transition-colors"
            >
              Open Full About Page →
            </a>
            <a
              href="mailto:manojnarala245@gmail.com"
              className="px-6 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:bg-[#FFCC00] transition-colors"
            >
              Contact Narala Manoj
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="w-full bg-black text-[#FFCC00] py-8 px-4 text-center border-t-4 border-black">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-black">
            NMY / Narala Manoj Yadav • tech4.in
          </span>
          <p className="text-xs text-neutral-400">
            &copy; 2026 Narala Manoj Yadav. All rights reserved.
          </p>
        </div>
      </footer>


      {/* =========================================================================
          MODAL 1: "WORKING" SECTION (Full-Screen Crimson Red #E3170A)
          ========================================================================= */}
      {activeSection === 'working' && (
        <div className="fixed inset-0 z-50 bg-[#E3170A] text-white overflow-y-auto animate-fade-in p-6 sm:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-8 border-b-4 border-black mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-white px-3 py-1 rounded-full border-2 border-black">
                  Mishunov Workflow • Section 01
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-3">
                  Working &amp; Projects
                </h2>
                <p className="text-sm sm:text-base font-semibold text-white/90 mt-1">
                  Full-Stack platforms, responsive web apps, and system architectures built by Narala Manoj Yadav.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openSection('home')}
                className="p-3 rounded-2xl bg-black text-white hover:bg-white hover:text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] font-black transition-all flex items-center gap-2"
                aria-label="Back to frontpage"
              >
                <X className="h-6 w-6" />
                <span className="text-xs font-mono hidden sm:inline">CLOSE</span>
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projectsData.map((project) => (
                <div
                  key={project.slug}
                  className="p-6 rounded-3xl bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full bg-black text-white">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-500">{project.date}</span>
                    </div>

                    <h3 className="text-2xl font-black text-black mb-2 hover:text-[#E3170A] transition-colors">
                      <a href={`/projects/${project.slug}`}>
                        {project.title}
                      </a>
                    </h3>

                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map(t => (
                        <span key={t} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-neutral-200 flex items-center justify-between">
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#E3170A] hover:underline"
                    >
                      Read Full Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors"
                        aria-label="View GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#E3170A] text-white hover:bg-black transition-colors"
                          aria-label="Launch Live App"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
              <a
                href="/projects"
                className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-sm transition-all"
              >
                Go to Dedicated Projects Page →
              </a>
              <button
                type="button"
                onClick={() => openSection('home')}
                className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-white hover:text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] font-black text-sm transition-all"
              >
                ← Return to Frontpage
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 2: "AI & VISION" SECTION (Full-Screen Cyber Emerald #00A86B)
          ========================================================================= */}
      {activeSection === 'ai' && (
        <div className="fixed inset-0 z-50 bg-[#00A86B] text-white overflow-y-auto animate-fade-in p-6 sm:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-8 border-b-4 border-black mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-white px-3 py-1 rounded-full border-2 border-black">
                  Mishunov Workflow • Section 02
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-3">
                  AI &amp; Computer Vision
                </h2>
                <p className="text-sm sm:text-base font-semibold text-white/90 mt-1">
                  Custom YOLOv8 architectures, deep learning model training, and intelligent vision systems.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openSection('home')}
                className="p-3 rounded-2xl bg-black text-white hover:bg-white hover:text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] font-black transition-all flex items-center gap-2"
                aria-label="Back to frontpage"
              >
                <X className="h-6 w-6" />
                <span className="text-xs font-mono hidden sm:inline">CLOSE</span>
              </button>
            </div>

            {/* AI Core Capabilities */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="p-3 rounded-2xl bg-[#00A86B] text-white w-fit border-2 border-black">
                  <Brain className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-black">Uniform Detection with YOLOv8</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Real-time object detection and student uniform compliance monitoring using Ultralytics YOLOv8. Trained on custom annotated datasets, supporting high-FPS edge inference and surveillance camera feeds.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['YOLOv8', 'PyTorch', 'OpenCV', 'Computer Vision', 'Python', 'Annotation'].map(t => (
                    <span key={t} className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href="https://github.com/NARALAMANOJYADAV/complete-uniform-detection-YOLOv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#00A86B] hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    Inspect GitHub Repository →
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="p-3 rounded-2xl bg-[#00A86B] text-white w-fit border-2 border-black">
                  <Cpu className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-black">Plant Disease &amp; Mask Classifier</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Convolutional Neural Network (CNN) architecture designed for agricultural leaf pathology diagnostics alongside public safety face mask compliance validation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['CNN', 'TensorFlow', 'Keras', 'Flask', 'Disease Classification', 'Image Processing'].map(t => (
                    <span key={t} className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href="https://github.com/NARALAMANOJYADAV/face-mask-and-plant-disease-detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#00A86B] hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    Inspect GitHub Repository →
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="text-center pb-8">
              <button
                type="button"
                onClick={() => openSection('home')}
                className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-white hover:text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] font-black text-sm transition-all"
              >
                ← Return to Frontpage
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 3: "ABOUT ME" SECTION (With Developer Cards Wallet!)
          ========================================================================= */}
      {activeSection === 'about' && (
        <div className="fixed inset-0 z-50 bg-[#FFF8CC] text-black overflow-y-auto animate-fade-in p-6 sm:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-8 border-b-4 border-black mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-full">
                  Mishunov Workflow • Section 03
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-3">
                  About Narala Manoj Yadav
                </h2>
                <p className="text-sm sm:text-base font-semibold text-neutral-800 mt-1">
                  B.Tech in Artificial Intelligence &amp; Data Science at NBKRIST, achievements, and identity cards.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openSection('home')}
                className="p-3 rounded-2xl bg-black text-white hover:bg-[#FFCC00] hover:text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black transition-all flex items-center gap-2"
                aria-label="Back to frontpage"
              >
                <X className="h-6 w-6" />
                <span className="text-xs font-mono hidden sm:inline">CLOSE</span>
              </button>
            </div>

            {/* Embedded Developer Cards Wallet */}
            <div className="mb-14">
              <DeveloperCards />
            </div>

            {/* 3 Pillars of Profile */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-3 rounded-2xl bg-black text-[#FFCC00] w-fit mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-black">Education</h3>
                <p className="text-xs font-mono font-bold text-neutral-600 mt-1">B.Tech in AI &amp; Data Science</p>
                <p className="text-sm text-neutral-800 mt-3 leading-relaxed">
                  <strong>NBKR Institute of Science &amp; Technology (NBKRIST)</strong>, Vidyanagar, Nellore (2022–2026). Rigorous computer science foundation, algorithms, and deep learning.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-3 rounded-2xl bg-[#E3170A] text-white w-fit mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-black">Recognition</h3>
                <p className="text-xs font-mono font-bold text-neutral-600 mt-1">Hackathon Prize Winner</p>
                <p className="text-sm text-neutral-800 mt-3 leading-relaxed">
                  Prize winner at Narayana Engineering College Hackathon (Gudur) and active finalist in AI Career Forge competitions for innovative technical problem-solving.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-3 rounded-2xl bg-[#00A86B] text-white w-fit mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-black">Memberships</h3>
                <p className="text-xs font-mono font-bold text-neutral-600 mt-1">IEEE &amp; ISTE Chapters</p>
                <p className="text-sm text-neutral-800 mt-3 leading-relaxed">
                  Active student member of IEEE and Indian Society for Technical Education (ISTE). Regular contributor to workshops, technical seminars, and peer development.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
              <a
                href="/about"
                className="px-8 py-3.5 rounded-full bg-black text-[#FFCC00] hover:bg-neutral-800 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-sm transition-all"
              >
                Open Full Dedicated About Page →
              </a>
              <button
                type="button"
                onClick={() => openSection('home')}
                className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#FFCC00] border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-sm transition-all"
              >
                ← Return to Frontpage
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 4: "NOT-WORKING / CONTACT" (Full-Screen Deep Plum #2C1D2F)
          ========================================================================= */}
      {activeSection === 'contact' && (
        <div className="fixed inset-0 z-50 bg-[#2C1D2F] text-white overflow-y-auto animate-fade-in p-6 sm:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-8 border-b-4 border-[#FFCC00] mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-[#FFCC00] px-3 py-1 rounded-full">
                  Mishunov Workflow • Section 04
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-3">
                  Contact &amp; Connect
                </h2>
                <p className="text-sm sm:text-base font-semibold text-white/80 mt-1">
                  Ready to collaborate, hire, or discuss exciting engineering opportunities.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openSection('home')}
                className="p-3 rounded-2xl bg-[#FFCC00] text-black hover:bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(255,204,0,1)] font-black transition-all flex items-center gap-2"
                aria-label="Back to frontpage"
              >
                <X className="h-6 w-6" />
                <span className="text-xs font-mono hidden sm:inline">CLOSE</span>
              </button>
            </div>

            {/* Contact Options Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#3B2840] border-4 border-[#FFCC00] shadow-[8px_8px_0px_0px_rgba(255,204,0,0.5)] mb-12 space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 text-xs font-mono font-bold">
                  ● Available for 2026 Roles
                </span>
                <h3 className="text-3xl font-black text-white mt-3">Let's Build Something Great Together</h3>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  I am actively seeking Software Engineer, AI/ML, and Full-Stack Developer opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:manojnarala245@gmail.com"
                  className="p-4 rounded-2xl bg-white text-black border-2 border-black hover:bg-[#FFCC00] transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-black text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-600 font-bold block">Direct Email</span>
                    <span className="text-sm font-black text-black">manojnarala245@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+918106905004"
                  className="p-4 rounded-2xl bg-white text-black border-2 border-black hover:bg-[#FFCC00] transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-black text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-600 font-bold block">Direct Phone</span>
                    <span className="text-sm font-black text-black">+91 8106905004</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/narala-manoj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white text-black border-2 border-black hover:bg-[#FFCC00] transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#0077B5] text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-600 font-bold block">LinkedIn Profile</span>
                    <span className="text-sm font-black text-black">narala-manoj</span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white text-black border-2 border-black flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-black text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-600 font-bold block">Location</span>
                    <span className="text-sm font-black text-black">Nellore, Andhra Pradesh, IN</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="mailto:manojnarala245@gmail.com"
                  className="px-8 py-3 rounded-full bg-[#FFCC00] text-black font-black text-sm hover:bg-white transition-colors shadow-lg shadow-[#FFCC00]/20"
                >
                  Send Direct Message
                </a>
                <a
                  href="/NARALA-MANOJ-Resume.pdf"
                  download
                  className="px-8 py-3 rounded-full bg-white text-black font-black text-sm hover:bg-[#FFCC00] transition-colors"
                >
                  Download Resume PDF
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="text-center pb-8">
              <button
                type="button"
                onClick={() => openSection('home')}
                className="px-8 py-3.5 rounded-full bg-[#FFCC00] text-black hover:bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(255,204,0,1)] font-black text-sm transition-all"
              >
                ← Return to Frontpage
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Index;
