events.on('ready', function () {
  setTimeout(function () {
    window.localStorage.clear();
    console.log('tentativa 2');
    scorm.set("cmi.suspend_data", "");
    scorm.set("cmi.location", "");
    scorm.set("cmi.core.lesson_location", "");
  }, 1000 * 1);
});
//# sourceMappingURL=script.js.map
