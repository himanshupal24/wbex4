"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Sparkles
                    count={500}
                    scale={[10, 10, 10]}
                    size={4}
                    speed={0.3}
                    opacity={0.5}
                    color="#8b5cf6"
                />
                <Sparkles
                    count={300}
                    scale={[8, 8, 10]}
                    size={2}
                    speed={0.2}
                    opacity={0.3}
                    color="#06b6d4"
                />
            </Canvas>
        </div>
    );
}
