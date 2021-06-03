let num = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let hiddenNum = num (1, 100);
console.log(hiddenNum);
let userNum;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let userQuestion = function  (question) {
  userNum = prompt(question);
  if ( userNum === null ) {
    alert('Игра окончена')
  } else {
    userNum = +userNum
    if (isNumber(userNum)) {
      if ( hiddenNum < userNum ) {
        userQuestion('Заданное число меньше');
      } else if ( hiddenNum > userNum) {
        userQuestion('Заданное число больше');
      } else {
        alert('Поздравляю, Вы угадали!!!')
      }
    } else {
      userQuestion('Введи число!')
    }
  }
}

userQuestion('Загадывание случайного числа от 1 до 100');