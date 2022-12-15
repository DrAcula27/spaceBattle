// set global variables
const NUM_ALIEN_SHIPS = 6;

// create a Ship class for making the player's ship
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(ship) {
        if (Math.random() < this.accuracy) {
            ship.hull -= this.firepower;
        }
    }
    retreat() {
        
    }
}

// create the player's ship: USS HelloWorld, with the required specs
let USS_HelloWorld = new Ship(20, 5, 0.7);
USS_HelloWorld.attacking = true;

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
for (let i = 1; i <= NUM_ALIEN_SHIPS; i++) {
    alienFleet.addAlienShip();
}

// commence space battle!
// create main game function
const spaceBattle = () => {
    let aliens = alienFleet.alienShips;
    // loop through the array of alien ships
    for (let i = 0; i < aliens.length; i++) {
        // check if player's ship is destroyed (hull damage reaches 0)
        if (USS_HelloWorld.hull <= 0) {
            USS_HelloWorld.hull = 0;
            window.alert("Your ship has been destroyed! GAME OVER");
            USS_HelloWorld.attacking = false;
            break;
        }
        // player and alien fight it out until one of them is destroyed
        let notDestroyed = true;
        while (notDestroyed) {
            // player has advantage, and gets to go first
            USS_HelloWorld.attack(aliens[i]);
            // check if alien is destroyed
            if (aliens[i].hull <= 0) {
                // set hull to 0; you can't have a negative health!
                aliens[i].hull = 0;
                // if alien is destroyed, ask player if they want to continue
                let playerResponse = window.prompt(`You destroyed alien ship ${+[i]+1}!\nWould you like to continue battling?\nPress 'y' to continue.`);
                // if player does not want to continue, end the game
                if (playerResponse.toLowerCase() !== "y") {
                    USS_HelloWorld.attacking = false;
                    USS_HelloWorld.retreat();
                }
                // end attack cycle
                break;
            }
            // alien ship attacks player
            aliens[i].attack(USS_HelloWorld);
            // check if player ship destroyed
            if (USS_HelloWorld.hull <= 0) {
                // set hull to 0; you can't have a negative health!
                USS_HelloWorld.hull = 0;
                // end attack cycle
                break;
            }
        }
    }
}
spaceBattle();

// code from class:
// let myShip = document.getElementById('my-ship');

// console.log(myShip);

// myShip.addEventListener('click', () => {
//     let shipHullElement = document.getElementById('my-ship-hull');
//     console.log(shipHullElement);
//     // we pretend the enemy ship attacks
//     let currentHull = +shipHullElement.innerText;
//     // the enemy ship hit for 3 damage
//     let enemyDamage = 3;
//     let finalHull = currentHull - enemyDamage;
//     shipHullElement.innerText = finalHull;
// });