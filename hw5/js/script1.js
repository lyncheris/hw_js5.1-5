console.log('Task 1');

let arrAbout = [],
	maxLength = 0;

arrAbout.push('Домашняя работа: "Функции"');
arrAbout.push('Выполнил: ст.гр. ' + prompt('Введите номер группы'));
arrAbout.push(prompt('Введите ФИО'));

for(let a = 0; a < arrAbout.length; a++) {
	if (maxLength < arrAbout[a].length) maxLength = arrAbout[a].length;
}

arrAbout.unshift('*'.repeat(maxLength));
arrAbout.push('*'.repeat(maxLength));

for(let a = 0; a < arrAbout.length; a++) {
	arrAbout[a] = '*' + arrAbout[a] + ' '.repeat(maxLength - arrAbout[a].length) + '*';
	console.log(arrAbout[a]);
}