import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    delay?: number;
    y?: number;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}>;

export default function FadeIn({ children, delay = 0, y = 12, as = 'div', className }: Props) {
    const shouldReduce = useReducedMotion();
    const MotionComponent: any = motion[as as any] ?? motion.div;
    const StaticComponent: any = as;

    if (shouldReduce) {
        return <StaticComponent className={className}>{children}</StaticComponent>;
    }

    return (
        <MotionComponent
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -64px 0px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            className={className}
        >
            {children}
        </MotionComponent>
    );
}

