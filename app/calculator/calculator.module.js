'use strict';

angular
	.module('calculator.module', [
		'ui.router',
		'calculator.add.controller',
		'calculator.service'
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

				$scope.difference = CalculatorService._subtract($scope.subtractObj.minuend, $scope.subtractObj.subtrahend,
					function (difference) {

						$scope.difference = difference;
					});
			}
		}
	])
	.controller(
	'CalculatorMultiplicationController',
	[
		'$scope',
		'CalculatorService',
		function ($scope, CalculatorService) {

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

				CalculatorService._multiplication(
					$scope.multiplicationObj.multiplicand,
					$scope.multiplicationObj.multiplier,
					function (result) {
						$scope.product = result;
					});

			}
		}
	])
	.config([
		'CalculatorServiceProvider', function (CalculatorServiceProvider) {

		}
	])
	.provider(
	'CalculatorService',
	function () {

		this.$get = [
			'$log',
			'$http',
			function ($log, $http) {

				var oCalculatorService = {};

				oCalculatorService._multiplication = function (multiplicand, multiplier, callBack) {

					$http({
						url: "http://localhost:3002/calculator/multiply/" + multiplicand + "/" + multiplier,
						method: 'GET'
					}).then(

						function (resultData) {

							callBack(resultData.data.product);
						},
						function (errResult) {

							console.log('Error Occured: Something went wrong, try after some time.');
						}
						);

					return parseInt(multiplicand, 10) * parseInt(multiplier, 10);
				}

				return oCalculatorService;
			}
		];
	}
	);







