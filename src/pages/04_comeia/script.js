events.on('ready', function () {
  
  // scorm.saveObject("question", 0);
  // scorm.saveObject("quizStatus", {"itens":[]});
  // scorm.saveObject("quizes", '');
  // scorm.saveObject("avatar_selecionado", '');

  
  $('.hit').each(function(){
      var item = $(this).attr('item');
      var page = $(this).attr('page');
      $(this).find('path').attr('item', item );
      $(this).find('path').attr('page', page );
  })

  var pageAll = 6;
  var pageCurrent = 3;

  for(var i = 1; i <= pageAll ; i++ ){
    if( pageCurrent < i ){
      $('.comeiaItem'+ i ).addClass('inativo');
    }
    else if( pageCurrent == i ){
      $('.comeiaItem'+ i ).addClass('atual');
    }
    else{
      $('.comeiaItem'+ i ).addClass('visitado');
    }
  }
  

  $('.hit path').on('click', function(){
    var page = $(this).attr('page');
    navigate.goto(page);
  })

  $('.hit path').hover(function() {
    var item = $(this).attr('item');
    $('.comeiaItem'+ item).find('.seta').css('display', 'flex');

  }, function() {
    var item = $(this).attr('item');
    $('.comeiaItem'+ item).find('.seta').css('display', 'none');
  });

  $('body').on('mousemove', function() {
    var el = $(this)[0];
    var r = el.getBoundingClientRect();
    
    var y = Math.floor((event.clientX - (r.left + Math.floor(r.width)/2))/r.width*2*100)/100;
    var x = Math.floor((event.clientY - (r.top + Math.floor(r.height)/2))/r.height*2*100)/100;
    el.style.setProperty('--xAngle', -x*15+'deg');
    el.style.setProperty('--yAngle', y*15+'deg');
    el.style.setProperty('--a', '10deg');
  }).on('mouseleave', function() {
    var el = $(this)[0];
    el.style.setProperty('--xAngle', '0deg');
    el.style.setProperty('--yAngle', '0deg');
  });

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 33,
        "density": {
          "enable": true,
          "value_area": 1420.4657549380909
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.06313181133058181,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 11.83721462448409,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
})