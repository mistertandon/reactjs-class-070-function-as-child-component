angular
	.module('learnc.second.controller', [])
	.controller(
	'SecondController', [
		'$scope',
		function ($scope) {

			$scope.title = "Hi from Second controller.";
		}
	]
	);