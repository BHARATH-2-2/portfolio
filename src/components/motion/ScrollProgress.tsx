import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useScroll } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        mass: 0.5,
    });
    const scaleX = useTransform(spring, [0, 1], [0, 1]);

    useEffect(() => {
        document.documentElement.style.setProperty('--scroll-progress', '0');
    }, []);

    return (
        <motion.div
            style={{ scaleX }}
            className="pointer-events-none fixed inset-x-0 top-0 z-[9998] h-1 origin-left bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"
        />
    );
}

