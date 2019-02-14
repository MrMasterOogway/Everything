// CODE FOR A BUBBLE OBJECT

// Bubble class - Factory or Blueprint to build Bubble Object
class Bubble {
	constructor(x, y) {
		// Properties (State)
		// Runs once when a Bubble object is created
		this.x = random(50, 600);
		this.y = random(50, 600);
		this.r = random(10, 50);
	}

	// Methods (Behaviour)
	move() {
		// Move Bubble Randomly
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

	show() {
		// Draw Bubble
		noFill();
		stroke(255, 180);
		strokeWeight(3);
		ellipse(this.x, this.y, 2 * this.r);
	}
}