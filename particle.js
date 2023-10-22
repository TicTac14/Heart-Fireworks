class Particle {
    constructor(x, y, color, size){
        this.pos = createVector(x, y);
        this.color = color || {r:random(255), g:random(255), b:random(255), a:random(50, 255)};
        this.size = size || random(5, 15);

        this.vel = createVector(0, -25);

    }

    update(){
        const gravity = createVector(0, .5);
        this.pos.add(this.vel);

        this.vel.add(gravity);
        

        
        

    }

    show(){
        fill(this.color.r, this.color.g, this.color.b, this.color.a);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    shootUp(){
        this.vel.add(createVector(0, -20));

    }



}