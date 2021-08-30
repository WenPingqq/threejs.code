const THREE = require('three');

function createRenderer() {
  let renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#f8f8ff");
  renderer.setPixelRatio(window.devicePixelRatio);
  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  return new THREE.Scene();
}

function createCamera() {
    let camera = new THREE.PerspecttiveCamera(
        45, // field of view
        window.innerWidth / window.innerHeight, //ascpect ratio
        0.1, //near value
        1000, //far value
    );
    camera.position.set(-30, 40, 30); 
    camera.lookAt(0, 0, 0);
    return camera;
}

function createAxesHelper() {
    let axesHelper = new THREE.AxesHelper(40);
    return axesHelper;
}

function createCube() {
    let geometry = new THREE.BoxGeometry(4, 4, 4);
    let material = new THREE.MeshLambertMaterial({
        color:"tomato",
    });
    let mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

function createSphere() {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let material = new THREE.MeshLambertMaterial({
        color:"dodgerblue",
    });
    let mesh = new THREE.Mesh(geometry, material);
    return mesh;
}
function createLight() {
    let light = new THREE.PointLight("white", 1);
    return light;
}

function createLightHelper(light) {
    let helper = new THREE.PointLightHelper(light);
    return helper;
}

let renderer = createRenderer();
let scene = createScene();
let camera = createCamera();
let axesHelper = createAxesHelper();
let cube = createCube();
let sphere = createSphere();
let light = createLight();
let lightHelper = createLightHelper(light);


light.position.x = 10;
light.position.y = 10;
light.position.z = 10;

sphere.position.x = 20;




scene.add(axesHelper);
scene.add(cube, sphere, lightHelper);

renderer.render(scene, camera);

function animate(){
    cube.position.x += 0.1;
    renderer.render(scene, camera);
    requesrAnimationFrame(animate);
}

animate();