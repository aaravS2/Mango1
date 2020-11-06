class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.body = Bodies.rectangle(x,y,200,600,options);
        this.width=200
        this.height=600
        this.image = loadImage("Plucking_mangoes/tree.png")
        World.add(world,this.body)
    }
display(){
    imageMode(CENTER);
    var pos1 = this.body.position.x;
    var pos2 = this.body.position.y;
    image(this.image,pos1,pos2,200,600);
}
}
