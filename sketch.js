
let particles = [];
let drawing = false;
let path = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(0, 20); // fading effect

    for (let p of particles) {
        p.update();
        p.show();
    }

    if (drawing) {
        let p = new Particle(mouseX, mouseY);
        particles.push(p);
        path.push([mouseX, mouseY]);
    }

    // limit particles for performance
    if (particles.length > 1000) {
        particles.splice(0, 20);
    }
}

function mousePressed() {
    drawing = true;
    path = [];
}

function mouseReleased() {
    drawing = false;
}

function clearCanvas() {
    background(0);
    particles = [];
    path = [];
}

function downloadVideo() {
    alert("Video export feature coming soon in version 2!");
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(0.5, 2));
        this.alpha = 255;
        this.size = random(2, 5);
        this.color = color(random(150, 255), random(150, 255), 255);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.mult(0.95);
        this.alpha -= 4;
    }

    show() {
        noStroke();
        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}
