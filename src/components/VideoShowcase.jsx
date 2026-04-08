import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './VideoShowcase.css';

const VideoShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    return (
        <section className="video-showcase" ref={containerRef}>
            <div className="container video-header text-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">El Estilo de Vida</h2>
                    <div className="title-divider mx-auto"></div>
                    <p className="section-subtitle">Visualiza tu futuro en el entorno más exclusivo.</p>
                </motion.div>
            </div>
            
            <motion.div 
                className="video-container"
                style={{ scale, opacity }}
            >
                <video 
                    src="/video.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="showcase-video"
                />
            </motion.div>
        </section>
    );
};

export default VideoShowcase;
