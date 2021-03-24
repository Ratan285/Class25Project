class Paper{
    constructor(x,y){
        var options = {
            density:1.2,
            restitution:0.7,
            friction:1
        }
     this.body = Bodies.rectangle(x,y,50,50,options)
     this.width = 50;
     this.height = 50;
     World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        
        fill("red");
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

    }
}