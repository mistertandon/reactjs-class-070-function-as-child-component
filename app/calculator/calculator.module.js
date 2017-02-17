angular
	.module('calculator.module', [
		'ui.router',
		'calculator.add.controller'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'CalculatorAddOperation', {
					url: '/calculator-add-operation',
					templateUrl: 'calculator/calculator.add.view.html',
					controller: 'CalculatorController'
				}
				);
		}
	]);