import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Eshwar Traders</h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in construction materials and building supplies since 2013. Quality products, competitive prices, and excellent service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-red-500 transition-colors">Products</a></li>
              <li><a href="/services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                <span>+91 99999 88888</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span>info@eshwartraders.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Near Bus Stand, Korutla, Telangana</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Saturday</li>
              <li className="text-red-500">9:00 AM - 8:00 PM</li>
              <li>Sunday</li>
              <li className="text-red-500">Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
            <p className="text-sm">© 2024 Eshwar Traders. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}