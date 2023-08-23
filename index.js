let diceAmount = 1;
const dices = document.getElementById("dices").children;

const diceIcons = ['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>',
'<i class="fa-solid fa-dice-three"></i>', '<i class="fa-solid fa-dice-four"></i>',
'<i class="fa-solid fa-dice-five"></i>', '<i class="fa-solid fa-dice-six"></i>']

function updateButtons() {
    const addButton = document.getElementById("add-button");
    const removeButton = document.getElementById("remove-button");

    addButton.disabled = diceAmount === 6;
    removeButton.disabled = diceAmount === 1;
}

function addDice() {
    if (diceAmount < 6) {
        const dices = document.getElementById("dices");
        const dice = document.createElement("div");
        dice.innerHTML = diceIcons[dices.children.length];
        dice.classList.add("dice");
        dices.appendChild(dice);
        diceAmount++;
        updateButtons();
    }
}

function removeDice() {
    if (diceAmount > 1) {
        const lastDice = document.getElementById("dices").lastChild;
        lastDice.remove();
        diceAmount--;
        updateButtons()
    }
}

function rollDice() {
    let result = 0;
    const dices = document.getElementById("dices");

    for (let i = 0; i < diceAmount; i++) {
        let diceResult = Math.floor((Math.random() * 6 + 1));
        let diceElement = dices.children[i];

        diceElement.innerHTML = diceIcons[diceResult - 1];
        diceElement.classList.add("roll");

        result += diceResult;
    }

    setTimeout(() => {
        for (let i = 0; i < diceAmount; i++) {
            dices.children[i].classList.remove("roll");
        }
    }, 200);

    const resultField = document.getElementById("results");
    const resultText = document.createElement("div");
    resultText.classList.add("resultItem");
    resultText.innerHTML = 'You rolled <span id="result">' + result + '</span>' +
                            ' with ' + diceAmount + ' dice';
    resultField.appendChild(resultText);

    if (resultField.children.length > 7) {
        resultField.firstChild.remove();
    }
}

updateButtons()