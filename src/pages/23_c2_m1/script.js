events.on('ready', function () {
  
  $('.btnM').on('click', function(){
    navigate.goto( '22_c2' );
  });

  var _comeia = $('.materia').attr('comeia');
  var _materia = $('.materia').attr('material');
  
  $('.hit').on('click', function(){
    scorm.saveObject("c"+_comeia+"m"+_materia, $(this).attr('item'));
    navigate.goto( $(this).attr('page') );
  });

  var pageAll = $('.hit').length;
  var pageCurrent = 1;

  if( scorm.loadObject("c"+_comeia+"m"+_materia) ){
    pageCurrent = parseInt(scorm.loadObject("c"+_comeia+"m"+_materia)) + 1;
  }

  for(var i = 1; i <= pageAll ; i++ ){
    if( pageCurrent < i ){
      $('.item'+ i ).addClass('inativo');
    }
    else if( pageCurrent == i ){
      $('.item'+ i ).addClass('atual');
    }
    else{
      $('.item'+ i ).addClass('visitado');
    }
  }

})