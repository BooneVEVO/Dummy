var m;

function setup() {
    createCanvas(640,480);
    m = new Mouse();
}

function draw() {

    m.display();
}

function Food() {
    this.x = 50;
    this.y = 50;
    this.display = function() {
        fill(255, 0, 0);
        ellipse(this.x, ths.y, 50, 50);
    }
}

function mouse() {

    var x = width/2;
    var y = height/2;
            
    
    this.getDistance = function(other) {
        var diet = Math.sqrt(Math.pow(x - other.x) + Math.pow(y - other.y));
    }
    
    this.display=function() {
        

        //MAKE MICKEY MOUSE
        
        noStroke();
        fill('#000000');
        ellipse(x, y, 200, 200);

        fill('#FF0000');
        ellipse(x, y + 60, 100, 20);

        fill('#FFFFFF');
        ellipse(x, y - 26, 120, 40);

        fill('#000000');
        ellipse(x-30, y-26, 10, 10);

        fill('#000000');
        ellipse(x+30, y-26, 10, 10);

        /*fill('7FC35E');
        ellipse(x+42, y-26, 40, 40);

        fill('FFFFFF');
        ellipse(x-42, y-26, 64, 64);

        fill('#7FC35E');
        ellipse(x-42, y-26, 40, 40);*/

        fill('#000000');
        push();
        translate(x-90, y-90);
       // rotate(Math.PI / 4);
        ellipse(0,0,130, 130);
        pop();

        fill('#000000');
        push();
        translate(x+90, y -90);
      //  rotate(-Math.PI / 4);
        ellipse(0, 0, 130, 130);
        pop();

        fill('#EE3E36');
        text('The light cannot reach you here.');
        //arc(x, y+80, 40, -20, -20, PI+QUARTER_PI, CHORD)
        //arc(x, y+80, 40, -20, -20, -20, 20)
    }
} 