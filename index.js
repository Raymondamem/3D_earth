import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 1;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 1);
scene.add(light);

// GLTFLoader instance
const loader = new GLTFLoader();
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 2;
console.log("controles ", controls);

// GLB Load file
loader.load(
    'earth.glb',
    function (glb) {
        glb.scene.scale["x"] += 1.2;
        glb.scene.scale["y"] += 1.2;
        glb.scene.scale["z"] += 1.2;

        // glb.scene.rotation["x"] += 0;
        // glb.scene.rotation["y"] += 0;
        // glb.scene.rotation["z"] += 0;

        glb.scene.position["x"] += 0;
        glb.scene.position["y"] += 0;
        // glb.scene.position["z"] += 0;

        // glb.scene.matrixWorldNeedsUpdate = true;

        console.log(glb.scene.position);

        scene.add(glb.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total + 100) + "% loaded");
    },
    function (error) {
        console.error("An error occured!, " + error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // add this line
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
    camera.aspect = sec.clientWidth / sec.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sec.clientWidth, sec.clientHeight);
});