var lostItem = document.getElementById("LostItem");
var foundItem = document.getElementById("FoundItem");


$("#LostItem").click(function(){
	window.location="file:///Users/Kedar/Documents/WebDev/UdemyCourse/LostFound/lost.html";
});

$("#FoundItem").click(function(){
	window.location="file:///Users/Kedar/Documents/WebDev/UdemyCourse/LostFound/found.html";
});

$("#LogInButton").click(function(){
	// window.location="file:///Users/Kedar/Documents/WebDev/UdemyCourse/LostFound/sample.html";

	$(".container").animate({
		width:50;
	});

});

$("#SignUpButton").click(function(){
});

$(document).ready(function() {
      $("#animate").animate({left: "+=512"}, 2000); 
});

