import React from 'react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './AgentProfile.css';

const AgentProfile = () => {
    return (
        <section className="agent-profile" id="agente">
            <div className="container agent-container">
                <div className="agent-grid">
                    <motion.div 
                        className="agent-image-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="agent-image-wrapper">
                            <img src="/Jorge bienes raices .jpeg" alt="Jorge Bienes Raíces" className="agent-img" />
                            <div className="agent-img-decoration"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="agent-content-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="section-title text-gold" style={{ marginBottom: '0.2rem' }}>Tu Asesor Inmobiliario</h2>
                        <h3 className="agent-name" style={{ marginTop: 0, marginBottom: '1rem' }}>Jorge Bienes Raíces</h3>
                        <div className="title-divider"></div>
                        
                        <div className="agent-description">
                            <p>
                                <strong>Jorge Bienes Raíces</strong> es una marca personal especializada en la comercialización de propiedades en Ecuador, con más de 10 años de experiencia en el sector inmobiliario.
                            </p>
                            <p>
                                A través de estrategias de marketing digital y una fuerte presencia en redes sociales como Instagram, TikTok y Facebook, conecta de manera efectiva a propietarios con compradores.
                            </p>
                            <p>
                                Su enfoque se basa en la transparencia, el acompañamiento personalizado y la promoción estratégica de casas, departamentos y terrenos, logrando mayor visibilidad y resultados más rápidos en la venta de propiedades.
                            </p>
                            <p>
                                Se caracteriza por ser una marca confiable, con respaldo, profesionalismo y un acompañamiento cercano durante todo el proceso de compra o venta, brindando seguridad y garantía a sus clientes en cada operación inmobiliaria.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AgentProfile;
