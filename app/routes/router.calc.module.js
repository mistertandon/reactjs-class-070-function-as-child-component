angular
	.module(
	'storeFrontApp.router.calc.module', [
		'ui.router',
		'calculator.factory'
	])
	.config([
		'$stateProvider',
		RouterCalcModuleConfigFn
	])
	.controller('CalculatorController', [
		'$scope',
		'$state',
		CalculatorControllerFn
	])
	.controller('CalculatorSumController', [
		'$scope',
		'$stateParams',
		'$state',
		'CalculatorFactory',
		CalculatorSumControllerFn
	]);

/**
 * `RouterCalcModuleConfigFn` use to configure `storeFrontApp.router.calc.module`
 * 	module.
 */
function RouterCalcModuleConfigFn($stateProvider) {

	$stateProvider
		.state(
		'routeCalculator',
		{
			url: '/calc',
			templateUrl: 'routes/router.calc.view.html',
			controller: 'CalculatorController'
		})
		.state(
		'routeCalculatorSum',
		{
			url: '/calc-sum/{augend}/{addend}',
			templateUrl: 'routes/router.calc.sum.view.html',
			controller: 'CalculatorSumController',
			params: {
				augend: {
					value: '0'
				},
				addend: {
					value: '0'
				}
			},
			data: {
				'multiplier': 6
			}
		});
}

/**
 * `CalculatorControllerFn` controls `storeFrontApp.router.calc.module` module behaviour.
 */
function CalculatorControllerFn($scope, $state) {

	$scope.title = 'Calculator';

	/**
	 * `$scope.calc` object contains augend and addend value.
	 */
	$scope.calc = {
		'augend': 0,
		'addend': 0
	};

	/**
	 * `$scope.sum` function navigate application to `routeCalculatorSum` state to calculate sum.
	 */
	$scope.sum = function () {

		$state
			.go('routeCalculatorSum', {
				'augend': $scope.calc.augend,
				'addend': $scope.calc.addend
			});
	}
}

/**
 * `CalculatorControllerFn` controls state `sum` behaviour.
 */
function CalculatorSumControllerFn($scope, $stateParams, $state, CalculatorFactory) {

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
	 * 	
	 * 	Alternative way to calculate sum locally.
	 * 	$scope.sum = ($scope.augend + $scope.addend) * $scope.multiplier;
	 */
	CalculatorFactory._sum($scope.augend, $scope.addend)
		.then(function (result) {

			$scope.isSumCalculated = true;
			$scope.sum = result;
		});

	/**
	 * `$scope.goRouteCalculator` used to navigate application to
	 * `routeCalculator` state.
	 */
	$scope.goRouteCalculator = function () {

		$state.go('routeCalculator');
	}
}