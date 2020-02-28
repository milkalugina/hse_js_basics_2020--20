function sayHelloToConsole() {
  console.log("Hello!")
}
sayHelloToConsole()
// alert("Hello!")

function sayHello(name = " незнакомец") {
  // if (name === undefined) {
  //   name = " незнакомец"
  // }

  // name = name || " незнакомец"
  alert("Hello," + name + "!")
}

// sayHello()
let adminName = "Иннокентий"
function logUser() {
  let userName = "Иван Иваныч"
  console.log(userName)
  console.log(adminName)
}
logUser()
// console.log(userName)
console.log(adminName)

function getName() {
  let myName = "Женя"
  return myName
}
let user = getName()
console.log(user)

function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log("Варю " + cups + " кофе с молоком")
  }
  return console.log("Варю " + cups + " кофе без добавок")
}
makeCoffee(24, false)
makeCoffee(3, true)
makeCoffee(8)


function findMax(a, b) {
  if (a === b) {
    return "Числа равны"
  }
  if (a > b) {
    return a
  }
  return b
}
console.log(findMax(2, 7))
console.log(findMax(2, 2))
console.log(findMax(8, 2))


function showQuote(text, author) {
author = author || " Неизвестный автор"
if (text) {
  return console.log(text + "—" + author)
}
}

showQuote("Привет!", " М. Горький")
showQuote("Привет!")
showQuote()


function addOne(a) {
  return a + 1
}

console.log(addOne(8))
console.log(addOne(10))


function nextEven(num) {
  let remains = num % 2
  if (remains === 0 ) {
    return num + 2
  }
  return num + 1
}

console.log(nextEven(9))
console.log(nextEven(6))
console.log(nextEven(12))
