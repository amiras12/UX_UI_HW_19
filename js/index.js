$(document).ready(function() {
  console.log( "ready!" );
  {
      alert("Hello! I am an alert box!");
    }
  $('#button2').on("click", function(){
          $('.cssChange').css("background-color","white");
          console.log("button #2 was pressed!")
        });
});