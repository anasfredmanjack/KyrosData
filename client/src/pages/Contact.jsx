import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { services } from '../data/services';
import { packages } from '../data/packages';
import { countries } from '../data/countries';

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
        if (location.state) {
            if (location.state.selectedPackage) {
                setFormData(prev => ({
                    ...prev,
                    package: location.state.selectedPackage,
                    message: `I am interested in the ${location.state.selectedPackage}. Please provide more information.`
                }));
            } else if (location.state.selectedCountry) {
                setFormData(prev => ({
                    ...prev,
                    package: location.state.selectedCountry,
                    message: `I am interested in opportunities in ${location.state.selectedCountry}. Please provide more information.`
                }));
            }
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const loadingToast = toast.loading('Sending message...');
        try {
            // Use relative path for production (Vercel), localhost for development
            const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api');

            // Find details of selected item
            let details = '';
            const selectedName = formData.package;

            if (selectedName) {
                const service = services.find(s => s.title === selectedName);
                const pkg = packages.find(p => p.title === selectedName);
                const country = countries.find(c => c.name === selectedName);

                if (service) {
                    details = `
                        <h3>Service Details: ${service.title}</h3>
                        ${service.shortDesc ? `<p><strong>Description:</strong> ${service.shortDesc}</p>` : ''}
                        ${service.features && service.features.length > 0 ? `<p><strong>Features:</strong> ${service.features.join(', ')}</p>` : ''}
                    `;
                } else if (pkg) {
                    details = `
                        <h3>Package Details: ${pkg.title}</h3>
                        ${pkg.price ? `<p><strong>Price:</strong> ${pkg.price}</p>` : ''}
                        ${pkg.desc ? `<p><strong>Description:</strong> ${pkg.desc}</p>` : ''}
                        ${pkg.features && pkg.features.length > 0 ? `<p><strong>Features:</strong> ${pkg.features.join(', ')}</p>` : ''}
                    `;
                } else if (country) {
                    details = `
                        <h3>Country Details: ${country.name}</h3>
                        ${country.jobs && country.jobs.length > 0 ? `<p><strong>Jobs:</strong> ${country.jobs.join(', ')}</p>` : ''}
                        ${country.salary ? `<p><strong>Salary:</strong> ${country.salary}</p>` : ''}
                        ${country.visa ? `<p><strong>Visa:</strong> ${country.visa}</p>` : ''}
                        ${country.processingTime ? `<p><strong>Processing Time:</strong> ${country.processingTime}</p>` : ''}
                        ${country.fee ? `<p><strong>Fee:</strong> ${country.fee}</p>` : ''}
                    `;
                }
            }

            await axios.post(`${apiUrl}/contact`, { ...formData, details });
            setStatus('success');
            toast.success('Message sent successfully! We will contact you shortly.', { id: loadingToast });
            setFormData({ name: '', email: '', phone: '', service: '', package: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            toast.error('Failed to send message. Please try again later.', { id: loadingToast });
        }
    };

    return (
        <div className="contact-page font-body">
            <div className="relative py-24 bg-cover bg-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(9, 29, 216, 0.9), rgba(30, 41, 59, 0.9)), url('https://img.freepik.com/free-photo/customer-service-concept-with-woman-headset_23-2149116138.jpg')" }}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading text-white">Contact Us</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Get in touch to start your global journey. We are here to answer your questions.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary-blue font-heading">Get In Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">Have questions about our services or packages? Reach out to us today via phone, email, or visit our office.</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: FaMapMarkerAlt, title: 'Visit Us', content: 'D34 Iyemi Plaza Along Lokogoma Gudu Road Abuja' },
                                { icon: FaPhone, title: 'Call Us', content: ['09047575374', '0701 093 5596'] },
                                { icon: FaEnvelope, title: 'Email Us', content: 'KyrosDoxa@Gmail.com' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-5 group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-primary-gold text-2xl flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-secondary-navy group-hover:text-primary-blue transition-colors">{item.title}</h3>
                                        {Array.isArray(item.content) ? (
                                            item.content.map((line, i) => <p key={i} className="text-gray-600">{line}</p>)
                                        ) : (
                                            <p className="text-gray-600 leading-relaxed">{item.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
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
                                        <optgroup label="Countries">
                                            {countries.map((country) => (
                                                <option key={`country-${country.id}`} value={country.name}>{country.name}</option>
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
                        </form>
                    </motion.div>
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
