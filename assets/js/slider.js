let sliderButtons = document.querySelectorAll('.slider-click');

let sliderButtonActive = document.querySelector('.slider-click-active');
let sliderItems = document.querySelector('.slider-items');

var adding = function (num) {
  sliderButtons[num].onclick = function () {
    if (!sliderButtons[num].classList.contains('slider-click-active')) {
      sliderButtons[num].classList.add('slider-click-active');
      sliderButtonActive.classList.remove('slider-click-active');
      sliderButtonActive = sliderButtons[num];
    }
    var translateNumber = -num*562 + 'px';
    console.log(translateNumber);
    sliderItems.style.transform = "translate(" +translateNumber+ ")";
  }
}

for (var i = 0; i < sliderButtons.length; i++) {
  adding(i);
}
