import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { services } from '../data/services';
import { packages } from '../data/packages';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        package: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (location.state && location.state.selectedPackage) {
            setFormData(prev => ({
                ...prev,
                package: location.state.selectedPackage,
                message: `I am interested in the ${location.state.selectedPackage}. Please provide more information.`
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            await axios.post(`${apiUrl}/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: '', package: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-page font-body">
            <div className="bg-secondary-navy py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Contact Us</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Get in touch to start your global journey. We are here to answer your questions.</p>
                </div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary-blue font-heading">Get In Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">Have questions about our services or packages? Reach out to us today via phone, email, or visit our office.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary-gold text-2xl flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-secondary-navy">Visit Us</h3>
                                    <p className="text-gray-600 leading-relaxed">D34 Iyemi Plaza Along Lokogoma Gudu Road Abuja</p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary-gold text-2xl flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-secondary-navy">Call Us</h3>
                                    <p className="text-gray-600">09047575374</p>
                                    <p className="text-gray-600">0701 093 5596</p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary-gold text-2xl flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-secondary-navy">Email Us</h3>
                                    <p className="text-gray-600">KyrosDoxa@Gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold mb-8 text-secondary-navy font-heading">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="+234..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service / Package</label>
                                    <select
                                        name="package"
                                        value={formData.package}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                                    >
                                        <option value="">Select a Service or Package</option>
                                        <optgroup label="Services">
                                            {services.map(service => (
                                                <option key={`service-${service.id}`} value={service.title}>{service.title}</option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Packages">
                                            {packages.map((pkg, index) => (
                                                <option key={`pkg-${index}`} value={pkg.title}>{pkg.title}</option>
                                            ))}
                                        </optgroup>
                                        <option value="Other">Other Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 text-green-700 p-4 rounded-lg text-center font-semibold border border-green-200"
                                >
                                    Message sent successfully! We will contact you shortly.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 text-red-700 p-4 rounded-lg text-center font-semibold border border-red-200"
                                >
                                    Failed to send message. Please try again later.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="h-[400px] w-full relative z-10">
                <iframe
                    src="https://maps.google.com/maps?q=D34%20Iyemi%20Plaza%20Lokogoma%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KyrosDoxa Office Location"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
