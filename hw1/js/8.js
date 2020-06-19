let A = 8,
	B = 3,

	// a+2*(x-b)=16;

	x1 = ((16 - A) / 2) + B;

	// b*(x+15)=a+6*x;
	// b*x+b*15=a+6*x
	// b*x-6*x=a-b*15
	// x*(b-6)=a-b*15

	x2 = ( A - B * 15 ) / ( B - 6 );
	
	// x+2*x+a*x+b*x=23780;
	// x*(1+2+a+b)=23780;

	x3 = 23780 / ( 3 + A + B);

console.log ('8');
console.log (x1);
console.log (x2);
console.log (x3);