import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useFBX("SM_RX350_V2.fbx");

  return <primitive object={fbx} scale={0.05} />;
};

export default function App() {
  return (
    <div className="App">
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls distance={0} />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
