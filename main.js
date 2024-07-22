// позиция коробля
const randomLoc = Math.floor(Math.random() * 5)  // от 0 до 4 
const location1 = randomLoc
const location2 = location1 + 1
const location3 = location2 + 1

// потоплен или нет
let isSunk = false;
// предполагаемоя позиция корабля ("выстрел")
let guess;
// дабавим счётчик попаданий
let hits = 0;

while (isSunk === false) {
  guess = +prompt("Fire! Enter a number 0-6"); // +prompt строковое значение превратим в число при помощи +
  //   если пользователь введет не правильное число
  if (guess < 0 || guess > 6) {
    alert("Please, enter a valid cell number!");
  } else {
    // лоигческое "или"
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!");
      // считаем попадания
      hits = hits + 1;
      // если подбили
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
