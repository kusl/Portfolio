var portfolioServices = angular.module('portfolioServices', ['ngResource']);
var apiHost = 'http://localhost\:3000';

portfolioServices.factory('Projects', ['$resource', 
  function($resource) {
    return $resource(apiHost + '/projects/:name', {}, {
      query: { method:'GET', isArray: true },
      get: { method:'GET', params: {name: 'name'}, isArray: false}
    });
  }]);