// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('shape1',{
  backgroundColor: 'rgba(100,100,200,.5)',
  selectionColor: 'blue',
  selectionLineWidth: 2
});
canvas.setHeight(appConst.height);
canvas.setWidth(appConst.width);

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 50,
  height: 50,
  strokeWidth: 2,
  stroke: 'rgba(0,0,0,1)',
  angle: 45,
  flipY: false,
  opacity: 0.7
});

// "add" rectangle onto canvas
canvas.add(rect);


var circle = new fabric.Circle({
  radius: 20, fill: 'green', left: 100, top: 100
});
var triangle = new fabric.Triangle({
  width: 20, height: 30, fill: 'blue', left: 50, top: 50
});

canvas.add(circle, triangle);


canvas.selection = false; // disable group selection

// to update the state at run time
  // rect.set({ left: 20, top: 50 });
  // canvas.renderAll();


fabric.Image.fromURL('../../img/Dialog-stop-hand.svg.png', function(oImg) {
  canvas.add(oImg);
});


console.log(canvas.toDataURL());

// var button = document.getElementById("download");
// button.addEventListener("click",function(e){
//   var dataUrl = canvas.toDataURL();
//   consoler.log(canvas.toDataURL())
//   // $(this).attr('href', dataUrl);
// },false);


var data = canvas.toDataURL();

var img = document.createElement('img');
img.src = data;

var a = document.createElement('a');
a.setAttribute("download", "YourFileName.jpeg");
a.setAttribute("href", data);
a.appendChild(img);

var w = open();
w.document.title = 'Export Image';
w.document.body.innerHTML = 'Left-click on the image to save it.';
w.document.body.appendChild(a);