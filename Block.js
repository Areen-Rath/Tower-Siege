class Block{
    constructor(x, y, color){
        var options = {
            friction: 0
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.color = color;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, 30, 30);
        pop();
    }
}