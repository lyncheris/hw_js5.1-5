let n = 0,
	m,
	o;

for (o = 0;;o++) {
	let numm = +prompt('Введите любое число');
	if (numm) n = n + numm;
	else break;
}

m = n / o;
document.write('Сумма чисел: ' + n + '<br />');
document.write('Среднее арифметическое чисел: ' + m);