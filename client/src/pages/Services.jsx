import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services-page font-body">
            <div className="relative py-32 bg-cover bg-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(0, 63, 125, 0.9), rgba(10, 26, 47, 0.9)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <motion.h1 
                        className="text-5xl md:text-6xl text-white font-bold mb-6 font-heading"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Comprehensive solutions for your global migration journey. We support you at every step.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-gold transition-all duration-300 group flex flex-col relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/5 to-primary-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                            <motion.div 
                                className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-4xl text-primary-blue mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-blue group-hover:to-secondary-navy group-hover:text-white transition-all duration-300 relative z-10"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <service.icon />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary-navy font-heading group-hover:text-primary-blue transition-colors relative z-10">{service.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-lg relative z-10">{service.shortDesc}</p>
                            <Link to={`/services/${service.id}`} className="text-primary-gold font-bold hover:text-primary-blue transition-colors inline-flex items-center gap-2 mt-auto group/link relative z-10">
                                Read More <FaArrowRight className="text-sm group-hover/link:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary-blue to-secondary-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Not sure what you need?</h2>
                        <p className="text-gray-200 text-xl mb-10 max-w-2xl mx-auto">Contact us for a free consultation and let our experts guide you to the right path.</p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className="btn btn-gold text-lg px-12 py-4">Get in Touch</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
