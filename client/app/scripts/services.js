var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('Projects', ['$resource', 
  function($resource) {
    return $resource(apiHost + '/projects/:name', {}, {
      query: { method:'GET', isArray: true },
      get: { method:'GET', params: {name: 'name'}, isArray: false}
    });
  }]);


//Service
portfolioServices.service('projectsService', function () {
	var activeProject;
	return {
		getActiveProject: function() {
			return activeProject;
		},
		setActiveProject: function(project) {
			activeProject = project;
		}
	};
});
