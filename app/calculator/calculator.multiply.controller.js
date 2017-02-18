angular
	.module(
	'calculator.multiplication.controller',
	[
		'calculator.custom.provider'
	]
	)
	.controller(
	'CalculatorMultiplicationController',
	[
		'$scope',
		'CalculatorCustom',
		function ($scope, CalculatorCustom) {

			$scope.title = 'Calculator multiplication operation';

			$scope.product = null;

			/**
			 * `$scope.multiplicationObj` object is reference for `ng-model`:multiplicand|multiplier.
			 */
			$scope.multiplicationObj = {
				'multiplicand': 0,
				'multiplier': 0
			};

			/**
			 * `$scope.multiplyNumbers` function is used to get product of two numbers.
			 */
			$scope.multiplyNumbers = function () {

				CalculatorCustom._multiplication(
					$scope.multiplicationObj.multiplicand,
					$scope.multiplicationObj.multiplier,
					function (result) {
						$scope.product = result;
					});

			}
		}
	]);