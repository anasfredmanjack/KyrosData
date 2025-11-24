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
            <div className="bg-secondary-navy py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Service Packages</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Transparent pricing tailored to your needs. Choose the plan that fits your journey.</p>
                </div>
            </div>

            <section className="section container-custom">
                <div className="bg-yellow-50 text-yellow-800 p-6 rounded-xl border border-yellow-200 mb-16 text-center max-w-4xl mx-auto shadow-sm">
                    <strong>NOTE:</strong> All prices listed below are for Nigerian-side service charges ONLY. They do not include the professional fees charged for each country, which are billed separately depending on the job pathway and destination country.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 relative ${pkg.highlight ? 'border-2 border-primary-gold transform lg:-translate-y-4 z-10 shadow-2xl' : 'border border-gray-100 hover:shadow-xl'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {pkg.highlight && (
                                <div className="bg-primary-gold text-secondary-navy text-xs font-bold uppercase tracking-widest py-1 text-center">
                                    Recommended
                                </div>
                            )}
                            <div className={`p-8 text-center border-b border-gray-100 ${pkg.highlight ? 'bg-secondary-navy text-white' : 'bg-gray-50'}`}>
                                <h3 className="text-2xl font-bold mb-4 font-heading">{pkg.title}</h3>
                                <div className="text-3xl font-bold text-primary-gold mb-4">{pkg.price}</div>
                                <p className={`text-sm ${pkg.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{pkg.desc}</p>
                            </div>
                            <ul className="p-8 flex-grow space-y-4">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <FaCheck className="text-primary-gold flex-shrink-0 mt-1" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="p-8 text-center bg-gray-50 mt-auto">
                                <button
                                    onClick={() => handleSelectPackage(pkg.title)}
                                    className={`btn w-full ${pkg.highlight ? 'btn-gold' : 'btn-primary'}`}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Packages;
