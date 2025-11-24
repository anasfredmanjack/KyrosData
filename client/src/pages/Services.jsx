import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services-page font-body">
            <div className="relative py-24 bg-cover bg-center text-center text-white" style={{ backgroundImage: "linear-gradient(rgba(0, 63, 125, 0.9), rgba(10, 26, 47, 0.9)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Our Services</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Comprehensive solutions for your global migration journey. We support you at every step.</p>
                </div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-gold transition-all duration-300 group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                                <service.icon />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary-navy font-heading group-hover:text-primary-blue transition-colors">{service.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.shortDesc}</p>
                            <Link to={`/services/${service.id}`} className="text-primary-gold font-bold hover:text-primary-blue transition-colors inline-flex items-center gap-2 mt-auto">
                                Read More <FaArrowRight className="text-sm" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-secondary-navy mb-6">Not sure what you need?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us for a free consultation and let our experts guide you to the right path.</p>
                    <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
