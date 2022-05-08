import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";
// if need sound
// import 'p5js-wrapper/sound';

let angle = 0;
let x = 50, y = 50;

sketch.setup = function () {
	angleMode(DEGREES);
	createCanvas(500, 500);
};

sketch.draw = function () {
	background(0);

	// stroke(255);
	// line(0, 0, 50, 50)

	rectMode(CENTER);

	push();
	translate(x, y);
	rotate(angle);
	fill(255);
	rect(0, 0, 100, 50);
	pop();

	translate(250, y);
	rotate(-angle);
	fill(50, 100, 255);
	rect(0, 0, 100, 50);

	// x += 2;
	angle += 2;
};