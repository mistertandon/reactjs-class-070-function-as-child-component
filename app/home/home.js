angular
	.module('storeFrontApp.home',
	[
		'ui.router'
	])
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('homePage', {
				url: '/',
				templateUrl: 'home/home.html',
				controller: 'HomeController'
			}
			);

	}])
	.controller('HomeController', [
		function () {

		}
	]);

