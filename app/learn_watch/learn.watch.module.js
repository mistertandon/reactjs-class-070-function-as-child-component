angular
	.module('learn.watch.module', [
		'ui.router'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'NgWatchDemo', {
					url: '/ng-watch-demo',
					templateUrl: 'learn_watch/learn.watch.view.html',
					controller: 'NgWatchController'
				}
				);
		}
	])
	.controller(
	'NgWatchController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'Demonstrating AngularJs Watch Demo';

			$scope.var_a = 34;
			$scope.var_b = 0;
			$scope.var_c = 0;

			$scope.multiplicand = 0;
			$scope.multiplier = 0;
			$scope.productr = 0;

			$scope.multiplicationObj =
				{
					"multiplicand": "0",
					"multiplier": "0",
					"productr": "0"
				};

			/**
			 * `$scope.triggerVarAWatch` function triggered by `ng-change` directive associated with 
			 * `$scope.var_a`
			 */
			$scope.triggerVarA_Watch = function () {

				$scope.var_b = 0;
				$scope.var_b = parseInt($scope.var_a) + 10;
			}

			/**
			 * `$scope.$watch` watches 'var_b', and trigger watch-listener associated with it if any change
			 *	detection by it.
			 */
			$scope.$watch('var_b', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					console.log('\n$scope.var_b value : ' + $scope.var_b + '\n');
					$scope.var_c = 0;
					$scope.var_c = parseInt($scope.var_b) + 10;
				}
			});

			/**
			 * `$scope.$watch` watches 'var_c', and trigger watch-listener associated with it if any change
			 *	detection by it.
			 */
			$scope.$watch('var_c', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					console.log('\n$scope.var_c value : ' + $scope.var_c + '\n');
				}
			});


			/**
			 * `$scope.$watchGroup` watch two scope variables i.e. 'multiplicand', 'multiplier'
			 */
			$scope.$watchGroup(['multiplicand', 'multiplier'], function (oldValue, newValue) {

				$scope.productr = $scope.multiplicand * $scope.multiplier;

			});

			/**
			 * `$scope.$watch` watch 'multiplicationObj' object modification using deep watch.
			 * 	Alternative `$scope.$watch` syntax
			 * 
			 * 	$scope.$watchGroup(['multiplicationObj.multiplicand', 'multiplicationObj.multiplier'], function (oldValue, newValue) {});
			 */
			$scope.$watch('multiplicationObj', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					$scope.multiplicationObj.productr = $scope.multiplicationObj.multiplicand * $scope.multiplicationObj.multiplier;
				}
			}, true);

		}
	]);