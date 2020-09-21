class Bob {

    constructor(x,y,r){
       var options = {
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8,
        length:50
       }

        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options);

        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        
        push();
        ellipseMode(RADIUS);
        translate(position.x,position.y);
        rotate(angle);
        fill("blue");
        ellipse(0,0,this.r,this.r);

        pop();




    }
    


}