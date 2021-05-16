class Wall {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'friction':0.3,
          'density':10.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      imageMode(CENTER);
      image(this.image, 750, 630, 100, 100);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };