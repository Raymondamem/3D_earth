<!-- first of its kind -->
import * as THREE from 'three';
const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();

<!-- second of its kind -->
import * as THREE from 'three';
const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
    camera.aspect = sec.clientWidth / sec.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sec.clientWidth, sec.clientHeight);
});

<!-- third of its kind -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Create a GLTFLoader instance
const loader = new GLTFLoader();

// Load your GLB file
loader.load(
    '/path/to/your/earth.glb', // replace with the path to your GLB file
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function() {
    camera.aspect = sec.clientWidth / sec.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sec.clientWidth, sec.clientHeight);
});

<!-- forth working -->
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

controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = true;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 2;

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

        // glb.scene.position["x"] += 0;
        // glb.scene.position["y"] += 0;
        // glb.scene.position["z"] += 0;

        // glb.scene.matrixWorldNeedsUpdate = true;

        console.log(glb.scene);

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

<!-- ment to add dragging which didnt work yet -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5; // Increase the camera distance

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 1);
scene.add(light);

// GLTFLoader instance
const loader = new GLTFLoader();
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = true;
// Comment out these lines to allow full rotation
// controls.maxPolarAngle = Math.PI / 2;
// controls.minPolarAngle = Math.PI / 2;

// GLB Load file
loader.load(
    'earth.glb',
    function (glb) {
        // glb.scene.scale.set(1.2, 1.2, 1.2); // Use .set for scale
        glb.scene.scale["x"] += 1.2;
        glb.scene.scale["y"] += 1.2;
        glb.scene.scale["z"] += 1.2;

        scene.add(glb.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded"); // Corrected the percentage calculation
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


<!-- useing event listiners, working only without dom over it -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

let earth;

// GLB Load file
loader.load(
    'earth.glb',
    function (glb) {
        earth = glb.scene;
        earth.scale.set(1.2, 1.2, 1.2);
        scene.add(earth);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    function (error) {
        console.error("An error occurred!", error);
    }
);

let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

renderer.domElement.addEventListener('mousedown', e => {
    isDragging = true;
});

renderer.domElement.addEventListener('mousemove', e => {
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };

    if(isDragging) {
        var deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        
        earth.quaternion.multiplyQuaternions(deltaRotationQuaternion, earth.quaternion);
    }
    
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});

renderer.domElement.addEventListener('mouseup', e => {
    isDragging = false;
});

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
    camera.aspect = sec.clientWidth / sec.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sec.clientWidth, sec.clientHeight);
});

<!-- ////////////////working fine, but needs two more -->

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

        console.log(glb.scene);

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

<!-- added different earth size -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 3;

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

// Function to load and position earth
function loadEarth(path, scale, position) {
    loader.load(
        path,
        function (glb) {
            glb.scene.scale.set(scale, scale, scale);
            glb.scene.position.set(position, 0, 0);
            scene.add(glb.scene);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        function (error) {
            console.error("An error occurred!", error);
        }
    );
}

// Load and position the earths
loadEarth('earth.glb', 3.6, -1); // Left earth, 3 times bigger
loadEarth('earth.glb', 1.2, 1); // Right earth 1, twice bigger
loadEarth('earth.glb', 0.6, 2); // Right earth 2, same size

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

<!-- got it bigger and indipendent links not yet responding -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 3;

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

// Function to load and position earth
function loadEarth(path, scale, position, url) {
    loader.load(
        path,
        function (glb) {
            glb.scene.scale.set(scale, scale, scale);
            glb.scene.position.set(position, 0, 0);
            glb.scene.userData = { URL: url }; // Store URL in userData
            scene.add(glb.scene);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        function (error) {
            console.error("An error occurred!", error);
        }
    );
}

// Load and position the earths
loadEarth('earth.glb', 5.6, -1, 'https://www.google.com'); // Left earth, 3 times bigger
loadEarth('earth.glb', 2.2, 1, 'https://www.facebook.com'); // Right earth 1, twice bigger
loadEarth('earth.glb', 0.6, 2, 'https://www.twitter.com'); // Right earth 2, same size

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

// Check for clicks and open the URL of the clicked earth
renderer.domElement.addEventListener('click', function () {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && intersects[0].object.parent.userData.URL) {
        window.location.href = intersects[0].object.parent.userData.URL;
    }
}, false);


<!-- nice but not working -->
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sec = document.querySelector('#sec');

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, sec.clientWidth / sec.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sec.clientWidth, sec.clientHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 3;

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 1);
scene.add(light);

// Raycaster and mouse for object picking
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};
let selectedEarth = null;

// Function to load and position earth
function loadEarth(path, scale, position, url) {
    loader.load(
        path,
        function (glb) {
            glb.scene.scale.set(scale, scale, scale);
            glb.scene.position.set(position, 0, 0);
            glb.scene.userData = { URL: url }; // Store URL in userData
            scene.add(glb.scene);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        function (error) {
            console.error("An error occurred!", error);
        }
    );
}

// Load and position the earths
loadEarth('earth.glb', 5.6, -1, 'https://www.google.com'); // Left earth, 3 times bigger
loadEarth('earth.glb', 2.2, 1, 'https://www.facebook.com'); // Right earth 1, twice bigger
loadEarth('earth.glb', 0.6, 2, 'https://www.twitter.com'); // Right earth 2, same size

function animate() {
    requestAnimationFrame(animate);
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

    var deltaMove = {
        x: event.offsetX - previousMousePosition.x,
        y: event.offsetY - previousMousePosition.y
    };

    if (isDragging && selectedEarth) {
        var deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));

        selectedEarth.quaternion.multiplyQuaternions(deltaRotationQuaternion, selectedEarth.quaternion);
    }

    previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY
    };
}, false);

renderer.domElement.addEventListener('mousedown', e => {
    isDragging = true;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        selectedEarth = intersects[0].object.parent;
    }
});

renderer.domElement.addEventListener('mouseup', e => {
    isDragging = false;
    selectedEarth = null;
});

// Check for clicks and open the URL of the clicked earth
renderer.domElement.addEventListener('click', function () {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && intersects[0].object.parent.userData.URL) {
        window.location.href = intersects[0].object.parent.userData.URL;
    }
}, false);

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

<!-- repetes above, the stright liner but not working -->