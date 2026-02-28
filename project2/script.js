const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// Адаптивные размеры canvas
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


// загрузка картинки Земли
const earthImg = new Image();
earthImg.src = "img/earth.png"; // файл рядом с html


// мусор
let debris=[];

for(let i=0;i<400;i++){

debris.push({

r:80+Math.random()*175,
a:Math.random()*Math.PI*2,
speed:0.002+Math.random()*0.01,
size:1.5+Math.random()*3.5

});

}


function draw(){

ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);


// Земля картинкой
const size = 120; // размер земли

ctx.drawImage(
earthImg,
centerX - size/2,
centerY - size/2,
size,
size
);


// мусор
ctx.fillStyle="white";

debris.forEach(d=>{

d.a+=d.speed;

let x=centerX+Math.cos(d.a)*d.r;
let y=centerY+Math.sin(d.a)*d.r;

ctx.fillRect(x,y,d.size,d.size);

});


requestAnimationFrame(draw);

}

draw();



document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || !window.ScrollSmoother) return;

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  if (!ScrollTrigger.isTouch) {
    try {
      const smootherConfig = {
        wrapper: '.wrapper',
        content: '.content',
        effects: true
      };
      smootherConfig.smooth = 0.8;
      ScrollSmoother.create(smootherConfig);
    } catch (e) {
      console.error('ScrollSmoother init error:', e);
    }
  }

  const block = document.querySelector('.block');
  if (block) {
    gsap.fromTo(
      block,
      {
        opacity: 0,
        x: -20,
        y: 25
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.5,
        ease: 'power1.out'
      }
    );
  }

  const block2 = document.querySelector('.block2');
  if (block2) {
    gsap.fromTo(
      block2,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.5,
        ease: 'power1.out'
      }
    );
  }
});