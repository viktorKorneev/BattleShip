// позиция коробля
const location1 = 3;
const location2 = 4;
const location3 = 5;

// потоплен или нет
let isSunk = false;
// предполагаемоя позиция корабля ("выстрел")
let guess;
// дабавим счётчик попаданий
let hits = 0;

while (isSunk === false) {
    guess = +prompt("Fire! Enter a number 0-6") // +prompt строковое значение превратим в число при помощи +
    // лоигческое "или"
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
        // считаем попадания
        hits = hits + 1 
        
        if(hits === 3)
    } else {
        alert("MISS!")
    }
}
