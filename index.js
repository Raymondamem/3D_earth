import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sec = document.querySelector('#sec');
const model = document.querySelector('.formsec');

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

// Raycaster and mouse for object picking
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// GLB Load file
loader.load(
    'earth.glb',
    function (glb) {
        glb.scene.scale["x"] += 1.2;
        glb.scene.scale["y"] += 1.2;
        glb.scene.scale["z"] += 1.2;

        glb.scene.position["x"] += 0;
        glb.scene.position["y"] += 0;

        scene.add(glb.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total + 100) + "% loaded");
    },
    function (error) {
        console.error("An error occurred!", error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
    camera.aspect = sec.clientWidth / sec.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sec.clientWidth, sec.clientHeight);
});

// Update the mouse position
renderer.domElement.addEventListener('mousemove', function (event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);

// Check for clicks and open the model popup
renderer.domElement.addEventListener('click', function () {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        // Open your model popup here
        console.log("Earth clicked!");
        model.classList.toggle('active');
    }
}, false);
