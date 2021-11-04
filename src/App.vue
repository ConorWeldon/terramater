<template>
  <div>
    <div>
          <!-- <NavBar /> -->
              <router-view />
          <!-- <Footer/> -->
    </div>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
// import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    // NavBar,
    // Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  font-family: "Be Vietnam", sans-serif;
}
.container{
    background-color: #d8f3dc;
}


</style>

<script>
// import * as THREE from 'three';
//     // import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
//     // import { FlakesTexture } from 'https://threejs.org/examples/jsm/textures/FlakesTexture.js';
//     // import { RGBELoader } from 'https://threejs.org/examples/jsm/loaders/RGBELoader.js';

//     // const scene = new THREE.Scene();

//     let scene, camera, renderer, controls, pointlight;
//     function init() {
//         scene = new THREE.Scene();

//         //set scene background to transparent so can see the background
//         renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);
//         camera.position.set(0, 0, 500);
//         controls = new OrbitControls(camera, renderer.domElement);

//         //LIGHTS
//         pointlight = new THREE.PointLight(0xffffff, 1);
//         pointlight.position.set(200, 200, 200);
//         scene.add(pointlight);

//         //SPHERE
//         let ballGeo = new THREE.SphereGeometry(100, 64, 64);
//         let ballMat = new THREE.MeshPhysicalMaterial();
//         let ballMesh = new THREE.Mesh(ballGeo, ballMat);
//         scene.add(ballMesh);

//         animate(); //Rendering my loop
//     }

//     function animate() {
//         controls.update();
//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//     }

//     //To start Scene
//     init();
</script>

<style>

</style>
