// jQuery Carousel

$(function() {
    var carouselList = $("#carousel ul");

    function changeSlidesForward() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});        
    };

    setInterval(changeSlidesForward, 5000);

    function changeSlidesBackward() {
        carouselList.animate({'marginLeft': 0}, 500, moveLastSlide);
    };   
      
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
    };           
   
    //setInterval(changeSlidesBackward, 5000); 

    $("#btn-right").click(function() {
        changeSlidesForward();
    });
    
    $("#btn-left").click(function() {
        changeSlidesBackward();
    });
      
});



