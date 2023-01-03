// start game modal initializations
const fightBtn = document.getElementById("fightBtn");
const startGameModal = document.getElementById("startGameModal");
const backgroundMusic = document.getElementById("spaceSound");

// add intro message one character at a time, to simulate typing
const typeText = (div, message, len) => {
    if (len > message.length) return;
    div.innerText = message.substr(0, len);
    setTimeout(function() {typeText(div, message, len + 1); }, 65);
}

// start screen and writer
let div = document.createElement("div");
let welcomeContainer = document.getElementById("welcomeMessage");
welcomeContainer.appendChild(div);
typeText(div, "Welcome, Captain.\n\nEarth is being attacked by a horde of aliens.\n\nWill you help save the Earth?", 0);

// commence battle!
fightBtn.addEventListener("click", () => {
    // redirect to game.html
    window.location.href = "./html/game.html";
});
