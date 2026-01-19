"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Sphere, Octahedron, Torus } from "@react-three/drei";
import { useRef, useState } from "react";

function RotationWrapper({ children }) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
            if (hovered) {
                meshRef.current.rotation.z += delta * 2;
            }
        }
    });

    return (
        <group
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {children}
        </group>
    );
}

export default function ThreeCardIcon({ type, color }) {
    const renderShape = () => {
        switch (type) {
            case 'box': return <Box args={[1.5, 1.5, 1.5]}><meshStandardMaterial color={color} wireframe /></Box>;
            case 'sphere': return <Sphere args={[1, 16, 16]}><meshStandardMaterial color={color} wireframe /></Sphere>;
            case 'octahedron': return <Octahedron args={[1]}><meshStandardMaterial color={color} wireframe /></Octahedron>;
            case 'torus': return <Torus args={[0.8, 0.3, 16, 32]}><meshStandardMaterial color={color} wireframe /></Torus>;
            default: return <Box args={[1.2, 1.2, 1.2]}><meshStandardMaterial color={color} wireframe /></Box>;
        }
    }

    return (
        <div className="w-16 h-16 absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} />
                <RotationWrapper>
                    {renderShape()}
                </RotationWrapper>
            </Canvas>
        </div>
    );
}
