$(document).ready(function() {
  var isOpen = false;
  $("#portfolio-link").click(function() {
    if (!isOpen) {
      $("#portfolio-dropdown").slideDown(300);
      isOpen = true;
    } else {
      $("#portfolio-dropdown").slideUp(300);
      isOpen = false;
    }
  });
});

$(document).ready(function() {
  var isOpen = false;
  $("#portfolio-link").on('click', function(e) {
    e.stopPropagation();
    if (!isOpen) {
      $("#portfolio-dropdown").slideDown(300);
      isOpen = true;
      $("#portfolio-link").addClass("active").css('transition', 'all 0.3s ease'); // 카테고리 색상 변경
    } else {
      $("#portfolio-dropdown").slideUp(300);
      isOpen = false;
      $("#portfolio-link").removeClass("active").css('transition', 'all 0.3s ease'); // 카테고리 색상 원래대로 변경
    }
  });

  $('body').on('click', function(e) {
    if(isOpen && !$(e.target).closest('#portfolio-dropdown').length && !$(e.target).is('#portfolio-link')) {
      $("#portfolio-dropdown").slideUp(300);
      isOpen = false;
      $("#portfolio-link").removeClass("active").css('transition', 'all 0.3s ease'); // 카테고리 색상 원래대로 변경
    }
  });
});

const sliderItems = document.querySelectorAll('.slider-item');

function animateSliderItems() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset;
  
  sliderItems.forEach((item, index) => {
    const slideInPos = item.offsetTop - windowHeight / 2;
    const slideOutPos = item.offsetTop + item.offsetHeight - windowHeight / 2;
    
    if (scrollTop >= slideInPos && scrollTop < slideOutPos) {
      gsap.to(item, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(item, { opacity: 0, duration: 0.5 });
    }
  });
}

window.addEventListener('scroll', animateSliderItems);