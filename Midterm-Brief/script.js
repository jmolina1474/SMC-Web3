// Javascript page
$(document).ready(function(){

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });


    $('#subbed').click(function(){
        $('#myModal').addClass('Hide');
    });

    // $(window).on('load', function() {
    //     $('#myModal').modal('show');
    // });

    $("#subbed").click(function(){
        alert("You are now subscribed, Thank you.");
    })

});