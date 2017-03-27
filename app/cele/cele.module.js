'use strict';
angular
	.module('cele.module', [
		'country.api',
		'cele.controller'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'celeTask',
				{
					url: '/cele-country',
					templateUrl: 'cele/cele.view.html',
					controller: 'CelestialController',
					resolve: {
						countryData: function (CountryApi) {

							return CountryApi._list().then(function (data) {

								let paginationLimit = 10;
								let countriesArr = data.data;
								let totalCountries = data.data.length;
								let totalPaginatePages = 0;
								let initialPaginateCountries;

								totalPaginatePages = Math.floor(totalCountries / paginationLimit);
								initialPaginateCountries = countriesArr.slice(0, 9);

								return {
									'countriesArr': countriesArr,
									'countriesLength': totalCountries,
									'initialPaginateCountries': initialPaginateCountries,
									'paginationLimit': paginationLimit,
									'totalPaginatePages': totalPaginatePages
								};
							});
						}
					}
				});
		}
	])
	.filter('range', function () {

		return function (input, total) {

			total = parseInt(total);
			for (var i = 1; i <= total; i++)
				input.push(i);
			return input;

		};
	})