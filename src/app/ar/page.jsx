'use client'

// pages/ar.js
import Head from "next/head";
import { useEffect } from "react";

export default function ARPage() {
  useEffect(() => {
    // Nothing to import here
  }, []);

  return (
    <>
      <Head>
        {/* A-Frame and MindAR via CDN */}
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/dist/mindar-image-aframe.prod.js"></script>
      </Head>

      <div>
        <a-scene
          mindar-image="imageTargetSrc: /targets.mind; autoStart: true;"
          device-orientation-permission-ui="enabled: true"
          loading-screen="enabled: true"
          embedded
          vr-mode-ui="enabled: false"
          renderer="colorManagement: true; physicallyCorrectLights: true"
          events="loaded: console.log('Scene loaded')"
        >
          <a-assets>
            <img id="overlay-image" src="/targets.png" />
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            <a-image
              src="/targets.mind"
              position="0 0 0"
              width="1"
              height="1"
            ></a-image>
          </a-entity>
        </a-scene>
      </div>
    </>
  );
}
