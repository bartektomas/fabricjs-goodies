// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('text',{
  backgroundColor: 'rgba(100,100,200,.5)',
  selectionColor: 'blue',
  selectionLineWidth: 2
});

canvas.setHeight(appConst.height);
canvas.setWidth(appConst.width);

var myText = 'hello world';


var text = new fabric.Text(myText);
canvas.add(text);

$('.inputGroups').append('<input type="text" placeholder="'+myText+'"/>');

$(document).on('keyup','.inputGroups input',function(){
  text.set({ text: $(this).val() }); //Change the text
  canvas.renderAll(); //Update the canvas
});