angular
	.module('movie.api.provider', [])
	.config([
		'MovieApiProvider', function (MovieApiProvider) {

			let nodeMovieAPIUrl = 'http://localhost:3002/movie/find';

			/**
			 * Configure Node Movie API url.
			 */
			MovieApiProvider.config(nodeMovieAPIUrl);
		}
	])
	.provider(
	'MovieApi',
	function () {

		/**
		 * `baseUrl` store Node Movie REST API url.
		 */
		var baseUrl = null;

		/**
		 * `this.config` used to configure required configuration before angular inject
		 * provider into controller.
		 */
		this.config = function (url) {

			baseUrl = url;
		};

		/**
		 * `this.$get` function used by Angular internally to provide instance of current implemented
		 * 	provider i.e. MovieService
		 */
		this.$get = [
			'$log',
			'$http',
			function ($log, $http) {

				var oMovieService = {};

				/**
				 * `oMovieService._neOperatorFilteredMoviesList` retrieve movies list filtered out
				 * ising `ne` comparision operator.
				 */
				oMovieService._neOperatorFilteredMoviesList = function (multiplicand, multiplier, callBack) {

					return $http({
						url: baseUrl + '/ne-comparision-operator/limit/to-array',
						method: 'GET'
					});

				}

				return oMovieService;
			}
		];
	}
	);