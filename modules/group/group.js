var canvas = new fabric.Canvas('group',{
  backgroundColor: 'rgba(100,100,200,.5)',
  selectionColor: 'blue',
  selectionLineWidth: 2
});
canvas.setHeight(appConst.height);
canvas.setWidth(appConst.width);

var circle = new fabric.Circle({
  radius: 100,
  fill: '#e1e1e1',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center'
});

var text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
});

var group = new fabric.Group([ circle, text ], {
  left: 50,
  top: 100,
  angle: 0
});

var circle1 = new fabric.Circle({
  radius: 50,
  fill: 'red',
  left: 0
});
var circle2 = new fabric.Circle({
  radius: 50,
  fill: 'green',
  left: 100
});
var circle3 = new fabric.Circle({
  radius: 50,
  fill: 'blue',
  left: 200
});

var group1 = new fabric.Group([ circle1, circle2, circle3 ], {
  left: 200,
  top: 100
});

canvas.add(group1);

canvas.add(group);

