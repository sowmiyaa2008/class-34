class Ball{
    constructor(x,y,radius){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,40,options)
        this.radius=40
        World.add(world,this.body)

    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}