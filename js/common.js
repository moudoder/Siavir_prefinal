$(document).ready(function () {
   
    $('.direction-block-video__inner').on('mouseenter', function() {
       let video = $(this)[0];
       video.play();

       let parent_block = $(this).parent('.direction-block-video');

       $(parent_block).addClass('video-start');
       $(this).on('mouseleave', function() {
          video.load();
          $(parent_block).removeClass('video-start');
       })
    })


    $(window).on( "scroll", function() {
        let scroll_top = $(window).scrollTop();
        let html_zoom = $('html').css('zoom');
        scroll_top = scroll_top * html_zoom;

        if (scroll_top > 1500) {
            $('.footer').addClass('visible');
        }
        else{
            $('.footer').removeClass('visible');
        }
    });

    if ($(window).width() < 767) {
       $('.direction-row').slick({
         dots: false,
         infinite: false,
         slidesToShow: 1,
         variableWidth: true,
       });
       $('.direction-block-video').on('click', function() {
           event.preventDefault();
       })
    }


    $('.politic-modal').css("display", "flex");
    $('.politic-modal').hide();


    $('.open-politic').on('click', function() {
      $('.politic-modal').fadeIn()
      return false;
    })

    $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $( ".politic-modal .inner" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.politic-modal').fadeOut();
      }
    });


    $('.politic-modal__close').on('click', function() {
      $('.politic-modal').fadeOut();
      return false;
    })

    $('.first-screen__burger').on('click', function() {
      $('.modal-menu').addClass('visible');
      return false;
    })
    $('.modal-menu-close').on('click', function() {
      $('.modal-menu').removeClass('visible');
      return false;
    })
})