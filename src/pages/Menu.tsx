import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('offers');
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
    { id: 'offers', name: 'ΠΡΟΣΦΟΡΕΣ', color: 'text-primary' },
    { id: 'savoury', name: 'ΑΛΜΥΡΕΣ', color: 'text-muted-foreground' },
    { id: 'sweet', name: 'ΓΛΥΚΕΣ', color: 'text-muted-foreground' },
    { id: 'viral', name: 'VIRAL MENU', color: 'text-muted-foreground' },
    { id: 'luxurious', name: 'LUXURIOUS', color: 'text-muted-foreground' },
    { id: 'build', name: 'ΦΤΙΑΞΤΕ ΔΙΚΑ ΣΑΣ', color: 'text-muted-foreground' },
  ];

  const offers = [
    {
      name: 'Με 2 αλμυρές κρέπες, δώρο 1 κρέπα Merenda',
      description: 'Ειδική προσφορά με 2 αλμυρές κρέπες της επιλογής σας',
      price: 'Από 16,20€',
      image: '/api/placeholder/300/300'
    },
    {
      name: '1 Hot dog extra & 1 βάφλα Merenda',
      description: 'Συνδυασμός hot dog με βάφλα Merenda',
      price: '8,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: '3 Κρέπες Merenda',
      description: 'Τρεις γλυκές κρέπες Merenda',
      price: '11,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: '1 Τορτίγια της επιλογής σας & 1 σαλάτα',
      description: 'Τορτίγια με σαλάτα της επιλογής σας',
      price: '12,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: '1 Club sandwich απλό & 1 κρέπα Merenda',
      description: 'Club sandwich με γλυκιά κρέπα Merenda',
      price: '9,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sweet combo: 4 κρέπες γλυκές & 4 μπάλες παγωτό',
      description: 'Συνδυασμός 4 γλυκών κρεπών με παγωτό',
      price: '27,00€',
      image: '/api/placeholder/300/300'
    },
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
    {
      name: 'Κρέπα lotus',
      description: 'Με πραλίνα lotus, Nutella & τραγανό κανταΐφι',
      price: 'Από 6,90€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα pistachio',
      description: 'Με πραλίνα φιστικιού, λευκή πραλίνα & καραμελωμένα αμύγδαλα',
      price: 'Από 6,20€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dubai strawberry pancakes',
      description: 'Με Nutella, πραλίνα φυστικιού, κανταΐφι & φράουλα',
      price: 'Από 10,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Mary Jane',
      description: 'Με πραλίνα lotus, πραλίνα φυστικιού & ολόκληρα κομμάτια Oreo',
      price: 'Από 6,80€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Pancakes 04:20',
      description: 'Με διπλή Nutella, cookies & marshmallow',
      price: 'Από 8,40€',
      image: '/api/placeholder/300/300'
    },
  ];

  const sweetCrepes = [
    {
      name: 'Κρέπα 3Bit',
      description: 'Με Merenda, λευκή σοκολάτα & μπισκότο Μιράντα',
      price: 'Από 6,00€',
      image: '/biscof.png'
    },
    {
      name: 'Κρέπα Kiss',
      description: 'Με Μerenda, Kiss, μπισκότο Oreo & φρέσκια φράουλα',
      price: 'Από 6,50€',
      image: '/clasic nutela.png'
    },
    {
      name: 'Κρέπα strawberry',
      description: 'Με Merenda, μπισκότο Μιράντα & φρέσκια φράουλα',
      price: 'Από 5,50€',
      image: '/lotus biscof.png'
    },
    {
      name: 'Κρέπα Walter white',
      description: 'Με λευκή σοκολάτα, μπισκότο Oreo & φρέσκια φράουλα',
      price: 'Από 5,70€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα creme 2',
      description: 'Με Merenda, κρέμα patisserie & μπισκότο Μιράντα',
      price: 'Από 6,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Mars',
      description: 'Με πραλίνα καραμέλας, λευκή πραλίνα & κομμάτια Mars',
      price: 'Από 6,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Snickers',
      description: 'Με Merenda, φυστίκι, πραλίνα καραμέλα & Snickers',
      price: 'Από 7,20€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα black velvet',
      description: 'Με πραλίνα καραμέλας, μαύρη σοκολάτα & μπανάνα φρούτο',
      price: 'Από 6,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Kinder Bueno & Merenda',
      description: 'Με Merenda, πραλίνα Bueno & κομμάτια Kinder Bueno',
      price: 'Από 6,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα σοκοφρέτα',
      description: 'Με πραλίνα σοκοφρέτα ΙΟΝ & κομμάτια σοκοφρέτας',
      price: 'Από 5,30€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Lila Pause',
      description: 'Με μπάρα σοκολάτας Lila Pause, Merenda & πραλίνα φράουλα',
      price: 'Από 6,50€',
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
      name: 'Κρέπα γύρος κοτόπουλο',
      description: 'Με gouda, γύρο κοτόπουλο, πατάτες τηγανητές, ντομάτα & σως μουστάρδας',
      price: 'Από 8,70€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα της γιαγιάς',
      description: 'Με gouda, κεφτεδάκι μοσχαρίσιο, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, ketchup & μουστάρδα',
      price: 'Από 8,10€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα hot dog',
      description: 'Με λουκάνικο Φρανκφούρτης, gouda, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, ketchup & μουστάρδα',
      price: 'Από 8,10€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα πικάντικη',
      description: 'Με gouda, λουκάνικο πεπερόνι, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, μουστάρδα & ketchup',
      price: 'Από 8,10€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα BBQ τηγανιά',
      description: 'Με gouda, τηγανιά κοτόπουλο, chips, σωτέ μανιτάρια & BBQ σως',
      price: 'Από 8,40€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Caesar`s',
      description: 'Με gouda, κεφαλοτύρι, φιλέτο κοτόπουλο, καλαμπόκι, μαρούλι & Caesar`s σως',
      price: 'Από 8,80€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα pizza',
      description: 'Με gouda, μοτσαρέλα, μπέικον, πιπεριά, σωτέ μανιτάρια & σάλτσα πίτσας',
      price: 'Από 8,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα Crystal Crepe',
      description: 'Με διπλό gouda, μπέικον, πατάτες τηγανητές, ντομάτα, τυροσαλάτα, ketchup & μουστάρδα',
      price: 'Από 8,80€',
      image: '/api/placeholder/300/300'
    },
  ];

  const luxuriousMenu = [
    {
      name: 'Κρέπα soft king',
      description: 'Με Merenda & ολόκληρο μπισκότο Soft king',
      price: '6,00€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Κρέπα cheese & μπέικον',
      description: 'Με gouda, κοτομπουκιές, λιωμένο cheddar, πατάτες τηγανητές & ψιλοκομμένο μπέικον',
      price: '9,50€',
      image: '/api/placeholder/300/300'
    },
  ];

  const buildYourOwn = [
    {
      name: 'Φτιάξτε τη δική σας αλμυρή κρέπα',
      description: 'Δημιουργήστε τη δική σας κρέπα με αγαπημένα σας υλικά. Η τελική τιμή θα καθοριστεί βάσει των επιλογών σας',
      price: 'Από 2,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Φτιάξτε τα δικά σας sushi crepes',
      description: 'Δημιουργήστε τα δικά σας sushi crepes με τα αγαπημένα σας υλικά. Η τελική τιμή θα καθοριστεί βάσει των επιλογών σας',
      price: 'Από 5,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Φτιάξτε τη δική σας γλυκιά spaghetti κρέπα',
      description: 'Δημιουργήστε τη δική σας γλυκιά spaghetti κρέπα με τα αγαπημένα σας υλικά. Η τελική τιμή θα καθοριστεί βάσει των επιλογών σας',
      price: 'Από 2,50€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Φτιάξτε το δικό σας sandwich',
      description: 'Δημιουργήστε τo δικό σας toast με τα αγαπημένα σας υλικά. Η τελική τιμή θα καθοριστεί βάσει των επιλογών σας',
      price: 'Από 1,20€',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Φτιάξτε τα δικά σας pancakes',
      description: 'Δημιουργήστε τα δικά σας pancakes με τα αγαπημένα σας υλικά. Η τελική τιμή θα καθοριστεί βάσει των επιλογών σας',
      price: 'Από 4,00€',
      image: '/api/placeholder/300/300'
    },
  ];

  const getCurrentItems = () => {
    if (activeCategory === 'offers') return offers;
    if (activeCategory === 'sweet') return sweetCrepes;
    if (activeCategory === 'savoury') return savoryCrepes;
    if (activeCategory === 'viral') return viralMenu;
    if (activeCategory === 'luxurious') return luxuriousMenu;
    if (activeCategory === 'build') return buildYourOwn;
    return offers;
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
        <div className={`hidden md:flex w-16 lg:w-20 items-center justify-center ${
          activeCategory === 'sweet' ? 'bg-red-600' : 
          activeCategory === 'savoury' ? 'bg-green-600' : 
          'bg-gray-600'
        }`}>
          <div className="transform -rotate-90 whitespace-nowrap">
            {activeCategory === 'savoury' ? (
              <img 
                src="/savourycrepes.svg" 
                alt="Savory Crepes" 
                className="h-12 w-auto"
              />
            ) : (
              <h2 className="text-white font-bold text-lg lg:text-xl tracking-widest">
                {activeCategory === 'offers' ? 'ΠΡΟΣΦΟΡΕΣ' : 
                 activeCategory === 'sweet' ? 'ΓΛΥΚΕΣ ΚΡΕΠΕΣ' : 
                 activeCategory === 'viral' ? 'VIRAL MENU' :
                 activeCategory === 'luxurious' ? 'LUXURIOUS' :
                 'ΦΤΙΑΞΤΕ ΔΙΚΑ ΣΑΣ'}
              </h2>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 py-8 px-4">
          <div className="container mx-auto">
            {/* Mobile Category Title */}
            <div className="md:hidden mb-8 text-center">
              <h2 className="text-3xl font-bold text-gradient">
                {activeCategory === 'offers' ? 'Προσφορές' : 
                 activeCategory === 'sweet' ? 'Γλυκές Κρέπες' : 
                 activeCategory === 'savoury' ? 'Αλμυρές Κρέπες' : 
                 activeCategory === 'viral' ? 'Viral Menu' :
                 activeCategory === 'luxurious' ? 'Luxurious Menu' :
                 'Φτιάξτε Δικά Σας'}
              </h2>
            </div>

            {/* Featured Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" ref={menuRef}>
              {getCurrentItems().slice(0, 6).map((item, index) => (
                <div key={index} className="menu-item text-center">
                  {/* Crepe Image */}
                  <div className="relative mb-4 group">
                    <div className="w-64 h-64 mx-auto rounded-2xl relative overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
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