import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import type { Mesh } from 'three';

function FloatingTorus() {
    const mesh = useRef<Mesh | null>(null);

    useFrame(({ clock }) => {
        if (!mesh.current) {
            return;
        }
        const t = clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.25;
        mesh.current.rotation.y = t * 0.35;
        mesh.current.position.y = Math.sin(t * 0.8) * 0.3;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <torusGeometry args={[1.2, 0.22, 32, 64]} />
            <meshStandardMaterial color="#34d399" metalness={0.2} roughness={0.4} />
        </mesh>
    );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
    const mesh = useRef<Mesh | null>(null);

    useFrame(({ clock }) => {
        if (!mesh.current) {
            return;
        }
        const t = clock.getElapsedTime();
        mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
    });

    return (
        <mesh ref={mesh} position={position}>
            <icosahedronGeometry args={[0.35, 0]} />
            <meshStandardMaterial color="#4ade80" metalness={0.1} roughness={0.3} />
        </mesh>
    );
}

const orbConfigs = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    size: 160 + Math.random() * 120,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 12 + Math.random() * 10,
    delay: Math.random() * 5,
}));

export default function BackgroundVisuals() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-animated" />
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
            <div className="absolute inset-0">
                {orbConfigs.map((orb) => (
                    <motion.span
                        key={orb.id}
                        className="absolute rounded-full bg-emerald-400/8 blur-[80px]"
                        style={{
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            top: `${orb.top}%`,
                            left: `${orb.left}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, -20, 0],
                            opacity: [0.35, 0.65, 0.35],
                        }}
                        transition={{
                            duration: orb.duration,
                            delay: orb.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0">
                <Canvas
                    dpr={[1, 2]}
                    camera={{ position: [0, 0, 5], fov: 55 }}
                    gl={{ alpha: true }}
                >
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[4, 5, 2]} intensity={1.1} />
                    <pointLight position={[-4, -3, -2]} intensity={0.6} color="#22c55e" />
                    <FloatingTorus />
                    <FloatingSphere position={[-2.2, 0.4, -0.5]} />
                    <FloatingSphere position={[2, -0.2, -0.8]} />
                </Canvas>
            </div>
        </div>
    );
}

