// function openSidebar() {
//     document.getElementById("icon-toggle").style.width = "287px";
//     document.getElementById("header-container").style.width = "1550px";
//     // console.log("Hiii");
//     // document.getElementById("icon-toggle").style.display = "none";
// }

$(document).ready(function(){
    $("#contact").click( function(){
        $("#icon-toggle").css("width","287px");
        $(".header-div").css("width","1563px");
        $(".hide-content").show();
        
    })
}) ;