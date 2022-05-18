import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

let vertices = [];

sketch.setup = () => {
	createCanvas(640, 360);

};

sketch.draw = () => {
	background(51);

	vertices.forEach(({ x, y })=> {
		fill(255);
		stroke(255);
		ellipse(x, y, 16, 16)
	})
};

sketch.mousePressed = () => {
	const v = createVector(mouseX, mouseY);
	vertices.push(v);
}

