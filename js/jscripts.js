
$(function() {
	$('a[href*="#"]').on('click',  function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: //getting scrollbar position of the href 
  $($(this).attr('href')).offset().top} //Getting the top property of offset() of href that a points to (one you click) 
                                      , "slow")});
}); 
$(function() {
//Scroll Button JQuery https://gist.github.com/CodeMyUI/64383984c2b17f2eba2e71ee28a9cd7c
var projecttile = $(".project-tile"),
    currdeg  = 0;
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var letter=String.fromCharCode(97+slideIndex);

$(".next").on("click", { d: "next" }, rotate);
$(".prev").on("click", { d: "prev" }, rotate);
for (var i=0;  i < dots.length; i++) 
{
	dots[i].onclick = currentSlide(i);
}
$(".a").hover(function() {
  $(".a >"+ ".slideshowimg").css({"opacity": ".3"});
  $(".a >"+".middle").css({"opacity": ".9"});
},
function () {
  $(".a >"+ ".slideshowimg").css({"opacity": "1"});
  $(".a >"+ ".middle").css({"opacity": "0"});
 });

//Have to update function after a change in slideindex
$('.prev, .next, .dot').on('click', function() {
$("."+letter).hover(function() {
  $("."+letter +">"+ ".slideshowimg").css({"opacity": ".3"});
  $("."+letter +">"+".middle").css({"opacity": ".9"});
},
function () {
  $("."+letter +">"+ ".slideshowimg").css({"opacity": "1"});
  $("."+letter +">"+ ".middle").css({"opacity": "0"});
 });
  
});

//Setting up first active dot
dots[slideIndex].className += " active";


function rotate(e){
  if(e.data.d=="next"){
    currdeg = currdeg - 60;
    slideIndex+=1;
    if (slideIndex>slides.length-1)
    {
    slideIndex=0;    
    }
  }
  if(e.data.d=="prev"){
    currdeg = currdeg + 60;
    slideIndex-=1;
    if (slideIndex<0)
    {
    slideIndex=slides.length-1;    
    }
  }
  projecttile.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //unbinding the hover from the previous slideindex 
  $("."+letter).off('mouseenter mouseleave');  
  letter=String.fromCharCode(97+slideIndex);
  dots[slideIndex].className += " active";
}
//Rotating 3d carousel https://codepen.io/nopr/full/rfBJx/
//Combined with https://www.w3schools.com/howto/howto_js_slideshow.asp
function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  currdeg+=60*-(n-slideIndex)
  var i;
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  projecttile.css({
     "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
  
  slideIndex=n;
  $("."+letter).off('mouseenter mouseleave');  
  letter=String.fromCharCode(97+slideIndex);
  dots[slideIndex].className += " active";
}
}); 
