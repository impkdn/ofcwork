// function openSidebar() {
//     document.getElementById("icon-toggle").style.width = "287px";
//     document.getElementById("header-container").style.width = "1550px";
//     // console.log("Hiii");
//     // document.getElementById("icon-toggle").style.display = "none";
// }

$(document).ready(function(){
    $("#contact").click( function(){
        $("#icon-toggle").css("width","287px");
        $(".hide-content").show(800);
        $("#header-container").css("width","1550px")
        
    })
}) ;