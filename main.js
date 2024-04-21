// TASK 1

var t = 40;
var u = 30;
while(u < t) {
u++;
console.log(u);
}

// TASK 2 Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40. Первым четным числом должно быть 70. 

for(var i = 70; i > 38; i--) {
	if(i % 2 != 0) continue;
	console.log(i);
}

// TASK 3  Переведите цикл FOR из задания 2, в цикл WHILE.  

var i = 70;
while(i > 40) {
	i--;
	if(i % 2 != 0) continue;
	console.log(i);
}

// // TASK 4 

// С помощью любого известного Вам цикла из JavaScript,
// найдите сумму чисел от 1 до 100, и выведите результат в консоль.   

// для суммирования переменная должна быть 0
// и для суммирования надо console.log держать внутри цикла

var sum = 0;
for (var i=1; i<=100; i++) {
	sum = sum + i;
	console.log(sum);
}

// TASK

// 5 Вывести 10 строчек со смайликом : ':)'. На первой строчке один смайлик, на второй два,и так далее. 
// На последней должно быть 10 смайликов.   

word = ":)"
for(var i=0; i<10; i++){
	console.log(word);
	word = word + ":)";
}

// TASK 6

// Напишите программу, которая выводит на экран числа от 1 до 50. 
// При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
// а вместо чисел, кратных пяти — слово «Script». 
// Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript» 

// for(let i = 0; i <= 50; i++)
// if (i % 3 === 0) {
// 	console.log('java');
// } else if(i % 5 === 0) {
// 	console.log("Script")
// } else if (i % 3 || i % 5 ) {
// 	console.log("Java Script");
// };


for(let i = 0; i<= 50; i++) {
	let value = i
// value = переменной i в цикле for
	if(i % 3 === 0) {
		value = "Java"
	}
// если i делится на кратное число 3 без остатка то value = "Java" (и тут еще не выводится)
	if(i % 5 === 0) {
		// если i делится на кратное число 5 без остатка то value = "Script" (и тут еще не выводится)
		// идёт проверка typeof value string === number (не ровняется то else, если ровняется то value = script)
		if(typeof value === "number") {
			value = "Script"
		} else (
			// += это как value = value  + "Script" = Java Script
			value += "Script"
		);
	};
	console.log(value);
};



// TASK 7

// У нас есть число 1000
// Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Посчитайте количество итераций необходимых для выхода из цикла 
// и выведите результат в консоль

let n = 1000;
let o = 0;
while (n > 50) {
  n /= 2;
  o++;
}
console.log(`number: ${n}`); 
console.log(`iteration: ${o}`);

// TASK 8

// Напишите программу, которая используя цикл while 
// выведет все числа от 45 до 170, кратные 10.


let b = 45;
while(b < 170) {
	b++;
	console.log(b);
	b % 10 || document.write(`${b}<br>`);
}
	
// TASK 9

// Напиши программу, которая используя любоге известное Тебе цикла
// выведет 3 раза в консоль 3 последовательные цифры.

// Пример:

// 5 6 7
// 8 9 10
// 11 12 13

for(let n = 5; n <= 7; n++){
	console.log(n + " 6 7 ");
	break;
} for(let p = 8; p <=10; p++){
	console.log(p + " 9 10 ");
 	break;
} for(let m = 11; m <= 13; m++) {
	console.log(m + " 12 13 ");
	break;
};

let startNumber = 5;

for (let i = 0; i < 3; i++) {
    console.log(startNumber + ' ' + (startNumber + 1) + ' ' + (startNumber + 2));
    startNumber += 3;
}

// for(var q = 5; q < 7; q++ ) {
// 	console.log(q);
// }for(var w = 8; w < 10; w++) {
// 	console.log(w);
// }for(var e = 11; e < 13; e++) {
// 	console.log(e);
// }



