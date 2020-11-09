class Box1{
  
  constructor(x, y, width, height) {
  
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }
  
  display(){

    if(this.body.speed < 3){
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    } else {

      World.remove(world, this.body);
    }
  }
}