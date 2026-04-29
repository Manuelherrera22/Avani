import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './VideoShowcase.css';

const VideoShowcase = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    // Lazy load video only when section is near viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Pause video when not in viewport for performance
    useEffect(() => {
        if (!videoRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, [isVisible]);

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
                {isVisible ? (
                    <video 
                        ref={videoRef}
                        src="/video.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                        className="showcase-video"
                    />
                ) : (
                    <div className="video-placeholder" style={{ 
                        aspectRatio: '16/9', 
                        background: 'var(--avani-olive-dark)',
                        borderRadius: '8px'
                    }} />
                )}
            </motion.div>
        </section>
    );
};

export default VideoShowcase;
