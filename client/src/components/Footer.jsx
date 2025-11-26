import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    const contactInfo = [
        { icon: FaMapMarkerAlt, text: 'D34 Iyemi Plaza Along Lokogoma Gudu Road Abuja' },
        { icon: FaPhone, text: '09047575374 | 0701 093 5596' },
        { icon: FaEnvelope, text: 'KyrosDoxa@Gmail.com' },
    ];

    return (
        <footer className="bg-secondary-navy text-neutral-softWhite pt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">
                            <span className="text-white">Kyros</span><span className="text-primary-gold">Doxa</span>
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            Empowering individuals and families with transparent, efficient, and ethical global migration solutions.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a 
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-primary-gold hover:text-secondary-navy text-xl transition-all"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-primary-gold text-xl font-semibold mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link 
                                        to={link.path} 
                                        className="text-gray-300 hover:text-primary-gold transition-colors inline-flex items-center gap-2 text-lg group"
                                    >
                                        <span className="w-0 h-0.5 bg-primary-gold group-hover:w-4 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-primary-gold text-xl font-semibold mb-8">Contact Us</h4>
                        <ul className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.li 
                                    key={index}
                                    className="flex items-start gap-4 text-gray-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold group-hover:text-secondary-navy transition-all">
                                        <info.icon className="text-primary-gold group-hover:text-secondary-navy transition-colors" />
                                    </div>
                                    <span className="text-lg leading-relaxed">{info.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#050e1a] text-center py-6 mt-12 border-t border-white/10 relative z-10">
                <motion.p 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    &copy; {new Date().getFullYear()} KyrosDoxa Consulting Limited. All Rights Reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
