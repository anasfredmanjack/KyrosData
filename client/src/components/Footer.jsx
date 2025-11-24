import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary-navy text-neutral-softWhite pt-16">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
                <div className="footer-col">
                    <h3 className="text-2xl font-bold mb-4">
                        <span className="text-white">Kyros</span><span className="text-primary-gold">Doxa</span>
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Empowering individuals and families with transparent, efficient, and ethical global migration solutions.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-white hover:text-primary-gold text-xl transition-colors"><FaFacebook /></a>
                        <a href="#" className="text-white hover:text-primary-gold text-xl transition-colors"><FaTwitter /></a>
                        <a href="#" className="text-white hover:text-primary-gold text-xl transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-white hover:text-primary-gold text-xl transition-colors"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="text-primary-gold text-xl font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link to="/" className="text-gray-300 hover:text-primary-gold hover:pl-1 transition-all">Home</Link></li>
                        <li><Link to="/about" className="text-gray-300 hover:text-primary-gold hover:pl-1 transition-all">About Us</Link></li>
                        <li><Link to="/services" className="text-gray-300 hover:text-primary-gold hover:pl-1 transition-all">Services</Link></li>
                        <li><Link to="/packages" className="text-gray-300 hover:text-primary-gold hover:pl-1 transition-all">Packages</Link></li>
                        <li><Link to="/contact" className="text-gray-300 hover:text-primary-gold hover:pl-1 transition-all">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="text-primary-gold text-xl font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-300">
                            <FaMapMarkerAlt className="text-primary-gold mt-1 flex-shrink-0" />
                            <span>D34 Iyemi Plaza Along Lokogoma Gudu Road Abuja</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                            <FaPhone className="text-primary-gold mt-1 flex-shrink-0" />
                            <span>09047575374 | 0701 093 5596</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-300">
                            <FaEnvelope className="text-primary-gold mt-1 flex-shrink-0" />
                            <span>KyrosDoxa@Gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#050e1a] text-center py-6 mt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} KyrosDoxa Consulting Limited. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
