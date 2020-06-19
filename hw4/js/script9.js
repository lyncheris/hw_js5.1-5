console.log('Task 9');
let arr10 = [5, 9, 21, , , 9, 78, , , , 6],
	i = 0;

for (let j = 0; j <= arr10.length - 1; j++) {
	if (arr10[j] == undefined) {
		i++;
	} continue;
}

console.log('Пустых элементов: ' + i)