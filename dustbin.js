class Box
{
	constructor(x,y, width, height)
	{
		var options = {
		isStatic:true,
		density: 0	
		}
	    this.body = Bodies.rectangle(x,y,width, height, options)
		this.width = width;
		this.height = height;
		//this.image = loadImage("dustbingreen.png");
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;

		push();
		rectMode(CENTER);
		translate(pos.x,pos.y);
		fill("blue");
		rect(0, 0, this.width, this.height);
        // imageMode(CENTER);
		// image(this.image, pos.x, pos.y, this.width, this.height);
		pop();
	}

}