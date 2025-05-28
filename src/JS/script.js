// Dice class to roll a dice
class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

// DiceTray array to hold multiple dices
class DiceTray {
    constructor() {
        this.diceArray = [];
    }
    addDice(dice) {
        this.diceArray.push(dice);
    }
    removeDice(index) {
        this.diceArray.splice(index, 1);
    }
    rollAll() {
        return this.diceArray.map(dice => dice.roll());
    }
}

// Handles all DOM manipulations
class DiceView {
    constructor(containerId) {
        this.diceContainer = document.getElementById(containerId);
    }
    // Creates a new dice div element in memory
    createDiceDiv(sides, value, removeCallback) {
        const diceDiv = document.createElement("div");
        diceDiv.className = "dice-result";
        diceDiv.textContent = `D${sides}: ${value}`;
        diceDiv.addEventListener("click", removeCallback);
        return diceDiv;
    }
    // Adds the dice div to the page
    addDiceDiv(diceDiv) {
        this.diceContainer.appendChild(diceDiv);
    }
    // Removes the dice div from the page
    removeDiceDiv(diceDiv) {
        this.diceContainer.removeChild(diceDiv);
    }
    // Updates the text content of existing dice divs with the new values after rolling
    updateDiceDivs(diceArray, values) {
        const diceDivs = this.diceContainer.getElementsByClassName("dice-result");
        values.forEach((value, i) => {
            diceDivs[i].textContent = `D${diceArray[i].sides}: ${value}`;
        });
    }
}

// Coordinates dice tray and view
class DiceController {
    constructor(tray, view) {
        this.tray = tray;
        this.view = view;
        this.init();
    }
    init() {
        // Add dice buttons in the UI
        document.querySelectorAll("button[id^='d']").forEach(button => {
            button.addEventListener("click", () => {
                const sides = parseInt(button.id.substring(1));
                const dice = new Dice(sides);
                this.tray.addDice(dice);
                const value = dice.roll();

                const diceDiv = this.view.createDiceDiv(sides, value, () => {
                    const index = Array.from(this.view.diceContainer.children).indexOf(diceDiv);
                    this.tray.removeDice(index);
                    this.view.removeDiceDiv(diceDiv);
                });
                // Add the new dice div to the view
                this.view.addDiceDiv(diceDiv);
            });
        });
        // Roll all dices
        document.getElementById("roll-all").addEventListener("click", () => {
            const results = this.tray.rollAll();
            this.view.updateDiceDivs(this.tray.diceArray, results);
        });
    }
}

// Program entry point
const tray = new DiceTray();
const view = new DiceView("dice-container");
const controller = new DiceController(tray, view);