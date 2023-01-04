// create a function to get a random integer between 2 values, inclusive
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// set global variables
const NUM_ALIEN_SHIPS = getRandomIntInclusive(3, 10);

// DOM initializations
const playerShip = document.getElementById("player-ship");
const playerShipHull = document.getElementById("player-ship-hull");
const aliens = document.getElementById("aliens");
const alienShipHull = document.getElementsByClassName("alien-ship-hull");
const attackBtn = document.getElementById("attackBtn");
const rechargeBtn = document.getElementById("rechargeBtn");
const backgroundMusic = document.getElementById("spaceSound");

// set volume to 10%
backgroundMusic.volume = 0.1;

// create a Ship class for making the player's ship
class Ship {
  constructor(hull, firepower, accuracy, rechargeProbability) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.rechargeProbability = rechargeProbability;
  }
  attack(enemy) {
    if (Math.random() < this.accuracy) {
      enemy.hull -= this.firepower;
      let laserSound = new Audio("../sounds/8-bit-laser.wav");
      laserSound.play();
    }
  }
  recharge() {
    if (Math.random() < this.rechargeProbability) {
        this.hull += getRandomIntInclusive(1, 5);
    }
  }
}

// create the player's ship: USS HelloWorld, with the required specs
let USS_HelloWorld = new Ship(20, 5, 0.7, 0.8);
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
    let newAlienShip = new Ship(hull, firepower, +accuracy, null);
    // add the new ship to the array of ships
    this.alienShips.push(newAlienShip);
  }
}

// generate the array of alien ships
let alienFleet = new AlienFleet();
for (let i = 1; i <= NUM_ALIEN_SHIPS; i++) {
  alienFleet.addAlienShip();
  aliens.innerHTML += `
        <div id="alien" class="alien-ship">
            <img id="alienImg" src="../images/enemy_ship.png" alt="alien ship">
            <h3 class="alien-ship-title">Alien</h3>
            <h4>Hull: <span class="alien-ship-hull">0</span></h4>
        </div>
    `;
}

// gives access to the array of alien ships
const aliensArray = alienFleet.alienShips;

// update alien fleet hull values
for (let i = 0; i < NUM_ALIEN_SHIPS; i++) {
    alienShipHull[i].innerHTML = alienFleet.alienShips[i].hull;
}

// have player fight one alien ship in the fleet
const fightOneAlien = () => {
  // player and alien fight it out until one of them is destroyed
  let playerDestroyed = false;
  while (!playerDestroyed) {
    // player has advantage, and gets to go first
    USS_HelloWorld.attack(aliensArray[0]);
    // update alien hull in HTML page
    alienShipHull[0].innerHTML = aliensArray[0].hull;
    // check if alien is destroyed
    if (aliensArray[0].hull <= 0) {
      // set hull to 0; you can't have a negative health!
      aliensArray[0].hull = 0;
      alienShipHull[0].innerHTML = 0;
      // mark the ship as destroyed
      const alienImage = document.getElementById(`alienImg`);
      alienImage.src = "../images/explosion.gif";
      // after a timeout, remove the alien from the fleet
      setTimeout(() => {
        aliensArray.shift();
        const deadAlien = document.getElementById("alien");
        deadAlien.parentNode.removeChild(deadAlien);
      }, 1260);
      // end attack cycle
      break;
    }
    // alien ship attacks player
    aliensArray[0].attack(USS_HelloWorld);
    // update USS_HelloWorld hull in HTML page
    playerShipHull.innerHTML = USS_HelloWorld.hull;
    // check if player ship destroyed
    if (USS_HelloWorld.hull <= 0) {
      // set hull to 0; you can't have a negative health!
      USS_HelloWorld.hull = 0;
      playerShipHull.innerHTML = 0;
      // mark the ship as destroyed
      const playerShipImage = document.getElementById(`playerShipImg`);
      playerShipImage.src = "../images/explosion.gif";
      // after a timeout, remove the player ship
      setTimeout(() => {
        playerShip.parentNode.removeChild(playerShip);
      }, 1260);
      // end while loop
      playerDestroyed = true;
      // end attack cycle
      break;
    }
  }
};

//check for a winner
const checkWinner = () => {
  if (USS_HelloWorld.hull <= 0 || aliensArray.length === 0) {
    openEndGameModal();
    displayEndGameMessage();
    restartGame();
  }
};

//end of game modal initializations
const endGameModal = document.getElementById("endGameModal");
const endGameModalTitle = document.getElementById("endGameModalTitle");
const restartButton = document.getElementById("restartButton");

//pop open the end game modal with overlay
const openEndGameModal = () => {
  endGameModal.classList.add("active");
  modalOverlay.classList.add("active");
};

//populate modal title
const displayEndGameMessage = () => {
  return USS_HelloWorld.hull > 0
    ? (endGameModalTitle.textContent = `You've defeated all ${NUM_ALIEN_SHIPS} aliens!\n And you still have ${USS_HelloWorld.hull} hull left!`)
    : (endGameModalTitle.textContent = `Your ship was destroyed! GAME OVER`);
};

//restart the game
const restartGame = () => {
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
};

// if player clicks the attack! button:
attackBtn.addEventListener("click", () => {
    // fight one ship until either player or alien destroyed
    fightOneAlien();
    // check for a winner; timeout is necessary due to the timeout used earlier to remove alien ships from the array
    setTimeout(() => {
        checkWinner();
    }, 1500);
});

// if player clicks the recharge button:
rechargeBtn.addEventListener("click", () => {
    // only recharge if hull is less than starting amount
    if (USS_HelloWorld.hull < 20) {
        // attempt to recharge player hull by a random amount
        USS_HelloWorld.recharge();
        // update USS_HelloWorld hull in HTML page
        playerShipHull.innerHTML = USS_HelloWorld.hull;
        // allow an alien attack
        aliensArray[0].attack(USS_HelloWorld);
    } else {
        alert("Your hull is already at max!");
    }
});