class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3
        }
		this.x=x;
		this.y=y;
		this.radius=r;
		this.body=Bodies.circle(x, y, this.radius, options);
        this.image = loadImage("Plucking_mangoes/stone.png");
		
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()
 }
}