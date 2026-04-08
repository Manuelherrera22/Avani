import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './Gallery.css';

const images = [
    { src: '/1.jpeg', alt: 'Render 1', className: 'grid-col-span-2 grid-row-span-2' },
    { src: '/2.jpeg', alt: 'Render 2', className: '' },
    { src: '/3.jpeg', alt: 'Render 3', className: '' },
    { src: '/4.jpeg', alt: 'Render 4', className: 'grid-col-span-2' },
    { src: '/5.jpeg', alt: 'Render 5', className: '' },
    { src: '/6.jpeg', alt: 'Render 6', className: '' },
    { src: '/7.jpeg', alt: 'Render 7', className: 'grid-col-span-2 grid-row-span-2' },
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section className="gallery-section" id="galeria">
            <div className="container gallery-container">
                <motion.div
                    className="gallery-header text-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Nuestra Visión</h2>
                    <div className="title-divider mx-auto"></div>
                    <p className="gallery-desc">
                        Descubre la armonía entre naturaleza y diseño en cada rincón.
                    </p>
                </motion.div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div 
                            key={index} 
                            className={`gallery-item ${img.className}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImg(img.src)}
                        >
                            <MagneticWrapper>
                                <div className="gallery-img-wrapper">
                                    <img src={img.src} alt={img.alt} className="gallery-img" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-plus">+</span>
                                    </div>
                                </div>
                            </MagneticWrapper>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Image Detail View */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="lightbox-close" onClick={() => setSelectedImg(null)}>&times;</button>
                        <motion.img 
                            src={selectedImg} 
                            alt="Vista ampliada" 
                            className="lightbox-img"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
