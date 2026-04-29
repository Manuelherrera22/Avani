import React, { useEffect, useRef, useCallback } from 'react';
import './PremiumEffects.css';

export const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const isHoveringRef = useRef(false);
    const rafRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Skip on touch devices
        if (!window.matchMedia('(hover: hover)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const onMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        // Throttled hover check
        let lastOverCheck = 0;
        const handleMouseOver = (e) => {
            const now = performance.now();
            if (now - lastOverCheck < 100) return; // throttle to 10 checks/sec
            lastOverCheck = now;

            const target = e.target;
            const hovering =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('magnetic-btn');

            if (hovering !== isHoveringRef.current) {
                isHoveringRef.current = hovering;
                dot.classList.toggle('scale-0', hovering);
                ring.classList.toggle('hovering', hovering);
            }
        };

        // Use rAF loop to update position via transforms (no React re-renders)
        const updateCursor = () => {
            const { x, y } = mousePos.current;
            const transform = `translate3d(${x}px, ${y}px, 0)`;
            dot.style.transform = transform;
            ring.style.transform = transform;
            rafRef.current = requestAnimationFrame(updateCursor);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        rafRef.current = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot" />
            <div ref={ringRef} className="custom-cursor-ring" />
        </>
    );
};

export const CinematicGrain = () => {
    return <div className="cinematic-grain"></div>;
};
