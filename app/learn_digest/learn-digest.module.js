angular
	.module(
	'learn-digest.module',
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
				'DigestModuleDemo', {
					url: '/digest-module-demo',
					templateUrl: 'learn_digest/learn-digest.view.html',
					controller: 'DigestModuleController'
				}
				)
		}
	]
	)
	.controller(
	'DigestModuleController',
	[
		'$scope', '$rootScope',
		function ($scope, $rootScope) {

			$scope.title = "How AngularJS Digest Process work";

			$scope.multiplicand = 0;
			$scope.multiplier = 0;
			$scope.productr = 0;

			/**
			 * $scope.$watch('multiplier', ..) watch is used to `WATCH` $scope.multiplier variable, watch listener
			 * is executed during digest process.
			 */
			$scope.$watch('multiplicand', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					$scope.productr = $scope.multiplicand * $scope.multiplier;
				}
			});

			/**
			 * $scope.$watch('multiplier', ..) watch is used to `WATCH` $scope.multiplier variable, watch listener
			 * is executed during digest process.
			 */
			$scope.$watch('multiplier', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					$scope.productr = $scope.multiplicand * $scope.multiplier;
				}
			});

			/**
			 * $scope.$watch('productr', ..) watch is used to `WATCH` $scope.productr variable, watch listener
			 * is executed during digest process.
			 */
			$scope.$watch('productr', function (oldValue, newValue) {

				if (oldValue !== newValue) {

					console.log('$productr value: ' + $scope.productr);

					if (parseInt($scope.multiplicand) > 40) {

						$scope.multiplicand = 12;
					}
				}
			});

			/**
			 * `$rootScope.$watch` observe digest proces functionality. Whenever digest process walk through `watch list`,
			 * 	watch listener associated with `$rootScope` get executed.
			 */
			$rootScope.$watch(function () {

				console.log('-- Digest Process walk through Watch list --');
			});
		}
	]
	);