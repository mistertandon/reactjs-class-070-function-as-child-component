angular
	.module('calculator.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'CalculatorAddOperation', {
					url: '/calculator-add-operation',
					templateUrl: 'calculator/calculator.view.html',
					controller: 'CalculatorController'
				}
				);
		}
	])
	.controller('CalculatorController', [
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
	])
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