
const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    get diameter() {
        return this.radius * 2
    }

    get circumference() {

        return this.diameter * pi
    }

    get area() {

        return pi * Math.sqrt(this.radius);
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        pi * this.diameter / 2;
    }

    set area(area) {
        pi * Math.sqrt(this.radius);
    }
}