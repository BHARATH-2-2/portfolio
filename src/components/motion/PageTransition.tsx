import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    className?: string;
}>;

export default function PageTransition({ children, className }: Props) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
