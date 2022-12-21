jQuery(document).ready(function() {

    jQuery('.owl-produtos').owlCarousel({
        loop: true,
        margin: 1,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    jQuery('.owl-banner-home').owlCarousel({
        loop: true,
        margin: 1,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        nav: false,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1080: {
                items: 1
            }
        }
    });

    jQuery('#menu-toggle-mob').on('click', function(){
       jQuery('#main-menu-mob').toggleClass('abre-menu');
    });

    jQuery('#menu-toggle-mob2').on('click', function(){
       jQuery('#main-menu-mob2').toggleClass('abre-menu');
    });

    $('#proExc').height(function(){
      let win = $(window).width();
      if (win > 992){
        let heig = $(this).height();
        $('.img-fit a img').addClass('fit');
        $('.img-fit').height(heig);
      }
    })

});
