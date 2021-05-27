class particle{
    constructor (x,y,radius){
  var option={
      restitution : 0.3,
      density : 4,
      friction : 0.03
  }

this.body=Bodies.circle (x,y,radius,option);
this.color= color(random(0,225)),(random(0,255)),(random(0,255));
World.add(world,this.body)
this.radius=radius;
}
    display(){
push();
translate(this.body.position.x, this.body.position.y);
rotate(this.angle);
ellipseMode(CENTER);
ellipse(0,0, this.radius,this.radius);
pop();
    }
}