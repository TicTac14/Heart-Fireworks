class Particle {
    constructor(x, y, vel, color, size){
        this.pos = createVector(x, y);
        this.color = color || {r:random(255), g:random(255), b:random(255), a:random(50, 255)};
        this.size = size || random(5, 15);

        this.vel = vel || createVector(0, -1 * random(15, 25));

        // trail mechanics
        this.trailLength = 15;
        this.history = [];

    }

    update(){
        const gravity = createVector(0, .35);
        this.pos.add(this.vel);

        this.vel.add(gravity);

        this.history.push(createVector(this.pos.x, this.pos.y));

        if (this.history.length >= this.trailLength){
            this.history.shift();
        }

    
    
    
    
    }

    show(){
        fill(this.color.r, this.color.g, this.color.b, this.color.a);
        noStroke();
        for (let i = 0; i < this.history.length; i++){
            ellipse(this.history[i].x, this.history[i].y, i/this.trailLength * this.size);
        }
        ellipse(this.pos.x, this.pos.y, this.size);
    }




}