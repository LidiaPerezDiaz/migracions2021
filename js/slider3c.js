var images = ['../img/sliderC1.jpg', '../img/sliderC2.jpg', '../img/sliderC.JPG',];

var x = 0;

var imgs = document.getElementById('img');

setInterval(slider, 2000);

function slider() {
  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }
  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}
