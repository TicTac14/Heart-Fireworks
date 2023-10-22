var canvas;
var fireworks = [];

function setup(){
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('gameContainer');

    
}


function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    background(0);

    for (let i = fireworks.length - 1; i >= 0; i--){
        var outOfBounds = true;
        fireworks[i].particles.forEach(particle => {
            if (particle.pos.y <= height+50){
                outOfBounds = false;
            }
        })
        if (!outOfBounds){
            fireworks[i].show();
            fireworks[i].update();
        }
    }
    
    

    if (floor(random(100)) <= 7){
        fireworks.push(new Firework({
            r: floor(random(255)),
            g: floor(random(255)),
            b: floor(random(255)),
            a: floor(random(150, 255))
        }, random(5, 10)))
    }

}

function mousePressed(){
    
}