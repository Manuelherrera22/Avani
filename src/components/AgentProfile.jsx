import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './AgentProfile.css';

const agents = [
    {
        id: "jorge-br",
        name: "Jorge Bienes Raíces",
        title: "Desarrollador y Asesor Inmobiliario",
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
        title: "CEO Altic Proyectos Inmobiliarios",
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
    return (
        <section className="agent-profile" id="nosotros">
            <div className="container agent-container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title text-gold" style={{ marginBottom: '1rem' }}>Nosotros</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Conoce al equipo de expertos encargados del desarrollo y promoción de AVANI Urbanización.</p>
                </div>

                {agents.map((agent, index) => (
                    <motion.div 
                        className={`agent-grid ${index % 2 !== 0 ? 'reverse-layout' : ''}`} 
                        key={agent.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="agent-image-col">
                            <div className="agent-image-wrapper">
                                <img src={agent.image} alt={agent.name} className="agent-img" />
                                <div className="agent-img-decoration"></div>
                            </div>
                        </div>
                        
                        <div className="agent-content-col">
                            <h2 className="section-title text-gold" style={{ marginBottom: '0.2rem', fontSize: '2.5rem' }}>{agent.title}</h2>
                            <h3 className="agent-name" style={{ marginTop: 0, marginBottom: '1rem', fontSize: '2rem' }}>{agent.name}</h3>
                            <div className="title-divider" style={{ marginLeft: 0 }}></div>
                            
                            <div className="agent-description">
                                {agent.description.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AgentProfile;
