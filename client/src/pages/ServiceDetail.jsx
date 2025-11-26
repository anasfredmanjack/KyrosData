import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <div className="container-custom section text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Service Not Found</h2>
                    <Link to="/services" className="btn btn-primary">Back to Services</Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-secondary-navy to-primary-blue py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/services" className="inline-flex items-center gap-2 text-primary-gold hover:text-white transition-colors mb-6 text-lg">
                            <FaArrowLeft /> Back to Services
                        </Link>
                        <div className="flex items-center gap-6 mb-6">
                            <motion.div 
                                className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center text-5xl text-primary-gold border border-white/20"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <service.icon />
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                        </div>
                        <p className="text-xl text-gray-200 max-w-3xl">{service.shortDesc}</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-primary-blue">Overview</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">{service.fullDesc}</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-8">
                            <h3 className="text-2xl font-bold mb-8 text-secondary-navy">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <FaCheck className="text-green-600 text-xs" />
                                        </div>
                                        <span className="text-gray-700 text-lg">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            className="bg-gradient-to-r from-secondary-navy to-primary-blue text-white p-12 rounded-2xl text-center relative overflow-hidden shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -ml-32 -mb-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-primary-gold mb-4">Interested in this service?</h3>
                                <p className="mb-8 text-gray-200 text-lg">Contact us today to get started with your application.</p>
                                <motion.button
                                    onClick={() => navigate('/contact', { state: { selectedPackage: service.title } })}
                                    className="btn btn-gold text-lg px-10 py-4"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get in Touch
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-secondary-navy">Other Services</h3>
                            <ul className="space-y-3">
                                {services.filter(s => s.id !== service.id).map((s, index) => (
                                    <motion.li 
                                        key={s.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link 
                                            to={`/services/${s.id}`} 
                                            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-primary-blue hover:bg-blue-50 font-medium transition-all group"
                                        >
                                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary-gold group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                                <s.icon />
                                            </div>
                                            <span className="flex-1">{s.title}</span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
