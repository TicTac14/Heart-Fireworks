class Firework {
    constructor(color, size){
        this.particles = [];
        // add initial single particle
        this.color = color;
        this.size = size;
        this.particles.push(new Particle(random(25, width-25), height+50, null, this.color, this.size));

        this.exploded = false;
        this.power = random(3, 8);
    }

    show(){
        this.particles.forEach(particle => {
            particle.show();
        })
    }

    update(){
        this.particles.forEach(particle => {
            particle.update();
        });

        //explotion mechanics
        if (!this.exploded && this.particles[0].vel.y > 0){
            this.explode();
            this.exploded = true;
        }
        if (this.exploded){
            for (let i = 0; i < this.particles.length; i++){
                if (this.particles[i].color.a > 0){
                    this.particles[i].color.a -= 0.21;
                }
            }
        }
    }


    explode(){
        let particles = [];

        if (floor(random(100)) <= 15){
            let particleAmount = 30
            for (let i = 0; i < particleAmount; i++){
                let theta = (TWO_PI/particleAmount)*i;
                let r = 5;
                let x = r*16 * Math.pow(Math.sin(theta), 3);
                let y = -r*(13*Math.cos(theta)-5*Math.cos(2*theta)
                            -2*Math.cos(3*theta)-Math.cos(4*theta));
                let t = createVector(this.particles[0].pos.x, this.particles[0].pos.y);
                particles.push(
                    new Particle(x + t.x, y + t.y, createVector(), this.color, this.size)
                );
            }
        }else {
            let particleAmount = floor(random(10, 20));
            for (let i = 0; i < particleAmount; i++){
                let vect = p5.Vector.random2D();
                vect.mult(this.power);
                particles[i] = new Particle(this.particles[0].pos.x, this.particles[0].pos.y, vect, this.color, this.size);
            }
        }
        

        this.particles = particles;

    }


}