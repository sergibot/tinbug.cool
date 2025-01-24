// import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";
// https://www.npmjs.com/package/troika-three-text
import { Text } from "troika-three-text";

let camera, scene, raycaster, renderer, cube;

const pointer = new THREE.Vector2();
// const radius = 5;
init();
function init() {
  scene = new THREE.Scene();

  scene.background = new THREE.Color(0xffd011);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 200);
  camera.lookAt(0, 0, 0);

  //   const light = new THREE.DirectionalLight(0xffffff, 1);
  //   light.position.set(1, 1, 1).normalize();
  const light = new THREE.AmbientLight(0xeeeeee, 1.5);
  scene.add(light);

  const geometry = new THREE.BoxGeometry(100, 20, 20);
  const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const material = new THREE.MeshToonMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  document.addEventListener("mousemove", onPointerMove);
  //   window.addEventListener("resize", onWindowResize);

  //   window.addEventListener("pointermove", onPointerMove);

  //   window.requestAnimationFrame(render);

  const myText = new Text();
  const myText2 = new Text();
  const myText3 = new Text();
  const myText4 = new Text();
  cube.add(myText);
  cube.add(myText2);
  cube.add(myText3);
  cube.add(myText4);
  myText.font = "./Catfont-Regular.ttf.otf";
  myText.text = "tinbug.cool";
  myText.fontSize = 20;
  myText.position.x = -45;
  myText.position.y = 7;
  myText.position.z = 11;
  myText.color = 0x000044;
  myText2.font = "./Catfont-Regular.ttf.otf";
  myText2.text = "tinbug.cool";
  myText2.fontSize = 20;
  myText2.rotation.x = 1.6;
  myText2.position.x = -45;
  myText2.position.y = -16;
  myText2.position.z = 9;
  myText2.color = 0x440000;
  myText3.font = "./Catfont-Regular.ttf.otf";
  myText3.text = "tinbug.cool";
  myText3.fontSize = 20;
  myText3.rotation.x = 3.2;
  myText3.position.x = -45;
  myText3.position.y = -8;
  myText3.position.z = -11.1;
  myText3.color = 0x004400;
  myText4.font = "./Catfont-Regular.ttf.otf";
  myText4.text = "tinbug.cool";
  myText4.fontSize = 20;
  myText4.rotation.x = 4.8;
  myText4.position.x = -45;
  myText4.position.y = 17;
  myText4.position.z = -9;
  myText4.color = 0x220022;
  // Update the rendering:
  myText.sync();
  //   It's a good idea to call the .sync() method after changing any properties that would affect the text's layout. If you don't, it will be called automatically on the next render frame, but calling it yourself can get the result sooner.
}

function onPointerMove(event) {
  // calculate pointer position in normalized device coordinates (-1 to +1) for both components
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function render() {
  // update the picking ray with the camera and pointer position
  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.material.color.set(0xff0000);
  }

  // calculate objects intersecting the picking ray
  //   const intersects = raycaster.intersectObjects(scene.children);
  //   for (let i = 0; i < intersects.length; i++) {
  //     intersects[i].object.material.color.set(0xff0000);
  //

  //   camera.updateMatrixWorld()
  //   camera.lookAt(scene.position);

  //   camera.updateMatrixWorld();
  renderer.render(scene, camera);
}

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   controls.handleResize();
// }

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.001;
  render();
}

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//   const element = document.getElementById("embed-iframe");
//   const options = {
//     uri: "spotify:track:0KoSzqJC4pDWNdZdqJhgA4",
//   };
//   const callback = (EmbedController) => {
//     document.querySelector(".play").addEventListener("click", () => {
//       alert();
//       console.log("sdfs");
//       EmbedController.play();
//     });
//   };
//   IFrameAPI.createController(element, options, callback);
// };
