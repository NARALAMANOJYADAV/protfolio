import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, CreditCard, Sparkles, FolderGit2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'About', href: '/about', icon: User },
    { name: 'ID Cards', href: '/about#cards', icon: CreditCard },
    { name: 'Projects', href: '/projects', icon: FolderGit2 },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-3 inset-x-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <div className={`w-full max-w-5xl rounded-full bg-white/95 backdrop-blur-md border-3 border-black text-black px-4 sm:px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] pointer-events-auto transition-all duration-300 ${
        scrolled ? 'scale-[0.98] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : ''
      }`}>
        <div className="flex items-center justify-between h-11">
          {/* Brand Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 group transition-transform active:scale-95" 
            aria-label="Narala Manoj Yadav - Homepage"
          >
            <span className="px-2.5 py-1 rounded-xl bg-black text-[#FFCC00] font-black text-sm tracking-wider shadow-sm group-hover:bg-[#E3170A] group-hover:text-white transition-colors">
              NMY
            </span>
            <div className="flex flex-col text-left">
              <span className="font-black text-xs sm:text-sm tracking-tight leading-none text-black">
                NARALA MANOJ YADAV
              </span>
              <span className="font-mono text-[9px] font-bold text-neutral-600 hidden sm:inline">
                @naralamanojyadav
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs font-black text-neutral-800 hover:text-black hover:bg-[#FFCC00] rounded-xl transition-all duration-150 flex items-center gap-1.5"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="h-5 w-[2px] bg-black/30 mx-2" />

            <a 
              href="/NARALA-MANOJ-Resume.pdf" 
              download 
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black border-2 border-black font-black text-xs transition-transform active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-black" />
              <span>Resume</span>
            </a>

            <a 
              href="mailto:manojnarala245@gmail.com"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#E3170A] hover:bg-[#C91408] text-white border-2 border-black font-black text-xs transition-transform active:scale-95 shadow-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-xl bg-black text-[#FFCC00] border-2 border-black font-bold active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden pt-3 pb-2 border-t-2 border-black mt-2 space-y-1 animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-black text-black hover:bg-[#FFCC00] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="flex gap-2 pt-2">
              <a 
                href="/NARALA-MANOJ-Resume.pdf" 
                download
                className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 rounded-xl bg-neutral-100 border-2 border-black font-black text-xs"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume PDF</span>
              </a>
              <a 
                href="mailto:manojnarala245@gmail.com"
                className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 rounded-xl bg-[#E3170A] text-white border-2 border-black font-black text-xs"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
