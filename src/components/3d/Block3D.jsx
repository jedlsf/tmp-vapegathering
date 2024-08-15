import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
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
   background-color: ${({ color }) => color};
   border-radius: ${({ theme }) => theme.borders.radius.large};
   box-shadow: inset 1px 3px 7px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, scale 0.3s ease;
  cursor: pointer;
`;

const RotatingModel = ({ model, speed, clamp, hovered }) => {
    const [angle, setAngle] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    const [targetRotation, setTargetRotation] = useState(0);

    useEffect(() => {
        setTargetRotation(hovered ? -10 * (Math.PI / 180) : 0);
    }, [hovered]);

    useFrame((state, delta) => {
        if (model) {
            // Smoothly interpolate the rotation based on the targetRotation
            model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, targetRotation, 0.1);

            if (!hovered) {
                // Back-and-forth rotation when not hovered
                setAngle((prevAngle) => {
                    const newAngle = prevAngle + (speed * direction * delta);
                    if (Math.abs(newAngle) > clamp * (Math.PI / 180)) {
                        setDirection(-direction); // Reverse direction
                        return prevAngle;
                    }
                    return newAngle;
                });
                model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, angle, 0.1);
            }
        }
    });

    return (
        <group>
            <primitive object={model} />
        </group>
    );
};

const Block3D = ({ file, speed = 2, clamp = 15, onHovered, onHoverOut, color, index = 0, onClicked }) => {
    const [model, setModel] = useState(null);
    const [hovered, setHovered] = useState(false);
    const loader = useMemo(() => new GLTFLoader(), []);

    useEffect(() => {
        loader.load(file, (gltf) => {
            const loadedModel = gltf.scene;
            setModel(loadedModel);

            // Apply materials based on baseColors
            loadedModel.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: color, // Use fallbackColor if necessary
                    });
                }
            });
        });
    }, [file, loader]);

    return (
        <Container color={color}
            onPointerOver={() => {
                setHovered(true);
                if (onHovered) onHovered(index);
            }}
            onPointerOut={() => {
                setHovered(false);
                if (onHoverOut) onHoverOut(index);
            }}
            onClick={() => {
                if (onClicked) onClicked(index);
            }}


        >
            <StyledCanvas
                camera={{ position: [0, 0, 5], fov: 60 }}
            >
                <ambientLight intensity={2.2} />
                <directionalLight position={[-5, 0, 90]} intensity={2.3} castShadow />
                {model && <RotatingModel model={model} speed={speed} clamp={clamp} hovered={hovered} />}
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
