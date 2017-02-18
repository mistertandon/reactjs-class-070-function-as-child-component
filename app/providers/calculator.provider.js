angular
	.module('calculator.custom.provider', [])
	.config([
		'CalculatorCustomProvider', function (CalculatorCustomProvider) {

			let nodeCalculatorAPIUrl = 'http://localhost:3002/calculator/';

			/**
			 * Configure Node Calculator API url.
			 */
			CalculatorCustomProvider.config(nodeCalculatorAPIUrl);
		}
	])
	.provider(
	'CalculatorCustom',
	function () {

		/**
		 * `baseUrl` store Node Calculator REST API url.
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
		 * 	provider i.e. CalculatorService
		 */
		this.$get = [
			'$log',
			'$http',
			function ($log, $http) {

				var oCalculatorService = {};

				/**
				 * `oCalculatorService._multiplication` performs multiplication operation
				 * using NODE calculator REST API.
				 */
				oCalculatorService._multiplication = function (multiplicand, multiplier, callBack) {

					$http({
						url: baseUrl + "multiply/" + multiplicand + "/" + multiplier,
						method: 'GET'
					}).then(

						/**
						 * Function that is execute after successful response.
						 */
						function (resultData) {

							callBack(resultData.data.product);
						},

						/**
						 * Function executes when an error occured during execution.
						 */
						function (errResult) {

							console.log('Error Occured: Something went wrong, try after some time.');
						}
						);

					return parseInt(multiplicand, 10) * parseInt(multiplier, 10);
				}

				return oCalculatorService;
			}
		];
	}
	);