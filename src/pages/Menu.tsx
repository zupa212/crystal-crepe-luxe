import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sweet');
  const [expandedIngredients, setExpandedIngredients] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Menu item animations
      gsap.utils.toArray('.menu-item').forEach((item: any, index: number) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [activeCategory]);

  const categories = [
    { id: 'sweet', name: 'SWEET', color: 'text-primary' },
    { id: 'savoury', name: 'SAVOURY', color: 'text-muted-foreground' },
    { id: 'breakfast', name: 'BREAKFAST', color: 'text-muted-foreground' },
    { id: 'vegan', name: 'VEGAN', color: 'text-muted-foreground' },
    { id: 'coffee', name: 'COFFEE', color: 'text-muted-foreground' },
    { id: 'waffles', name: 'WAFFLES', color: 'text-muted-foreground' },
    { id: 'pancakes', name: 'MINI PANCAKES', color: 'text-muted-foreground' },
    { id: 'drinks', name: 'DRINKS', color: 'text-muted-foreground' },
  ];

  const viralMenu = [
    {
      name: 'Κρέπα Dubai chocolate',
      description: 'Με πραλίνα φυστίκι, Nutella & κανταΐφι',
      price: 'Από 7,60€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Dubai strawberry',
      description: 'Με πραλίνα φυστίκι, Nutella, κανταΐφι & φράουλα',
      price: 'Από 8,60€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα banoffee',
      description: 'Με πραλίνα lotus, πραλίνα λευκής σοκολάτας, μπανάνα & κροκάν αμυγδάλου',
      price: 'Από 7,20€',
      image: '/api/placeholder/300/300'
    },
  ];

  const sweetCrepes = [
    {
      name: 'Κρέπα 3Bit',
      description: 'Με Merenda, λευκή σοκολάτα & μπισκότο Μιράντα',
      price: 'Από 6,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Kiss',
      description: 'Με Μerenda, Kiss, μπισκότο Oreo & φρέσκια φράουλα',
      price: 'Από 6,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα strawberry',
      description: 'Με Merenda, μπισκότο Μιράντα & φρέσκια φράουλα',
      price: 'Από 5,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Walter white',
      description: 'Με λευκή σοκολάτα, μπισκότο Oreo & φρέσκια φράουλα',
      price: 'Από 5,70€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Kinder Bueno & Merenda',
      description: 'Με Merenda, πραλίνα Bueno & κομμάτια Kinder Bueno',
      price: 'Από 6,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Snickers',
      description: 'Με Merenda, φυστίκι, πραλίνα καραμέλα & Snickers',
      price: 'Από 7,20€',
      image: '/api/placeholder/300/300'
    },
  ];

  const savoryCrepes = [
    {
      name: 'Κρέπα γιαννιώτικη',
      description: 'Με gouda, μπέικον, κοτομπουκιές, πατάτες τηγανητές & ουγγαρέζα',
      price: 'Από 8,80€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα a la creme',
      description: 'Με gouda, μπέικον, τηγανιά κοτόπουλο, φρέσκα μανιτάρια σοταρισμένα, πατάτες τηγανητές & κρέμα γάλακτος',
      price: 'Από 9,90€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα γύρος χοιρινός',
      description: 'Με gouda, γύρο χοιρινό, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, ketchup & μουστάρδα',
      price: 'Από 8,70€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Crystal Crepe',
      description: 'Με διπλό gouda, μπέικον, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, ketchup & μουστάρδα',
      price: 'Από 8,80€',
      image: '/api/placeholder/300/300'
    },
  ];

  const getCurrentItems = () => {
    if (activeCategory === 'sweet') return sweetCrepes;
    if (activeCategory === 'savoury') return savoryCrepes;
    return viralMenu;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Category Navigation */}
      <div className="pt-24 pb-4 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm md:text-base font-medium transition-colors ${
                  activeCategory === category.id ? category.color : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex w-16 lg:w-20 bg-red-600 items-center justify-center">
          <div className="transform -rotate-90 whitespace-nowrap">
            <h2 className="text-white font-bold text-lg lg:text-xl tracking-widest">
              {activeCategory === 'sweet' ? 'SWEET CRÊPES' : 
               activeCategory === 'savoury' ? 'SAVOURY CRÊPES' : 
               'VIRAL MENU'}
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 py-8 px-4">
          <div className="container mx-auto">
            {/* Mobile Category Title */}
            <div className="md:hidden mb-8 text-center">
              <h2 className="text-3xl font-bold text-gradient">
                {activeCategory === 'sweet' ? 'Sweet Crêpes' : 
                 activeCategory === 'savoury' ? 'Savoury Crêpes' : 
                 'Viral Menu'}
              </h2>
            </div>

            {/* Featured Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" ref={menuRef}>
              {getCurrentItems().slice(0, 6).map((item, index) => (
                <div key={index} className="menu-item text-center">
                  {/* Crepe Image - Cone Shape */}
                  <div className="relative mb-4 group">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-full relative overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full">
                        <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center">
                          <div className="text-6xl">🥞</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item Info */}
                  <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">
                    {item.name}
                  </h3>

                  {/* Order Button */}
                  <Button 
                    className="bg-black text-white hover:bg-gray-800 px-8 py-2 text-sm font-medium mb-4"
                  >
                    ORDER HERE
                  </Button>

                  {/* Ingredients Dropdown */}
                  <button
                    onClick={() => setExpandedIngredients(expandedIngredients === index ? null : index)}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors mx-auto"
                  >
                    <span className="text-sm">INGREDIENTS +</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedIngredients === index ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expanded Ingredients */}
                  {expandedIngredients === index && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <p className="text-base font-bold text-primary mt-2">
                        {item.price}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Add Fillings Section */}
            <div className="text-center py-12 border-t">
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-widest">ADD FILLINGS</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Maple syrup, walnuts, strawberries, banana, Nutella®, milk chocolate,
                white chocolate, cinnamon, fresh lemon juice, butterscotch.
                Scoop of ice cream or a portion of whipped cream...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;