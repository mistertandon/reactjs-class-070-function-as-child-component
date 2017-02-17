angular
	.module(
	'storeFrontApp.router.calc.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		RouterCalcModuleConfigFn
	])
	.controller('CalculatorController', [
		'$scope',
		CalculatorControllerFn
	]);

/**
 * `RouterCalcModuleConfigFn` use to configure `storeFrontApp.router.calc.module`
 * 	module.
 */
function RouterCalcModuleConfigFn($stateProvider) {

	$stateProvider
		.state('routeCalculator', {
			url: '/calc',
			templateUrl: 'routes/router.calc.view.html',
			controller: 'CalculatorController'
		});
}

/**
 * `CalculatorControllerFn` controls `storeFrontApp.router.calc.module` module behaviour.
 */
function CalculatorControllerFn($scope) {

	$scope.title = 'Calculator';
}