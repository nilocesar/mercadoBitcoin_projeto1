events.on('ready', function () {
  $('.close-page').on('click', function(){

    $f( $('iframe')[0] ).api("pause");///pause vimeo - froogaloop
    
    if( $(this).attr('materialComplete') ){
      var _mat = parseInt($(this).attr('materialComplete')) + 1;
      scorm.saveObject("comeia2", _mat);
    }
   
    navigate.goto( $(this).attr('page') );
  });
});