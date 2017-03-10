angular
	.module('github.interceptor', [])
	.factory('GithubInterceptor', [

		function () {

			var oGithubInterceptor = {};

			oGithubInterceptor.request = function (config) {

				config._timeStamp = new Date().getDate();

			}

			return oGithubInterceptor;
		}

	]);