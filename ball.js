class ball{

    constructor(){

        this.location;
        
        this.xVelocity = 2;
        this.yvelocity = 0;

        this.momentum = 10;

        this.diameter = 64;

        this.mass = 5;
        this.temperature = 1;

        this.setup();

        this.red = 252;
        this.green = 78;
        this.blue = 3;

    }

    setup(){

        this.location = createVector(500, 250);

    }

    calculate(){

        this.location.x += this.xVelocity;
        this.location.y += this.yvelocity;

        if (this.xVelocity > 0){

            this.xVelocity = this.temperature + 1;

        }else{

            this.xVelocity = (this.temperature * -1) - 1;

        }

        this.momentum = this.xVelocity * this.mass;

    }

    render(){

        noStroke();
        fill(color(this.red, this.green, this.blue));

        ellipse(this.location.x, this.location.y, this.diameter, this.diameter);

    }

}