class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
    this.arr=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200)
    {

    
   var position = [this.body.position.x,this.body.position.y]
  this.arr.push(position)
}
    super.display();
    for(var a = 0; a < this.arr.length; a++ ){
      image(this.image2,this.arr[a][0],this.arr[a][1])
    }
    
  }


}
