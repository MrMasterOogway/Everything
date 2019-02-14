function drawLevel1() {
  if (level == 1) {
    // Draw Level 1
    background(80);
    // Ground
    noStroke();
    fill(250, 175, 59);
    rect(0, 550, 800, 50);
    // Platforms
    noFill();
    stroke(250, 175, 59);
    strokeWeight(2);
    rect(100, 400, 200, 20);
    rect(300, 300, 200, 20);
    rect(500, 200, 200, 20);
  }

  function drawLevel2() {
    // Draw Level 2
    background(40, 169, 224);
    // Ground
    noStroke();
    fill(140, 197, 66);
    rect(0, 550, 800, 50);
    // Platforms
    noStroke()
    fill(170, 108, 57);
    rect(100, 400, 200, 20);
    rect(300, 250, 200, 20);
    rect(500, 400, 200, 20);
    rect(150, 150, 100, 20);
    rect(550, 150, 100, 20);
  }

  function drawLevel3() {
    // Draw Level 3
    background(140, 197, 66);
    // Ground
    noStroke();
    fill(80);
    rect(0, 550, 800, 50);
    // Platforms
    stroke(80)
    fill(80);
    rect(100, 250, 200, 20);
    rect(300, 400, 200, 20);
    rect(500, 250, 200, 20);
  }

  function setLevel() {
    // Switch Level
	if (keyCode == 49) { // #1 
		level = 1;
	} else if (keyCode == 50) { // #2
		level = 2;
	} else if (keyCode == 51) { // #3
		level = 3;
	}
  }
