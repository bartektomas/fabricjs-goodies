(function() {
  var canvas = this.__canvas = new fabric.Canvas('canvasBoundary');

  var rect = new fabric.Rect({
    left: 150,
    top: 200,
    originX: 'left',
    originY: 'top',
    width: 150,
    height: 120,
    angle: -10,
    fill: 'rgba(255,0,0,0.5)',
    transparentCorners: false
  });

  canvas.add(rect).setActiveObject(rect);

  function observeBoolean(property) {
    document.getElementById(property).onclick = function() {
      canvas.item(0)[property] = this.checked;
      canvas.renderAll();
    };
  }

  function observeNumeric(property) {
    document.getElementById(property).onchange = function() {
      canvas.item(0)[property] = this.value;
      canvas.renderAll();
    };
  }

  function observeOptionsList(property) {
    var list = document.querySelectorAll('#' + property + 
    ' [type="checkbox"]');
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].onchange = function() {
        canvas.item(0)[property](this.name, this.checked);
        canvas.renderAll();
      };
    };
  }

  observeBoolean('hasControls');
  observeBoolean('hasBorders');
  observeBoolean('hasRotatingPoint');
  observeBoolean('visible');
  observeBoolean('selectable');
  observeBoolean('evented');
  observeBoolean('transparentCorners');
  observeBoolean('centeredScaling');
  observeBoolean('centeredRotation');

  observeNumeric('padding');
  observeNumeric('cornerSize');
  observeNumeric('rotatingPointOffset');
  observeNumeric('borderColor');
  observeNumeric('cornerColor');

  observeOptionsList('setControlVisible');
})();



      (function(){
        var mainScriptEl = document.getElementById('main');
        if (!mainScriptEl) return;
        var preEl = document.createElement('pre');
        var codeEl = document.createElement('code');
        codeEl.innerHTML = mainScriptEl.innerHTML;
        codeEl.className = 'language-javascript';
        preEl.appendChild(codeEl);
        document.getElementById('bd-wrapper').appendChild(preEl);
      })();

(function() {
  fabric.util.addListener(fabric.window, 'load', function() {
    var canvas = this.__canvas || this.canvas,
        canvases = this.__canvases || this.canvases;

    canvas && canvas.calcOffset && canvas.calcOffset();

    if (canvases && canvases.length) {
      for (var i = 0, len = canvases.length; i < len; i++) {
        canvases[i].calcOffset();
      }
    }
  });
})();