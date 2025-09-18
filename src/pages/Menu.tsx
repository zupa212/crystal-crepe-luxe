import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import sweetCrepeImg from '@/assets/sweet-crepe.jpg';
import savoryCrepeImg from '@/assets/savory-crepe.jpg';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const heroRef = useRef<HTMLElement>(null);
  const sweetSectionRef = useRef<HTMLElement>(null);
  const savorySectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5,
          }
        );
      }

      // Sweet crepes section parallax
      if (sweetSectionRef.current) {
        gsap.to(sweetSectionRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: sweetSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Savory crepes section parallax
      if (savorySectionRef.current) {
        gsap.to(savorySectionRef.current, {
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: savorySectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Menu item animations
      gsap.utils.toArray('.menu-item').forEach((item: any) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const sweetCrepes = [
    {
      name: 'Classic Nutella®',
      description: 'Traditional crepe with premium Nutella® spread and powdered sugar',
      price: '$8.50',
    },
    {
      name: 'Berry Bliss',
      description: 'Fresh strawberries, blueberries, whipped cream, and maple syrup',
      price: '$10.50',
    },
    {
      name: 'Lemon Ricotta',
      description: 'Creamy ricotta cheese with fresh lemon zest and honey drizzle',
      price: '$9.75',
    },
    {
      name: 'Caramel Apple',
      description: 'Sautéed apples with salted caramel and vanilla ice cream',
      price: '$11.25',
    },
  ];

  const savoryCrepes = [
    {
      name: 'The Italian Job',
      description: 'Prosciutto, fresh mozzarella, arugula, and balsamic glaze',
      price: '$12.50',
    },
    {
      name: 'Ham & Cheddar',
      description: 'Premium ham with aged cheddar and Dijon mustard',
      price: '$10.75',
    },
    {
      name: 'Smoked Salmon & Cream Cheese',
      description: 'Norwegian salmon with cream cheese, capers, and dill',
      price: '$14.25',
    },
    {
      name: 'Mushroom & Gruyère',
      description: 'Sautéed mushrooms with Swiss Gruyère and fresh herbs',
      price: '$11.50',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 parallax-bg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handcrafted crêpes made with the finest ingredients and traditional French techniques
          </p>
        </div>
      </section>

      {/* Sweet Crepes Section */}
      <section ref={sweetSectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-8">Sweet Crêpes</h2>
              <div className="space-y-6">
                {sweetCrepes.map((item, index) => (
                  <div key={index} className="menu-item crepe-card">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button variant="outline" className="btn-outline-hero mt-4">
                      Order Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="menu-item">
              <img
                src={sweetCrepeImg}
                alt="Sweet Crepes"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Savory Crepes Section */}
      <section ref={savorySectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="menu-item order-2 lg:order-1">
              <img
                src={savoryCrepeImg}
                alt="Savory Crepes"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gradient mb-8">Savory Crêpes</h2>
              <div className="space-y-6">
                {savoryCrepes.map((item, index) => (
                  <div key={index} className="menu-item crepe-card">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button variant="outline" className="btn-outline-hero mt-4">
                      Order Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today or place your order online for pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Visit Our Location
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              Order Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;