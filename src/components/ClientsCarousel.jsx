import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ClientsCarousel.css';

const clientImages = [
    { id: 1, src: '/clientes/cliente1.jpg', alt: 'Familia feliz recibiendo su lote en Avani' },
    { id: 2, src: '/clientes/cliente2.jpg', alt: 'Nuevos propietarios de terreno en Avani' },
    { id: 3, src: '/clientes/cliente3.jpg', alt: 'Cliente satisfecho con la adquisición de su lote' }
];

const ClientsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clientImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % clientImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + clientImages.length) % clientImages.length);

    return (
        <section className="clients-section" id="clientes">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title text-gold" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Nuestra Comunidad</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                        Ya son varias las familias y visionarios que forman parte de la exclusividad de AVANI Urbanización.
                    </p>
                </div>

                <div className="carousel-container">
                    <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="carousel-viewport">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={clientImages[currentIndex].src}
                                alt={clientImages[currentIndex].alt}
                                className="carousel-image"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                    
                    <div className="carousel-dots-wrapper">
                        {clientImages.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                                aria-label={`Ver cliente ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsCarousel;
