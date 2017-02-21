angular
	.module('router.calc.sum.controller', [])
	.controller(
	'CalculatorSumController',
	[
		'$scope',
		'$stateParams',
		'$state',
		'CalculatorFactory',
		'sumResolveData',
		function ($scope, $stateParams, $state, CalculatorFactory, sumResolveData) {

			console.log(sumResolveData);
			/**
			 * Display all configured `states` information.
			 * For specific `state` : $state.get('routeCalculator');
			 */
			console.log($state.get());

			/**
			 * `$scope.multiplier`, here we are retrieving `routeCalculatorSum` state `data` property.
			 */
			$scope.multiplier = parseInt($state.current.data.multiplier, 10);

			/**
			 * `$scope.isSumCalculated` flag to display processing message into template, until sum is
			 * 	calculated.
			 */
			$scope.isSumCalculated = false;

			/**
			 * `$scope.augend` i.e augend parameter for sum operation.
			 * 
			 * 	Alternative way to access `augend`
			 * 	$scope.augend = parseInt($stateParams.augend, 10);
			 */
			$scope.augend = parseInt($state.params.augend, 10);

			/**
			 * `$scope.addend` i.e addend parameter for sum operation.
			 * 
			 * 	Alternative way to access `augend`
			 * 	$scope.addend = parseInt($stateParams.addend, 10);
			 */
			$scope.addend = parseInt($state.params.addend, 10);

			/**
			 * `$scope.sum`, contain sum of augend and addend, then multiply by 
			 * `routeCalculatorSum` state `data` property i.e. multiply with value 6.
			 */
			CalculatorFactory._sum($scope.augend, $scope.addend)
				.then(function (result) {

					$scope.sum = result.data.sum;
					$scope.isSumCalculated = true;
				});


			/**
			 * `$scope.goRouteCalculator` used to navigate application to
			 * `routeCalculator` state.
			 */
			$scope.goRouteCalculator = function () {

				$state.go('routeCalculator');
			}
		}
	]);