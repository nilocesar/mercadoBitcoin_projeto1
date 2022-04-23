events.on('ready', function () {
  $('.close-page').on('click', function(){
    
    if( $(this).attr('materialComplete') ){
      var _mat = parseInt($(this).attr('materialComplete')) + 1;
      scorm.saveObject("comeia2", _mat);
    }
   
    navigate.goto( $(this).attr('page') );
  });
});