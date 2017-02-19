angular
	.module(
	'learn.one-way.db.controller', []
	)
	.controller(
	'OneWayDataBindingController',
	[
		'$scope',
		function ($scope) {

			$scope.title = "Angular One way data binding.";

			$scope.var1 = 50;
		}
	]
	)