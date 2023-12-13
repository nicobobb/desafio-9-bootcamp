const spanText = document.getElementsByTagName("span")[0];
const buttonShowCharacter = document.getElementById("buttonShowCharacter");

function addTitle(character) {
    const characterID = document.getElementById(character.toLowerCase());
    characterID.title = "Presentado";
}

function hiddenButton() {
    buttonShowCharacter.classList.add("hiddenButtonShowCharacter");
}

function shoWCharacter(character) {
    switch (character) {
        case "Mario":
            spanText.innerText = "Mario";
            addTitle(character);
            break;
        case "Luigi":
            spanText.innerText = "Luigi";
            addTitle(character);
            break;
        case "Bowser":
            spanText.innerText = "Bowser Morton Koopa";
            addTitle(character);
            break;
        case "Peach":
            spanText.innerText = "Princesa Peach Toadstool";
            addTitle(character);
            break;
        case "Yoshi":
            spanText.innerText = "T. Yoshisaur Munchakoopas";
            addTitle(character);
            break;
        case "Toad":
            spanText.innerText = "Toad";
            addTitle(character);
            break;
        case "Toadette":
            spanText.innerText = "Toadette";
            addTitle(character);
            break;
        case "Daisy":
            spanText.innerText = "Princesa Daisy";
            addTitle(character);
            break;
        default:
            spanText.innerText = "(desconocido)";
            break;
    }
}

buttonShowCharacter.addEventListener("click", () => {
    const character = prompt(
        "¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)"
    );

    console.log(character);

    shoWCharacter(character);

    hiddenButton();
});
