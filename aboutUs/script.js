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


function downloadFile() {
    window.location.href = "Научный проект О.С.К.О.Л.О.К..docx";
  }
  