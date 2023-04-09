"use strict";
// const numerOfFilms = +prompt( "How many movies have you watched?", "");

// const personalMoviesDB= {
// 	Count: numerOfFilms,
// 	Movies: {},
//  	Actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt("The last movie you watched?", "" ),
// 	  b = prompt ("How can you rate it?" , ""),
// 	  c = prompt("The last movie you watched?", "" ),
//  	  d = prompt ("How can you rate it?" , "");

// personalMoviesDB.Movies[a] = b;
// personalMoviesDB.Movies[c] = d;

// console.log(personalMoviesDB);





let numberOfFilms;

function start () {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms))  {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();
const personalMoviesDB= {
 	Count: numberOfFilms,
 	Movies: {},
  	Actors: {},
 	genres: [],
 	privat: false
};



function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?", ""),
			  b = prompt("На сколько оцените его?", "");
	
		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMoviesDB.Movies[a] = b;
			console.log("done!");
		} else {
			console.log("error");
			i--;
		}
	}
}
// rememberMyFilms();



function detectPersonalLevel () {
	if (personalMoviesDB.count < 10) {
		console.log("Просмотренно довольно мало фильмов");
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMoviesDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
// detectPersonalLevel();

function showMyDB (hidden) {
	if(!hidden) {
		console.log(personalMoviesDB);
	}
}

showMyDB(personalMoviesDB.privat);


function writeYourGenres () {
	for (let i = 1; i <= 3 ; i++) {
		personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`) ;
	}
}
writeYourGenres() ;