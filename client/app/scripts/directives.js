portfolioWebApp.directive('projectlistviewer', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'EA',
			templateUrl: '/views/partials/project-list.html'
		};
}]);

portfolioWebApp.directive('focus',
	function() {
		return {
			link: function(scope, element, attrs) {
				element[0].focus();
			}
		};
	}
);