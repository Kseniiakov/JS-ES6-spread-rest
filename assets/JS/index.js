"use strict";

// Оператор Spread:
// funcCall(...array)
// [ 1, 2, 3, ...pasteArray, 5, 6 ]
// { field1Name: 'value1', field2Name: 'value2', ...mergeWithObj }

// Массивы
// 1) создать массив с произвольными данными (* случайными числами),

// const arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push((Math.round(Math.random() * 50)));
// };

// console.log(arr);

// 2) с помощью оператора spread клонируйте массив в новый

// const newArr = [...arr];

// console.log(newArr);

// 3) * используя оператор spread создайте новый массив 
// из букв строки "тест строки как массива" (разбейте строку как массив)

// let str = 'тест строки как массива';
// let strArr = [...str];

// console.log(strArr);

// Обьекты
// 4) создайте объект со свойствами: id, firstname, lastname, age,

// const obj = {
//     id: '0256',
//     firstname: 'Oliver',
//     lastname: 'Smith',
//     age: 25
// }

// 5) создайте второй объект со свойствами: tel, email

// const secondObj = {
//     tel: 985365874,
//     email: 'oliversmith@gmail.com'
// }

// 6) с помощью оператора spread объедините оба объекта в новый
// и сохраните в переменную

// const combinedObj = {...obj, ...secondObj};
// console.log(combinedObj);

// ---------------------------------------------------------------------------

// Оператор Rest:
// function (...myRestName) {}
// function (firstParam, ...myRestName) {}
// (...myRestName) => {}
// (firstParam, ...myRestName) => {}

// 1) создайте функцию которая принимает неограниченное количество аргументов 
// с помощью оператора rest параметров и логирует их массив в консоль

// function restArg(...arg) {
//     console.log(arg);
// }

// restArg(1,2,3,4,5,6,7,8,9,10,11,12,13);

// 2) создайте функцию чтобы она принимала любое кол-во параметров:
// если в какой либо ячейке есть число то квадрат этого числа
// иначе если в какой либо ячейке есть строка то возвращала эту строку не изменяя

// function myFunc(...arg) {
//     const newArr = [];
    
//     arg.forEach(function(elem) {
//         if (typeof elem === 'number') {
//             let squareElem = Math.pow(elem, 2);
//             return newArr.push(squareElem);
//         }
//         if (typeof elem === 'string') {
//             return newArr.push(elem);
//         }
//     });

//     return newArr;
// }

// const result = myFunc(2,3,4,5, 'test', 'my string');
// console.log(result);

// 3) создайте функцию которая находит минимальное число из всех полученных аргументов

// function minArg(...arg) {
//     let minArgument = Math.min(...arg);
//     return minArgument;
// }

// const result = minArg(0.5,1,2,3,4,5,6,8,9,100);

// console.log(result);