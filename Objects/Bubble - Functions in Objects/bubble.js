// Code For A Bubble Project

function initBubble() {
    bubble = {
		// Properties (State)
		x: width / 2,
		y: height / 2,
        r: 25,
        // Methods (behaviour)
        move: function() {
            this.x += random(-1, 1);
            this.y += random(-1, 1);
        },
        show: function() {
            // Draw Bubble
            noFill();
            stroke(255, 180);
            strokeWeight(3);
            ellipse(bubble.x, bubble.y, 2 * bubble.r);
        }
	}
}
