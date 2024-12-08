"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function TV() {
	useEffect(() => {
		let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: CSS3DRenderer;
		let controls: OrbitControls;

		// Define the Element function with TypeScript typings
		function Element(id: string, x: number, y: number, z: number, ry: number): CSS3DObject {
			const div = document.createElement("div");
			div.style.width = "480px";
			div.style.height = "360px";
			div.style.backgroundColor = "#000";

			const iframe = document.createElement("iframe");
			iframe.style.width = "480px";
			iframe.style.height = "360px";
			iframe.style.border = "0px";
			iframe.src = `https://www.youtube.com/embed/${id}?rel=0`;
			div.appendChild(iframe);

			const object = new CSS3DObject(div);
			object.position.set(x, y, z);
			object.rotation.y = ry;

			return object;
		}

		// Initialize the scene, camera, and renderer
		function init() {
			const container = document.getElementById("container");

			if (!container) {
				console.error("Container not found");
				return;
			}

			camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
			camera.position.set(800, 400, 800);

			scene = new THREE.Scene();

			renderer = new CSS3DRenderer();
			renderer.setSize(800, 600);
			container.appendChild(renderer.domElement);

			const group = new THREE.Group();
			group.add(new Element("SJOz3qjfQXU", 0, 0, 240, 0));
			group.add(new Element("Y2-xZ-1HE-Q", 240, 0, 0, Math.PI / 2));
			group.add(new Element("IrydklNpcFI", 0, 0, -240, Math.PI));
			group.add(new Element("9ubytEsCaS0", -240, 0, 0, -Math.PI / 2));
			scene.add(group);

			// controls = new TrackballControls(camera, renderer.domElement);
			// controls.rotateSpeed = 4;

			controls = new OrbitControls(camera, renderer.domElement);
			controls.target.set(0, 0.5, 0);
			// controls.enablePan = false;
			// controls.enableDamping = true;

			window.addEventListener("resize", onWindowResize);

			const blocker = document.getElementById("blocker");
			if (blocker) {
				blocker.style.display = "none";

				controls.addEventListener("start", function () {
					blocker.style.display = "";
				});
				controls.addEventListener("end", function () {
					blocker.style.display = "none";
				});
			}
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animate() {
			requestAnimationFrame(animate);
			controls?.update();
			renderer?.render(scene, camera);
		}

		init();
		animate();
	}, []);

	return (
		<div>
			<div id="container"></div>
			<div id="blocker"></div>
		</div>
	);
}
