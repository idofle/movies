app.controller('editMovieCtrl', ['$scope', '$state', 'moviesDalService', 'filesService', 
	function($scope, $state, moviesDalService, filesService) {

	function intialize(){
		$scope.movie = {
    		title: '',
    		year: 1970,
    		synopsis: '',
    		pictures: []
    	}	
    	console.log($scope);
	}

	$scope.addPicture = function(file){
		var imgFile = file.files[0];

		var success = function(imgUrl){
			$scope.movie.pictures.push(imgUrl);
			$scope.$apply();
		}

		var error = function(imgUrl){
			// show error
		}

		filesService.uploadImageToImgur(imgFile, success, error);
	}

	$scope.removePicture = function(url){
		for (var i = 0; i < $scope.movie.pictures.length; i++) {
			if ($scope.movie.pictures[i] === url){
				$scope.movie.pictures.splice(i, 1);
			}
		}
	}

	$scope.addMovieToTheCollection = function(){
		moviesDalService.addMovie($scope.movie);
		intialize();
	}

	intialize();    
}]);