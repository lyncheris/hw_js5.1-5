let day = prompt('Введите день от 1 до 31');

console.log ('Задание 8');
if ( (day >= 1) && (day <= 10) ) {
	console.log ('Первая декада');
} else if ( (day > 10) && (day <= 20) ) {
	console.log ('Вторая декада');
} else if ( (day > 20) && (day <= 31) ) {
	console.log ('Третья декада');
} else {
	console.log ('Введено число вне диапазона');
}