angular
	.module(
	'storeFrontApp.router.calc.module', [
		'ui.router',
		'calculator.factory',
		'router.calc.controller',
		'router.calc.sum.controller'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

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
	]);