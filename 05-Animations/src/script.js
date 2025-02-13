import * as THREE from "three";
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 1000,
  height: 800,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// let time = Date.now()

//clock
// const clock = new THREE.Clock()

gsap.to(mesh.position, {duration:1, x:2, delay: 1})
gsap.to(mesh.position, {duration:1, x:0, delay: 2})

//Animations
const tick = () => {
    //time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)

    //clock
    // const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)


    //update objects
    // camera.position.y = Math.sin(elapsedTime);
    // camera.position.x = Math.cos(elapsedTime);
    // camera.lookAt(mesh.position)

    //Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};
tick();
