import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { MagneticWrapper } from './MagneticWrapper';
import './Features.css';

const Features = () => {
    return (
        <section className="features bg-dark" id="lotes">
            <div className="container features-container">
                <motion.div
                    className="features-header"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title text-light">Lote</h2>
                    <div className="title-divider"></div>
                    <p className="features-desc text-light">
                        Sectores exclusivos habilitados con todos los servicios.
                    </p>
                </motion.div>

                <div className="lotes-grid">
                    {/* Lote card 1 */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000}>
                        <motion.div
                            className="lote-card"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="lote-image placeholder-img">
                                <span>Lote 1</span>
                            </div>
                            <div className="lote-info">
                                <h3>Área Total</h3>
                                <p>500 m²</p>
                                <MagneticWrapper><button className="btn btn-outline btn-light btn-sm magnetic-btn">Ver Detalles</button></MagneticWrapper>
                            </div>
                        </motion.div>
                    </Tilt>

                    {/* Lote card 2 */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000}>
                        <motion.div
                            className="lote-card"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="lote-image placeholder-img">
                                <span>Lote 2</span>
                            </div>
                            <div className="lote-info">
                                <h3>Área Total</h3>
                                <p>650 m²</p>
                                <MagneticWrapper><button className="btn btn-outline btn-light btn-sm magnetic-btn">Ver Detalles</button></MagneticWrapper>
                            </div>
                        </motion.div>
                    </Tilt>

                    {/* Lote card 3 */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000}>
                        <motion.div
                            className="lote-card"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="lote-image placeholder-img">
                                <span>Lote 3</span>
                            </div>
                            <div className="lote-info">
                                <h3>Área Total</h3>
                                <p>720 m²</p>
                                <MagneticWrapper><button className="btn btn-outline btn-light btn-sm magnetic-btn">Ver Detalles</button></MagneticWrapper>
                            </div>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default Features;
