var canvas = new fabric.Canvas('serialization');
canvas.setHeight(appConst.height);
canvas.setWidth(appConst.width+200);

var circle = new fabric.Circle({
  radius: 50,
  fill: 'red',
  left: 0
});

var text = new fabric.Text('Hello text', { top: 100 });

var group = new fabric.Group([ circle, text ]);

canvas.add(group);

fabric.Image.fromURL('../../img/Dialog-stop-hand.svg.png', function(oImg) {
  canvas.add(oImg);
});

// console.log(JSON.stringify(canvas));
// console.log(canvas.toSVG());