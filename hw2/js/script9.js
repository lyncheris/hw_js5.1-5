let day2 = prompt('Введите любой день (пример: 752)'),
	year2 = day2 / 365,
	month2 = day2 / 31,
	week2 = day2 / 7,
	hour2 = day2 * 24,
	minutes2 = hour2 * 60,
	seconds2 = minutes2 * 60;

console.log ('Задание 9');
console.log (day2 + ' Дней');
if (year2 >= 365) {
	console.log (year2 + ' Лет');
} else {
	console.log (' Меньше года');
}
if (month2 >= 1) {
	console.log (month2 + ' Месяцев');
} else {
	console.log (' Меньше месяца');
}
if (week2 >= 1) {
	console.log (week2 + ' Недель');
} else {
	console.log (' Меньше недели');
}
if (hour2 >= 1) {
	console.log (hour2 + ' Часов');
} else {
	console.log (' Меньше часа');
}
if (minutes2 >= 1) {
	console.log (minutes2 + ' Минут');
} else {
	console.log (' Меньше минуты');
}
if (seconds2 >= 1) {
	console.log (seconds2 + ' Секунд');
} else {
	console.log (' Меньше секунды');
}
