$(document).ready(function() {

  var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
  
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        nav.find('a[id="'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });
  
  $('nav').find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('id');
    
    $('html, body').animate({
      scrollTop: $('section#'+id).offset().top - nav_height
    }, 600);
    
    return false;
  });

});