import React, { useEffect, useState } from 'react';
import './PremiumEffects.css';

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over a clickable or interactive element
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('magnetic-btn')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor-dot ${isHovering ? 'scale-0' : ''}`}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
            <div
                className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
        </>
    );
};

export const CinematicGrain = () => {
    return <div className="cinematic-grain"></div>;
};
