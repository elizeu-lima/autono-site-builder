
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Agendamento', path: '/agendamento' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-3 glass-card shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-2xl font-bold tracking-tight smooth-transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-primary">Pro</span>Autônomo
          </NavLink>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => cn(
                    'text-base font-medium smooth-transition hover:text-primary focus-ring py-1 px-2 rounded',
                    isActive ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 glass-card animate-scale-in p-4 mx-4 rounded-lg">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => cn(
                      'text-base font-medium block py-2 px-4 rounded smooth-transition',
                      isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
