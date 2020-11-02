class Shot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 3
        }
        this.pointB = pointB;
        this.rope=constraint.create(options);
        World.add(world,this.rope);
    }
    attach(body){
		this.rope.bodyA=body;
	}
    
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}