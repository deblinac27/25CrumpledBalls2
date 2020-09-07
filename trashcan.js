class Trashcan {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.trashcanwidth = 250;
        this.trashcanheight = 300;
        this.wallthickness = 20;
        this.angle = 0;        
        
        this.bottombody = Bodies.rectangle(this.x,this.y, this.trashcanwidth, this.wallthickness,{isStatic:true});

        this.leftwallbody = Bodies.rectangle(this.x - this.trashcanwidth/2, this.y - this.trashcanheight/2, this.wallthickness, this.trashcanheight,{isStatic:true});
        Matter.Body.setAngle(this.leftwallbody, this.angle);
        
        this.rightwallbody = Bodies.rectangle(this.x + this.trashcanwidth/2, this.y - this.trashcanheight/2, this.wallthickness, this.trashcanheight,{isStatic:true});
        Matter.Body.setAngle(this.rightwallbody,-1*this.angle);

        this.image = loadImage("sprites/trashcan.png");

        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
    } 

  display(){
    /* var pos = this.body.position;
     translate(pos.x, pos,y);
     rectMode(CENTER);
     fill("red");
     rect(0,0, this.width, this.height);*/
     var posbottom = this.bottombody.position;
     var posleft = this.leftwallbody.position;
     var posright = this.rightwallbody.position;

     push();
     translate(posleft.x, posleft.y)
     fill("white");
     rectMode(CENTER);
     angleMode(RADIANS);
     rotate(this.angle);
     rect(0, 0, this.wallthickness, this.trashcanheight);
     pop();
     
     push();
     translate(posright.x, posright.y)
     fill("white");
     rectMode(CENTER);
     angleMode(RADIANS);
     rotate(-1*this.angle);
     rect(0, 0, this.wallthickness, this.trashcanheight);
     pop();

     push();
     translate(posbottom.x, posbottom.y)
     fill("white");
     rectMode(CENTER);
     angleMode(RADIANS);
     rect(0, 0, this.trashcanwidth, this.wallthickness);
     pop();

     push();
        translate(posbottom.x, posbottom.y)
        fill("white");
        imageMode(CENTER);
        angleMode(RADIANS);
        image(this.image,0, -155, 270, this.trashcanheight);
    pop();
 }
}