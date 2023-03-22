const numerOfFilms = +prompt( "How many movies have you watched?", "");

const personalMoviesDB= {
	Count: numerOfFilms,
	Movies: {},
	Actors: {},
	genres: [],
	privat: false
};

const a = prompt("The last movie you watched?", "" ),
	  b = prompt ("How can you rate it?" , ""),
	  c = prompt("The last movie you watched?", "" ),
	  d = prompt ("How can you rate it?" , "");

personalMoviesDB.Movies[a] = b;
personalMoviesDB.Movies[c] = d;

console.log(personalMoviesDB);