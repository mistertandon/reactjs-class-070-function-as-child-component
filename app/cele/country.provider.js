angular
	.module('country.api', [])
	.config([
		'CountryApiProvider', function (CountryApiProvider) {

			let countryAPIUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population';

			/**
			 * Configure Country API url.
			 */
			CountryApiProvider.config(countryAPIUrl);
		}
	])
	.provider(
	'CountryApi',
	function () {

		/**
		 * `baseUrl` store Country API url.
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
		 * 	provider i.e. CountryApi
		 */
		this.$get = [
			'$log',
			'$http',
			function ($log, $http) {

				var oCountryService = {};

				/**
				 * `oCountryService._list` retrieves countries list.
				 */
				oCountryService._list = function () {

					return $http({
						url: baseUrl,
						method: 'GET'
					});


				}

				return oCountryService;
			}
		];
	}
	);