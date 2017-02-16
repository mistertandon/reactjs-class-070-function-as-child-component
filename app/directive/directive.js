angular
	.module(
	'storeFrontApp.myCustomerDirective',
	[
		'ngRoute'
	]
	)
	.config(
	[
		"$routeProvider",
		function ($routeProvider) {

			$routeProvider.when(
				'/mycustomerd', {
					templateUrl: "directive/directive_my_customer.html",
					controller: "MyCustomerController"
				}
			);

		}])
	.controller('MyCustomerController',
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

		}])
	.directive('myCustomer', function () {

		return {
			restrict: 'E',
			templateUrl: "directive/directive_my_customer_template.html"
		};
	});