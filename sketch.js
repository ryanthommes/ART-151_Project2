let colors;
let worms = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(12);

    window.alert("Exclusion Worm is a generative drawing using color exclusion and noise." +
                "It uses color blending (exclusion mode) on the overlapping shapes to create a sort of kaleidoscope effect.\n\n" +
                "Press 'a' and 'd' to add and delete a 'worm'.\n" + 
                "Press 'c' to change shape of lasted added 'worm'.\n" +
                "Press '-' and '=' to change size of lasted added 'worm'.");

    colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
    worms.push(new Worm(height/2));
}

function draw() {

    blendMode(BLEND);
    background(30);
    blendMode(EXCLUSION);

    for (const worm in worms) {
        worms[worm].display();
    }
}

function keyPressed() {

    if (keyCode === 68) {               // "d" key - delete
        worms.pop();                        // delete last index
    } else if (keyCode === 65) {        // "a" key - add
        worms.push(new Worm(mouseY));       // insert new worm
    } else if (keyCode === 67) {        // "c" key
        worms[worms.length -1]              // change shape
        .changeShape(); 
    } else if (keyCode === 173) {       // "-" key
        worms[worms.length -1]              // decrease size
        .decreaseSize();
    } else if (keyCode === 61) {        // "=" key
        worms[worms.length -1]              // increase shape
        .increaseSize();
    }
}

class Worm {

    constructor(ypos) {
        this.x = 0;
        this.y = 0;

        this.xoff = 0;
        this.yoff = 0;

        this.ypos = ypos;

        this.shape = "circle";
        this.size  = 100;

        noiseSeed(ypos);
    }

    display() {

        this.xoff = 0;

        beginShape();
        strokeWeight(2);
        for (this.x = 0; this.x <= mouseX; this.x += 10) {

            this.y = map(noise(this.xoff, this.yoff), 0, 1, this.ypos, mouseY);
    
            fill(random(colors))
            // rectMode(CENTER)

            if (this.shape === "circle") {
                circle(this.x, this.y, this.size);
            } else if (this.shape === "rect")  {
                rect(this.x, this.y, this.size, this.size, 10);
            }           
    
            this.xoff += 0.1;
    
        }
        this.yoff += 0.05;
        endShape();
    }

    changeShape() {
        if (this.shape === "circle") {
            this.shape = "rect"
        } else {
            this.shape = "circle"
        }  
    }

    increaseSize() {
        this.size += 10;
    }

    decreaseSize() {
        if (this.size >= 50) {
            this.size -= 10;
        }
    }

}