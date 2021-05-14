const Canvas = document.getElementById("myCanvas");

function adjustCanvas() {
    Canvas.width = window.innerWidth 
    Canvas.height = window.innerHeight
}


// init the circle class 

class Circle {
    constructor(x, y, r, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = 0
        this.endAngle = 2 * Math.PI
        this.fillColor = fillColor
    }
    draw() {
        let ctx = Canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = `${this.fillColor}`;
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}
adjustCanvas();
const c1 = new Circle(280, 20, 20, "red");
c1.draw();


// functions to  draw random circles 

function randomNum(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    return number
}

function randomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16)
    return '#' + color
}

function drawCircl() {
    //const ratio = window.innerHeight / window.innerWidth;
    //const maxR = Math.min(window.innerHeight,window.innerWidth) / 2 ;
    const r = randomNum(1,100)
    const x = randomNum(1, Canvas.width);
    const y = randomNum(1, Canvas.height);
    const fillColor = randomColor()
    const c = new Circle(x, y, r, fillColor);
    return c.draw()
}



// draw randomly,stop and then clean the canvas 

let interval = setInterval(drawCircl, 100);

setTimeout(clearCanvas, 5000);

function clearCanvas() {
    clearInterval(interval)
    Canvas.getContext('2d')
        .clearRect(0, 0, Canvas.width, Canvas.height);
}

window.onresize = adjustCanvas;

