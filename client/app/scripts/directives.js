portfolioWebApp.directive('projectlistviewer', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'EA',
			templateUrl: '/views/partials/project-list.html'
		};
}]);

portfolioWebApp.directive('projectdetail', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'EA',
			templateUrl: '/views/partials/project-detail.html'
		};
}]);

// portfolioWebApp.directive('projectdashboard', ['$rootScope', '$scope',
// 	function($rootScope) {
// 		return {
// 			restrict: 'EA',
// 			replace: true,
// 			transclude: true,
// 			templateUrl: '/views/projects.html',
// 			controller: function($scope) {
// 				var activeProject, projectList, projectDetail;

// 				this.setActiveProject = function(project) {
// 					activeProject = project;
// 					projectList.activeProject = activeProject;
// 					projectDetail.activeProject = activeProject;
// 					$scope.title = activeProject.name;
// 				}
// 			}
// 		}
// 	}]);

// portfolioWebApp.directive('focus',
// 	function() {
// 		return {
// 			link: function(scope, element, attrs) {
// 				element[0].focus();
// 			}
// 		};
// 	}
// );