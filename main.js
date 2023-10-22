const startShowBtn = document.getElementById('startTheShow');

var canvas;
var fireworks = [];
var startShow = false;

function setup(){
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('gameContainer');

    initEventListeners();
    
}


function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    background(0);
    if (startShow){
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
        
        

        if (floor(random(100)) <= 15){
            fireworks.push(new Firework({
                r: floor(random(255)),
                g: floor(random(255)),
                b: floor(random(255)),
                a: floor(random(150, 255))
            }, random(5, 10)))
        }
    }
    

}

function mousePressed(){
    
}

function initEventListeners(){
    startShowBtn.addEventListener('click', () => {
        startShowBtn.animate([
            {
                left: "50%",
                opacity: 1,
                easing: "ease-in-out"
            },
            {
                left: "-10%",
                opacity: 0,
                easing: "ease-in-out"
            }
        ], 5000);
        setTimeout(() => {
            startShowBtn.classList.add('hidden');
        }, 5000);
        setTimeout(()=> {
            document.getElementById('gameContainer')
            .classList.remove('hidden');
            startShow = true;
        }, 3000) 
    });
}