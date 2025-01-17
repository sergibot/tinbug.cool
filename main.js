// import WebGL from "three/addons/capabilities/WebGL.js";
// import * as THREE from "three";
// https://www.npmjs.com/package/troika-three-text
import { Text } from "troika-three-text";

// if (WebGL.isWebGL2Available()) {
//   Initiate function or other initializations here
//   animate();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.5 );
scene.add( ambientLight );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(100, 20, 20);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 0;


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

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
}
// camera.position.z = 5;
function animate() {
  //   myText.rotation.x += 0.01;
  //   myText.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
// } else {
//   const warning = WebGL.getWebGL2ErrorMessage();
//   document.getElementById("container").appendChild(warning);
// }

// when done w text, dispose of it so no memleak
// myScene.remove(myText)
// myText.dispose()
