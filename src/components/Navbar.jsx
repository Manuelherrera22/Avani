import React from 'react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container nav-container">
        <MagneticWrapper>
          <div className="nav-logo">
            <img src="/src/assets/avani-logo.svg" alt="Avani Logo" className="logo-icon-svg" />
            <div className="logo-text">
              <span className="logo-main">AVANI</span>
              <span className="logo-sub">URBANIZACIÓN</span>
            </div>
          </div>
        </MagneticWrapper>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#masterplan">Masterplan</a></li>
          <li><a href="#galeria">Renders</a></li>
          <li><a href="#agente">Asesor</a></li>
        </ul>

        <MagneticWrapper>
          <a href="https://wa.me/593987720841?text=Hola,%20quisiera%20agendar%20una%20visita%20a%20Avani." target="_blank" rel="noopener noreferrer" className="btn btn-outline nav-btn magnetic-btn">Agenda tu Visita</a>
        </MagneticWrapper>
      </div>
    </motion.nav>
  );
};

export default Navbar;
