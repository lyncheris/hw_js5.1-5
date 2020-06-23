console.log('Task 2');

function triangle() {
	var row = prompt('Введите кол-во рядов треугольника'),
		arr1 = [],
		arr2 = [];

		for (let a = row; a > 0; a--) {

			for (let b = a; b >= 0; b--) {
				arr2.push(' ');
			}

			for (let c = 0; c <= 1; c++) {
				arr1.push('*');
			}

			let arr21 = arr2.join(''),
				arr11 = arr1.join('');

			console.log(arr21 + arr11.slice(1));

			var arr2 = [];
		}
}

triangle();