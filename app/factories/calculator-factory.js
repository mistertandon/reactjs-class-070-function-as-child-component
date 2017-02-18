angular
	.module('calculator.factory', [])
	.factory('CalculatorFactory', [
		'$log',
		'$http',
		function ($log, $http) {

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

				return $http({
					url: 'http://localhost:3002/calculator/add/' + augend + '/' + addend,
					method: 'GET'
				});

			}

			return oCalculatorFactory;
		}
	]);