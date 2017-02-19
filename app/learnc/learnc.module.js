angular
	.module('learnc.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'LearnControllerScope', {
					url: '/learn-controller-scope',
					templateUrl: 'learnc/learnc.view.html',
					controller: 'FirstController',
					data: {
						css: ['learnc/learnc.view.css']
					}
				}
				);
		}
	])
	.controller(
	'FirstController', [
		'$scope',
		function ($scope) {
			$scope.title = "Hi from First controller.";
		}
	]
	)
	.controller(
	'SecondController', [
		'$scope',
		function ($scope) {
			$scope.title = "Hi from Second controller.";
		}
	]
	)
	.controller(
	'ThirdController', [
		'$scope',
		function ($scope) {
			$scope.title = "Hi from Third controller.";
		}
	]
	);