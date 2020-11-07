//Write your Javascript here
var pics = [
			"images/cat-1.jpg",
			"images/cat-2.jpg",
			"images/cat-3.jpg",
			"images/cat-4.jpg",
			"images/cat-5.jpg",
			"images/cat-6.jpg"
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if (counter === 6) {
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter +1;
});