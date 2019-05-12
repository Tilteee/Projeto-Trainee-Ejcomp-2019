$(document).ready(function(){
	$('.sidenav').sidenav();

  })

$(document).ready(function(){
    $('.parallax').parallax();
  });

$(document).ready(function(){
    $('.parallax').parallax();
  });

$(document).ready(function(){
    $('.carousel').carousel();
  });

$(document).ready(function(){
    $('.slider').slider();
  });

$('.menu-toggle').click(function() {

	$('.sitenav').toggleClass('sitenav--open', 500);
	$(this).toggleClass('open');
})

$( document ).ready(function(){
	$(".dropdown-trigger").dropdown();
})

 // Floating Action Button
 const elemsBtns = document.querySelectorAll(".fixed-action-btn");
 const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
 });

 // Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
  coverTrigger: false
});
elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
  edge: "left"
});



