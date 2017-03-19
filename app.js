var app = angular.module('movieApp', ['ui.router']); //'app.editMovie' , 'app.movieSynopsis'

app.config(function($stateProvider){
	$stateProvider.state("gallery", {
		url: "gallery",
 		templateUrl: "partials/gallery.html",
 		controller: "galleryCtrl"
	})
	.state("movieSynopsis", {
		url: "movie/{id}",
 		templateUrl: "partials/synopsis.html",
 		controller: "movieSynopsisCtrl"
	})
	.state("movieEdit", {
		url: "movie/edit/{id}",
 		templateUrl: "partials/editMovie.html",
 		controller: "editMovieCtrl"
	});
});

var api = {
		startOver: function(){
			data = undefined;
			localStorage.clear();
			location.reload();
		}
	};