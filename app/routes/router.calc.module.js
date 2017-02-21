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
					resolve: {
						sumResolveData: [
							'CalculatorFactory',
							'$stateParams',
							function (CalculatorFactory, $stateParams) {

								var augend, addend;

								augend = $stateParams.augend;
								addend = $stateParams.addend;

								return CalculatorFactory._sum(augend, addend);
							}]
					},
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
	])
	.run(
	[
		'$rootScope',
		function ($rootScope) {

			$rootScope.$on(
				'$stateChangeStart',
				function (e, toState, toParams, fromState, fromParams, options) {

					if (toState.resolve) {

						$rootScope.isLoading = true;
					}
					console.log('$stateChangeStart');
				});

			$rootScope.$on(
				'$stateChangeSuccess',
				function (e, toState, toParams, fromState, fromParams) {

					if (toState.resolve) {

						$rootScope.isLoading = false;
					}
					console.log('$stateChangeSuccess');
				});
		}
	]);