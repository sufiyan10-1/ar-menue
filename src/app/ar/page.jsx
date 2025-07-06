"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ARScene() {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startAR = async () => {
    if (!navigator.xr) {
      alert("WebXR not supported");
      return;
    }

    let renderer, camera, scene;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", { xrCompatible: true });

    renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;

    containerRef.current.innerHTML = ""; // Clear previous render
    containerRef.current.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
    scene.add(camera);

    const texture = new THREE.TextureLoader().load("/image.png");
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneGeometry(1, 1);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -2);
    scene.add(mesh);

    const session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["local"],
    });

    renderer.xr.setSession(session);

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    setStarted(true);
  };

  return (
    <div className="w-full h-screen bg-black relative">
      <div ref={containerRef} className="w-full h-full" />

      {!started && (
        <button
          onClick={startAR}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Start AR
        </button>
      )}
    </div>
  );
}
