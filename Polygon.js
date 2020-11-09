class Polygon{

  constructor(x, y, r) {
  
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.5
    }
  
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, 20, options);
    this.image = loadImage("hexagon.png");
    World.add(world, this.body);
  }
  
  display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}