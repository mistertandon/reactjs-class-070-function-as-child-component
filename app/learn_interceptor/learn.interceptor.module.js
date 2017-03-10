var myinter = function () {

	var oGithubInterceptor = {};

	oGithubInterceptor.request = function (config) {

		config._timeStamp = new Date().getDate();

		return config;
	}
	oGithubInterceptor.response = function (response) {

		response.config._resTimeStamp = new Date().getDate();
		console.log(response);

		return response;
	}

	return oGithubInterceptor;
};

angular
	.module('learn.interceptor.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		'$httpProvider',
		function ($stateProvider, $httpProvider) {

			$stateProvider
				.state('LearnInterceptor', {
					url: '/learn-interceptor',
					controller: 'LearnInterceptorController',
					templateUrl: 'learn_interceptor/learn.interceptor.view.html'
				});
			$httpProvider.interceptors.push(myinter);
		}
	])
	.controller(
	'LearnInterceptorController', [
		'$scope',
		'GithubService',
		function ($scope, GithubService) {

			$scope.title = "Learnig $http interceptors";
			$scope.userGitHubProfile = false;

			$scope.getUserInfo = function () {

				GithubService._getUserGitHubProfile("mistertandon")
					.then(function (userProfile) {

						$scope.userGitHubProfile = userProfile;
					});
			}
		}
	])
	.service('GithubService', [
		'$http',
		'$log',
		function ($http, $log) {


			this._getUserGitHubProfile = function (user_name) {

				return $http({

					url: "https://api.github.com/users/" + user_name,
					method: "Get"
				});
			}
		}])
	;
















