var canvas;
var particle;

function setup(){
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('gameContainer');

    particle = new Particle(width/2, height+50, undefined, undefined); 
}


function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    background(0);
    particle.show();
    particle.update();
}

function mousePressed(){
    particle.shootUp();
}