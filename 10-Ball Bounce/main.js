let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = '250px';
  ball.style.transition = "0.5s"
};
let down = function() {
  ball.style.bottom = '50px';  
};

document.onkeydown = up;
document.onkeyup = down;