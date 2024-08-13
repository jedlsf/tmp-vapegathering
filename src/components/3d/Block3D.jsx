import PropTypes from 'prop-types';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styled from 'styled-components';
import * as THREE from 'three';
import theme from '../../theme'; // Import your theme here

const baseColors = [
    theme.colors.brand.red,
    theme.colors.brand.yellow,
    theme.colors.brand.blue,
    theme.colors.brand.green,
    theme.colors.brand.purple,
];

const Container = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust this value as needed */
  aspect-ratio: 1;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, scale 0.3s ease;
  cursor: pointer;
`;

const RotatingModel = ({ model, speed, clamp }) => {
    const [hovered, setHovered] = useState(false);
    const [angle, setAngle] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    useFrame((state, delta) => {
        if (model) {
            if (hovered) {
                // Smoothly rotate to -10 degrees when hovered
                model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, -10 * (Math.PI / 180), 0.1);
            } else {
                // Back-and-forth rotation
                setAngle((prevAngle) => {
                    const newAngle = prevAngle + (speed * direction * delta);
                    if (Math.abs(newAngle) > clamp * (Math.PI / 180)) {
                        setDirection(-direction); // Reverse direction
                        return prevAngle;
                    }
                    return newAngle;
                });
                model.rotation.y = angle;
            }
        }
    });

    return (
        <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <primitive object={model} />
        </group>
    );
};

const Block3D = ({ file, speed = 2, clamp = 15, onHovered }) => {
    const [model, setModel] = useState(null);
    const loader = useMemo(() => new GLTFLoader(), []);

    useEffect(() => {
        loader.load(file, (gltf) => {
            const loadedModel = gltf.scene;
            setModel(loadedModel);

            // Apply materials based on baseColors
            loadedModel.traverse((child) => {
                if (child.isMesh) {
                    const index = Math.floor(Math.random() * baseColors.length); // Randomly pick a color
                    child.material = new THREE.MeshStandardMaterial({
                        color: baseColors[index] || theme.colors.brand.grey, // Use fallbackColor if necessary
                    });
                }
            });
        });
    }, [file, loader]);

    const handlePointerOver = () => {
        if (onHovered) onHovered();
    };

    return (
        <Container>
            <StyledCanvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                onPointerOver={handlePointerOver}
            >
                <ambientLight intensity={2.2} />
                <directionalLight position={[-5, 0, 90]} intensity={2.3} castShadow />
                {model && <RotatingModel model={model} speed={speed} clamp={clamp} />}
            </StyledCanvas>
        </Container>
    );
};

Block3D.propTypes = {
    file: PropTypes.string.isRequired,
    speed: PropTypes.number,
    clamp: PropTypes.number,
    onHovered: PropTypes.func,
};

export default Block3D;
