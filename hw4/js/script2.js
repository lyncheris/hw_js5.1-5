console.log('Task 2');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let b = 0; b < arr2.length; b++) {
	if ( arr2[b] > -10 && arr2[b] < -3) {
	console.log(arr2[b]);
	continue;
	}
}
