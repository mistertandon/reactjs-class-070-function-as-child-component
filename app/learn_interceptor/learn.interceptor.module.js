angular
	.module('learn.interceptor.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state('LearnInterceptor', {
					url: '/learn-interceptor',
					controller: 'LearnInterceptorController',
					templateUrl: 'learn_interceptor/learn.interceptor.view.html'
				});
		}
	])
	.controller(
	'LearnInterceptorController', [
		'$scope',
		function ($scope) {

			$scope.title = "Learnig $http interceptors";
		}
	])