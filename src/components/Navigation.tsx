import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'All Repos', href: '/#all-projects' },
    { name: 'Certificates', href: '/#certificates' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold tracking-tight" aria-label="Narala Manoj Yadav - Homepage">
            <span className="text-gradient">NMY</span>
            <span className="text-foreground ml-1 text-sm font-mono opacity-60">/ narala manoj yadav</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <a href="/NARALA-MANOJ-Resume.pdf" download>
              <Button size="sm" variant="outline" className="ml-1 rounded-full">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Resume
              </Button>
            </a>
            <a href="mailto:manojnarala245@gmail.com">
              <Button size="sm" className="ml-1 bg-gradient-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
                Hire Me
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

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
