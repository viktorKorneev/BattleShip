// позиция коробля
const location1 = 3;
const location2 = 4;
const location3 = 5;

// потоплен или нет
let isSunk = false;
// предполагаемоя позиция корабля ("выстрел")
let guess;


while (isSunk === false) {
    guess = +prompt("Fire! Enter a number 0-6") // +prompt строковое значение превратим в число при помощи +
    // лоигческое "или"
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
    } else {
        alert("MISS!")
    }
}
