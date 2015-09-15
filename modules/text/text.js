// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('text',{
  backgroundColor: 'rgba(100,100,200,.5)',
  selectionColor: 'blue',
  selectionLineWidth: 2
});

canvas.setHeight(appConst.height+400);
canvas.setWidth(appConst.width+600);

var text = new fabric.Text('hello world');
canvas.add(text);


var text1 = new fabric.Text('l-300,t-0 ', { left: 300, top: 0 });
canvas.add(text1);

var comicSansText = new fabric.Text("I'm in action manregular", {
  fontFamily: 'action_manregular',
  left: 0,
  top: 100,
  fontSize: 60,
  fontWeight: 'normal'
});

var underlineText = new fabric.Text("I'm an underlined text", {
  left: 0,
  top: 200,
  textDecoration: 'underline'
});
var strokeThroughText = new fabric.Text("I'm a stroke-through text", {
  left: 0,
  top: 250,
  textDecoration: 'line-through'
});
var overlineText = new fabric.Text("I'm an overline text", {
  left: 0,
  top: 300,
  textDecoration: 'overline'
});

var shadowText1 = new fabric.Text("I'm a text with shadow", {
  left: 0,
  top: 350,
  shadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
});
var shadowText2 = new fabric.Text("And another shadow", {
  left: 0,
  top: 400,
  shadow: 'rgba(0,0,0,0.2) 0 0 5px'
});
var shadowText3 = new fabric.Text("Lorem ipsum dolor sit", {
  left: 0,
  top: 450,
  shadow: 'green -5px -5px 3px'
});

var italicText = new fabric.Text("A very fancy italic text", {
  left: 0,
  top: 500,
  fontStyle: 'italic'
});

var textWithStroke = new fabric.Text("Text with a stroke", {
  left: 500,
  top: 200,
  stroke: '#ff1318',
  strokeWidth: 1
});

var text = 'this is\na multiline\ntext\naligned right!';
var alignedRightText = new fabric.Text(text, {
  left: 500,
  top: 250,
  textAlign: 'right'
});

var lineHeight3 = new fabric.Text('Lorem ipsum ...Lorem ipsum ...', {
  left: 500,
  top: 500,
  lineHeight: 3,
  textBackgroundColor: 'rgb(0,200,0)'
});

canvas.add(
  comicSansText,
  underlineText,
  strokeThroughText,
  overlineText,
  shadowText1,
  shadowText2,
  shadowText3,
  italicText,
  textWithStroke,
  alignedRightText,
  lineHeight3
);