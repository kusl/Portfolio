portfolioControllers.controller('ProjectListCtrl', ['$scope', 'Projects',
	function($scope, Projects) {
    	$scope.projects = Projects.query();
}]);

// portfolioControllers.controller('ProjectListCtrl', ['$scope', '$http',
// 	function($scope, $http) {
// 		$http.get('http://localhost:3000/projects').success(function(data) {
// 			$scope.projects = data;
// 		})
//     	//$scope.projects = Projects.query();
// }]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Projects',
	function($scope, $routeParams, Projects) {
    	$scope.project = Projects.get({name: $routeParams.name});
}]);