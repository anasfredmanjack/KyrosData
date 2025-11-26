import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav 
            className={`sticky top-0 z-50 h-20 flex items-center transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-custom flex justify-between items-center w-full">
                <Link to="/" className="font-heading text-2xl  tracking-tight group">
                    <motion.span 
                        className="text-[#091DD8] font-bold inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Kyros
                    </motion.span>
                    <motion.span 
                        className="text-[#091DD8] italic inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Doxa
                    </motion.span>
                </Link>

                <motion.div 
                    className="md:hidden text-2xl cursor-pointer text-primary-blue"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={link.path}
                                className={`font-semibold text-secondary-navy hover:text-primary-blue relative group ${location.pathname === link.path ? 'text-primary-blue' : ''}`}
                            >
                                {link.name}
                                <motion.span 
                                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-gold"
                                    initial={{ width: 0 }}
                                    animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/contact" className="btn btn-gold">
                            Get Started
                        </Link>
                    </motion.li>
                </ul>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul 
                            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl p-8 border-t border-gray-100"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={index} 
                                    className="my-4 text-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`font-semibold text-secondary-navy hover:text-primary-blue block py-2 ${location.pathname === link.path ? 'text-primary-blue' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li 
                                className="text-center mt-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to="/contact" className="btn btn-gold w-full" onClick={() => setIsOpen(false)}>
                                    Get Started
                                </Link>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
