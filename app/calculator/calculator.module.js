'use strict';

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
					controller: 'CalculatorAddController'
				})
				.state(
				'CalculatorSubtractOperation', {
					url: '/calculator-subtract-operation',
					templateUrl: 'calculator/calculator.subtract.view.html',
					controller: 'CalculatorSubtractController'
				}
				);
		}
	])
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

				$scope.difference = CalculatorService._subtract($scope.subtractObj.minuend, $scope.subtractObj.subtrahend);
			}
		}
	])
	.service(
	'CalculatorService',
	[
		'$log',
		function ($log) {

			$log.log('initializing CalculatorService');

			/**
			 * `this._subtract` function is used to calculate difference of 
			 * `minuend` and `subtrahend`.
			 */
			this._subtract = function (minuend, subtrahend) {

				let difference;

				difference = parseInt(minuend, 10) - parseInt(subtrahend, 10);

				return difference;

			}
		}
	]);