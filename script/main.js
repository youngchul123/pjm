document.querySelector('.carousel-control-prev').addEventListener('click', function() {
  const carousel = document.querySelector('#carouselExampleControls');
  const slide = bootstrap.Carousel.getInstance(carousel);
  slide.prev();
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
  const carousel = document.querySelector('#carouselExampleControls');
  const slide = bootstrap.Carousel.getInstance(carousel);
  slide.next();
});

$(document).ready(function(){
	$('.img_list li').last().prependTo('.img_list');
    $('.img_list').css('left',-500);
    setInterval(function(){
       $('.img_list').animate({left:'-='+500},'slow',function(){
           $('.img_list li') .first().appendTo('.img_list');
           $('.img_list').css('left',-500);
       });
    },2000);
});