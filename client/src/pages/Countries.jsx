import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { countries } from '../data/countries';
import { FaMoneyBillWave, FaPassport, FaClock, FaInfoCircle, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/countries-hero.png';

const Countries = () => {
    const navigate = useNavigate();
    return (
        <div className="countries-page font-body">
            {/* Hero Section */}
            <div className="relative py-32 bg-cover bg-center text-center text-white overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(9, 29, 216, 0.85), rgba(30, 41, 59, 0.85)), url('${heroImage}')` }}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container-custom relative z-10">
                    <motion.h1
                        className="text-5xl md:text-6xl text-white font-bold mb-6 font-heading"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Global Opportunities
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore job markets, visa requirements, and salaries across Europe.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            {/* Countries Grid */}
            <section className="section container-custom">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-navy font-heading">Destinations</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">Find the perfect country for your next career move.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.id}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-48 relative overflow-hidden group-hover:h-52 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                <img src={country.image} alt={country.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-4 left-6 z-20 text-white flex justify-between items-end w-[calc(100%-3rem)]">
                                    <h3 className="text-2xl font-bold font-heading shadow-sm">{country.name}</h3>
                                    <span className="text-4xl shadow-sm">{country.flag}</span>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col gap-4">
                                <div>
                                    <h4 className="flex items-center gap-2 font-bold text-secondary-navy mb-2">
                                        <FaBriefcase className="text-primary-gold" /> Popular Jobs
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {country.jobs.map((job, i) => (
                                            <span key={i} className="bg-blue-50 text-primary-blue text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-100">
                                                {job}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
                                    <div className="flex items-start gap-2">
                                        <FaMoneyBillWave className="text-primary-gold mt-1 flex-shrink-0" />
                                        <span><strong className="text-gray-800">Salary:</strong> {country.salary}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <FaPassport className="text-primary-gold mt-1 flex-shrink-0" />
                                        <span><strong className="text-gray-800">Visa:</strong> {country.visa}</span>
                                    </div>
                                    {country.processingTime && (
                                        <div className="flex items-start gap-2">
                                            <FaClock className="text-primary-gold mt-1 flex-shrink-0" />
                                            <span><strong className="text-gray-800">Processing:</strong> {country.processingTime}</span>
                                        </div>
                                    )}
                                    {country.notes && (
                                        <div className="flex items-start gap-2">
                                            <FaInfoCircle className="text-primary-gold mt-1 flex-shrink-0" />
                                            <span className="italic">{country.notes}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-semibold">Processing Fee</span>
                                        <span className="text-xl font-bold text-primary-blue">{country.fee}</span>
                                    </div>
                                    <button
                                        onClick={() => navigate('/contact', { state: { selectedCountry: country.name } })}
                                        className="btn btn-outline-blue w-full py-2 text-sm flex items-center justify-center gap-2 group/btn"
                                    >
                                        Make Enquiry <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Countries;
