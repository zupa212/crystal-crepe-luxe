import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import heroVideoBg from '@/assets/hero-video-bg.jpg';
import brunchCrepeImg from '@/assets/brunch-crepe.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const brunchRef = useRef(null);
  const partiesRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    // Hero section parallax animation
    gsap.fromTo(heroRef.current, 
      { scale: 1.1, opacity: 0.8, y: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        y: -100,
        duration: 2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      }
    );

    // Video parallax effect
    gsap.to(heroRef.current?.querySelector('video'), {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Brunch section animation
    gsap.fromTo(brunchRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: brunchRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parties section animation
    gsap.fromTo(partiesRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: partiesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Events section animation
    gsap.fromTo(eventsRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for buttons
    gsap.to(".floating-btn", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Crepe Cooking Section - Top 60% */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video 1 */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/Video-657.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
            <img
              src={heroVideoBg}
              alt="Fresh crepes being made"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* BRUNCH WITH US Section - Bottom 40% */}
      <section ref={brunchRef} className="h-[40vh] flex">
        {/* Left side - Video 2 */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            >
              <source src="/Video-956.mp4" type="video/mp4" />
              {/* Fallback image if video fails */}
              <img
                src={brunchCrepeImg}
                alt="Delicious crepe with blueberries and cream"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </video>
          </div>
        </div>
        
        {/* Right side - BRUNCH WITH US text and button */}
        <div className="w-1/2 bg-gray-200 flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-8 text-center" style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.1em' }}>
            BRUNCH WITH US
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/efood.png" 
              alt="e-food" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-lg font-semibold text-gray-700">Order Online</span>
          </div>
          <Button 
            size="lg" 
            className="floating-btn bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50 text-lg px-8 py-3 rounded-full"
          >
            BOOK NOW
          </Button>
        </div>
      </section>

      {/* PARTIES AT CRÊPEAFFAIRE Section */}
      <section ref={partiesRef} className="h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/5 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-25 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-start justify-center p-8 md:p-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wider">
            PARTIES AT CRÊPEAFFAIRE
          </h2>
          <Button 
            size="lg" 
            className="floating-btn bg-black text-white border-2 border-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full transition-all duration-300"
          >
            BOOK NOW
          </Button>
        </div>
      </section>

      {/* Special Events Section with Parallax */}
      <section ref={eventsRef} className="h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-red-100">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 via-orange-200/20 to-red-200/30"></div>
          {/* Parallax background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-300/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-300/20 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6 uppercase tracking-wider">
            SPECIAL EVENTS
          </h2>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl">
            Celebrate your special moments with our exquisite crepes and unforgettable experiences
          </p>
          <Button 
            size="lg" 
            className="floating-btn bg-amber-600 text-white hover:bg-amber-700 text-lg px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            LEARN MORE
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;