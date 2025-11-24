import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 h-20 flex items-center">
            <div className="container-custom flex justify-between items-center w-full">
                <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
                    <span className="text-primary-blue">Kyros</span><span className="text-primary-gold">Doxa</span>
                </Link>

                <div className="md:hidden text-2xl cursor-pointer text-primary-blue" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`md:flex items-center gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-8 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="my-4 md:my-0 text-center">
                            <Link
                                to={link.path}
                                className={`font-semibold text-secondary-navy hover:text-primary-blue relative group ${location.pathname === link.path ? 'text-primary-blue' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                            </Link>
                        </li>
                    ))}
                    <li className="text-center mt-4 md:mt-0">
                        <Link to="/contact" className="btn btn-gold" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
