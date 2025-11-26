import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserMd, FaGlobeEurope, FaArrowRight, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { services } from '../data/services';
import { packages } from '../data/packages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    const navigate = useNavigate();

    // Refs for Swiper instances
    const serviceSwiperRef = useRef(null);
    const packageSwiperRef = useRef(null);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const handleSelectPackage = (pkgTitle) => {
        navigate('/contact', { state: { selectedPackage: pkgTitle } });
    };

    return (
        <div className="home font-body overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 transform scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/80 to-secondary-navy/70 z-10"></div>

                <div className="container-custom relative z-20 py-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.span variants={fadeIn} className="inline-block py-1 px-3 rounded-full bg-primary-gold/20 text-primary-gold border border-primary-gold/30 font-semibold text-sm mb-6 backdrop-blur-sm">
                                #1 Trusted Migration Consultancy
                            </motion.span>
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading text-white"
                                variants={fadeIn}
                            >
                                Your Gateway to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-300">Global Opportunities</span>
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-2xl leading-relaxed"
                                variants={fadeIn}
                            >
                                We connect skilled professionals to verified employers in Ireland and Europe. Experience a seamless, transparent, and ethical relocation journey.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={fadeIn}
                            >
                                <Link to="/services" className="btn btn-primary bg-white text-primary-blue hover:bg-gray-100 hover:text-primary-blue border-0 shadow-xl">
                                    Explore Services
                                </Link>
                                <Link to="/contact" className="btn btn-gold shadow-xl flex items-center justify-center gap-2 group">
                                    Start Your Journey <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-softWhite to-transparent z-20"></div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white relative z-30 -mt-12 mx-4 md:mx-12 rounded-2xl shadow-2xl border border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        {[
                            { number: "100%", label: "Verified Jobs" },
                            { number: "50+", label: "Partner Companies" },
                            { number: "24/7", label: "Expert Support" },
                            { number: "10+", label: "Countries" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="p-6 group cursor-default"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue mb-3 font-heading group-hover:text-primary-gold transition-colors">{stat.number}</div>
                                <div className="text-gray-600 font-semibold uppercase tracking-wide text-xs md:text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-neutral-softWhite relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container-custom relative z-10">
                    <motion.div
                        className="text-center mb-20 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-navy font-heading">
                            Why Choose <span className="text-primary-blue">Kyros</span><span className="text-primary-gold">Doxa</span>?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700">We make international relocation simple, transparent, and life-changing.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: FaBriefcase, title: "Verified Jobs", desc: "Access legitimate employment opportunities with trusted employers in Ireland, Germany, and across Europe.", color: "from-blue-500 to-blue-600" },
                            { icon: FaUserMd, title: "Expert Guidance", desc: "Benefit from our specialized knowledge in visa applications, work permits, and international recruitment standards.", color: "from-primary-blue to-secondary-navy" },
                            { icon: FaGlobeEurope, title: "Seamless Relocation", desc: "From flight bookings to post-arrival settlement, we handle the complexities so you can focus on your new life.", color: "from-primary-gold to-yellow-600" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                                whileHover={{ y: -15, scale: 1.02 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/5 to-primary-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                                <motion.div
                                    className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-5xl text-white mb-8 shadow-lg relative z-10`}
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <feature.icon />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-5 text-secondary-navy group-hover:text-primary-blue transition-colors font-heading relative z-10">{feature.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-lg relative z-10">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Carousel Section */}
            <section className="section bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-navy font-heading">Our Services</h2>
                            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">Comprehensive solutions tailored to your migration needs.</p>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center gap-2 text-primary-blue font-bold hover:text-primary-gold transition-colors">
                            View All Services <FaArrowRight />
                        </Link>
                    </div>

                    <div className="relative px-4 md:px-12 group">
                        {/* Custom Navigation Buttons */}
                        <button 
                            onClick={() => serviceSwiperRef.current?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white text-primary-blue rounded-full shadow-lg flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300 border border-gray-100 focus:outline-none -ml-2 md:-ml-6 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        >
                            <FaChevronLeft className="text-lg" />
                        </button>
                        <button 
                            onClick={() => serviceSwiperRef.current?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white text-primary-blue rounded-full shadow-lg flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300 border border-gray-100 focus:outline-none -mr-2 md:-mr-6 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        >
                            <FaChevronRight className="text-lg" />
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            onSwiper={(swiper) => { serviceSwiperRef.current = swiper; }}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-20 !px-4"
                            style={{
                                "--swiper-pagination-bottom": "-5px"
                            }}
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.id} className="h-auto py-4">
                                    <div className="bg-neutral-softWhite p-8 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl text-primary-gold mb-6">
                                            <service.icon />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-secondary-navy font-heading">{service.title}</h3>
                                        <p className="text-gray-700 mb-6 flex-grow line-clamp-3">{service.shortDesc}</p>
                                        <Link to={`/services/${service.id}`} className="text-primary-blue font-bold hover:text-primary-gold transition-colors inline-flex items-center gap-2 mt-auto">
                                            Learn More <FaArrowRight className="text-sm" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/services" className="btn btn-primary w-full">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Packages Carousel Section */}
            <section className="section bg-secondary-navy text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">Tailored Packages</h2>
                        <p className="text-lg md:text-xl text-gray-300">Choose the plan that best fits your journey to a new life.</p>
                    </div>

                    <div className="relative px-4 md:px-12 group">
                        {/* Custom Navigation Buttons */}
                        <button 
                            onClick={() => packageSwiperRef.current?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-secondary-navy text-primary-gold rounded-full shadow-lg flex items-center justify-center hover:bg-primary-gold hover:text-secondary-navy transition-all duration-300 border border-primary-gold/30 focus:outline-none -ml-2 md:-ml-6 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        >
                            <FaChevronLeft className="text-lg" />
                        </button>
                        <button 
                            onClick={() => packageSwiperRef.current?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-secondary-navy text-primary-gold rounded-full shadow-lg flex items-center justify-center hover:bg-primary-gold hover:text-secondary-navy transition-all duration-300 border border-primary-gold/30 focus:outline-none -mr-2 md:-mr-6 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        >
                            <FaChevronRight className="text-lg" />
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            onSwiper={(swiper) => { packageSwiperRef.current = swiper; }}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-20 !px-4"
                            style={{
                                "--swiper-pagination-color": "#F59E0B",
                            }}
                        >
                            {packages.map((pkg, index) => (
                                <SwiperSlide key={index} className="h-auto py-4">
                                    <div className={`bg-white text-secondary-navy rounded-2xl overflow-hidden h-full flex flex-col relative ${pkg.highlight ? 'border-4 border-primary-gold' : ''}`}>
                                        {pkg.highlight && (
                                            <div className="bg-primary-gold text-secondary-navy text-xs font-bold uppercase tracking-widest py-1 text-center">
                                                Recommended
                                            </div>
                                        )}
                                        <div className="p-8 text-center border-b border-gray-100 bg-gray-50">
                                            <h3 className="text-xl font-bold mb-2 font-heading">{pkg.title}</h3>
                                            <div className="text-2xl font-bold text-primary-blue">{pkg.price}</div>
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <p className="text-sm text-gray-600 mb-4 text-center italic">{pkg.desc}</p>
                                            <ul className="space-y-3">
                                                {pkg.features.slice(0, 5).map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                                                        <FaCheck className="text-green-600 flex-shrink-0 mt-1" />
                                                        <span className="line-clamp-2">{feature}</span>
                                                    </li>
                                                ))}
                                                {pkg.features.length > 5 && (
                                                    <li className="text-center text-xs text-gray-500 pt-2">
                                                        + {pkg.features.length - 5} more features
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="p-6 bg-gray-50 mt-auto">
                                            <button
                                                onClick={() => handleSelectPackage(pkg.title)}
                                                className={`btn w-full ${pkg.highlight ? 'btn-gold' : 'btn-primary'}`}
                                            >
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 bg-white text-center relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        className="max-w-5xl mx-auto bg-gradient-to-r from-primary-blue via-secondary-navy to-primary-blue rounded-3xl p-12 md:p-20 shadow-2xl text-white relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-primary-gold rounded-full opacity-20 blur-3xl animate-float"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-8 relative z-10 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Ready to Transform Your Life?
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Join hundreds of successful clients who have relocated with KyrosDoxa. Your international career awaits.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className="btn btn-gold text-xl px-16 py-5 shadow-2xl hover:shadow-white/30 relative z-10">
                                Book a Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
