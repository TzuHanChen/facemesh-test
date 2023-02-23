import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';

const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
});
const {renderer, scene, camera} = mindarThree;
const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
scene.add(light);
const faceMesh = mindarThree.addFaceMesh();
const texture = new THREE.TextureLoader().load('./images/canonical_face_model_uv_visualization.png');
faceMesh.material.map = texture;
faceMesh.material.transparent = true;
faceMesh.material.needsUpdate = true;
scene.add(faceMesh);
const start = async() => {
	await mindarThree.start();
	renderer.setAnimationLoop(() => {
		renderer.render(scene, camera);
	});
}
start();