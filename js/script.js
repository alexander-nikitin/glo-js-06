let num = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let hiddenNum = num (1, 100);
console.log('Загаданное число: ' + hiddenNum);
let userNum;

let isNumber = function (n, iter) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let userQuestion = function  (question, iter) {
  userNum = prompt(question);
  iteration = iter;
  console.log(iteration);

  if ( userNum === null ) {
    alert('Игра окончена');
  } else {

    if (iteration == 0) {
      let again = confirm('Попытки закончились, хотите сыграть еще?');
      if ( again ) {
        hiddenNum = num (1, 100);
        console.log('Загаданное число: ' + hiddenNum);
        userQuestion('Загадывание случайного числа от 1 до 100', 9);
      } else {
        alert('Игра окончена');
      }
    } else {
      userNum = +userNum
      if (isNumber(userNum)) {
        if ( hiddenNum < userNum ) {
          userQuestion('Заданное число меньше, осталось попыток: ' + iteration, iteration - 1);
        } else if ( hiddenNum > userNum) {
          userQuestion('Заданное число больше, осталось попыток: ' + iteration, iteration - 1);
        } else {
          win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if ( win ) {
            hiddenNum = num (1, 100);
            console.log('Загаданное число: ' + hiddenNum);
            userQuestion('Загадывание случайного числа от 1 до 100', 9);
          } else {
            alert('Игра окончена');
          }
        }
      } else {
        userQuestion('Введи число! Осталось попыток: ' + iteration, iteration - 1)
      }
    }

  }
}

userQuestion('Загадывание случайного числа от 1 до 100', 9);