
/**
  |============================
  | Exemple 1
  |============================
*/

//  Вам нужно рассчитать сумму чаевых, которую можно дать в ресторане/кафе.
// Рабочий процесс:
// 1. Контрольная сумма, введенная пользователем. (Используйте функцию “prompt”).
// 2. Пользователь вводит процент чаевых. (Используйте функцию “prompt”)
// 3. Для отмененного ввода покажите “Canceled.
// 4. Необходимо проверить входные данные: оба значения должны быть числами, контрольная сумма не может быть
// отрицательное число, процент не может быть отрицательным и больше 100.
// 5. Если входные данные недействительны, вы должны показать сообщение «Неверные входные данные». (Используйте функцию “alert”).
// 6. Вам необходимо рассчитать сумму чаевых и общую сумму к оплате.
// 7. Показать сообщение: (пример). Используйте функцию “alert”
// Контрольная сумма: 200
// Чаевые: 15%
// Количество чаевых: 30
// Общая сумма к оплате: 230

// const sum = prompt('Введите сумму');
// const procent = prompt('Введите сумму чаевых в %');

// if (sum == null || procent == null) {
//   alert('Canceled');
// } else {
//   const parsSum = Number.parseFloat(sum);
//   const parsProcent = Number.parseFloat(procent);

//   if (
//     Number.isNaN(parsSum) ||
//     parsSum <= 0 ||
//     Number.isNaN(parsProcent) ||
//     parsProcent < 0 ||
//     parsProcent > 100
//   ) {
//     alert('Invalid input data');
//   } else {
//     const tip = (parsProcent * parsSum) / 100;
//     const sumTip = parsSum + tip;

//     alert(
//       `Контрольная сумма: ${parsSum} \n Чаевые: ${parsProcent}% \n Количество чаевых: ${tip.toFixed(
//         2
//       )} \n Общая сумма к оплате: ${sumTip.toFixed(2)}`
//     );
//   }
// }

/**
  |============================
  | Exemple 2
  |============================
*/

// const message = prompt('Введите сообщение');

// if (message === null || message === '') {
//   alert('Отмена');
// } else {
//   if (message.length % 2 === 0) {
//     alert(`${message[message.length / 2 - 1]} ${message[message.length / 2]}`);
//   } else {
//     alert(`${message[(message.length + 1) / 2 - 1]}`);
//   }
// }

/**
  |============================
  | Exemple 3 create []
  |============================
*/

// // Создать один массив [1, 2, 3, 4, 5, 6, 7]

// const a = [1, 2, 3]
// const b = [5, [6, 7]]
// const c = 4

// let array = []

// const result = array.concat(a, c, b[0], b[1]);


// console.log(result) 
// // [1, 2, 3, 4, 5, 6, 7]

/**
  |============================
  | Exemple 4 splice
  |============================
*/

// // Создать один массив [1, 2, 1, 2, 5, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7]

// array.splice(2, 2, 1, 2);

// console.log(array) 
// // [1, 2, 1, 2, 5, 6, 7]

/**
  |============================
  | Exemple 5 copyWithin
  |============================
*/

// // // Создать один массив [1, 2, 1, 2, 5, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7]

// array.copyWithin(2, 0, 2);

// console.log(array)
// // [1, 2, 1, 2, 5, 6, 7]

/**
  |============================
  | Exemple 6 splice
  |============================
*/

// // // Создать один массив [1, 2, 3, 0, 0, 0, 7]

// const array = [1, 2, 3, 4, 5, 6, 7]

// array.splice(3, 3, 0, 0, 0);

// console.log(array)
// // [1, 2, 3, 0, 0, 0, 7]

/**
  |============================
  | Exemple 7 fill
  |============================
*/

// // // Создать один массив [1, 2, 3, 0, 0, 0, 7]

// const array = [1, 2, 3, 4, 5, 6, 7]

// array.fill(0, 3, 6);

// console.log(array) 
// // [1, 2, 3, 0, 0, 0, 7]