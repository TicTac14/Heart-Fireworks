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
        const particleAmount = floor(random(10, 20));
        let particles = [];

        for (let i = 0; i < particleAmount; i++){
            let vect = p5.Vector.random2D();
            vect.mult(this.power);
            particles[i] = new Particle(this.particles[0].pos.x, this.particles[0].pos.y, vect, this.color, this.size);
        }
        this.particles = particles;

    }


}