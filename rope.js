class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            stiffness:1.2,

        }
        this.pointB=pointB
       this.rope= Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        strokeWeight(4)
        stroke("green")
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}