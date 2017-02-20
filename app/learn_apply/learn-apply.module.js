angular
	.module(
	'learn-apply.module',
	[
		'ui.router'
	]
	)
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'ApplyDemo', {
					url: '/apply-demo',
					templateUrl: 'learn_apply/learn-apply.view.html',
					controller: 'ApplyDemoController'
				}
				);
		}
	]
	)
	.controller(
	'ApplyDemoController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'AngularJS apply demo';

			$scope.multiplicand = 0;
			$scope.multiplier = 0;
			$scope.productr = 0;
			$scope.productrAlias = 0;

			/**
			 * `$scope.calcMultiplication` performs multiplication opeartion.
			 */
			$scope.calcMultiplication = function () {

				$scope.productr = $scope.multiplicand * $scope.multiplier;
			}

		}
	]
	);

/**
 * `calcMultiplicationApplyFn` perform multiplication from javascript context, After it use AngularJS $apply
 * to kicked digest process.
 */
var calcMultiplicationApplyFn = function () {

	var $scope = angular.element($('#angularjs-apply-demo')).scope();

	/**
	 * 
		$scope.productrAlias = $scope.multiplicand * $scope.multiplier;
		$scope.$apply();

	 * 
	 */

	$scope.$apply(function () {

		$scope.productrAlias = $scope.multiplicand * $scope.multiplier;
	});

}









