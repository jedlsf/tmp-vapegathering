import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'; // Use MeshStandardMaterial correctly
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styled from 'styled-components';
import * as THREE from 'three';
import theme from '../../theme';

const ViewerContainer = styled.div`
  width: 100vw;
  height: 68vh;
  position: relative;
  overflow: hidden;
`;

const floatRadius = 10;
const sensitivity = 0.7;
const hoverSensitivity = 0.005;
const zSensitivity = 0.7;
const floaterRotationSpeed = 0.01;
const circlePositionOffset = Math.PI / 2;
const hoverScale = 1.6;
const hoverScaleSpeed = 0.2;

const fallbackColor = '#d6f500';

const meshPaths = [
    '/glb/glbVape0.glb',
    '/glb/glbVape1.glb',
    '/glb/glbVape2.glb',
    '/glb/glbVape3.glb',
    '/glb/glbVape4.glb',
];

const baseColors = [
    theme.colors.brand.red, // Red
    theme.colors.brand.green, // Green
    theme.colors.brand.blue, // Blue
    theme.colors.brand.yellow, // Yellow
    theme.colors.secondaryBackground
];

function FloatingObject({ position, index, hoveredIndex, setHoveredIndex }) {
    const meshRef = useRef();
    const isHoveredRef = useRef(false);
    const lastRotationRef = useRef({ x: 0, y: 0 });
    const [currentScale, setCurrentScale] = useState([1, 1, 1]);
    const [loadedMesh, setLoadedMesh] = useState(null);

    // Generate a random speed offset for each object
    const speedOffset = Math.random() * 0.005; // Adjust the range as needed

    // Load GLB model
    useEffect(() => {
        const glbPath = meshPaths[index] || '';
        if (glbPath) {
            new GLTFLoader().load(
                glbPath,
                (gltf) => {
                    console.log(`Successfully loaded GLB model from ${glbPath}`);
                    setLoadedMesh(gltf.scene);
                },
                undefined,
                (error) => {
                    console.error(`Error loading GLB model at ${glbPath}:`, error);
                    setLoadedMesh(null);
                }
            );
        } else {
            setLoadedMesh(null);
        }
    }, [index]);

    useFrame((state, delta) => {
        const floater = meshRef.current;
        if (floater) {
            if (hoveredIndex !== index && !isHoveredRef.current) {
                floater.rotation.y += (floaterRotationSpeed + speedOffset);
                floater.rotation.x += (floaterRotationSpeed * 0.2 + speedOffset);
                setCurrentScale([1, 1, 1]);
            } else if (hoveredIndex === index) {
                floater.rotation.y += (hoverSensitivity + speedOffset);
                floater.rotation.x += (hoverSensitivity * 0.2 + speedOffset);
                setCurrentScale([hoverScale, hoverScale, hoverScale]);
                isHoveredRef.current = true;
                lastRotationRef.current = {
                    x: floater.rotation.x,
                    y: floater.rotation.y,
                };
            } else {
                isHoveredRef.current = false;
                floater.rotation.x = lastRotationRef.current.x;
                floater.rotation.y = lastRotationRef.current.y;
                setCurrentScale([1, 1, 1]);
            }

            floater.scale.lerp(new THREE.Vector3(...currentScale), delta / hoverScaleSpeed);
        }
    });

    const showInfo = () => {
        console.log("Showing info for object at index", index);
    };

    useEffect(() => {
        if (hoveredIndex === index) {
            isHoveredRef.current = true;
            showInfo();
        } else {
            isHoveredRef.current = false;
        }
    }, [hoveredIndex, index]);

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => setHoveredIndex(index)}
            onPointerOut={() => setHoveredIndex(null)}
        >
            {loadedMesh ? (
                <primitive object={loadedMesh} />
            ) : (
                <>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={baseColors[index] || fallbackColor} />
                </>
            )}
        </mesh>
    );
}

function CentralObject({ centralRef, mousePosition }) {
    const { camera } = useThree();

    useFrame(() => {
        if (centralRef.current) {
            centralRef.current.rotation.x = -mousePosition.current.y * sensitivity;
            centralRef.current.rotation.y = -mousePosition.current.x * sensitivity;
            centralRef.current.rotation.z = -mousePosition.current.x * zSensitivity;

            const centralPosition = centralRef.current.position;
            camera.position.x = centralPosition.x - mousePosition.current.x * zSensitivity;
            camera.position.y = centralPosition.y + mousePosition.current.y * zSensitivity;
            camera.lookAt(centralPosition);
        }
    });

    return (
        <mesh ref={centralRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color="blue" />
        </mesh>
    );
}

function ThreeDViewer() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const centralRef = useRef();
    const mousePosition = useRef({ x: 0, y: 0 });

    const generatePositions = (radius, count) => {
        const positions = [];
        const angleStep = (2 * Math.PI) / count;
        for (let i = 0; i < count; i++) {
            const angle = i * angleStep + circlePositionOffset;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            positions.push([x, y, 0]);
        }
        return positions;
    };

    const positions = generatePositions(floatRadius, 5);

    const handlePointerMove = (event) => {
        mousePosition.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
        mousePosition.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    return (
        <ViewerContainer onPointerMove={handlePointerMove}>
            <Canvas camera={{ position: [0, 5, 35], fov: 45 }}>
                <ambientLight intensity={0.3} /> {/* Soft light that affects all objects */}
                <directionalLight position={[10, 10, 5]} intensity={25} castShadow /> {/* Strong directional light */}
                <spotLight position={[0, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow /> {/* Spot light */}
                <axesHelper args={[5]} />
                {Array.from({ length: 5 }, (_, index) => (
                    <FloatingObject
                        key={index}
                        position={positions[index]}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />
                ))}
                <CentralObject centralRef={centralRef} mousePosition={mousePosition} />
            </Canvas>
        </ViewerContainer>
    );
}

export default ThreeDViewer;
