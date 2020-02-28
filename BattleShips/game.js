//
// let numPool = [ ];
//
// function shuffle(numPool) {
//
//   for(
//     let j, x, i = numPool.length; i;
//     j = parseInt(Math.random() * i),
//     x = numPool[--i],
//     numPool[i] = numPool[j],
//     numPool[j] = x
//   );
//
//   return numPool;
// };
//
// let randomResult = shuffle(numPool);
// while( randomResult.length > 0 ) {
//   console.log( randomResult.pop() );
// }
 

// let location1 = Math.floor(Math.random() * 7)
// let location2 = location1 + 1
// let location3 = location2 + 1



Работающий генератор ПОВТОРЯЮЩИХСЯ чисел
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(0, 9)

let location1 = getRandomInRange(0, 9)
let location2 = getRandomInRange(0, 9)
let location3 = getRandomInRange(0, 9)



// Координата выстрела
let currentShot
// Сколько сделано выстрелов
let shots = 0
// Сколько попаданий
let hits = 0
// Потоплен ли корабль?
let isSunk = false



while (isSunk === false) {

  currentShot = Number(prompt('Введите число от 0 до 9:'))

  shots = shots + 1


  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    hits += 1
    alert('Попадение!')
    if (hits === 3) {
      isSunk = true
      alert('Пустой корабль утонул. Победа!')
    }
  } else {
      if (currentShot > 9 || currentShot < 0 ) {
        alert('Пожалуйста, введите исло от 0 до 9!')
      } else {
        alert('Промах!')
      }
    }
  }
