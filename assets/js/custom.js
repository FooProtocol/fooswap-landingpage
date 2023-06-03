$(document).ready(function(){

//CLOSE TOP NAVIGATION
$("#closetopnav").click(function(){
    $("#topbar").addClass("display-none");
});

});
// CHANGE THE BUTTON ICON
    let day = true;
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;

    
    //
    if(day){
        $("#day-night").prop("src", "assets/svg/day.svg");
        day = false;
    }else{
        $("#day-night").prop("src", "assets/svg/night.svg");
        day = true;
    }
    
    // });

    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }