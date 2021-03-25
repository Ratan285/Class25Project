class dustbin
{
	constructor(x,y)
	{
		var options = {
		isStatic:true	
		}
	    this.body = Bodies.rectangle(x,y,50,200,options)
		this.width = 150;
		this.height = 200;
		this.image = loadImage("dustbingreen.png");
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
		
		//translate(pos.x,pos.y);
        imageMode(CENTER);
		image(this.image, pos.x, pos.y, this.width, this.height);
	}

}