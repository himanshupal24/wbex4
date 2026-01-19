"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Icosahedron } from "@react-three/drei";
import { useRef } from "react";

function TechMesh() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Icosahedron args={[1, 1]} ref={meshRef} scale={2}>
            <meshStandardMaterial
                color="#8b5cf6"
                wireframe={true}
                transparent
                opacity={0.3}
            />
        </Icosahedron>
    );
}

export default function ThreeTechSphere() {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <TechMesh />
            </Canvas>
        </div>
    );
}
