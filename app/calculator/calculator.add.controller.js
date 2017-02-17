angular
	.module(
	'calculator.add.controller',
	[
		'calculator.factory'
	])
	.controller(
	'CalculatorController',
	[
		'$scope',
		'CalculatorFactory',
		function ($scope, CalculatorFactory) {

			$scope.title = "Welcome to application page associated with <CalculatorAddOperation> state";

			/**
			 * `$scope.addObj` object is reference for `ng-model`:augend|addend.
			 */
			$scope.addObj = {
				"augend": 0,
				"addend": 0
			};

			/**	
			 * `$scope.sum` is a reference for `ng-model`:sum
			 */
			$scope.sum = 0;

			/**
			 * `$scope.addNumbers` function used to calculate sum of two
			 * 	numbers using `CalculatorFactory` factory.
			 */
			$scope.addNumbers = function () {

				$scope.sum = CalculatorFactory._sum($scope.addObj.augend, $scope.addObj.addend);
			}
		}
	]);