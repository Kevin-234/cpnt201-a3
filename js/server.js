// First ball (top)
const ball = document.querySelector('.ball1');
const button = document.querySelector('button');

button.addEventListener('click', function(){

  ball.classList.toggle('hue');
  button.classList.toggle('hue');
});

// Second ball (bottom)
const ball2 = document.querySelector('.ball2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){

  ball2.classList.toggle('hue');
  btn.classList.toggle('hue');
});