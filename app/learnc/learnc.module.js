angular
	.module('learnc.module', [
		'ui.router',
		'learnc.first.controller',
		'learnc.second.controller',
		'learnc.third.controller'
	])
	.run(
	[
		'$rootScope',
		function ($rootScope) {

			$rootScope.title = 'Title from $rootScope';
		}
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'LearnControllerScope', {
					url: '/learn-controller-scope',
					templateUrl: 'learnc/learnc.view.html',
					controller: 'FirstController',
					data: {
						css: ['learnc/learnc.view.css']
					}
				}
				);
		}
	]);