"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";

function ServiceShape() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.3;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={1}>
            <TorusKnot args={[1, 0.3, 100, 16]} ref={meshRef} scale={1.5}>
                <MeshDistortMaterial
                    color="#06b6d4"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={1}
                />
            </TorusKnot>
        </Float>
    );
}

export default function ThreeServicesObject() {
    return (
        <div className="absolute top-0 right-0 w-full h-[500px] z-0 pointer-events-none opacity-60 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[-5, -5, 5]} intensity={5} color="#8b5cf6" />
                <ServiceShape />
            </Canvas>
        </div>
    );
}
