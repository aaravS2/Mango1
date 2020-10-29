class Shot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 3
        }
        this.pointB = pointB;
        this.con3 = Constraint.create(options);
        World.add(world, this.con3);
    }
    attach(body){
		this.con.bodyA=body;
	}
    
    fly(){
        this.con3.bodyA=null;
    }
    display(){
        if(this.con3.bodyA){
        var pointA = this.con3.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}