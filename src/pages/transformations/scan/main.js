import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";
// if need sound
// import 'p5js-wrapper/sound';

let x = 0;

sketch.setup = function () {
	// rectMode(CENTER);
	angleMode(DEGREES);
	createCanvas(500, 500);
};

sketch.draw = function () {
	background(51);
	stroke(255);
	line(x, 0, x, height);

	x += 3;

	if (x > width) x = 0;
};