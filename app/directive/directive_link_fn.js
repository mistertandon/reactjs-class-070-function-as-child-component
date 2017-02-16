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

			$scope.dateInfo = {
				'format': 'dd MMM, yyyy hh:mm:ss'
			};
		}
	])
	.directive(
	'myCurrentTime',
	[
		'$interval',
		'dateFilter',
		function ($interval, dateFilter) {

			function link(scope, iElement, iAttr) {

				var timeIntervalFnRef, formatVal;

				function updateCurrentTime() {

					iElement.text(dateFilter(new Date(), formatVal));
				}

				/**
				 * `scope.$watch` track the changes for `iAttr.myCurrentTime`
				 */
				scope.$watch(iAttr.myCurrentTime, function (value) {

					formatVal = value;
					updateCurrentTime();
				});

				/**
				 * `timeIntervalFnRef` contain the reference of function associated with
				 * `$interval`
				 */
				timeIntervalFnRef = $interval(function () {

					updateCurrentTime();
				}, 1000);

				/**
				 * When associated element get destroyed, function associated with $interval
				 * must be cancel to avoid memory leak;
				 */
				iElement.on("$destroy", function () {

					$interval.cancel(timeIntervalFnRef);

				})
			}

			return {
				restrict: 'A',
				link: link
			};
		}
	]
	);