import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";

let circles = [];

sketch.setup = function () {
	createCanvas(600, 360);

	const COUNT = 25;
	// for (let i = 0; i < COUNT; i++) {
	while (circles.length < COUNT) {
		const circle = {
			x: random(width),
			y: random(height),
			r: random(6, 36)
		};

		let overlapping = false;

		for (let k = 0; k < circles.length; k++) {
			const cur = circles[k];
			const d = dist(circle.x, circle.y, cur.x, cur.y);

			if (d < circle.r + cur.r) {
				overlapping = true;
				break;
			}
		}

		if (!overlapping) {
			circles.push(circle);
		}
	}

	circles.forEach(({x, y, r}) => {
		fill(255, 0, 150, 100);
		noStroke();
		ellipse(x, y, r * 2, r * 2);
	})
};

sketch.draw = function () {
	// background(70);
};
