class ball{
    constructor(x,y,r){
    var options_ball = {
        isStatic:true,
        restitution:2,
        friction:0.1,
        density:1
    }
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.body = Bodies.circle(x,y,r,options_ball);
    World.add(world,this.body);
}

    display(){
     var pos = this.body.position;
     fill("yellow");
     circle(pos.x,pos.y,this.r);
    }
}