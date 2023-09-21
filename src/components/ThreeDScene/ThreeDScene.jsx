import * as THREE from 'three';
import css from "./ThreeDScene.module.css"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// import Car from "../../assets/car3d"
// import modelURL from '../../assets/scene.glb';
import { useEffect } from 'react';
import modelURL from '../../assets/car3d.glb';

const ThreeDScene = () => {
    useEffect(() => {
      // Create a scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Configure camera position
      camera.position.z = 1;
  
      // Create a GLTFLoader instance
      const loader = new GLTFLoader();

      const light = new THREE.AmbientLight(0xffffff); // Add ambient light
scene.add(light);

  
      // Load your .glb model
      loader.load(modelURL, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
  
        // Animation and rendering logic
        const animate = () => {
          // Add animation or interaction logic here
          // Example: model.rotation.x += 0.01;
          //          model.rotation.y += 0.01;
  
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
  
        animate();
      });
    }, []);
  
    return <div>
        hi
    </div>; // You can return any JSX content here
  };
  
  export default ThreeDScene;
  