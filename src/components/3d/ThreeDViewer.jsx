import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Quaternion, Euler } from 'three'; // Use MeshStandardMaterial correctly
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

const floatRadius = 11;
const sensitivity = 0.7;
const hoverSensitivity = 0.005;
const zSensitivity = 15;
const floaterRotationSpeed = 0.006;
const circlePositionOffset = Math.PI / 2;
const hoverScale = 2.3
const hoverScaleSpeed = 0.2;
const centerScale = 8; // Controls the uniform scale of the center object


const fallbackColor = '#d6f500';

const meshPaths = [
    './glb/glbVape0.glb',
    './glb/glbVape3.glb',
    './glb/glbVape2.glb',
    './glb/glbVape3.glb',
    './glb/glbVape4.glb',
];

const baseColors = [
    theme.colors.brand.red, // glbVape0.glb
    theme.colors.brand.green, // glbVape3.glb
    theme.colors.brand.blue, // glbVape2.glb
    theme.colors.brand.yellow, // glbVape4
    theme.colors.secondaryBackground
];

const centerMeshGlb = './glb/glbCenter.glb'; // Path to the center GLB file
const frontTexturePath = './tex/texVG.png'; // Path to the front texture

const transitionSpeed = 1; // Controls the speed of the transition

function FloatingObject({ position, index, hoveredIndex, setHoveredIndex }) {
    const meshRef = useRef();
    const [loadedMesh, setLoadedMesh] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [lastQuaternion, setLastQuaternion] = useState(new Quaternion());
    const [targetQuaternion, setTargetQuaternion] = useState(new Quaternion().setFromEuler(new Euler(0, 15 * (Math.PI / 180), 0)));

    // Load GLB model
    useEffect(() => {
        const glbPath = meshPaths[index] || '';
        if (glbPath) {
            new GLTFLoader().load(
                glbPath,
                (gltf) => {
                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({ color: baseColors[index] || fallbackColor });
                        }
                    });
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
            if (isHovered) {
                // Set the quaternion to the target rotation
                floater.quaternion.slerp(targetQuaternion, 0.1);

                // Smoothly interpolate the scale to hoverScale
                floater.scale.lerp(new THREE.Vector3(hoverScale, hoverScale, hoverScale), delta / hoverScaleSpeed);
            } else {
                // Store the last quaternion
                setLastQuaternion(floater.quaternion.clone());

                // Update rotation with quaternion
                const rotationQuaternion = new Quaternion().setFromAxisAngle(new THREE.Vector3(0.5, 0.5, 0.5).normalize(), floaterRotationSpeed);
                floater.quaternion.multiplyQuaternions(floater.quaternion, rotationQuaternion);

                // Smoothly interpolate the scale to original size
                floater.scale.lerp(new THREE.Vector3(1, 1, 1), delta / hoverScaleSpeed);
            }
        }
    });

    const handlePointerOver = () => {
        setIsHovered(true);
        setHoveredIndex(index);

        // Store the last known quaternion when hovered
        if (meshRef.current) {
            setLastQuaternion(meshRef.current.quaternion.clone());
        }
    };

    const handlePointerOut = () => {
        setIsHovered(false);
        setHoveredIndex(null);
    };

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            {loadedMesh ? (
                <primitive object={loadedMesh} />
            ) : (
                <>

                    <meshStandardMaterial color={baseColors[index] || fallbackColor} />
                </>
            )}
        </mesh>
    );
}

function CentralObject({ centralRef, mousePosition }) {
    const { camera } = useThree();
    const [loadedMesh, setLoadedMesh] = useState(null);

    // Load GLB model
    useEffect(() => {
        if (centerMeshGlb) {
            new GLTFLoader().load(
                centerMeshGlb,
                (gltf) => {
                    // Assign materials
                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            if (child.material.name === 'FrontVGLogo') {
                                const texture = new THREE.TextureLoader().load(frontTexturePath);
                                child.material = new THREE.MeshStandardMaterial({ map: texture });
                            } else if (child.material.name === 'BackplateVGLogo') {
                                child.material = new THREE.MeshStandardMaterial({ color: theme.colors.secondaryBackground });
                            }
                        }
                    });
                    setLoadedMesh(gltf.scene);
                },
                undefined,
                (error) => {
                    console.error(`Error loading GLB model at ${centerMeshGlb}:`, error);
                    setLoadedMesh(null);
                }
            );
        } else {
            setLoadedMesh(null);
        }
    }, []);


    useFrame(() => {
        if (centralRef.current) {
            centralRef.current.rotation.x = mousePosition.current.y * sensitivity;
            centralRef.current.rotation.y = mousePosition.current.x * sensitivity;


            const centralPosition = centralRef.current.position;
            camera.position.x = centralPosition.x - mousePosition.current.x * zSensitivity;
            camera.position.y = centralPosition.y + mousePosition.current.y * zSensitivity;
            camera.lookAt(centralPosition);
        }
    });

    return (
        <mesh ref={centralRef} scale={[centerScale, centerScale, centerScale]}>
            {loadedMesh ? (
                <primitive object={loadedMesh} />
            ) : (
                <>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshBasicMaterial color="blue" />
                </>
            )}
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
                <ambientLight intensity={1} /> {/* Soft light that affects all objects */}
                <directionalLight position={[-5, 0, 90]} intensity={6} castShadow /> {/* Strong directional light */}
                <spotLight position={[0, 0, 1]} angle={0.3} penumbra={2} intensity={12} castShadow /> {/* Spot light */}
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
