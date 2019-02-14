// Main Program Functions

function initGlobals() {
    player1 = new JumpingPlayer(200, 580, BLUE, 65, 68, 87);
	player2 = new JumpingPlayer(600, 580, RED, 37, 39, 38);
	
	platform1 = new Platform(400, 450, 200);
	platform2 = new Platform(200, 300, 150);
	platform3 = new Platform(500, 200, 250);
}

function moveGameObjects() {
    player1.move();
	player2.move();
	
	platform1.move();
	platform2.move();
	platform3.move();
}

function drawGameObjects() {
	player1.show();
	player2.show();
	
	platform1.show();
	platform2.show();
	platform3.show();
}

function checkPlatformCollision(aPlayer) {
    // Check Player 1
	if (rectIntersect(aPlayer, platform1) && aPlayer.ySpeed > 0) {
		platform1.topCol = aPlayer.col;
		aPlayer.y = platform1.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform2) && aPlayer.ySpeed > 0) {
		platform2.topCol = aPlayer.col;
		aPlayer.y = platform2.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform3) && aPlayer.ySpeed > 0) {
		platform3.topCol = aPlayer.col;
		aPlayer.y = platform3.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	}
}