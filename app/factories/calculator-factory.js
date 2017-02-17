angular
	.module('calculator.factory', [])
	.factory('CalculatorFactory', [
		'$log',
		function ($log) {

			$log.log('initializing calculatorFactory... ');
			/**
			 * `oCalculatorFactory` object key have all functions provided by `CalculatorFactory`
			 * factory.
			 */
			var oCalculatorFactory = {};

			/**
			 * `oCalculatorFactory._sum` is used to calculate sum of two numbers.
			 */
			oCalculatorFactory._sum = function (augend, addend) {

				let sum;

				sum = parseInt(augend) + parseInt(addend, 10);

				return sum;
			};

			return oCalculatorFactory;
		}
	]);