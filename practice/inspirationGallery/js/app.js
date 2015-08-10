// Creating an overlay with the large image = lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

$overlay.append($image); // Adds image to the overlay

$("body").append($overlay)

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href"); 
	$image.attr("src", imageLocation); // Updates overlay with an image linked to the link;
	$overlay.show(); // Shows overlay;
})

$overlay.click(function(){
	$overlay.hide();
})
