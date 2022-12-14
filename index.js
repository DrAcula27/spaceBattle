// create ship class
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack() {

    }
    retreat() {

    }
}

// create the player's ship: USS HelloWorld
const USS_HelloWorld = new Ship(20, 5, 0.7);
console.log(USS_HelloWorld);