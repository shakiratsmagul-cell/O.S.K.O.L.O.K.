document.addEventListener('DOMContentLoaded', () => {

  // ScrollSmoother
  if (window.gsap && window.ScrollSmoother) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (!ScrollTrigger.isTouch) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 0.8,
        effects: true
      });
    }
  }


  const modelViewer = document.querySelector('model-viewer');
  const buttons = document.querySelectorAll('.btns button');

  const title = document.getElementById("info-title");
  const text = document.getElementById("info-text");


  const info = {

    "./detaic1.glb": {

      title: "Солнечные панели О.С.К.О.Л.О.К.",

      text: `
<p>
Солнечные панели являются основным источником энергии орбитального робота.
В условиях открытого космоса солнечное излучение значительно интенсивнее,
что позволяет эффективно обеспечивать автономную работу системы.
</p>

<ul class="main-features">
<li>Многопереходные GaAs фотоэлементы (КПД до 35%)</li>
<li>Устойчивость к радиации и микрометеоритам</li>
<li>Автоматическая ориентация на Солнце</li>
<li>Работа в экстремальных температурных условиях</li>
</ul>
`
    },


"./detaic2.glb": {

title:"Корпус О.С.К.О.Л.О.К.",

text:`

<h3>Функциональное назначение корпуса</h3>

<p>
Корпус является центральным модулем орбитального робота.
В нём размещены вычислительная система, модуль искусственного интеллекта,
навигационное оборудование и система стабилизации.
</p>

<h3>Интеллектуальная система сканирования</h3>

<ul>
<li>Лидар</li>
<li>Оптические камеры</li>
<li>Радиолокационный датчик</li>
<li>Спектральные сенсоры</li>
</ul>

<h3>Материалы конструкции корпуса</h3>

<p>
Корпус выполнен из углепластикового композита
с алюминиево-титановой рамой.
</p>

`
},



"./detaic3.glb":{

title:"Захватный механизм О.С.К.О.Л.О.К.",

text:`

<h3>Назначение</h3>

<p>
Захватный механизм предназначен для перехвата
космического мусора различного размера.
</p>

<h3>Конструкция</h3>

<ul>
<li>Телескопическая структура</li>
<li>Сервоприводы</li>
<li>Демпфирующая система</li>
<li>Высокоточное позиционирование</li>
</ul>

<h3>Сетевой механизм</h3>

<p>
Манипуляторы оснащены раскрывающейся сетью
для безопасного захвата объектов.
</p>

`
}

};



  if (modelViewer && buttons.length > 0) {

    buttons.forEach(button => {

      button.addEventListener('click', () => {

        const src = button.getAttribute('data-model');

        modelViewer.src = src;


        if(info[src]){
          title.innerText = info[src].title;
          text.innerHTML = info[src].text;
        }


        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

      });

    });

    buttons[0].classList.add('active');

  }

});

