import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Move the background slower than the scroll (Parallax down)
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // Move the text faster than the scroll (Parallax up)
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    useEffect(() => {
        // Simple entry animation already handled by framer-motion props on the elements
    }, []);

    return (
        <section className="hero" id="inicio" ref={heroRef} style={{ overflow: 'hidden' }}>
            <motion.div
                className="hero-background"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: 'right', y: backgroundY }}
            />
            <motion.div className="container hero-container" style={{ y: textY }}>
                <motion.h1
                    className="hero-title"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <span className="stencil-text" style={{ color: 'var(--avani-olive-dark)' }}>¡Un privilegio</span><br />
                    <span className="stencil-text text-gold"> hecho hogar!</span>
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Descubre el lote perfecto para construir la casa de tus sueños en la urbanización más exclusiva de la ciudad.
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <MagneticWrapper><a href="#galeria" className="btn btn-primary magnetic-btn">Ver Renders</a></MagneticWrapper>
                    <MagneticWrapper><a href="https://wa.me/593979065106?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20lotes%20en%20Avani%20Urbanizaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="btn btn-outline magnetic-btn">Contáctanos</a></MagneticWrapper>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <div className="mouse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
