class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            Stiffness:0.04,
            length:70
        }

        this.chain = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.chain)
    }

    fly() {

        this.chain.bodyA = null;

    }

    display(){

        if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }

}