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

		}
	])
	.directive('isolateScopeDirective', function () {

		return {
			template: "hiiiiiiiiiiii"
		};
	});
