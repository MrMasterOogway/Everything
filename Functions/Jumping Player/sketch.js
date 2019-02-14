// JUMPING PLAYER

// Declare Global Variables
let player1;
let level;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	
	// Initialize Global Variables
	initPlayer1();
	level = 1;
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
 	// LOGIC
	movePlayer1();
		
	// DRAW
	if (level == 1) {
      drawLevel1()
	} else if (level == 2) {
		drawLevel2()
	} else {
		drawLevel3()
	}
	
	drawPlayer1();
}

// EVENT FUNCTIONS
function keyPressed() {
	jumpPlayer1();
	setLevel();
}