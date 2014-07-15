
$(".game li").click(function () {

  /* Toggle the flip class */
  $(this).toggleClass("flipped");
  
  setTimeout(function () {
     console.log("This message will appear after 500 milliseconds");
  }, 2000);
  
  return false;
});


