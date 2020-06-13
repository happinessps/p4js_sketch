//object name;
let virus, num, objs = [];
let virus2, num2, objs2 = [];

function preload() {
  virus = loadModel('obj/virus1.obj', true);
  //virus2 = loadModel('obj/virus2.obj', true);
  kitten = loadImage('images/2.jpg');
  kitten2 = loadImage('images/1.jpg');

}

function setup() {
  createCanvas(1400, 800, WEBGL);

  count = 0;
  num = 30;
  num2 = 20;
  normalMaterial(); 

  for(let i=0; i<num; i++){
    objs[i] = new OBJ();
  }
}

function draw() {
  background(200);

  let fov = PI/3;
  let camX = map(mouseX, 0, width, -200,200);
  camera(camX, 0, (height/2)/tan(PI/6), 0,0,0,0,1,0);
  objs[1].display();
  if(frameCount%340 == 2){
    objs.push(new OBJ);
  }
  // else if(frameCount%404 == 4){
  //  // objs2.push(new OBJ2);
  // }
 
  for(let i = 0; i<num; i++){
    objs[i].display();
    //objs[i].changeDir();
  }
  // for(let i = 0; i<objs2.length; i++){
    
  //   //objs[i].changeDir();
  // }
}

class OBJ{
  constructor(){
    this.x = random(0-width/2,width+width/2);
    this.y = random(0-height/2,height+height/2);
    this.objScale = random(0.2,5);
    this.xRot = random(0.003,0.01);
    this.yRot = random(0.002,0.01);
    this.zRot = random(0.001,0.01);
    this.timer = 3000;
  }
  display(){
    push();
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    rotateZ(frameCount * this.zRot);
    translate(this.x, this.y);
    scale(this.objScale);
    texture(kitten);
    model(virus);
    pop();
  }
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.004);
      this.yRot = random(0.004);
      this.timer+=random(500,1000);
    }
  }
}

// class OBJ2{
//   constructor(){
//     this.x = random(0-width/2,width+width/2);
//     this.y = random(0-height/2,height+height/2);
//     this.objScale = random(0.2,5);
//     this.xRot = random(0.003,0.01);
//     this.yRot = random(0.002,0.01);
//     this.zRot = random(0.001,0.01);
//     this.timer = 3000;
//   }
//   display(){
//     push();
//     rotateX(frameCount * this.xRot);
//     rotateY(frameCount * this.yRot);
//     rotateZ(frameCount * this.zRot);
//     translate(this.x, this.y);
//     scale(this.objScale);
//     texture(kitten2);
//     model(virus2);
//     pop();
//   }
}