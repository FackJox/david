import * as THREE from "three";
import {
	OrbitControls,
	PerspectiveCamera,
	BakeShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

import { David } from "./components/David";

function App() {
	const lightPos = new THREE.Vector3(0, 2, 2);

	return (
		<Canvas shadows={true}>
			<color
				attach="background"
				args={["#f79f79"]}
			/>

			<Suspense fallback={null}>
				<OrbitControls />

				<David
					position={[0, -1.1, 0]}
					lightPos={lightPos}
					scale={0.3}
				/>

				<ambientLight intensity={0.2} />
				<directionalLight
					castShadow
					position={lightPos}
					// intensity={1.0}
					shadow-mapSize={[1024, 1024]}
					shadow-camera-near={1}
					shadow-camera-far={10}
					shadow-camera-top={5}
					shadow-camera-right={5}
					shadow-camera-bottom={-5}
					shadow-camera-left={-5}
				/>
				<PerspectiveCamera
					makeDefault
					position={[0, 0, 2]}
				/>
				<mesh
					castShadow
					receiveShadow
					scale={10}
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -1, 0]}
				>
					<planeGeometry args={[1, 1]} />
					<meshStandardMaterial color="#28AFB0" />
				</mesh>
				<mesh
					rotation={[0, 0, 0]}
					position={[0, 0.75, -2]}
				>
					<planeGeometry args={[7, 3.94, 1, 1]} />
					{/* <femaleVibrantShaderMaterial
						ref={femaleVibrantShaderMaterialRef}
						side={THREE.DoubleSide}
						lightPos={lightPos}
					/> */}
					<meshBasicMaterial color="orange" />
				</mesh>
				<BakeShadows />
			</Suspense>
			{/* <Perf /> */}
		</Canvas>
	);
}

export default App;
