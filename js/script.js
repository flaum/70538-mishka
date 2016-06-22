var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var map = document.querySelector(".contacts__map");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
	}
});

map.classList.remove("contacts__map--nojs");
