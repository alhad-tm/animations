import React from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ModelViewer = ({ glbPath }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GLTFLoader url={glbPath} />
    </Canvas>
  );
}; 

export default ModelViewer;
 