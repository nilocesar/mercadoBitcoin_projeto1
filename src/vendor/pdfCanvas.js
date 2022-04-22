events.on('ready', function () {

  var url = `../../assets/pdf/${$("canvas").attr('pdfPath')}`;
  var pdfjsLib = window['pdfjs-dist/build/pdf'];
  
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  var loadingTask = pdfjsLib.getDocument(url);

  loadingTask.promise.then(function(pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function(page) {
      console.log('Page loaded');

      var scale = 1;
      var viewport = page.getViewport({scale: scale});

      // Prepare canvas using PDF page dimensions
      var canvas = document.getElementById('the-canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      context.globalAlpha = 0;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
      renderTask.promise.then(function () {
        console.log('Page rendered: ' + url);
        scrollTopAnimated();
      });
    });
  }, function (reason) {
    // PDF loading error
    console.error(reason);
  });


  function scrollTopAnimated() {
    
    var body = $(".embed-container");
    body.stop().animate({scrollTop:'1250em'}, 1000, 'swing', function() { 
      body.stop().animate({scrollTop:0});
    });

    $('#loader').css('display','none');
  }

});