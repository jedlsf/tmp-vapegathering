import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Quaternion, Euler } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styled from 'styled-components';
import * as THREE from 'three';
import theme from '../../theme';

const ViewerContainer = styled.div`
  width: 100vw;
  height: 65vh;
  position: relative;
  overflow: hidden;
  z-index: 4;
  margin-bottom: 10px;
  
`;

const floatRadius = 14;
const sensitivity = 0.5;
const zSensitivity = 10;
const floaterRotationSpeed = 0.0025;
const circlePositionOffset = Math.PI / 2;
const hoverScale = 2.6;
const hoverScaleSpeed = 0.2;
const centerScale = 8;

const fallbackColor = '#d6f500';

const meshPaths = [
    'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbVape0.glb',
    'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbCalendar.glb',
    'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbTicket.glb',
    'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbWorld.glb',
    'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbQMark.glb',
];

const baseColors = [
    theme.colors.brand.red,
    theme.colors.brand.yellow,
    theme.colors.brand.blue,
    theme.colors.brand.green,
    theme.colors.brand.purple
];

const centerMeshGlb = 'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbCenter4.glb';
const frontTexturePath = 'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/tex/TVGLogoNew.jpg';


const FloatingObject = React.memo(({ position, index, hoveredIndex, setHoveredIndex, onHover, onHoverEnd }) => {
    const meshRef = useRef();
    const [loadedMesh, setLoadedMesh] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [lastQuaternion, setLastQuaternion] = useState(new Quaternion());
    const [targetQuaternion] = useState(() => new Quaternion().setFromEuler(new Euler(0, 15 * (Math.PI / 180), 0)));

    useEffect(() => {
        const glbPath = meshPaths[index];
        let gltf;
        if (glbPath) {
            const loader = new GLTFLoader();
            loader.load(
                glbPath,
                (loadedGltf) => {
                    gltf = loadedGltf;
                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: baseColors[index] || fallbackColor
                            });
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
        }

        return () => {
            if (gltf) {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) {
                            if (child.material.map) child.material.map.dispose();
                            child.material.dispose();
                        }
                    }
                });
            }
            setLoadedMesh(null);
        };
    }, [index]);

    useFrame((state, delta) => {
        const floater = meshRef.current;
        if (floater) {
            if (isHovered) {
                floater.quaternion.slerp(targetQuaternion, 0.1);
                floater.scale.lerp(new THREE.Vector3(hoverScale, hoverScale, hoverScale), delta / hoverScaleSpeed);
            } else {
                setLastQuaternion(floater.quaternion.clone());
                const rotationQuaternion = new Quaternion().setFromAxisAngle(new THREE.Vector3(0.5, 0.5, 0.5).normalize(), floaterRotationSpeed);
                floater.quaternion.multiplyQuaternions(floater.quaternion, rotationQuaternion);
                floater.scale.lerp(new THREE.Vector3(1, 1, 1), delta / hoverScaleSpeed);
            }
        }
    });

    const handlePointerOver = () => {
        setIsHovered(true);
        setHoveredIndex(index);
        onHover(index);
        if (meshRef.current) {
            setLastQuaternion(meshRef.current.quaternion.clone());
        }
    };

    const handlePointerOut = () => {
        setIsHovered(false);
        setHoveredIndex(null);
        onHoverEnd(index);
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
                    <boxGeometry args={[0, 0, 0]} />
                    <meshStandardMaterial color={baseColors[index] || fallbackColor} />
                </>
            )}
        </mesh>
    );
});

const CentralObject = React.memo(({ centralRef, mousePosition }) => {
    const { camera } = useThree();
    const [loadedMesh, setLoadedMesh] = useState(null);

    useEffect(() => {
        let gltf;
        if (centerMeshGlb) {
            const loader = new GLTFLoader();
            loader.load(
                centerMeshGlb,
                (loadedGltf) => {
                    gltf = loadedGltf;
                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            if (child.material.name === 'Face') {
                                const texture = new THREE.TextureLoader().load(frontTexturePath);
                                child.material = new THREE.MeshStandardMaterial({ map: texture });
                            } else if (child.material.name.includes('C')) {
                                const colorMap = {
                                    CRed: theme.colors.brand.orange,
                                    CGreen: theme.colors.brand.green,
                                    CYellow: theme.colors.brand.yellow,
                                    CBlue: theme.colors.brand.blue
                                };
                                child.material = new THREE.MeshStandardMaterial({ color: colorMap[child.material.name] });
                            } else if (child.material.name === 'Body') {
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
        }

        return () => {
            if (gltf) {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) {
                            if (child.material.map) child.material.map.dispose();
                            child.material.dispose();
                        }
                    }
                });
            }
            setLoadedMesh(null);
        };
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
                    <boxGeometry args={[0, 0, 0]} />
                    <meshBasicMaterial color="blue" />
                </>
            )}
        </mesh>
    );
});

function ThreeDViewer({ isHovered, isHoverEnd }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const centralRef = useRef();
    const mousePosition = useRef({ x: 0, y: 0 });

    const generatePositions = useMemo(() => {
        const positions = [];
        const angleStep = (2 * Math.PI) / 5;
        for (let i = 0; i < 5; i++) {
            const angle = i * angleStep + circlePositionOffset;
            const x = floatRadius * Math.cos(angle);
            const y = floatRadius * Math.sin(angle);
            positions.push([x, y, 0]);
        }
        return positions;
    }, []);


    const handlePointerMove = (event) => {
        mousePosition.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
        mousePosition.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    return (
        <ViewerContainer onPointerMove={handlePointerMove}>
            <Canvas camera={{ position: [0, 5, 42], fov: 45 }}>
                <ambientLight intensity={2.2} />
                <directionalLight position={[-5, 0, 90]} intensity={2.3} castShadow />

                {generatePositions.map((position, index) => (
                    <FloatingObject
                        key={index}
                        position={position}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        onHover={isHovered}
                        onHoverEnd={isHoverEnd}
                    />
                ))}
                <CentralObject centralRef={centralRef} mousePosition={mousePosition} />
            </Canvas>
        </ViewerContainer>
    );
}

ThreeDViewer.propTypes = {
    isHovered: PropTypes.func.isRequired,
    isHoverEnd: PropTypes.func.isRequired,
};

export default ThreeDViewer;
