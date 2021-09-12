var smoke = document.getElementById('smoke-1');
var smoke2 = document.getElementById('smoke-2');
var smoke3 = document.getElementById('smoke-3');
var smoke4 = document.getElementById('smoke-4');
var smoke5 = document.getElementById('smoke-5');
var smoke6 = document.getElementById('smoke-6');

var timeline = new TimelineMax({ repeat: -1 });

var timeline2 = new TimelineMax({ repeat: -1 });

timeline.fromTo(
  smoke,
  2.3,
  {
    scale: 1,
    x: '-10px',
    y: '-10px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2.2,
    opacity: 0,
    y: '-80px',
    ease: Power1.easeInOut
  }
).fromTo(
  smoke2,
  2.3,
  {
    scale: 1,
    x: '-5px',
    y: '-10px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2.3,
    opacity: 0,
    y: '-65px',
    ease: Power1.easeInOut
  },
  '-=2'
).fromTo(
  smoke3,
  2.3,
  {
    scale: 1,
    x: '-5px',
    y: '30px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2,
    opacity: 0,
    y: '-20px',
    ease: Power1.easeInOut
  },
  '-=2.2'
)

timeline2.fromTo(
  smoke4,
  2.3,
  {
    scale: 1,
    x: '-5px',
    y: '-10px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2.6,
    opacity: 0,
    y: '-80px',
    ease: Power1.easeInOut
  }
).fromTo(
  smoke5,
  2.3,
  {
    scale: 1,
    x: '-10px',
    y: '-10px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2.8,
    opacity: 0,
    y: '-70px',
    ease: Power1.easeInOut
  },
  '-=1.8'
).fromTo(
  smoke6,
  2.3,
  {
    scale: 1,
    x: '0px',
    y: '5px',
    opacity: 1,
    ease: Power1.easeInOut
  },
  {
    scale: 2.4,
    opacity: 0,
    y: '-70px',
    ease: Power1.easeInOut
  },
  '-=2.0'
)

timeline.timeScale(0.8);
timeline2.timeScale(0.7);