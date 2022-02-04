$(document).ready(function(){
    $("#preloader").fadeOut(500);
    document.getElementById('preloader').style.display = "none"
     $(window).scroll(function(event){
        let val = $(window).scrollTop()
        if (val>600) {
            $('#navmain').addClass('bg-gradient-to-b from-slate-900')
          
        }
        else{
            $('#navmain').removeClass('bg-gradient-to-b from-slate-900')
        }
     })
    $('#navopener').click(function(){
     $('#navul').slideToggle()
    })
    var brandcarou = $('.brandcarousel')
    brandcarou.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:1
            },
            800:{
                items: 4
            },
            1200:{
                items: 4
            }
        }
    });
    $('.nextowl').click(function() {
        brandcarou.trigger('next.owl.carousel',[300]);
    })
    // Go to the previous item
    $('.prevowl').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        brandcarou.trigger('prev.owl.carousel', [300]);
    })
})