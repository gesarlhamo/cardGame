
var points = 0;
var score = $("h2");
var bothPaths = [];
var firstCard = null;
var secondCard = null;

var flipped = $(".flipped");

$(".game li").click(function () {


  /* Toggle the flip class */
  $(this).toggleClass("flipped");

  
  url = ($(this).children().attr('src'));
  bothPaths.push(url);
  
 
  if (bothPaths.length === 2){
     compare();
     bothPaths = [];
     var secondCard = this;

     setTimeout(function () {
      
        console.log(secondCard);
        $(firstCard).addClass("flipped");
        $(secondCard).addClass("flipped");       
      
        console.log("Both Paths is : " + bothPaths);
    }, 3000);
       
  } else if (bothPaths.length === 1){
    firstCard = this;
  }


  



  return false;
 
});


 
  // //if(flipped.length === 2){
  // 	var firstCard = flipped.first();
  // 	var scondCard = flipped.last();
    

  // 	if(firstCard.attr('src') === scondCard.attr('src')){
    
  // 		points++;
  // 		score.text("you've found " + points + " matches.")
  //     alert("clicked");
  // 	} else {

  //     alert("they dont match");
  // //}
  
  
  
  



function compare(){
  console.log(bothPaths)
  if(bothPaths[0] === bothPaths[1]){
    points++;
    score.text("you've found " + points + " matches.");


    $(firstCard).removeClass("flipped");
    $(secondCard).removeClass("flipped"); 
  }
}


