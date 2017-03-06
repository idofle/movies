app.controller('editMovieCtrl', function($scope, $state) {

	function intialize(){
		$scope.movie = {
    		title: '',
    		year: 1970,
    		synopsis: '',
    		pictures: []
    	}	
    	console.log($scope);
	}

	function addPicture(){
		// add pic
	}

	var addMovieToTheCollection = function addMovieToTheCollection(){
		console.log($scope);
		// add to localStorage
	}


	intialize();    
});