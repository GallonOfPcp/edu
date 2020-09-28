let sliderButtons = document.querySelectorAll('.slider-click');

let sliderButtonActive = document.querySelector('.slider-click-active');

var adding = function (num) {
  sliderButtons[num].onclick = function () {
    if (!sliderButtons[num].classList.contains('slider-click-active')) {
      sliderButtons[num].classList.add('slider-click-active');
      sliderButtonActive.classList.remove('slider-click-active');
      sliderButtonActive = sliderButtons[num];
    }
  }
}

for (let i = 0; i < sliderButtons.length; i++) {
  adding(i);
}
