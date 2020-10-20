class Paper{

    constructor(x,y,radius){

        var options ={

            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:0.6
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.body.debug = true;
        this.image = loadImage("Sprites/paper_image.png")
        
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("green");
        circle(0,0,this.radius);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop()
    }


    
}

