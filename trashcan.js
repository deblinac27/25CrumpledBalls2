class Trashcan {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.trashcanwidth = 250;
        this.trashcanheight = 300;
        this.wallthickness = 200;
        this.angle = 0;        
        
        this.bottombody = Bodies.rectangle(this.x,this.y, this.trashcanwidth, this.wallthickness,{isStatic:true});
        this.image = loadImage("sprites/trashcan.png");

        World.add(world,this.bottombody);
    }  
    display(){
        var posbottom = this.bottombody.position;

        push();
        translate(posbottom.x, posbottom.y)
        fill("white");
        imageMode(CENTER);
        angleMode(RADIANS);
        image(this.image,0, 0, this.wallthickness, this.trashcanheight);
        pop();
    }
  }