console.log('Task 10');
let arr11 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2]
	arr12 = arr11.slice(arr11.indexOf(0) + 1,arr11.lastIndexOf(0)),
	sum = 0;

for (k = 0; k < arr12.length; k++) {
	sum += arr12[k];
}

console.log('Сумма = ' + sum);