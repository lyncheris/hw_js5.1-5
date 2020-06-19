let n = prompt('Введите значение переменной n от 0 до 59');

console.log ('Задание 7');
if (n >= 0 && n < 15) {
	console.log ('Первая четверть');
} else if ( (n >= 15) && (n < 30) ) {
	console.log ('Вторая четверть');
} else if ( (n >= 30) && (n < 45) ) {
	console.log ('Третья четверть');
} else if ( (n >= 45) && (n <= 59) ) {
	console.log ('Четвертая четверть');
} else {
	console.log ('Введено число вне диапазона');
}