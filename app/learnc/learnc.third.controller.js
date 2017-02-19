angular
	.module('learnc.third.controller', [])
	.controller(
	'ThirdController', [
		'$scope',
		function ($scope) {

			$scope.title = "Hi from Third controller.";
		}
	]
	);