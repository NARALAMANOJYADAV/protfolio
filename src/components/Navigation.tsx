import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#internships' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-xl shadow-xl border-b border-border/80 py-1' 
        : 'bg-background/70 backdrop-blur-md border-b border-border/30 py-2'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="text-xl font-bold tracking-tight flex items-center" aria-label="Narala Manoj Yadav - Homepage">
            <span className="text-gradient font-black text-2xl tracking-tighter">NMY</span>
            <span className="text-foreground/80 ml-2 text-xs font-mono font-semibold hidden sm:inline">/ narala manoj yadav</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-lg hover:bg-muted/50"
              >
                {item.name}
              </a>
            ))}
            <div className="h-4 w-px bg-border/60 mx-1.5" />
            <a href="/NARALA-MANOJ-Resume.pdf" download>
              <Button size="sm" variant="outline" className="rounded-full text-xs h-9 border-border hover:border-primary/50">
                <Download className="mr-1.5 h-3.5 w-3.5 text-primary" />
                Resume
              </Button>
            </a>
            <a href="mailto:manojnarala245@gmail.com">
              <Button size="sm" className="bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity text-xs h-9 px-4 shadow-md shadow-primary/20">
                Hire Me
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 bg-card/95 backdrop-blur-xl rounded-xl p-3 border border-border shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/NARALA-MANOJ-Resume.pdf" download className="px-4 py-3 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors flex items-center gap-2">
                <Download className="h-3.5 w-3.5" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;