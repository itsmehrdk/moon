


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry( 5, 32, 32 );

const texture = new THREE.TextureLoader().load( 'moon.jpg' );
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 10;

controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 1000

function animate(){
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    controls.update()
    renderer.render(scene,camera);
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
animate();
