app.service('moviesDalService', function(){

	function initialize(){
		if (localStorage.data == undefined){
			data = {
				movies: []
			};
			localStorage.setItem("data", JSON.stringify(data));
		} else {
			data = JSON.parse(localStorage.data);
		}
	}

	this.addMovie = function(movie){
		data.movies.push(movie);
		updateLocalStorage();
	}

	this.getMovie = function(movieId){
		return data.movies[movieId];
		updateLocalStorage();
	}

	this.removeMovie = function(movieId){
		data.remove(movieId);
		updateLocalStorage();
	}

	this.editMovie = function(movie){
		data.movies[movie.id] = movie;
		updateLocalStorage();
	}

	this.getAllMovies = function(){
		if (!data.movies && localStorage.data){
			data.movies = JSON.parse(localStorage.data);
		}
		// return cached version if already exist.
		return data.movies;
	}

	function updateLocalStorage(){
		var dataJson = JSON.stringify(data);
		localStorage.setItem("data", dataJson);
	}

	initialize();
});