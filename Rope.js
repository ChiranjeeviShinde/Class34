class rope{
    constructor(bodyA,pointB){
     var options_rope = {
       isStatic: false,
       length:1,
       stiffness: 0.4,
       bodyA: bodyA,
       pointB:pointB
      }
     
   this.rope = Constraint.create(options_rope);
   this.pointB = pointB;
   World.add(world,this.rope);
}

    display(){
     var pointA = this.rope.bodyA.position;
     var pointB = this.pointB;

     line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}