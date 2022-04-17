events.on('ready', function () {
  $('.btn-feed1').on('click', function () {
    navigate.goto('16_final01');
  });
  $('.btn-feed2').on('click', function () {
    scorm.saveObject("question", 0);
    scorm.saveObject("quizStatus", {
      "itens": []
    });
    scorm.saveObject("quizes", '');
    navigate.goto('04_tabuleiro');
  });
  $('.btn-feed3').on('click', function () {
    navigate.goto('17_final02');
  });

  if (scorm.loadObject("quizStatus")) {
    var quizStatus = scorm.loadObject("quizStatus");
    var indicadorTotal = 0;
    quizStatus.itens.map(function (item) {
      if (item == 1) indicadorTotal += 1;
    });
    $('.score').html(indicadorTotal);
  }

  var cadastroTela = bridge.cadastroTela();

  var _porcAtingida = cadastroTela.length / 10 * 8;

  if (indicadorTotal >= _porcAtingida) {
    $('.feedback').html(`
         Parabéns! Você acertou ${_porcAtingida} desafios ou mais, superando os outros competidores. Isso significa que você também está por dentro das informações essenciais para atuar com a proteção de dados pessoais em nosso negócio.
      `);
    $('.btn-feed1').removeClass('hide');
    scorm.set('cmi.core.score.raw', indicadorTotal * 10);
    scorm.setCompleted();
    controteAvatar(1);
  } else {
    if (scorm.loadObject('tentativa') == 1) {
      $('.feedback').html(`
            Você está no caminho certo, <b>mas atingiu uma pontuação menor que ${_porcAtingida} pontos.</b> Essa pontuação não garante que você está por dentro do mínimo necessário para atuar com proteção de dados em nosso negócio. <b>Mas não se preocupe! Você tem mais uma chance! Selecione o botão abaixo</b> e tente mais uma vez.
         `);
      $('.btn-feed2').removeClass('hide');
      controteAvatar(2);
    } else {
      $('.feedback').html('Foi por pouco! Mesmo tentando mais uma vez, você ainda não atingiu a pontuação necessária que garante que você está por dentro do mínimo necessário para atuar com proteção de dados em nosso negócio. <b>Recomendamos que acesse o conteúdo novamente na íntegra, estude mais e, quando estiver mais preparado, volte para jogar novamente e conquistar seu certificado LGPD.</b>');
      $('.btn-feed3').removeClass('hide');
      controteAvatar(3);
    }
  }

  function controteAvatar(indice) {
    $('.avatar').addClass('hide');
    var avatarCurrent = scorm.loadObject('avatar_selecionado');

    if (indice == 1) {
      //parabens
      // Na parabens o Avatar escolhido sempre ficará no podio 1
      if (avatarCurrent == 'avatar01') {
        $('.controlPodio1 .avatar1').removeClass('hide');
        $('.controlPodio2 .avatar3').removeClass('hide');
        $('.controlPodio3 .avatar2').removeClass('hide');
      } else if (avatarCurrent == 'avatar02') {
        $('.controlPodio1 .avatar2').removeClass('hide');
        $('.controlPodio2 .avatar3').removeClass('hide');
        $('.controlPodio3 .avatar1').removeClass('hide');
      } else if (avatarCurrent == 'avatar03') {
        $('.controlPodio1 .avatar3').removeClass('hide');
        $('.controlPodio2 .avatar1').removeClass('hide');
        $('.controlPodio3 .avatar2').removeClass('hide');
      }
    } else if (indice == 2) {
      //tentativa 1
      // Na tentativa 1 do erro o Avatar escolhido sempre ficará no podio 2
      if (avatarCurrent == 'avatar01') {
        $('.controlPodio1 .avatar3').removeClass('hide');
        $('.controlPodio2 .avatar1').removeClass('hide');
        $('.controlPodio3 .avatar2').removeClass('hide');
      } else if (avatarCurrent == 'avatar02') {
        $('.controlPodio1 .avatar3').removeClass('hide');
        $('.controlPodio2 .avatar2').removeClass('hide');
        $('.controlPodio3 .avatar1').removeClass('hide');
      } else if (avatarCurrent == 'avatar03') {
        $('.controlPodio1 .avatar2').removeClass('hide');
        $('.controlPodio2 .avatar3').removeClass('hide');
        $('.controlPodio3 .avatar1').removeClass('hide');
      }
    } else if (indice == 3) {
      //tentativa 2
      // Na tentativa 2 do erro o Avatar escolhido sempre ficará no podio 3
      if (avatarCurrent == 'avatar01') {
        $('.controlPodio1 .avatar3').removeClass('hide');
        $('.controlPodio2 .avatar2').removeClass('hide');
        $('.controlPodio3 .avatar1').removeClass('hide');
      } else if (avatarCurrent == 'avatar02') {
        $('.controlPodio1 .avatar3').removeClass('hide');
        $('.controlPodio2 .avatar1').removeClass('hide');
        $('.controlPodio3 .avatar2').removeClass('hide');
      } else if (avatarCurrent == 'avatar03') {
        $('.controlPodio1 .avatar2').removeClass('hide');
        $('.controlPodio2 .avatar1').removeClass('hide');
        $('.controlPodio3 .avatar3').removeClass('hide');
      }
    }
  }
});
//# sourceMappingURL=script.js.map
