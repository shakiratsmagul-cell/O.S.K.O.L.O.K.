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

  const mainImg = document.querySelector('.main-img');
  if (mainImg) {
    gsap.fromTo(
      mainImg,
      {
        opacity: 0,
        scale: 0.1,
        y: 200,
        x: 350
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        duration: 3,
        ease: 'power1.out'
      }
    );
  }

  const section1Div = document.querySelector('.section1-div');
  if (section1Div) {
    gsap.fromTo(
      section1Div,
      {
        opacity: 0,
        x: -100,
        y: 25
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 2,
        ease: 'power1.out'
      }
    );
  }
});

// btn1 → скролл на 90vh вниз
document.querySelector(".btn1").onclick = function() {
    window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: "smooth"
    });
};


// btn2 → переход на project/index.html
document.querySelector(".btn2").onclick = function() {
    window.location.href = "project/index.html";
};