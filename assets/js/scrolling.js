let scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.onclick = function () {
 window.scrollTo(0, 0);
};
window.onscroll = function () {
  if (window.pageYOffset > 500) {
    scrollBtn.classList.add('scroll-btn-visible')
  } else {
    scrollBtn.classList.remove('scroll-btn-visible')
  }
};
