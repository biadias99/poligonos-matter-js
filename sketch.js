// motor de física 2d
// Matter.World, Matter.Engine e Matter.Bodies

// Módulo
var Engine = Matter.Engine; // motor de física
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var motor;
var world;
var ball;
var ground;
var polygonDaMarina;
// Engine - motor de física
// World - criar o mundo físico e adicionar objetos a ele
// Bodies - objetos físicos que habitam o mundo

function setup() {
  createCanvas(400, 600);  
  motor = Engine.create();
  world = motor.world;

  var ballOptions = {
    restitution: 1,
    frictionAir: 0.01,
  }

  var groundOptions = {
    isStatic: true,
  }

  var polygonOptions = {
    frictionAir: 0.01,
  }
  
  // 1 passo - CRIAR A BOLA
  ball = Bodies.circle(100, 10, 80, ballOptions);
  // polygon(x, y, tamanho, quantidade de arestas)
  polygonDaMarina = Bodies.polygon(100, 100, 80, 8, polygonOptions);
  
  // 2 passo - COLOCAR NO mundo
  World.add(world, ball);
  World.add(world, polygonDaMarina);

  /* 
  Ainda não podemos ver a bola porque os corpos do Motor
  de Física não são exibidos por conta própria, eles
  requerem que objetos ou imagens JavaScript sejam
  colocados nele.
  */
  ellipseMode(RADIUS);
  rectMode(CENTER);
}


function draw() 
{
  fill('plum')
  background(51);
  Engine.update(motor);
  // 3 passo - DESENHAR
  //  ellipse(ball.position.x, ball.position.y, 80);
  polygon(polygonDaMarina.position.x, polygonDaMarina.position.y, 80, 8);
}

// Função de polígono personalizada
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

