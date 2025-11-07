import Lenis from 'lenis';
import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        const root = document.documentElement;
        root.dataset.lenis = 'smooth';

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            lerp: 0.1,
        });

        let rafId = requestAnimationFrame(function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        });

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            delete root.dataset.lenis;
        };
    }, []);

    return null;
}

