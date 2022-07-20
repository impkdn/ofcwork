function openSidebar() {
    
    var displayToggle = document.getElementById("hide-div");
    var slideWidth = document.getElementById("icon-toggle");
    var headerContainer = document.getElementById("header-container");
    var activebtn = document.getElementById("contact");
    if (displayToggle.style.display === "none" && slideWidth.style.width === "0px" && headerContainer.style.width === "1850px") {
        slideWidth.style.width = "287px";
        headerContainer.style.width = "1563px";
        displayToggle.style.display = "inline-block";
        activebtn.classList.add("active-button");
    } else {
        slideWidth.style.width = "0px";
        displayToggle.style.display = "none";
        headerContainer.style.width = "1850px";
        activebtn.classList.remove("active-button");
    }
    
   
} 

// $(document).ready(function(){
//     $("#contact").click( function(){
//         $("#icon-toggle").css("width","287px");
//         $(".header-div").css("width","1563px");
//         $(".hide-content").show();
        
//     })
// }) ;