//object name;
let virus, num, objs = [];
let virus2, num2, objs2 = [];
let uploadImg = [], imgCount = 0;

function preload() {
  virus = loadModel('obj/virus1.obj', true);
  virus2 = loadModel('obj/virus2.obj', true);
  for(let i = 1; i<18; i++){
    uploadImg[i] = loadImage('images/'+i+'.jpg');
  }
  // kitten = loadImage('images/2.jpg');
  // kitten2 = loadImage('images/1.jpg');

}

function setup() {
  createCanvas(1400, 800, WEBGL);

  count = 0;
  num = 50;
  num2 = 25;
  normalMaterial(); 

  // for(let i=0; i<num; i++){
  //   objs[i] = new OBJ();
  // }
}

function draw() {
  background(200);

  let fov = PI/3;
  let camX = map(mouseX, 0, width, -width/2,width/2);
  camera(camX, 0, (height/2)/tan(PI/6), 0,0,0,0,1,0);
  
  if(frameCount%405 == 5){
    objs.push(new OBJ);
  }
  else if(frameCount%786 == 4){
    objs2.push(new OBJ2);
  }
 
  for(let i = 0; i<objs.length; i++){
    objs[i].display();
    //objs[i].changeDir();
  }
  for(let i = 0; i<objs2.length; i++){
    objs2[i].display();
  }
}

class OBJ{
  constructor(){
    this.x = random(0-width+width/2,width+width/2);
    this.y = random(0-height+height/2,height+height/2);
     this.z = random(0-height+height/2,height+height/2);
    this.objScale = random(0.2,4);
    this.xRot = random(0.002,0.009);
    this.yRot = random(0.005,0.02);
    this.zRot = random(0.001,0.009);
    this.timer = 3000;
    this.skin = uploadImg[round(random(1,17))];
  }
  display(){
    push();
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    rotateZ(frameCount * this.zRot);
    translate(this.x, this.y);
    scale(this.objScale);
    texture(this.skin);
    model(virus);
    pop();
  }
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.004);
      this.yRot = random(0.004);
      this.timer+=random(3000,10000);
    }
  }
}

class OBJ2{
  constructor(){
    this.x = random(0-width/2,width+width/2);
    this.y = random(0-height/2,height+height/2);
    this.objScale = random(0.5,4);
    this.xRot = random(0.004,0.02);
    this.yRot = random(0.001,0.009);
    this.zRot = random(0.001,0.009);
    this.timer = 3000;
    this.skin = uploadImg[round(random(1,17))];
  }
  display(){
    push();
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    rotateZ(frameCount * this.zRot);
    translate(this.x, this.y);
    scale(this.objScale);
    texture(this.skin);
    model(virus2);
    pop();
  }
}