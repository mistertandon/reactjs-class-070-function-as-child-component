angular
	.module(
	'learn-eval.controller',
	[

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

			/**
			 * `$scope.calcMultiplicationEvalFn` function is used to perform multiplication using
			 * 	$eval function parameter.
			 * 	
			 * 	note: Default values can be passed
			 * 	$scope.$eval(function (scope, local) {
			 * 		
			 *		 console.log(local.a);
			 *		 console.log(local.b);
			 *
			 * 	}, {'a':1, 'b':2});
			 */
			$scope.calcMultiplicationEvalFn = function () {

				$scope.multiplicationObj.productr = $scope.$eval(function (scope, local) {

					return parseInt(scope.multiplicationObj.multiplicand, 10) * parseInt(scope.multiplicationObj.multiplier, 10);
				});
			}
		}
	]
	);