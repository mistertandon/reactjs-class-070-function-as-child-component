angular
	.module(
	'learn-eval-parse-interpolate.module',
	[
		'ui.router'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'AngularEvalDemo', {
					url: '/angular-eval-demo',
					templateUrl: 'learn_epi/learn-eval.view.html',
					controller: 'AngularEvalController'
				}
				);
		}
	]
	)
	.controller(
	'AngularEvalController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'AnngularJS eval implementation.';

			$scope.multiplicationObj = {
				"multiplicand": 0,
				"multiplier": 0,
				"productr": 0
			};

			$scope.sum = 0;

			/**
			 * `$scope.calcMultiplication` function is used to perform `multiplication`
			 * 	using `$eval`.
			 */
			$scope.calcMultiplication = function () {

				$scope.multiplicationObj.productr = $scope.$eval("multiplicationObj.multiplicand * multiplicationObj.multiplier")
			}

			/**
			 * `$scope.calcSumEvalDeaultValues` function is used to perform `sum` operation
			 * using `$eval` default values.
			 * Note : $eval default values object take preference over $scope variables.
			 */
			$scope.calcSumEvalDeaultValues = function () {

				$scope.sum = $scope.$eval("augend + addend", {
					"augend": 5, "addend": 8
				});
			}
		}
	]
	);