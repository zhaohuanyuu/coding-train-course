import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

let angle = 0;
let x = 250, y = 220;

sketch.setup = function () {
	// rectMode(CENTER);
	angleMode(DEGREES);
	createCanvas(500, 500);
};

sketch.draw = function () {
	background(0);

	// stroke(255);
	// line(0, 0, 50, 50)


	push();
	translate(x, y);
	// rotate(angle);
	// scale(mouseX / 100);
	scale(1, - 1);
	rotate(angle);
	stroke(255);
	fill(100);
	rect(0, 0, 100, 50);
	pop();

	ellipse(300, 300, 60, 60)

	// x += 2;
	angle += 2;
};