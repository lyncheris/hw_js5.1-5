console.log ('Task 4')

let d = 5,
	summ = 0;

for (let i = 1; i <= d; i++) {
	summ = 0;
	for (let f = 1; f <= i; f++) {
		summ += f;
	}
	console.log (summ);
}