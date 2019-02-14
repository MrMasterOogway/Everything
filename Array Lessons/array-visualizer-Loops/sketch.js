// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

let count;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 5;
	count = 0;

	myArray = [];
	for (let n = 0; n < 50; n++) {
		myArray.push(random(100));
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC

	// DRAW
	background(225);
	drawArray();
}

function keyPressed() {
	let count = 0;

	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i] < 50) {
			count++;
		}
	}
}