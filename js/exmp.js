// // const hamburger = 5;
// // const fries = 0;

// // if (hamburger && fries) {
// // 	console.log("I`m done");
// // }
// // console.log((hamburger && fries));

// // const hamburger = 3;
// // const fries = 1;
// // const cola = 1;

// // console.log(hamburger === 3 && cola && fries);

// // console.log(1 && 0);
// // console.log(1 && 5);
// // console.log(null && 5);
// // console.log(0 && "ssssss");


// // if (hamburger === 3 && cola && fries) {
// // 	console.log("Everyone is enough");
// // } else {
// // 	console.log("We will leave ");

// // }

// // const hamburger = 5;
// // const fries = 0;

// // if (hamburger && fries) {
// // 	console.log("I`m done");
// // }
// // console.log((hamburger && fries));

// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;
// // if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
// // 	console.log("Everyone is enough");
// // } else {
// // 	console.log("We will leave ");
// // }
// // console.log(hamburger === 3 && cola === 2 || fries ===3 && nuggets)

// // let johnReport, alexReport, samReport, mariaReport = "done";

// // console.log( johnReport || alexReport || samReport || mariaReport);

// // let num = 50;

// // while(num < 55){
// // 	console.log(num);
// // 	num++;
// // }

// // do {
// //    console.log(num);
// // 	num++;
// // }
// // while (num < 55);

// // for (let i = 0; i < 10; i++) {
// // 	if(i === 6) {
// // 	   continue;
// // 	}

// // 	console.log(i);
// // }


// // for (let i = 0; i < 3; i++) {
// // 	console.log(i);
// // 	for (let j = 0; j < 3; j++) {
// // 		console.log(j);
// // 	}
// // }

// // let result = "";
// // const length = 7;

// // for (let i = 1; i < length; i++) {

// // 	for(let j =0; j < i; j++){
// // 		result += "*";
// // 	}

// // 	result += "\n";
// // }

// // console.log(result);

// // first: for (let i = 0; i < 3; i++) {
// // 	console.log(`First level: ${i}`);
// // 	for (let j = 0; j < 3; j++) {
// // 		console.log(`Second level: ${j}`);
// // 		for (let k = 0; k < 3; k++) {
// // 			if(k === 2) break first;
// // 			console.log(`Third level: ${k}`);
// // 		}
// // 	}
// // } 
// let num = 50;

// // while (num < 55) {
// // 	console.log(num);
// // 	num++;
// // }

// // do {
// // 	console.log(num);
// // 	num++;
	
// // }
// // while (num < 55);

// for (let i= 0; i < 3; i++) {
// 	console.log (i);
// 	for (let j= 0; j < 3; j++) {
// 		console.log (j);
		
// 	}
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
// 	for (let j=0; j < i; j++) {
// 		result += "*";
// 	}

// 	result += "\n";
// }

// console.log(result);


// first: for (let i= 0; i < 3; i++) {
// 	console.log (`First level: ${i}`);
// 	for (let j= 0; j < 3; j++) {
// 		console.log (`Second level: ${j}`);
// 		for (let k= 0; k < 3; k++) {
// 			if (k === 2) break first; 
// 			console.log (`Third level: ${k}`);
			
// 		}
// 	}
// }


// for (let i=0; i < 100; i++); {
// 	console.log(i);
// }

// "use strict";
// let num = 20;
// function getName (text) {
// 	console.log(text);
// 	console.log(num);
// }

// getName ("Hiiii");
// console.log(num);

// function calc(a,b) {
// 	return (a + b);
// }

// console.log(calc(4 , 3));
// console.log(calc(11 , 3));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
// 	console.log("yessir");
// }
// logger();

// function calc = ( a , b ) => {
// 	console.log ("1");
// 	return a + b;
// };

// const ustCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr ) {
//  return 	curr* amount;
// }
// function promotion ( result ) {
// 	console.log(result * discount );
// }
// promotion(convert(500, ustCurr));

// function test() {
// 	for (let i = 0 ; i < 5; i++) {
// 		console.log(i);
// 		if(i === 3) {return}
// 	}
// 	console.log("done!");
// }
// test();

// function doNothing () {};
// console.log(doNothing() === undefined);


// const str ="test";
// const arr = [1,2,3];

// console.log(arr.length);

// const logg = "yesno noyes";
// // console.log(logg.slice(6,11));
// // console.log(logg.substring(6,11));
// console.log(logg.substr(6,5));


// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.9px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));