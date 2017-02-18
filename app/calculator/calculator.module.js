'use strict';

angular
	.module('calculator.module', [
		'ui.router',
		'calculator.service',
		'calculator.add.controller',
		'calculator.multiplication.controller'
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
	.config([
		'CalculatorCustomProvider', function (CalculatorCustomProvider) {

			let nodeCalculatorAPIUrl = 'http://localhost:3002/calculator/';

			/**
			 * Configure Node Calculator API url.
			 */
			CalculatorCustomProvider.config(nodeCalculatorAPIUrl);
		}
	])
	.provider(
	'CalculatorCustom',
	function () {

		/**
		 * `baseUrl` store Node Calculator REST API url.
		 */
		var baseUrl = null;

		/**
		 * `this.config` used to configure required configuration before angular inject
		 * provider into controller.
		 */
		this.config = function (url) {

			baseUrl = url;
		};

		/**
		 * `this.$get` function used by Angular internally to provide instance of current implemented
		 * 	provider i.e. CalculatorService
		 */
		this.$get = [
			'$log',
			'$http',
			function ($log, $http) {

				var oCalculatorService = {};

				/**
				 * `oCalculatorService._multiplication` performs multiplication operation
				 * using NODE calculator REST API.
				 */
				oCalculatorService._multiplication = function (multiplicand, multiplier, callBack) {

					$http({
						url: baseUrl + "multiply/" + multiplicand + "/" + multiplier,
						method: 'GET'
					}).then(

						/**
						 * Function that is execute after successful response.
						 */
						function (resultData) {

							callBack(resultData.data.product);
						},

						/**
						 * Function executes when an error occured during execution.
						 */
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