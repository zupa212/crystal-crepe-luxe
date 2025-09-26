import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/assets/crystal-crepe-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Animate navbar on scroll with rounded corners
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const opacity = scrolled > 50 ? 0.95 : 1;
      const backdrop = scrolled > 50 ? 'blur(10px)' : 'blur(0px)';
      const borderRadius = scrolled > 50 ? '20px' : '0px';
      const margin = scrolled > 50 ? '8px' : '0px';
      const boxShadow = scrolled > 50 ? '0 10px 30px -10px rgba(0,0,0,0.3)' : 'none';
      
      gsap.to(nav, {
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: backdrop,
        borderRadius: borderRadius,
        margin: margin,
        boxShadow: boxShadow,
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

  // Enhanced mobile menu animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoImg} alt="Crystal Crepe" className="h-8 w-auto md:h-10" />
            <span className="text-xl font-bold text-gradient hidden sm:block">Crystal Crepe</span>
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

        {/* Enhanced Mobile Navigation with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              ref={menuRef}
              className="md:hidden py-4 border-t border-border/50 overflow-hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`nav-link text-lg block py-2 px-4 rounded-lg transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'text-primary bg-primary/10 shadow-sm' 
                          : 'text-foreground hover:text-primary hover:bg-primary/5 hover:shadow-sm hover:scale-105'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Button 
                    variant="default" 
                    className="btn-hero w-full mt-4" 
                    onClick={() => {
                      setIsOpen(false);
                      window.open('https://www.e-food.gr/delivery/thessaloniki/crystal-crepe-7607780', '_blank');
                    }}
                  >
                    Order Now
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;