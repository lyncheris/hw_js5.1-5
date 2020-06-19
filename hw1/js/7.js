let s = 2000000,
	years = 5,
	percent = 10,
	i = 0.10 / 12, //ежемесячный процент
	j = 1 + i;
	r = Math.pow (j, years);
	pereplata = s * (( i * r ) / (r - 1))

console.log ('7');
console.log (pereplata);