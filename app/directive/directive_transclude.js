angular
	.module('storeFrontApp.directive_transclude', [
		'ngRoute'
	])
	.config([
		'$routeProvider', function ($routeProvider) {

			$routeProvider
				.when('/directivetransclude', {
					templateUrl: "directive/directive_transclude.html",
					controller: "DirectiveTranscludeController"
				});
		}
	])
	.controller('DirectiveTranscludeController', [
		'$scope',
		'$timeout',
		function ($scope, $timeout) {

			$scope.isDialogueBoxVisible = true;
			$scope.scopeOwnerName = "Owner of control scope is: Parent";

			$scope.closeDialougeBox = function (message) {

				$scope.isDialogueBoxVisible = false;
				$scope.scopeOwnerName = message;

				$timeout(function () {

					$scope.isDialogueBoxVisible = true;
					$scope.scopeOwnerName = "Owner of control scope is: Parent";
				}, 2000);
			}
		}
	])
	.directive(
	'directiveTranscludeElement',
	function () {

		return {
			transclude: true,
			scope: {
				'close': '&onClose'
			},
			templateUrl: "directive/directive_transclude_template.html"
		};
	});