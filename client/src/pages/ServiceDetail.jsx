import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { FaCheck } from 'react-icons/fa';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <div className="container-custom section text-center">
                <h2 className="text-3xl font-bold mb-6">Service Not Found</h2>
                <Link to="/services" className="btn btn-primary">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            <div className="bg-secondary-navy py-16 text-center text-white">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold">{service.title}</h1>
                </div>
            </div>

            <section className="section container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="text-6xl text-primary-gold mb-8">
                            <service.icon />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-primary-blue">Overview</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.fullDesc}</p>

                        <h3 className="text-2xl font-bold mb-6 text-secondary-navy">Key Features</h3>
                        <ul className="space-y-4 mb-12">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                                    <FaCheck className="text-primary-gold flex-shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-secondary-navy text-white p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold text-primary-gold mb-4">Interested in this service?</h3>
                            <p className="mb-6 text-gray-300">Contact us today to get started with your application.</p>
                            <button
                                onClick={() => navigate('/contact', { state: { selectedPackage: service.title } })}
                                className="btn btn-gold"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 border-b pb-4">Other Services</h3>
                            <ul className="space-y-4">
                                {services.filter(s => s.id !== service.id).map(s => (
                                    <li key={s.id}>
                                        <Link to={`/services/${s.id}`} className="text-gray-600 hover:text-primary-gold font-medium block transition-colors">
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
