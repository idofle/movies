app.controller('galleryCtrl',['$scope', '$state', 'moviesDalService', function($scope, $state, moviesDalService) {

	$scope.getMovies = moviesDalService.getAllMovies;

	$scope.bla = [{title: 'lala', year: 2020}];
}]);