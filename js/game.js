// create a function to get a random integer between 2 values, inclusive
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// set global variables
const NUM_ALIEN_SHIPS = getRandomIntInclusive(3, 10);

// DOM initializations
const playerShip = document.getElementById("player-ship");
const playerShipHull = document.getElementById("player-ship-hull");
const aliens = document.getElementById("aliens");
const alienShipHull = document.getElementsByClassName("alien-ship-hull");
const startGameBtn = document.getElementById("startGameBtn");
const backgroundMusic = document.getElementById("spaceSound");

// set volume to 10%
backgroundMusic.volume = 0.1;

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
        window.location.reload();
    }
}

// create the player's ship: USS HelloWorld, with the required specs
let USS_HelloWorld = new Ship(20, 5, 0.7);
USS_HelloWorld.attacking = true;

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
        let newAlienShip = new Ship(hull, firepower, +accuracy);
        // add the new ship to the array of ships
        this.alienShips.push(newAlienShip);
    }
}

// generate the array of alien ships
let alienFleet = new AlienFleet();
for (let i = 1; i <= NUM_ALIEN_SHIPS; i++) {
    alienFleet.addAlienShip();
    aliens.innerHTML += `
        <div id="alien${i}" class="alien-ship">
            <img id="alienImg${i}" src="../images/enemy_ship.png" alt="alien ship">
            <h3 class="alien-ship-title">Alien</h3>
            <h4>Hull: <span class="alien-ship-hull">0</span></h4>
        </div>
    `;
}

// update alien ship hull
const alienHullUpdate = () => {
    for (let i = 0; i < NUM_ALIEN_SHIPS; i++) {
        alienShipHull[i].innerHTML = alienFleet.alienShips[i].hull;
    }
}
alienHullUpdate();

// have player fight each alien one at a time
const spaceBattle = () => {
    let aliens = alienFleet.alienShips;
    // loop through the array of alien ships
    for (let i = 0; i < aliens.length; i++) {
        // check if player's ship is destroyed (hull damage reaches 0)
        if (USS_HelloWorld.hull <= 0) {
            USS_HelloWorld.hull = 0;
            USS_HelloWorld.attacking = false;
            const playerDeadImg = document.getElementById("playerShipImg");
            playerDeadImg.src = "../images/enemy_ship_dead.png";
            openEndGameModal();
            displayEndGameMessage();
            restartGame();
            break;
        }
        // player and alien fight it out until one of them is destroyed
        let notDestroyed = true;
        while (notDestroyed) {
            // player has advantage, and gets to go first
            USS_HelloWorld.attack(aliens[i]);
            // update alien hull in HTML page
            alienHullUpdate();
            // check if alien is destroyed
            if (aliens[i].hull <= 0) {
                // set hull to 0; you can't have a negative health!
                aliens[i].hull = 0;
                // mark the ship as destroyed
                const alienImage = document.getElementById(`alienImg${i+1}`);
                alienImage.src  = "../images/enemy_ship_dead.png";
                // end attack cycle
                break;
            }
            // alien ship attacks player
            aliens[i].attack(USS_HelloWorld);
            // update USS_HelloWorld hull in HTML page
            playerShipHull.innerHTML = USS_HelloWorld.hull;
            // check if player ship destroyed
            if (USS_HelloWorld.hull <= 0) {
                // set hull to 0; you can't have a negative health!
                USS_HelloWorld.hull = 0;
                // end attack cycle
                break;
            }
        }
        checkWinner();
    }
}

//check for a winner: wether player destroyed
const checkWinner = () => {
    if (USS_HelloWorld.hull > 0) {
        openEndGameModal();
        displayEndGameMessage();
        restartGame();
    }
}

//end of game modal initializations
const endGameModal = document.getElementById("endGameModal");
const endGameModalTitle = document.getElementById("endGameModalTitle");
const restartButton = document.getElementById("restartButton");

//pop open the end game modal with overlay
const openEndGameModal = () => {
    endGameModal.classList.add("active");
    modalOverlay.classList.add("active");
}

//populate modal title
const displayEndGameMessage = () => {
    return USS_HelloWorld.hull > 0
    ? (endGameModalTitle.textContent = `You've defeated all ${NUM_ALIEN_SHIPS} aliens!\n And you still have ${USS_HelloWorld.hull} hull left!`)
    : (endGameModalTitle.textContent = `Your ship was destroyed! GAME OVER`);
}

//restart the game
const restartGame = () => {
    restartButton.addEventListener("click", () => {
        window.location.reload();
    });
}

// commence battle!
startGameBtn.addEventListener("click", () => {
    // loop until player destroyed or all alien ships destroyed
    spaceBattle();
});
