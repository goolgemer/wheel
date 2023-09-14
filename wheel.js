let container = document.querySelector('.container');
let wheelBG = document.querySelector('.wheel_bg');
let btn = document.getElementById('spin');
let spinDeg = '3036deg';
let clockwise = true;
let animationRunning = false; 
let popup = document.querySelector('.popup');

btn.addEventListener("click", (event) => {
  
  if (animationRunning) {
       stopAnimation();
  }

  
  else {
    justSpin(spinDeg);
  }
   
});

function justSpin(deg = "0deg") {
  container.style.transition = "5s";
  wheelBG.style.transition = "5s";
  container.style.transform = `rotate(${deg})`;
  wheelBG.style.transform = `rotate(${deg})`;
  animationRunning = false;
}


function startAnimation(deg = "0deg") {
  container.style.transition = "5s";
  wheelBG.style.transition = "5s";
  container.style.transform = `rotate(${deg})`;
  wheelBG.style.transform = `rotate(${deg})`;
  animationRunning = true;
}

function stopAnimation() {
  container.style.transition = "none"; 
  wheelBG.style.transition = "none";
  animationRunning = false;
  setTimeout(() => {
    popup.classList.add('popup_active');
  },6000);
}

function spin() {
  setTimeout(() => {
    container.style.transition = "1s";
    wheelBG.style.transition = "1s";
    if (clockwise) {
      container.style.transform = "rotate(-5deg)";
      wheelBG.style.transform = "rotate(-5deg)";
    } else {
      container.style.transform = "rotate(5deg)";
      wheelBG.style.transform = "rotate(5deg)";
    }
   
    clockwise = !clockwise;
    
    if (animationRunning) {
      spin();
    }else{
      justSpin(spinDeg);
    }
  }, 1000);
}

setTimeout(() => {
  startAnimation();
  spin();
}, 1000);





// 8 сектаров
// POP-UP
//Кнопка в центре