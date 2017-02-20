angular
	.module(
	'learn-digest-fn.module',
	[
		'ui.router'
	]
	)
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'DigestFnDemo', {
					url: '/digest-fn-demo',
					templateUrl: 'learn_digest_fn/learn-digest-fn.view.html',
					controller: 'DigestFnDemoController'
				}
				);
		}
	]
	)
	.controller(
	'DigestFnDemoController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'AngularJS digest functionalit demo';

			$scope.numberArr = [
				{
					"multiplicand": 4,
					"multiplier": 5,
					"productr": 0,
					"productrAlias": 0
				},
				{
					"multiplicand": 2,
					"multiplier": 8,
					"productr": 0,
					"productrAlias": 0
				}
			];
			/**
			 * `$scope.calcMultiplication` performs multiplication opeartion.
			 */
			$scope.calcMultiplication = function () {

				$scope.productr = $scope.multiplicand * $scope.multiplier;
			}

		}
	]
	)
	.directive(
	'multiplication',
	function () {

		return {

			compile: function (scope, iElement, iAttrs) {

				return function (scope, iElement, iAttrs) {

					iElement.find('#calc-multiplication-using-ng-digest')
						.on("click", function () {

							scope.numberObj.productrAlias = scope.numberObj.multiplicand * scope.numberObj.multiplier;

							scope.$apply();
						});

				}
			},
			/**
			 * `controller` function executes after compile phase.
			 */
			controller: function ($scope, $element, $attrs) {

				$scope.calcMultiplicationUsingDataBinding = function () {

					$scope.numberObj.productr = $scope.numberObj.multiplicand * $scope.numberObj.multiplier;

				}
			},

			templateUrl: "learn_digest_fn/learn-digest-fn.directive.view.html"
		};
	}
	);
