<script lang="ts" setup>
import * as THREE from "three";

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const randomSpread = (): number => {
  return THREE.MathUtils.randFloatSpread(2000);
};

// Add stars to the scene
const starGeometry = new THREE.BufferGeometry();
const starPositions: number[] = [];

for (let i = 0; i < 2000; i++) {
  starPositions.push(randomSpread(), randomSpread(), randomSpread());
}

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starPositions, 3)
);

const stars = new THREE.Points(
  starGeometry,
  new THREE.PointsMaterial({ color: 0xffffff })
);
scene.add(stars);

scene.background = new THREE.Color(0x050816);

// Animate the stars
const animateStars = () => {
  requestAnimationFrame(animateStars);

  stars.rotation.y += 0.0005;
  renderer.render(scene, camera);
};

animateStars();

// Update camera aspect ratio on window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

canvas {
  width: 100vw;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
}
</style>
