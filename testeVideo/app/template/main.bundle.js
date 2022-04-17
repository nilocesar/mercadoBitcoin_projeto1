(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    $(window).on("beforeunload", function () {
      scorm.quit();
    });
    $(window).on("unload", function () {
      scorm.quit();
    });
    $(window).on(VIEW_EVENT.READY, viewReady);

    function viewReady() {
      if (window.scorm.loadObject('iniciar') == true) {
        esconderCover();
      }

      $('#comecar').click(esconderCover);

      function esconderCover() {
        window.scorm.saveObject('iniciar', true);
        $('#cover').addClass('hide');
      }
    }

    bridge.cadastroTela = function () {
      var cadast = ['05_quiz', '06_quiz', '07_quiz', '08_quiz', '09_quiz', '10_quiz', '11_quiz', '12_quiz', '13_quiz', '14_quiz'];
      return cadast;
    };
  }, {}]
}, {}, [1]);
//# sourceMappingURL=main.bundle.js.map
