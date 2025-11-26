import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
    const values = [
        { title: 'Integrity', desc: 'We provide honest, transparent, and ethical guidance at every stage.' },
        { title: 'Excellence', desc: 'We deliver top-tier service, from documentation to deployment.' },
        { title: 'Reliability', desc: 'We keep our promise—every client receives consistent, dependable support.' },
        { title: 'Client-Centricity', desc: 'Our clients\' dreams, safety, and satisfaction come first.' },
        { title: 'Professionalism', desc: 'We uphold the highest standards in recruitment and advisory.' },
        { title: 'Accountability', desc: 'We take responsibility for the outcomes we deliver.' },
        { title: 'Innovation', desc: 'We continuously improve our processes for efficiency.' },
    ];

    const stats = [
        { icon: FaUsers, number: '500+', label: 'Happy Clients' },
        { icon: FaGlobe, number: '15+', label: 'Countries' },
        { icon: FaRocket, number: '98%', label: 'Success Rate' },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="relative py-32 bg-cover bg-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(9, 29, 216, 0.85), rgba(30, 41, 59, 0.85)), url('https://img.freepik.com/free-photo/diverse-business-people-working-office_23-2147656717.jpg')" }}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <motion.h1 
                        className="text-5xl md:text-6xl text-white font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Bridging the gap between talent and opportunity.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent"></div>
            </div>

            {/* Who We Are Section */}
            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 text-primary-blue">Who We Are</h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                KyrosDoxa Consulting Limited is a trusted global recruitment and relocation consultancy helping individuals secure verified job opportunities and seamless migration pathways to Ireland and Europe.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Established in 2024, we began with a single purpose—to bridge the gap between skilled individuals seeking global opportunities and international employers in need of reliable, qualified talent. From a small advisory practice in Nigeria, we have evolved into a full-fledged international recruitment and migration consultancy.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                What makes us unique is our commitment to transparency, ethical processing, and personalized guidance. We don't just relocate clients; we ensure they arrive prepared, informed, and positioned for success.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6 mt-12">
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <stat.icon className="text-4xl text-primary-gold mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-primary-blue">{stat.number}</div>
                                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        className="about-image relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue to-primary-gold rounded-2xl opacity-20 blur-2xl"></div>
                                <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg" alt="Team Meeting" className="relative w-full rounded-2xl shadow-2xl" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://img.freepik.com/free-photo/top-view-hands-holding-travel-documents_23-2150433383.jpg" alt="Travel Documents" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                <img src="https://img.freepik.com/free-photo/green-plane-ecofriendly-environment_23-2151582376.jpg" alt="Airplane View" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section bg-gradient-to-br from-primary-blue to-secondary-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl border border-white/20 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="w-16 h-16 bg-primary-gold rounded-xl flex items-center justify-center mb-6">
                                <FaRocket className="text-3xl text-secondary-navy" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
                            <p className="text-gray-100 text-lg leading-relaxed">
                                To empower individuals and families with transparent, efficient, and ethical global migration solutions. We connect clients to genuine career opportunities, provide expert guidance from application to arrival, and deliver a seamless relocation experience built on trust, professionalism, and excellence.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl border border-white/20 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="w-16 h-16 bg-primary-gold rounded-xl flex items-center justify-center mb-6">
                                <FaGlobe className="text-3xl text-secondary-navy" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
                            <p className="text-gray-100 text-lg leading-relaxed">
                                To become Africa's most trusted gateway to global opportunities—transforming lives by making international relocation accessible, reliable, and life-changing for every client we serve.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-4 items-start bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-gold transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue transition-colors">
                                <FaCheckCircle className="text-primary-gold text-2xl group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-secondary-navy mb-2 group-hover:text-primary-blue transition-colors">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
