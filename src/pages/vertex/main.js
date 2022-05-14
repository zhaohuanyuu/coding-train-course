import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

sketch.setup = function () {
	createCanvas(600, 600);
};

sketch.draw = function () {
	background(70);

	fill(237, 34, 93);
	beginShape();
	vertex(30, 50);
	endShape();
};
