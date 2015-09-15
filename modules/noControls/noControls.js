var canvas = new fabric.Canvas('noControls');
  canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 0, left: 0 }));
  canvas.item(0).hasControls = false;
  canvas.setActiveObject(canvas.item(0));
  canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 0, left: 100 }));
  canvas.item(0).hasControls = false;
  canvas.setActiveObject(canvas.item(0));

for (var i = 0; i < canvas.getObjects().length; i++) {
  if(canvas.item(i).type=='circle') {
    canvas.item(i).selectable = false;
    console.log(i)
  }
};