angular
	.module('learnc.first.controller', [])
	.controller(
	'FirstController', [
		'$scope',
		function ($scope) {

			$scope.title = "Hi from First controller.";
		}
	]
	);