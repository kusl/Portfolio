//Projects
portfolioControllers.controller('ProjectListCtrl', ['$scope', 'Projects', 'projectsService', 
	function($scope, Projects, projectsService) {
    $scope.projects = Projects.query();
    projectsService.setActiveProject($scope.projects[0]);
}]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Projects', 'projectsService',
	function($scope, $routeParams, Projects, projectsService) {
    $scope.project = Projects.get({name: $routeParams.name}) || projectsService.getActiveProject().data;
}]);

portfolioControllers.controller('ProjectDashboardCtrl', ['$scope', '$routeParams', 'Projects', 'projectsService',
	function($scope, $routeParams, Projects, projectsService) {
		$scope.project
}]);