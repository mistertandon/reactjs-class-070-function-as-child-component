angular
	.module(
	'learn-event.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'EmitEvent', {
					url: '/emit-event',
					templateUrl: "learn_event/learn-event.view.html",
					controller: "EmitEventController"
				}

				);
		}

	])
	.controller(
	'EmitEventController',
	[
		"$scope",
		function ($scope) {

			$scope.title = "Hi from EmitEventController";

			$scope.addendEventEmit = function () {

				$scope.$emit("clickedOnAddend", { 'addend': 'hello' });

			}

			$scope.$on("clickedOnAddend", function (event, data) {

				console.log(data);
			});
		}
	]
	);