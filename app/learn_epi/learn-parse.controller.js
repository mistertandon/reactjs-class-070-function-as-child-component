angular
	.module(
	'learn-parse.controller',
	[

	]
	)
	.controller(
	'AngularParseController',
	[
		'$scope',
		'$parse',
		function ($scope, $parse) {

			$scope.title = "AngualarJs parse functionality";

			$scope.multiplicationObj = {
				"multiplicand": 0,
				"multiplier": 0,
				"productr": 0
			};

			/**
			 * `$scope.calcMultiplication` function is used to perform `multiplication`
			 * 	using `$eval`.
			 * 	
			 * 	Useful piece of code 
			 * 	A. var sumUsingParse = $parse(" a + b")({"a":5, "b":6}); // sumUsingParse: 30
			 * 	
			 * 	How we can mutate $scope variable using $parse
			 * 	B. var sumUsingParse = $parse("multiplicationObj.multiplicand").assign($scope, 5);
			 */
			$scope.calcMultiplication = function () {

				var parseFunc;

				parseFunc = $parse("multiplicationObj.multiplicand * multiplicationObj.multiplier");

				$scope.multiplicationObj.productr = parseFunc($scope);
			}
		}
	]
	);