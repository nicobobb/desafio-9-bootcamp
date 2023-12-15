const spanText = document.getElementsByTagName("span")[0];
const buttonShowCharacter = document.getElementById("buttonShowCharacter");
const characters = document.getElementById("cajas").children;

function clearTitle() {
    for (let i = 0; i < characters.length; i++) {
        characters[i].removeAttribute("title");
    }
}

function addTitle(character) {
    const characterID = document.getElementById(character.toLowerCase());
    if (characterID.title == "Presentado") {
        characterID.title = "";
        spanText.innerText = "";
    } else {
        clearTitle();
        characterID.title = "Presentado";
    }
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
});

for (let i = 0; i < characters.length; i++) {
    characters[i].addEventListener("click", () => {
        shoWCharacter(
            characters[i].id.charAt(0).toUpperCase() + characters[i].id.slice(1)
        );
    });
}
