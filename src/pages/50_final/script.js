events.on('ready', function () {
  
  // scorm.saveObject("question", 0);
  // scorm.saveObject("quizStatus", {"itens":[]});
  // scorm.saveObject("quizes", '');
  // scorm.saveObject("avatar_selecionado", '');

  scorm.setCompleted();
  $('.triangulo').on('click', function() {
    scorm.set("cmi.suspend_data", "{}");
    navigate.goto('01_capa');
  })
})