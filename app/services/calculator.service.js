angular
	.module('calculator.service', [])
	.service(
	'CalculatorService',
	[
		'$log',
		'$http',
		function ($log, $http) {

			$log.log('initializing CalculatorService');

			/**
			 * `this._subtract` function is used to calculate difference of 
			 * `minuend` and `subtrahend`.
			 */
			this._subtract = function (minuend, subtrahend, callBackFn) {

				$http({
					url: 'http://localhost:3002/calculator/subtract/' + minuend + '/' + subtrahend,
					method: 'GET'
				})
					.then(
					function (resultData) {

						callBackFn(resultData.data.difference);
					},
					function (err) {

						$log.log('ERROR OCCURED: Something went wrong, try after sometime.');
					}
					);
			}
		}
	]);