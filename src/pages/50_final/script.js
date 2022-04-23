events.on('ready', function () {
  
  scorm.setCompleted();
  
  $('.triangulo').on('click', function() {
    scorm.set("cmi.suspend_data", "{}");
    navigate.goto('02_city');
  })
})