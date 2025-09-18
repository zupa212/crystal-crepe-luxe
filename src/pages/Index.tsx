import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Star, MapPin } from 'lucide-react';
import heroVideoBg from '@/assets/hero-video-bg.jpg';
import sweetCrepeImg from '@/assets/sweet-crepe.jpg';
import savoryCrepeImg from '@/assets/savory-crepe.jpg';
import brunchCrepeImg from '@/assets/brunch-crepe.png';
import restaurantImg from '@/assets/restaurant-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      if (heroRef.current) {
        const tl = gsap.timeline();
        tl.fromTo('.hero-title',
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
        )
        .fromTo('.hero-subtitle',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo('.hero-buttons',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );

        // Parallax effect for hero background
        gsap.to('.hero-bg', {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // About section parallax
      if (aboutRef.current) {
        gsap.to('.about-image', {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.fromTo('.about-content',
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      // Features cards stagger animation
      gsap.utils.toArray('.feature-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, rotationX: 15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });

      // Testimonials section
      if (testimonialsRef.current) {
        gsap.fromTo('.testimonial',
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video Support */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0">
          {/* Video placeholder - you can replace with actual video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster={heroVideoBg}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
            <img
              src={heroVideoBg}
              alt="Fresh crepes being made"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Crystal Crepe
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Experience authentic French crêpes crafted with love, tradition, and the finest ingredients. Every bite tells a story of French culinary excellence.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Explore Menu
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="btn-outline-hero text-lg px-8 py-4">
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brunch With Us Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                BRUNCH WITH US
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 uppercase tracking-wide">
                AT CREPEAFFAIRE
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us for an unforgettable brunch experience where French tradition meets modern culinary artistry. Our carefully crafted crêpes are made fresh to order, using premium ingredients and time-honored techniques.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From sweet morning indulgences to savory brunch favorites, each dish is a celebration of flavor and craftsmanship. Come discover why Crystal Crepe has become the destination for discerning food lovers.
              </p>
              <Button size="lg" className="btn-hero text-lg px-12 py-4 rounded-full">
                BOOK NOW
              </Button>
            </div>
            <div className="about-image">
              <img
                src={brunchCrepeImg}
                alt="Delicious crepe with blueberries and cream"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card crepe-card text-center">
              <div className="mb-6">
                <img
                  src={sweetCrepeImg}
                  alt="Sweet Crepes"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Made with Love</h3>
              <p className="text-muted-foreground">
                Every crêpe is handcrafted with passion and attention to detail, using recipes passed down through generations.
              </p>
            </div>

            <div className="feature-card crepe-card text-center">
              <div className="mb-6">
                <img
                  src={savoryCrepeImg}
                  alt="Savory Crepes"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Premium Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients, from farm-fresh eggs to imported French cheeses and premium chocolates.
              </p>
            </div>

            <div className="feature-card crepe-card text-center md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <img
                  src={restaurantImg}
                  alt="Restaurant Ambiance"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Authentic Experience</h3>
              <p className="text-muted-foreground">
                Step into our warm, inviting space that captures the essence of a traditional French crêperie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial crepe-card text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The best crêpes I've had outside of Paris! The Nutella crêpe was absolutely divine."
              </p>
              <p className="font-semibold text-foreground">Sarah Johnson</p>
            </div>

            <div className="testimonial crepe-card text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Amazing savory options! The smoked salmon crêpe is my new favorite breakfast."
              </p>
              <p className="font-semibold text-foreground">Michael Chen</p>
            </div>

            <div className="testimonial crepe-card text-center md:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Perfect atmosphere and incredible food. This place feels like a hidden gem in the city."
              </p>
              <p className="font-semibold text-foreground">Emma Williams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the magic of authentic French crêpes in our cozy, welcoming atmosphere. Your taste buds will thank you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                View Our Menu
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              Find Our Location
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;