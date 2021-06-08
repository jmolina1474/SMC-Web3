(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// Cart Scripts
$(document).ready(function(){
  
  $("#cart-1").click(function(){
    $("#item1, #checkout").show();
  })
  $("#cart-1").click(function(){
    $("#empty").hide();
  })

 $("#remove").click(function(){
  $("#empty, #item1, #checkout").toggle();
})

var counts = 0;
	$(".btn").click(function() {
		counts += +1;
		if(counts<10){
			counts1 = "0" + counts
		}else{
			counts1 = counts;
		}
		$(".counts").text(counts1);
	});
	
	$(".reset").click(function(e){
		counts = 0;
		counts1 = "0"+counts;
		$(".counts").text(counts1);
	});

});

// carousel --------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}