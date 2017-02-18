angular
	.module(
	'calculator.subtract.controller',
	[
		'calculator.service'
	]
	)
	.controller(
	'CalculatorSubtractController',
	[
		'$scope',
		'CalculatorService',
		function ($scope, CalculatorService) {

			$scope.title = 'Calculator Subtract operation';

			$scope.difference = null;

			/**
			 * `$scope.subtractObj` object is reference for `ng-model`:minuend|subtrahend.
			 */
			$scope.subtractObj = {
				'minuend': 0,
				'subtrahend': 0
			};

			/**
			 * `$scope.subtractNumbers` function is used to get difference of two numbers.
			 */
			$scope.subtractNumbers = function () {

				$scope.difference = CalculatorService._subtract($scope.subtractObj.minuend, $scope.subtractObj.subtrahend,
					function (difference) {

						$scope.difference = difference;
					});
			}
		}
	])