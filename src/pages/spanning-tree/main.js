import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

let vertices = [];

sketch.setup = () => {
	createCanvas(640, 360);

	for(let i = 0; i < 50; i++) {
		const v = createVector(random(width), random(height));
		vertices.push(v);
	}
};

sketch.draw = () => {
	background(51);

	let reached = [];
	let unreached = [];

	for (let i = 0; i < vertices.length; i++) {
		unreached.push(vertices[i]);
	}

	reached.push(unreached[0]);
	unreached.splice(0, 1);

	while (unreached.length > 0) {
		let record = 10000;
		let rIndex;
		let uIndex;

		for(let k = 0; k < reached.length; k++) {
			for(let j = 0; j < unreached.length; j++) {
				const v1 = reached[k];
				const v2 = unreached[j];
				const d = dist(v1.x, v1.y, v2.x, v2.y);

				if (d < record) {
					record = d;
					rIndex = k;
					uIndex = j;
				}
			}
		}

		line(
			reached[rIndex].x,
			reached[rIndex].y,
			unreached[uIndex].x,
			unreached[uIndex].y
		);

		reached.push(unreached[uIndex]);
		unreached.splice(uIndex, 1);
	}

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

