document.write('Task 5 <br />');
let arr6 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (f = 0; f < arr6.length; f++) {
	if (arr6[f] == 'СБ' || arr6[f] == 'ВС') {
		document.write('<strong>' + arr6[f] + '</strong><br />');
	} else document.write(arr6[f] + '<br />');
}

