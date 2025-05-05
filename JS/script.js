class Dice {
    constructor(color = 'default',sides = '6') {
        this.color = color;
        this.sides = Number(sides);
    }
    getColor() {
        return this.color;
    }
    roll() {
        var result = Math.floor(Math.random() * this.sides) + 1;
        return result;
    }
}


class D4 extends Dice {
    constructor(color, sides = '4',) {
        super(color, sides);
    }
}
class D6 extends Dice {
    constructor(color, sides = '6') {
        super(color, sides);
    }
}
class D8 extends Dice {
    constructor(color, sides = '8') {
        super(color, sides);
    }
}
class D10 extends Dice {
    constructor(color, sides = '10') {
        super(color, sides);
    }
}
class D12 extends Dice {
    constructor(color, sides = '12') {
        super(color, sides);
    }
}
class D20 extends Dice {
    constructor(color, sides = '20') {
        super(color, sides);
    }
}
class D100 extends Dice {
    constructor(color, sides = '100') {
        super(color, sides);
    }
}
class DPercent extends Dice {
    constructor(color, sides = '10') {
        super(color, sides);
    }
}

//add dice function

//dice picker function
function rollDiceAndDisplay() {
    const results = [];
    if (document.getElementById("D4").checked) {
        const d4 = new D4();
        results.push(`D4: ${d4.roll()}`);
    }
    if (document.getElementById("D6").checked) {
        const d6 = new D6();
        results.push(`D6: ${d6.roll()}`);
    }
    if (document.getElementById("D8").checked) {
        const d8 = new D8();
        results.push(`D8: ${d8.roll()}`);
    }
    if (document.getElementById("D10").checked) {
        const d10 = new D10();
        results.push(`D10: ${d10.roll()}`);
    }
    if (document.getElementById("D12").checked) {
        const d12 = new D12();
        results.push(`D12: ${d12.roll()}`);
    }
    if (document.getElementById("D20").checked) {
        const d20 = new D20();
        results.push(`D20: ${d20.roll()}`);
    }
    if (document.getElementById("D%").checked) {
        const dPercent = new DPercent();
        results.push(`D%: ${dPercent.roll()}0%`);
    }

    // Display result on HTML
    const resultText = results.length > 0 ? results.join(", ") : "No dice selected.";
    document.getElementById("result").innerHTML = resultText;
}
