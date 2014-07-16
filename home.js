
var points = 0;
var score = $("h2");

$(".game li").click(function () {

  /* Toggle the flip class */
  $(this).toggleClass("flipped");

  var flipped = $(".flipped");
  if(flipped.length === 2){
  	var firstCard = flipped.first();
  	var scondCard = flipped.last();

  	if(firstCard.url() === secondCard.url()){
  		points++;
  		score.text("you've found" + point + " matches.")
  	}
  
  setTimeout(function () {
     $(".flipped").removeClass("flipped");
  }, 1000);
}
  
  
});


