angular
	.module(
	'storeFrontApp.directive_link_fn',
	[
		'ngRoute'
	])
	.config([
		'$routeProvider',
		function ($routeProvider) {

			$routeProvider
				.when(
				'/directivelinkfn', {
					templateUrl: "directive/directive_link_fn.html",
					controller: "DirectiveLinkFnController"
				}
				);
		}
	])
	.controller(
	'DirectiveLinkFnController',
	[
		'$scope',
		function ($scope) {

		}
	])
	.directive(
	'directiveLinkFn',
	function () {

		return {
			template: "yahooo"
		};
	});