class Bin{

    constructor(x,y,width,height){

        var options ={
            isStatic:false,
            restitition:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/dustbin.png");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}