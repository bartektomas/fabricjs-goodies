var canvas = new fabric.Canvas('deserialization');
canvas.setHeight(appConst.height);
canvas.setWidth(appConst.width+200);

canvas.loadFromJSON(appConst.svgObject);