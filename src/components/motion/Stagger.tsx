import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren, ReactElement } from 'react';

type Props = PropsWithChildren<{
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    itemDelay?: number;
    from?: 'bottom' | 'top' | 'left' | 'right' | 'scale';
}>;

export default function Stagger({ children, as = 'div', className, itemDelay = 0.06, from = 'bottom' }: Props) {
    const shouldReduce = useReducedMotion();
    const Component: any = shouldReduce ? 'div' : motion[as as any] ?? motion.div;

    const baseHidden = { opacity: 0 } as any;
    const baseShow = { opacity: 1 } as any;
    if (from === 'bottom') { baseHidden.y = 12; baseShow.y = 0; }
    if (from === 'top') { baseHidden.y = -12; baseShow.y = 0; }
    if (from === 'left') { baseHidden.x = -16; baseShow.x = 0; }
    if (from === 'right') { baseHidden.x = 16; baseShow.x = 0; }
    if (from === 'scale') { baseHidden.scale = 0.96; baseShow.scale = 1; }

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: itemDelay }
        }
    };

    const item = { hidden: baseHidden, show: baseShow };

    if (shouldReduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <Component
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -64px 0px' }}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div key={i} variants={item}>{child as ReactElement}</motion.div>
                ))
                : <motion.div variants={item}>{children as ReactElement}</motion.div>
            }
        </Component>
    );
}

