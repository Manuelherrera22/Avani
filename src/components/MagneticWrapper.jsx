import React, { useEffect, useRef } from 'react';

export const MagneticWrapper = ({ children, className = '' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const xTo = (val) => container.style.setProperty('--x', `${val}px`);
        const yTo = (val) => container.style.setProperty('--y', `${val}px`);

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = container.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            // Multiplier determines magnetic strength
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            // Adding a smooth reset class temporarily could be good, but inline CSS transitions handle it well if defined.
            container.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            setTimeout(() => {
                if (container) container.style.transition = '';
            }, 500);
        };

        // Only apply on non-touch devices
        if (window.matchMedia('(hover: hover)').matches) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`magnetic-wrap ${className}`}
            style={{
                display: 'inline-block',
                transform: 'translate(var(--x, 0), var(--y, 0))'
            }}
        >
            {children}
        </div>
    );
};
