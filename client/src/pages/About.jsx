import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const values = [
        { title: 'Integrity', desc: 'We provide honest, transparent, and ethical guidance at every stage.' },
        { title: 'Excellence', desc: 'We deliver top-tier service, from documentation to deployment.' },
        { title: 'Reliability', desc: 'We keep our promise—every client receives consistent, dependable support.' },
        { title: 'Client-Centricity', desc: 'Our clients’ dreams, safety, and satisfaction come first.' },
        { title: 'Professionalism', desc: 'We uphold the highest standards in recruitment and advisory.' },
        { title: 'Accountability', desc: 'We take responsibility for the outcomes we deliver.' },
        { title: 'Innovation', desc: 'We continuously improve our processes for efficiency.' },
    ];

    return (
        <div className="about-page">
            <div className="relative py-24 bg-cover bg-center text-center text-white" style={{ backgroundImage: "linear-gradient(rgba(0, 63, 125, 0.9), rgba(10, 26, 47, 0.9)), url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop')" }}>
                <div className="container-custom">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl opacity-90">Bridging the gap between talent and opportunity.</p>
                </div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="about-content">
                        <h2 className="text-3xl font-bold mb-6 text-primary-blue">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            KyrosDoxa Consulting Limited is a trusted global recruitment and relocation consultancy helping individuals secure verified job opportunities and seamless migration pathways to Ireland and Europe.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Established in 2024, we began with a single purpose—to bridge the gap between skilled individuals seeking global opportunities and international employers in need of reliable, qualified talent. From a small advisory practice in Nigeria, we have evolved into a full-fledged international recruitment and migration consultancy.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            What makes us unique is our commitment to transparency, ethical processing, and personalized guidance. We don’t just relocate clients; we ensure they arrive prepared, informed, and positioned for success.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg" alt="Team Meeting" className="w-full rounded-xl shadow-2xl" />
                    </div>
                </div>
            </section>

            <section className="section bg-neutral-softWhite">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-primary-gold"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-2xl font-bold text-primary-blue mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower individuals and families with transparent, efficient, and ethical global migration solutions. We connect clients to genuine career opportunities, provide expert guidance from application to arrival, and deliver a seamless relocation experience built on trust, professionalism, and excellence.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-primary-gold"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-2xl font-bold text-primary-blue mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become Africa’s most trusted gateway to global opportunities—transforming lives by making international relocation accessible, reliable, and life-changing for every client we serve.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section container-custom">
                <h2 className="text-center text-3xl font-bold mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FaCheckCircle className="text-primary-gold text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-secondary-navy mb-2">{value.title}</h4>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
