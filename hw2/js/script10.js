 let day1 = prompt ('Введите любой день от 1 до 365');

 console.log ('Задание 10');
 console.log (day1 + ' День');
 if (day1 >= 1 && day1 <= 31) {
	 console.log ('Январь');
	 month1 = 1;
 } else if (day1 > 31 && day1 <= 60) {
	console.log ('Февраль');
	month1 = 2;
} else if (day1 > 60 && day1 <= 91) {
	console.log ('Март');
	month1 = 3;
} else if (day1 > 91 && day1 <= 121) {
	console.log ('Апрель');
	month1 = 4;
} else if (day1 > 121 && day1 <= 152) {
	console.log ('Май');
	month1 = 5;
} else if (day1 > 152 && day1 <= 182) {
	console.log ('Июнь');
	month1 = 6;
} else if (day1 > 182 && day1 <= 213) {
	console.log ('Июль');
	month1 = 7;
} else if (day1 > 213 && day1 <= 244) {
	console.log ('Август');
	month1 = 8;
} else if (day1 > 244 && day1 <= 274) {
	console.log ('Сентябрь');
	month1 = 9;
} else if (day1 > 274 && day1 <= 305) {
	console.log ('Октябрь');
	month1 = 10;
} else if (day1 > 305 && day1 <= 335) {
	console.log ('Ноябрь');
	month1 = 11;
} else if (day1 > 335 && day1 <= 365) {
	console.log ('Декабрь');
	month1 = 12;
}

switch (month1) {
	case 12:
	case 1:
	case 2:
	console.log ("Зима");
	break
	case 3:
	case 4:
	case 5:
	console.log ("Весна");
	break
	case 6:
	case 7:
	case 8:
	console.log ("Лето");
	break
	case 9:
	case 10:
	case 11:
	console.log ("Осень");
	break
}