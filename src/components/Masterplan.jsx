import React from 'react';
import { motion } from 'framer-motion';
import './Masterplan.css';

const lotesData = [
    { id: 1, area: 400.29 }, { id: 2, area: 400.49 }, { id: 3, area: 400.57 },
    { id: 4, area: 400.06 }, { id: 5, area: 400.54 }, { id: 6, area: 400.41 },
    { id: 7, area: 400.00 }, { id: 8, area: 400.33 }, { id: 9, area: 400.62 },
    { id: 10, area: 400.21 }, { id: 11, area: 400.96 }, { id: 12, area: 400.27 },
    { id: 13, area: 400.99 }, { id: 14, area: 551.81 }, { id: 15, area: 400.00 },
    { id: 16, area: 400.83 }, { id: 17, area: 400.44 }, { id: 18, area: 400.03 },
    { id: 19, area: 401.14 }, { id: 20, area: 403.91 }, { id: 21, area: 406.76 },
    { id: 22, area: 409.39 }, { id: 23, area: 412.37 }, { id: 24, area: 433.40 },
    { id: 25, area: 436.21 }, { id: 26, area: 439.01 }, { id: 27, area: 441.82 },
    { id: 28, area: 444.63 }, { id: 29, area: 447.44 }, { id: 30, area: 450.24 }
];

const Masterplan = () => {
    return (
        <section className="masterplan" id="masterplan">
            <div className="container masterplan-container">

                <motion.div
                    className="masterplan-header text-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Masterplan</h2>
                    <div className="title-divider mx-auto"></div>
                    <p className="masterplan-desc">
                        30 lotes exclusivos para tu proyecto de vida. Explora nuestro plano y encuentra el metraje ideal.
                    </p>
                </motion.div>

                <div className="masterplan-content">
                    <motion.div
                        className="masterplan-viewer"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Interactive Image Viewer - Place image in public folder */}
                        <div 
                            className="image-zoom-container"
                            onMouseMove={(e) => {
                                const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - left) / width) * 100;
                                const y = ((e.clientY - top) / height) * 100;
                                const img = e.currentTarget.querySelector('.masterplan-img-placeholder');
                                if (img) {
                                    img.style.transformOrigin = `${x}% ${y}%`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('.masterplan-img-placeholder');
                                if (img) {
                                    // Reset after transition finishes or gradually
                                    setTimeout(() => {
                                        img.style.transformOrigin = `50% 50%`;
                                    }, 300);
                                }
                            }}
                        >
                            <div className="viewer-hint">
                                <span>Pasa el cursor y muévelo para explorar</span>
                            </div>
                            {/* Asuming the user will put masterplan.jpg in the public folder */}
                            <div className="masterplan-img-placeholder" style={{ backgroundImage: "url('/Master plan.jpeg')" }}>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="masterplan-data"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="data-table-wrapper">
                            <div className="data-table-header">
                                <h3>Área de Lotes</h3>
                            </div>
                            <div className="data-table-body custom-scroll">
                                <div className="data-grid">
                                    {lotesData.map((lote) => (
                                        <div key={lote.id} className="data-row">
                                            <span className="lote-id">Lote {lote.id}</span>
                                            <span className="lote-area">{lote.area.toFixed(2)} M2</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Masterplan;
