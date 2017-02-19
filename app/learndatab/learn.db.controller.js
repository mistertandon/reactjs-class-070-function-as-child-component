angular
	.module(
	'learn.db.controller', []
	)
	.controller(
	'DataBindingController',
	[
		'$scope',
		function ($scope) {

			$scope.title = "Angular One way data binding.";
			$scope.var1 = 50;
			$scope.var2 = 50;

		}
	]
	)