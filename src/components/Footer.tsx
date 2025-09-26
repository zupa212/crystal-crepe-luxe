// Global declarations for tracking
declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleOrderClick = (platform: string) => {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Footer Order',
        event_label: platform
      });
    }
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout', {
        content_name: `Order via ${platform}`,
        value: 0.00,
        currency: 'EUR'
      });
    }
  };

  return (
    <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 uppercase tracking-wider">
            Order Now
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            {/* Deliveroo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-50 border-2 px-8 py-6 h-auto"
                onClick={() => {
                  handleOrderClick('Deliveroo');
                  window.open('https://deliveroo.co.uk/', '_blank');
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-sm">d</span>
                  </div>
                  <span className="text-gray-600 font-medium">Deliveroo</span>
                </div>
              </Button>
            </motion.div>

            {/* Uber Eats */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-50 border-2 px-8 py-6 h-auto"
                onClick={() => {
                  handleOrderClick('Uber Eats');
                  window.open('https://www.ubereats.com/', '_blank');
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-sm">U</span>
                  </div>
                  <span className="text-gray-600 font-medium">Uber Eats</span>
                </div>
              </Button>
            </motion.div>

            {/* E-Food */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-50 border-2 px-8 py-6 h-auto"
                onClick={() => {
                  handleOrderClick('E-Food');
                  window.open('https://www.e-food.gr/delivery/thessaloniki/crystal-crepe-7607780', '_blank');
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="text-gray-600 font-medium">E-Food</span>
                </div>
              </Button>
            </motion.div>

            {/* Office Delivery */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-50 border-2 px-8 py-6 h-auto"
                onClick={() => {
                  handleOrderClick('Office Delivery');
                  window.open('https://www.e-food.gr/delivery/thessaloniki/crystal-crepe-7607780', '_blank');
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">📋</span>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-600 font-medium text-sm">Office</div>
                    <div className="text-gray-500 text-xs">Delivery</div>
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="text-center text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>© 2025 Crystal Crepe. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;