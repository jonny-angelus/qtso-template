(function ($) {
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 140) {
      $('#nav').addClass('fixed-header');
    }
    else {
      $('#nav').removeClass('fixed-header');
    }
  });
  
  $(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
  });  
    
  
  /*
  ** .nav_menu-button click
  */
  $('.nav_menu-button').click(function() {
    if ($(this).hasClass('w--open')){
      $('nav.nav-menu').detach().appendTo('div.container.nav__container.w-clearfix');
      $('nav.nav-menu').css({'transform': 'none', 'transition': 'none'}).removeClass('w--nav-menu-open');
      $('.w-nav-overlay').css({'display':'none'});
      closeAllDrop();
      $(this).removeClass('w--open');
    } else {
      $('nav.nav-menu').detach().appendTo('.w-nav-overlay');
      $('nav.nav-menu').css({'transform': 'translateY(0px) translateX(0px)', 'transition': 'transform 400ms'}).addClass('w--nav-menu-open');
      $('.w-nav-overlay').css({'height':$(document).innerHeight()}).slideDown(100);
      $(this).addClass('w--open');
    }
  });
  
  
  /*
  ** add external link icon
  */
  var comp = location.host;
  $('a').each(function () {
    //Get the link
    var link = undefined === $(this).attr('href') ? '' : $(this).attr('href');
    if (link != '' && link.indexOf(comp) <= -1 && link.length > 0) {
      if ($(this).text().trim().length == 0 || link.indexOf('localhost') > -1 || link.indexOf('qtso') > -1 || link.indexOf('iqies') > -1 || link.indexOf('?page=') > -1 || link.indexOf('?keys=') > -1 || link.indexOf('@') > -1) {
        return;
      }
      if (link.charAt(0) != '/' && link.charAt(0) != '#') {
         $(this).addClass('external');
      }
    }
  });
  
  /*
  ** main nav functions
  */
  function checkSize(){
    if ($(document).innerWidth() >= 991){
      $('nav.nav-menu').css({'transform': 'none', 'transition': 'none'});
      var timeout;
      $('.sitenav__navitem').hover(
        function(el) {
          timeout = setTimeout(function(){
            showDrop(el.currentTarget);
          }, 500);
        },
        function(el){
          clearTimeout(timeout);
          hideDrop(el.currentTarget);
        }
      );
    } else {
      $('.sitenav__navitem').unbind('mouseenter mouseleave');
      $('.sitenav__navitem').click( 
        function(){
          if ($(this).children('nav').hasClass('w--open')){
            hideDrop(this);
            console.log('close');
          } else {
            closeAllDrop();
            showDrop(this);
            console.log('open');
          }
        }
      )
    }
  }   


  
  function hideDrop(dropMenuParent) {
    $(dropMenuParent).find('nav.nav__dropdown').removeClass('w--open');
    $(dropMenuParent).find('nav__dropdown--item').removeClass('w--open');
  }
  
  function closeAllDrop() {
    $('#main-nav').find('nav.nav__dropdown').removeClass('w--open');
  }
  
  function showDrop(dropMenuParent) {
    $(dropMenuParent).find('nav.nav__dropdown').addClass('w--open');
    $(dropMenuParent).find('nav__dropdown--item').addClass('w--open');
  }
})(jQuery);