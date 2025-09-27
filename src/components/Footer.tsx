// Global declarations for tracking
declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Crystal Crepe</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Authentic French crêpes crafted with love and tradition. Experience the finest ingredients and time-honored techniques in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Διεύθυνση:</p>
                  <p className="text-gray-300">Καλαποθάκη 20</p>
                  <p className="text-gray-300">Θεσσαλονίκη 546 24</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+302310238078" className="text-gray-300 hover:text-primary transition-colors">
                  231 023 8078
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@crystalcrepe.gr" className="text-gray-300 hover:text-primary transition-colors">
                  info@crystalcrepe.gr
                </a>
              </div>
            </div>
          </motion.div>

          {/* Order Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6">Order Online</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white hover:bg-gray-50 text-gray-800 border-white"
                onClick={() => {
                  handleOrderClick('E-Food');
                  window.open('https://www.e-food.gr/delivery/thessaloniki/crystal-crepe-7607780', '_blank');
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">E</span>
                  </div>
                  E-Food
                </div>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white hover:bg-gray-50 text-gray-800 border-white"
                onClick={() => {
                  handleOrderClick('Deliveroo');
                  window.open('https://deliveroo.co.uk/', '_blank');
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-500 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">d</span>
                  </div>
                  Deliveroo
                </div>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hours */}
        <motion.div
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold">Opening Hours</h4>
          </div>
          <div className="text-center text-gray-300">
            <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>
            <p className="text-sm text-gray-400 mt-1">Kitchen closes at 10:30 PM</p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>© 2025 Crystal Crepe. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ in Thessaloniki</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;