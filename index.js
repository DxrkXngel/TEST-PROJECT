function rollDice() {

    let diceNumber = document.getElementById("diceNumber").value;
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");
    let defaultNumber = 0;
    values = [];
    images = [];

    for (let i = 0; i < diceNumber; i++) {

        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="/photos/${value}.png">`);
    }

    if (diceNumber === '' ) {

        diceResult.textContent = 'No value found , please try adding a value.';
        diceImages.textContent = " "
        console.log("No value found");

    }
    else {

        diceResult.textContent = `Dice : ${values.join(", ")}`;
        diceImages.innerHTML = images.join('');

    }
    
}
