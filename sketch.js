function setup() {
  // put setup code here
  createCanvas(400,400);
  j=0;
}
 function draw() {
  // put drawing code here
  background(200);
  strokeWeight(2);
  stroke(153,76);
  point(200,100);
  line(0,0,50,180);
 fill(140,53,83);
  rect(150,20,20,100);

  strokeWeight(4);
  fill(2,87,183);
  ellipse(150,120,20,20);
  ellipse(200,120,20,20);

  strokeWeight(3);
  triangle(30,30,30,40,60,20);
  arc(70,50,40,40,radians(0),radians(270));
  strokeJoin(ROUND);
  strokeWeight(5);
  beginShape();
  vertex(300,50);
  vertex(350,190);
  vertex(250,100);
  endShape(CLOSE);

for (var i=0; i<=400; i++){
  x = i
  y = 300 + 20*Math.sin(x/5)
  point(x,y)
 }

 var y = 200+20*Math.sin(PI*j/20);
 var r= 50 + 10*Math.sin(PI*j/20);
 j += 1
 fill(240,192,35);
 ellipse(300,y,r,r);

 }
