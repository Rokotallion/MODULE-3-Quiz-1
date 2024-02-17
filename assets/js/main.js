import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0x42242b );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Camera Control

const cameraControl = new OrbitControls(camera, renderer.domElement);

// *** Light Source ***
// Ambient

const ambLight = new THREE.AmbientLight( 0x404040 );
scene.add(ambLight);

// Pointlight

const pointLight = new THREE.PointLight( 0xf0776c, 20, 200 );
scene.add(pointLight); 

// LampLight (Spot)

const spotLight = new THREE.SpotLight( 0xffd3a1, 40, 100, 0.8, 0.19 );
scene.add(spotLight);

// *** Geometries ***
// Walls
const wallSpec = new THREE.TextureLoader().load('./assets/textures/STARTAN3_Spec.png');
const wall2Spec = new THREE.TextureLoader().load('./assets/textures/STARTAN2_Spec.png');

const wall1Texture = new THREE.TextureLoader().load('./assets/textures/STARTAN3.png');
const wallGeom = new THREE.PlaneGeometry(5,5);
const wall1Matt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: wallSpec, map: wall1Texture} );
const wall1 = new THREE.Mesh(wallGeom, wall1Matt);

const wall2Texture = new THREE.TextureLoader().load('./assets/textures/STARTAN2.png');
const wall2Matt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: wall2Spec, map: wall2Texture } );
const wall2 = new THREE.Mesh(wallGeom, wall2Matt);

const wall3Texture = new THREE.TextureLoader().load('./assets/textures/STARTAN1.png');
const wall3Matt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: wallSpec, map: wall3Texture } );
const wall3 = new THREE.Mesh(wallGeom, wall3Matt);

const doorTexture = new THREE.TextureLoader().load('./assets/textures/DOOR3.png');
const doorSpec = new THREE.TextureLoader().load('./assets/textures/DOOR3_Spec.png');
const doorGeom = new THREE.PlaneGeometry(2.5,3.2);
const doorMatt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: doorSpec, map: doorTexture } );
const door = new THREE.Mesh(doorGeom, doorMatt);

const wall4 = new THREE.Mesh(wallGeom, wall3Matt);

scene.add(wall1);
scene.add(wall2);
scene.add(wall3);
scene.add(wall4);
scene.add(door);

// Ceiling
const ceilTexture = new THREE.TextureLoader().load('./assets/textures/MARBLE1.png');
const ceilSpec = new THREE.TextureLoader().load('./assets/textures/MARBLE1_Spec.png');
const ceilGeom = new THREE.PlaneGeometry(5,5);
const ceilMatt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: ceilSpec, map: ceilTexture } );
const ceiling = new THREE.Mesh(ceilGeom, ceilMatt);

scene.add(ceiling);

// Lamp
const lampTexture = new THREE.TextureLoader().load('./assets/textures/SHAWN2.png');
const lampSpec = new THREE.TextureLoader().load('./assets/textures/SHAWN2_Spec.png');
const lampGeom = new THREE.ConeGeometry(1, 0.5, 8);
const lampMatt = new THREE.MeshPhongMaterial( { specular: 0xffdeed, specularMap: lampSpec, map: lampTexture } );
const lamp = new THREE.Mesh(lampGeom, lampMatt);

scene.add(lamp);

const lampBallGeom = new THREE.SphereGeometry(0.3, 8, 8);
const lampBallMatt = new THREE.MeshBasicMaterial( { color: 'white' });
const lampball = new THREE.Mesh(lampBallGeom, lampBallMatt);

scene.add(lampball);

// Floor
const floorTex = new THREE.TextureLoader().load('./assets/textures/GRAYBIG.png');
const floorGeom = new THREE.PlaneGeometry(5, 5);
const floorMatt = new THREE.MeshLambertMaterial( { map: floorTex } );
const floor = new THREE.Mesh(floorGeom, floorMatt);

scene.add(floor);

// CenterObj
const cacoAlpha = new THREE.TextureLoader().load('./assets/textures/caco_Alpha.png');
const cacoTexture = new THREE.TextureLoader().load('./assets/textures/caco.png');

const cacoGeom = new THREE.PlaneGeometry(2, 2);
const cacoMatt = new THREE.MeshBasicMaterial( { map: cacoTexture, transparent: true, opacity: 1, alphaMap: cacoAlpha});
const cacodemon = new THREE.Mesh(cacoGeom, cacoMatt);

scene.add(cacodemon);

// Stand
const standTex = new THREE.TextureLoader().load('./assets/textures/GRAY7.png');
const standGeom = new THREE.CylinderGeometry( 1, 1, 0.5, 32 );
const standMatt = new THREE.MeshLambertMaterial( { map: standTex } );
const stand = new THREE.Mesh(standGeom, standMatt);

scene.add(stand);

// Variables and Values
camera.position.z = 5;

pointLight.position.z = 0;
spotLight.position.y = 2;

wall1.position.z = -2.5;

wall2.rotation.y = .5*Math.PI;
wall2.position.x = -2.5;

wall3.rotation.y = -1*Math.PI;
wall3.position.z = 2.5;

wall4.rotation.y = -.5*Math.PI;
wall4.position.x = 2.5;

ceiling.rotation.x = .5*Math.PI;
ceiling.rotation.z = -.5*Math.PI;
ceiling.position.y = 2.5;

floor.rotation.x = -.5*Math.PI;
floor.rotation.z = -.5*Math.PI;
floor.position.y = -2.5;

stand.position.y = -2.25;

lamp.position.y = 2.25;
lampball.position.y = 2.1;

door.position.z = -2.49;
door.position.y = -0.85;

function animate() {
	requestAnimationFrame( animate );

    cacodemon.lookAt(camera.position);

	renderer.render( scene, camera );
}
animate();