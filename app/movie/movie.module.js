angular
	.module(
	'movie.module',
	[
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'MovieDetail', {
					url: '/movie-detail',
					templateUrl: 'movie/movie.view.html',
					controller: 'MovieDetailController'
				}
				);
		}
	])
	.controller(
	'MovieDetailController',
	[
		'$scope',
		'$filter',
		'MovieApi',
		function ($scope, $filter, MovieApi) {

			$scope.title = 'How filter working in Angularjs';

			$scope.actorFilter = 'a';

			$scope.movieDetail = null;

			$scope.getMovieDetail = function () {

				let storeMovieInfo = function (result) {

					$scope.movieDetail = result;
					$scope.movieRevenue = $filter('currency')(12455);

				}

				MovieApi._getMovieInfo(storeMovieInfo);
			}
		}
	]
	)
	.provider('MovieApi', function () {

		this.$get = [
			'$http',
			'$log',
			function ($http, $log) {

				var oMovieApi = {};

				oMovieApi._getMovieInfo = function (callBackFn) {

					$http({
						url: 'http://localhost:3002/movie/find-one/filter-with-one-field',
						method: 'GET'
					}).then(
						function (resultData) {
							console.log(resultData.data);
							callBackFn(resultData);
						},
						function (err) {

							console.log('ERROR OCCURED: Something went wrong, please try after some time.');
						}
						);
				}

				return oMovieApi;
			}
		];
	})
	.config([
		'MovieApiProvider',
		function (MovieApiProvider) {

		}
	]);















