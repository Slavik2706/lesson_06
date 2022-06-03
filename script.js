let hiddenNumber = getRandomInt(1, 100);
let attempts = 3;
let attempt = 0;
let userNumber = prompt("Угадай число от 1 до 100");
let win;
let answer;

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function isNumeric(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

function guessNumber(hiddenNum) {
   return function func(num) {
      if (num !== null) {
         if (isNumeric(num)) {
            console.log(hiddenNum)
            if (attempt < attempts - 1) {
               if (num > hiddenNum) {
                  attempt++
                  userNumber = prompt("Загаданное число меньше, осталось попыток " + (attempts - attempt));
                  func(userNumber)
               }
               if (num < hiddenNum) {
                  attempt++
                  userNumber = prompt("Загаданное число больше, осталось попыток " + (attempts - attempt));
                  func(userNumber)
               }
               if (num == hiddenNum) {
                  win = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
                  if (win) {
                     attempt = 0
                     hiddenNum = getRandomInt(1, 100)
                     userNumber = prompt("Угадай число от 1 до 100");
                     func(userNumber)
                  }
               }
            } else {
               answer = confirm("Попытки закончились, хотите сыграть еще?")
               if (answer) {
                  attempt = 0
                  hiddenNum = getRandomInt(1, 100)
                  userNumber = prompt("Угадай число от 1 до 100");
                  func(userNumber)
               }
            }
         } else {
            userNumber = prompt("Введи число!");
            func(userNumber)
         }
      } else alert("Игра окончена")
   }
}

let result = guessNumber(hiddenNumber)
result(userNumber)


