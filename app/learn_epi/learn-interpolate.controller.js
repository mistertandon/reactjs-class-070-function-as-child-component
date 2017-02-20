angular
	.module('learn-interpolate.controller', [])
	.controller(
	'AngularInterpolateController',
	[
		'$scope',
		'$parse',
		'$interpolate',
		function ($scope, $parse, $interpolate) {

			$scope.title = "AngularJs Interpolate implementation";

			$scope.multiplicationObj = {
				"multiplicand": 0,
				"multiplier": 0,
				"productr": 0
			};

			/**
			 * `$scope.calcMultiplication` function is used to perform `multiplication`
			 * 	using `$interpolate`.
			 * 	
			 */
			$scope.calcMultiplication = function () {

				var parseFunc;

				$scope.multiplicationObj.productr = $interpolate("{{multiplicationObj.multiplicand * multiplicationObj.multiplier }}")($scope);

			}
		}
	]
	);