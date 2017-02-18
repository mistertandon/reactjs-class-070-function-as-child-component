angular
	.module('router.calc.controller', [])
	.controller(
	'CalculatorController',
	[
		'$scope',
		'$state',
		function ($scope, $state) {

			$scope.title = 'Calculator';

			/**
			 * `$scope.calc` object contains augend and addend value.
			 */
			$scope.calc = {
				'augend': 0,
				'addend': 0
			};

			/**
			 * `$scope.sum` function navigate application to `routeCalculatorSum` state to calculate sum.
			 */
			$scope.sum = function () {

				$state
					.go('routeCalculatorSum', {
						'augend': $scope.calc.augend,
						'addend': $scope.calc.addend
					});
			}
		}
	]);