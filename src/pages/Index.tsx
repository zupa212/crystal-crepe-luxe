import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import heroVideoBg from '@/assets/hero-video-bg.jpg';
import brunchCrepeImg from '@/assets/brunch-crepe.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Crepe Cooking Section - Top 60% */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
      </section>

      {/* BRUNCH WITH US Section - Bottom 40% */}
      <section className="h-[40vh] flex">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            BRUNCH WITH US
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50 text-lg px-8 py-3 rounded-full"
          >
            BOOK NOW
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;