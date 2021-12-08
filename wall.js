class wall{

    constructor(int){

        this.location;
        
        this.col = color(135, 138, 132);

        this.setup(int);

    }

    setup(int){

        if (int == 1){

            this.location = createVector(900, 0);

        }else{

            this.location = createVector(100, 0);

        }

    }

    render(){

        noStroke();
        fill(this.col);

        rect(this.location.x, this.location.y, 10, 500);

    }

}