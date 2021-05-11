console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get Diameter() {
        return this.radius * 2
    }
    get Circumference() {
        return Math.PI * this.radius * 2
    }

    get Area() {
        return Math.pow(this.radius, 2) * Math.PI
    }
}

const circle = new Circle(2);
console.log(circle.Diameter)