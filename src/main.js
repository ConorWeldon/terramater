import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
import * as THREE from '/node_modules/three/src/Three.js';
    import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
    import { FlakesTexture } from 'https://threejs.org/examples/jsm/textures/FlakesTexture.js';
    import { RGBELoader } from 'https://threejs.org/examples/jsm/loaders/RGBELoader.js';

    // const scene = new THREE.Scene();

    let scene, camera, renderer, controls, pointlight;
    function init() {
        scene = new THREE.Scene();

        //set scene background to transparent so can see the background
        renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);
        camera.position.set(0, 0, 500);
        controls = new OrbitControls(camera, renderer.domElement);

        //LIGHTS
        pointlight = new THREE.PointLight(0xffffff, 1);
        pointlight.position.set(200, 200, 200);
        scene.add(pointlight);

        //SPHERE
        let ballGeo = new THREE.SphereGeometry(100, 64, 64);
        let ballMat = new THREE.MeshPhysicalMaterial();
        let ballMesh = new THREE.Mesh(ballGeo, ballMat);
        scene.add(ballMesh);

        animate(); //Rendering my loop
    }

    function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    //To start Scene
    init();*/