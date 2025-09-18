import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Animate navbar on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const opacity = scrolled > 50 ? 0.95 : 1;
      const backdrop = scrolled > 50 ? 'blur(10px)' : 'blur(0px)';
      
      gsap.to(nav, {
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: backdrop,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(menuRef.current, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">Crystal Crepe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-primary after:scale-x-100' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" className="btn-hero">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link text-lg ${location.pathname === link.path ? 'text-primary after:scale-x-100' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="default" className="btn-hero w-full mt-4">
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;