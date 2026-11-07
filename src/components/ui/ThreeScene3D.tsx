"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeScene3DProps {
  className?: string;
  interactive?: boolean;
}

export function ThreeScene3D({ className = "", interactive = true }: ThreeScene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Inner Core: Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Outer Cage: Octahedron
    const cageGeo = new THREE.OctahedronGeometry(2.3, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // Particle Cloud Rings
    const particlesCount = 180;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      posArray[i] = radius * Math.cos(theta) * Math.cos(phi);
      posArray[i + 1] = radius * Math.sin(phi);
      posArray[i + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.7,
    });
    const particlePoints = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particlePoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00e5ff, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, 2, 50);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = width / 2;
    let windowHalfY = height / 2;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - windowHalfX;
      const mouseY = event.clientY - rect.top - windowHalfY;
      targetX = mouseX * 0.003;
      targetY = mouseY * 0.003;
    };

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const speed = rotationSpeed;

      coreMesh.rotation.x += delta * 0.4 * speed;
      coreMesh.rotation.y += delta * 0.6 * speed;

      cageMesh.rotation.x -= delta * 0.25 * speed;
      cageMesh.rotation.y += delta * 0.35 * speed;

      particlePoints.rotation.y += delta * 0.15 * speed;

      // Smooth mouse damping
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.08;

      // Theme-based color adaptation
      const isLight = document.documentElement.classList.contains("light");
      if (isLight) {
        coreMat.color.setHex(0x0284c7); // Cobalt
        cageMat.color.setHex(0x4f46e5); // Indigo
        particlesMat.color.setHex(0x0284c7);
        pointLight1.color.setHex(0x0284c7);
      } else {
        coreMat.color.setHex(0x00e5ff); // Cyan
        cageMat.color.setHex(0x6366f1); // Violet
        particlesMat.color.setHex(0x00e5ff);
        pointLight1.color.setHex(0x00e5ff);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      windowHalfX = newWidth / 2;
      windowHalfY = newHeight / 2;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive, rotationSpeed]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {/* 3D Controls overlay */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-telemetry px-2.5 py-1 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur-md border border-[var(--border-subtle)] text-[var(--text-secondary)] pointer-events-auto">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          <span>Three.js 3D System Core</span>
        </span>
        <button
          onClick={() => setRotationSpeed((prev) => (prev === 1 ? 2.5 : prev === 2.5 ? 0.4 : 1))}
          className="hover:text-[var(--accent-cyan)] transition-colors cursor-pointer"
        >
          Speed: {rotationSpeed === 1 ? "1x" : rotationSpeed === 2.5 ? "2.5x" : "0.4x"}
        </button>
      </div>
    </div>
  );
}
