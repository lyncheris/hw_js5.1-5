console.log('Task 9');
let strNums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
	min = +strNums[0],
	max = +strNums[0],
	strNum = '';

for (let p = 0; p < 44; p++) {
	if (strNums[p] != ' ') {
		strNum += strNums[p];
	} else {
		if (strNum < min) min = +strNum;
		if (strNum > max) max = +strNum;
		strNum = ' ';
	}
}

console.log ('Максимальное число: ' + max);
console.log ('Минимальное число: ' + min);