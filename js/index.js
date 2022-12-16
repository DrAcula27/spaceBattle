// start game modal initializations
const fightBtn = document.getElementById("fightBtn");
const startGameModal = document.getElementById("startGameModal");
const modalOverlay = document.getElementById("modalOverlay");

//pop open the start game modal with overlay
const openStartGameModal = () => {
    startGameModal.classList.add("active");
}
openStartGameModal();

// commence battle!
fightBtn.addEventListener("click", () => {
    // redirect to game.html
    window.location.href = "./html/game.html";
});
