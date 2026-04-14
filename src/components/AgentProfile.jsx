import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './AgentProfile.css';

const agents = [
    {
        id: "jorge-br",
        name: "Jorge Bienes Raíces",
        title: "Tu Asesor Inmobiliario",
        image: "/Jorge bienes raices .jpeg",
        description: [
            "Jorge Bienes Raíces es una marca personal especializada en la comercialización de propiedades en Ecuador, con más de 10 años de experiencia en el sector inmobiliario.",
            "A través de estrategias de marketing digital y una fuerte presencia en redes sociales como Instagram, TikTok y Facebook, conecta de manera efectiva a propietarios con compradores.",
            "Su enfoque se basa en la transparencia, el acompañamiento personalizado y la promoción estratégica de casas, departamentos y terrenos.",
            "Se caracteriza por ser una marca confiable, con respaldo, profesionalismo y un acompañamiento cercano durante todo el proceso de compra o venta."
        ]
    },
    {
        id: "franklin",
        name: "Franklin Lictapuzon",
        title: "Desarrollo y Promoción Inmobiliaria",
        image: "/fraklin.jpeg",
        description: [
            "Franklin Lictapuzon, conocido en el sector inmobiliario como Paco Licta, a lo largo de los años ha participado en el desarrollo y promoción de múltiples proyectos inmobiliarios en la región.",
            "Su trayectoria lo ha llevado a ser reconocido en distintos medios de comunicación, donde incluso ha sido mencionado como uno de los referentes del sector inmobiliario en su provincia.",
            "Con una visión clara sobre el desarrollo ordenado de las ciudades, y junto a su equipo de trabajo, se encuentra construyendo una nueva etapa empresarial orientada a la excelencia."
        ]
    },
    {
        id: "jorge-ramos",
        name: "Jorge Ramos",
        title: "Líder de Desarrollo y Ejecución",
        image: "/jorge rodirguez.jpeg",
        description: [
            "Jorge Ramos es un líder innato en la ejecución y desarrollo de proyectos. Al estar al frente de la ejecución en campo, lidera equipos con un gran enfoque estratégico.",
            "Garantiza que cada proyecto se materialice con precisión, calidad y compromiso, cuidando hasta el último detalle constructivo.",
            "Está respaldado por más de 5 años de experiencia en el desarrollo inmobiliario y la ejecución de 9 proyectos exitosos, consolidando resultados reales y aportando al crecimiento de cada zona donde interviene."
        ]
    }
];

const AgentProfile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % agents.length);
        }, 6000); // 6 seconds delay per slide
        return () => clearInterval(timer);
    }, []);

    const agent = agents[currentIndex];

    return (
        <section className="agent-profile" id="agente">
            <div className="container agent-container">
                <AnimatePresence mode="wait">
                    <motion.div 
                        className="agent-grid" 
                        key={agent.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="agent-image-col">
                            <div className="agent-image-wrapper">
                                <img src={agent.image} alt={agent.name} className="agent-img" />
                                <div className="agent-img-decoration"></div>
                            </div>
                        </div>
                        
                        <div className="agent-content-col">
                            <h2 className="section-title text-gold" style={{ marginBottom: '0.2rem' }}>{agent.title}</h2>
                            <h3 className="agent-name" style={{ marginTop: 0, marginBottom: '1rem' }}>{agent.name}</h3>
                            <div className="title-divider"></div>
                            
                            <div className="agent-description">
                                {agent.description.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Navigation Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', gap: '0.8rem' }}>
                    {agents.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{ 
                                width: '12px', 
                                height: '12px', 
                                borderRadius: '50%', 
                                border: 'none', 
                                cursor: 'pointer',
                                backgroundColor: idx === currentIndex ? 'var(--avani-gold)' : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease',
                                transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)'
                            }}
                            aria-label={`Ver perfil ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgentProfile;
