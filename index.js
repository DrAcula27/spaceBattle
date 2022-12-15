// set global variables
const NUM_ALIEN_SHIPS = 6;

// create a Ship class for making the player's ship
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

// create the player's ship: USS HelloWorld, with the required specs
let USS_HelloWorld = new Ship(20, 5, 0.7);

// create a function to get a random integer between 2 values, inclusive
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// create a factory to make and store alien ships
class AlienFleet {
    constructor() {
        this.alienShips = [];
    }
    addAlienShip() {
        // alien hull needs to be between 3 and 6, inclusive
        let hull = getRandomIntInclusive(3, 6);
        // alien firepower needs to be between 2 and 4, inclusive
        let firepower = getRandomIntInclusive(2, 4);
        // alien accuracy needs to be between 0.6 and 0.8, inclusive
        let accuracy = Math.random() * (0.81 - 0.6) + 0.6;
        accuracy = accuracy.toFixed(2);
        // create the alien ship
        let newAlienShip = new Ship(hull, firepower, accuracy);
        // add the new ship to the array of ships
        this.alienShips.push(newAlienShip);
    }
}

// generate the array of alien ships
let alienFleet = new AlienFleet();
for (let i = 0; i <= NUM_ALIEN_SHIPS; i++) {
    alienFleet.addAlienShip();
}
console.log(alienFleet);