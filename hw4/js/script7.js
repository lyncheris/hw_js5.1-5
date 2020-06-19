console.log('Task 7');
let arr8 = [];

for (;;) {
	let g = +prompt('Введите любое число');
	if (g <= 0) break;
	arr8.push(g);
}
arr8.sort(function(a, b) {
	return a - b;
});
console.log(arr8);