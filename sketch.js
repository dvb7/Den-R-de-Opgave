//Setup variables
let col = 'r'
let cs = 0;

function setup() {
  createCanvas(600, 600);
}

//Check for s press
function keyPressed() {
  if (key === 's') {
    if (isLooping() === true) {
      noLoop();
    } else {
      loop();
    }
  }
}

//Check for button presses
function mousePressed() {
  if (mouseButton === LEFT) {
    //Is it green?
    if (mouseX >= 10 && mouseX <= 60 && mouseY >= 10 && mouseY <= 30) {
      col = 'g'
    }
    //Is it blue?
    else if (mouseX >= 70 && mouseX <= 120 && mouseY >= 10 && mouseY <= 30) {
      col = 'b'
    }
    //Is it red?
    else if (mouseX >= 130 && mouseX <= 180 && mouseY >= 10 && mouseY <= 30) {
      col = 'r'
    }
  }
}

function draw() {
  background(220);
  cs = 0;
  
  //Draw the buttons
  fill('rgb(0,150,0)')
  rect(10, 10, 50, 20, 5)

  fill('rgb(0,0,150)')
  rect(70, 10, 50, 20, 5)

  fill('rgb(150,0,0)')
  rect(130, 10, 50, 20, 5)
  
  //Square Rendering Machine
  for (x = 50; x <= 500; x += 100) {
    for (y = 50; y <= 500; y += 100) {
      
      //Decide the color
      if (random(0, 11) <= 2) {
        cs ++;
        switch (col) {
          case ('g'):
            fill('rgb(0,150,0)')
            break;
          case ('b'):
            fill('rgb(0,0,150)')
            break;
          case ('r'):
            fill('rgb(150,0,0)')
        }
      }
      
      else {
        switch (col) {
          case ('g'):
            fill('rgb(50,80,50)')
            break;
          case ('b'):
            fill('rgb(50,50,80)')
            break;
          case ('r'):
            fill('rgb(80,50,50)')
        }
      }
      
      print('There are '+ cs +' colored squares')
      
      //Decide offset
      xoffset = random(-5, 5)
      yoffset = random(-5, 5)
      
      //Draw squares
      square(x += xoffset, y += yoffset, 100)
    }
  }
}