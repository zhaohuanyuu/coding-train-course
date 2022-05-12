import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

import Particle from './particle';

let vibrations = [];

sketch.setup = function () {
	createCanvas(600, 600);
	for (let i = 0; i < 5; i++) {
		vibrations.push(new Particle(random(width), random(height)));
	}
};

sketch.draw = function () {
	background(70);

	for (let i = 0; i < vibrations.length; i++) {
		vibrations[i].show();
		vibrations[i].update();
	}
};

function mousePressed() {
	vibrations.push(new Particle(mouseX, mouseY));
}