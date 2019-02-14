// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 25;
	myArray = [];
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	if(keyIsDown(UP_ARROW)) {
		// Add element to a specific index (middle)
		let middleIndex = Math.floor(myArray.length / 2);
		myArray.splice(middleIndex, 0, random(25));
	} else if (keycode == DOWN_ARROW) {
		// Remove element from a specific index (middle)
		let middleIndex = Math.floor(myArray.length / 2);
		myArray.splice(middleIndex, 1);
	}

	// DRAW
	background(225);
	drawArray();
}

// Event Function
function keyPressed() {
	// if (keycode == UP_ARROW) {
		// Add element to the end of the array
		// myArray.push(random(25));

		// Add element to the beginning of the array
		// myArray.unshift(random(25));

		// Add element to a specific index (middle)
	// 	let middleIndex = Math.floor(myArray.length / 2);
	// 	myArray.splice(middleIndex, 0, random(25));
	// } else if (keycode == DOWN_ARROW) {
		// Remove element to the end of the array
		// let lastEl = myArray.pop();
		// console.log(lastEl)

		// Remove element to the beginning of the array
		// let firstEl = myArray.shift();
		// console.log(firstEl)
		
		// Remove element from a specific index (middle)
		// let middleIndex = Math.floor(myArray.length / 2);
		// myArray.splice(middleIndex, 1);
	// }
}