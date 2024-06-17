
function rollDice(){

    let diceNumber = document.getElementById("diceNumber").value;
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");
    let defaultNumber = 0;
    values = [];
    images = [];

for(let i = 0; i < diceNumber; i++){

    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src="/test/photos/${value}.png">`);

}

diceResult.textContent = `Dice : ${values.join(", ")}`;
diceImages.innerHTML = images.join('');

if(diceNumber == '' || '0') {

    diceResult.textContent = 'No value found , please try adding a value.'
    console.log("None value found");

}

}