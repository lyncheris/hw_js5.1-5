let A = 10,
	B = 2,
	summ = A + B,
	razn = A - B,
	proizv = A * B,
	chastn = A / B;

console.log ('Задание 5');
console.log (summ);
console.log (razn);
console.log (proizv);
console.log (chastn);

if (summ + razn + proizv + chastn > 1) {
	console.log ( (summ + razn + proizv + chastn) ** 2 );
	} else {
		console.log ('Сумма меньше 1');
	}