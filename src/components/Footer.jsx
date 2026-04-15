import React from 'react';
import './Footer.css';
import avaniLogo from '../assets/avani-logo.svg';

const Footer = () => {
    return (
        <footer className="footer" id="contacto">
            <div className="container footer-container">
                <div className="footer-top">

                    <div className="footer-brand">
                        <div className="nav-logo">
                            <img src={avaniLogo} alt="Avani Logo" className="logo-icon-svg" />
                            <div className="logo-text">
                                <span className="logo-main">AVANI</span>
                                <span className="logo-sub">URBANIZACIÓN</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <div className="contact-item">
                            <span className="contact-label">Contactos</span>
                            <div className="contact-detail">
                                <span className="icon shield-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </span>
                                <span className="contact-text">097 906 5106</span>
                            </div>
                            <div className="contact-detail mt-2">
                                <span className="icon shield-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span className="contact-text">Ambato Ec, sector Izamba</span>
                            </div>
                        </div>

                        <div className="social-item">
                            <span className="contact-label mb-1">Síguenos en</span>
                            <div className="social-icons">
                                <a href="#" className="social-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" /></svg>
                                </a>
                                <a href="#" className="social-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AVANI Urbanización. Todos los derechos reservados.</p>
                    <p className="mt-2" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        Desarrollado por Altic y Jorge Bienes Raíces | Contacto: +593 97 906 5106
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
