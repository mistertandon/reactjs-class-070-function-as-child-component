'use strict';

angular
	.module(
	'calculator.module',
	[
		'ui.router',
		'calculator.add.controller',
		'calculator.multiplication.controller',
		'calculator.subtract.controller'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'CalculatorAddOperation', {
					url: '/calculator-add-operation',
					templateUrl: 'calculator/calculator.add.view.html',
					controller: 'CalculatorAddController'
				})
				.state(
				'CalculatorSubtractOperation', {
					url: '/calculator-subtract-operation',
					templateUrl: 'calculator/calculator.subtract.view.html',
					controller: 'CalculatorSubtractController'
				}
				)
				.state(
				'CalculatorMultiplicationOperation', {
					url: '/calculator-multiplication-operation',
					templateUrl: 'calculator/calculator.multiplication.view.html',
					controller: 'CalculatorMultiplicationController'
				}
				);
		}
	]);