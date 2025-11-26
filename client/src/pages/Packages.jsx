import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import { packages } from '../data/packages';

const Packages = () => {
    const navigate = useNavigate();

    const handleSelectPackage = (pkgTitle) => {
        navigate('/contact', { state: { selectedPackage: pkgTitle } });
    };

    return (
        <div className="packages-page font-body">
            <div className="bg-gradient-to-br from-secondary-navy to-primary-blue py-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <motion.h1 
                        className="text-5xl md:text-6xl text-white font-bold mb-6 font-heading"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Service Packages
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Transparent pricing tailored to your needs. Choose the plan that fits your journey.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            {/* Visual Section */}
            <section className="section bg-gradient-to-br from-blue-50 to-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue to-primary-gold rounded-2xl opacity-20 blur-2xl"></div>
                            <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149030852.jpg" alt="Travel Packages" className="relative w-full rounded-2xl shadow-2xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 text-secondary-navy">Tailored Packages for Every Journey</h2>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Whether you're a healthcare professional, IT specialist, or skilled worker, we have the perfect package to match your needs and budget.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://img.freepik.com/free-photo/smiling-call-center-agent-dealing-with-unhappy-customers_482257-126640.jpg" alt="Documents" className="w-full h-40 object-cover rounded-xl shadow-lg" />
                                <img src="https://img.freepik.com/free-photo/businessman-consulting-legal-expert_74855-1103.jpg" alt="Flight" className="w-full h-40 object-cover rounded-xl shadow-lg" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section container-custom">
                <motion.div 
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-900 p-8 rounded-2xl border-2 border-yellow-200 mb-16 text-center max-w-4xl mx-auto shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <strong className="text-xl">NOTE:</strong> <span className="text-lg">All prices listed below are for Nigerian-side service charges ONLY. They do not include the professional fees charged for each country, which are billed separately depending on the job pathway and destination country.</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 relative ${pkg.highlight ? 'border-4 border-primary-gold transform lg:-translate-y-6 lg:scale-105 z-10 shadow-2xl' : 'border border-gray-100 hover:shadow-2xl'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: pkg.highlight ? -6 : -10 }}
                        >
                            {pkg.highlight && (
                                <motion.div 
                                    className="bg-gradient-to-r from-primary-gold to-yellow-500 text-secondary-navy text-sm font-bold uppercase tracking-widest py-2 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    ⭐ Most Popular
                                </motion.div>
                            )}
                            <div className={`p-10 text-center border-b border-gray-100 relative overflow-hidden ${pkg.highlight ? 'bg-gradient-to-br from-secondary-navy to-primary-blue text-white' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
                                {pkg.highlight && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 rounded-full -mr-16 -mt-16"></div>
                                )}
                                <h3 className="text-2xl font-bold mb-6 font-heading relative z-10">{pkg.title}</h3>
                                <motion.div 
                                    className="text-4xl font-bold text-primary-gold mb-4 relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {pkg.price}
                                </motion.div>
                                <p className={`text-base ${pkg.highlight ? 'text-gray-200' : 'text-gray-600'} relative z-10`}>{pkg.desc}</p>
                            </div>
                            <ul className="p-10 flex-grow space-y-4">
                                {pkg.features.map((feature, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        className="flex items-start gap-3 text-base text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <FaCheck className="text-green-600 text-xs" />
                                        </div>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-white mt-auto">
                                <motion.button
                                    onClick={() => handleSelectPackage(pkg.title)}
                                    className={`btn w-full text-lg ${pkg.highlight ? 'btn-gold' : 'btn-primary'}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Choose Plan
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Packages;
