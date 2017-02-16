angular
	.module(
	'storeFrontApp.isolate_scope_d',
	[
		'ngRoute'
	])
	.config(
	[
		'$routeProvider',
		function ($routeProvider) {

			$routeProvider
				.when(
				'/isolatedscoped', {
					templateUrl: "directive/isolate_scope.html",
					controller: "IsolateScopeController"
				});

		}])
	.controller('IsolateScopeController',
	[
		'$scope',
		function ($scope) {

			/**
			 * `$scope.customer` contains customer name object.
			 */
			$scope.customer = {
				'name': 'parvesh kumar tandon',
				'address': '1300 Robert B. Cullum Boulevard, Dallas, TX 75210.'
			};
		}
	])
	.directive('isolateScopeDirective', function () {

		return {

			restrict: 'E',
			scope: {
				"customerName": "=customername",
				"customerAddress": "="
			},
			templateUrl: "directive/isolate_scope_template.html"
		};
	});
