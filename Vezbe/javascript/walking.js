//https://codepen.io/LeeJames206/pen/EZNbaK
	$(document).ready(function(){
  var leftButton = $("#left"); 
  var rightButton = $("#right"); 
  var goButton = $("#go"); 
  var walking = false; 
  var stepNum = 1; 
  var stepTimeout; 
  var divWindow = $("div"); 
  var divPosition = 0; 
  var direction = 1; 
  var speed = 5; 
  var slider = document.getElementById("slider");  
  
  
 
  goButton.click(function(){
    walking = (!walking) ? true : false; 
    if(walking){
      goButton.html("Stop"); 
      step();  
    } 
    else{
      goButton.html("Walk"); 
      clearTimeout(stepTimeout); 
    }
  });
  
  leftButton.click(function(){
    divWindow.addClass("facing-left"); 
    direction = -1; 
  }); 
  
  rightButton.click(function(){
    divWindow.removeClass("facing-left"); 
    direction = 1; 
  }); 
  
  function step(){
    divWindow.css("background-position", (-75 * stepNum) + "px"); 
    speed = slider.value; 
    divPosition = divPosition + (direction * speed);
    divWindow.css("left", divPosition + "px"); 
    stepNum = (stepNum + 1) % 8; 
    stepTimeout = setTimeout(step, 750/speed); 
  }; 
}); 