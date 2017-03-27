angular
	.module(
	'cele.controller',
	[]
	).controller(
	'CelestialController', [
		"$scope",
		"countryData",
		function ($scope, countryData) {

			$scope.countriesArr = countryData.countriesArr;
			$scope.paginateCountriesList = countryData.initialPaginateCountries;
			$scope.countriesLength = countryData.countriesLength;
			$scope.paginationLimit = countryData.paginationLimit;
			$scope.totalPaginatePages = countryData.totalPaginatePages;

			$scope.paginateList = function (interval) {

				let minValue = parseInt(interval, 10) * 10;
				let maxValue = minValue + 9;

				$scope.paginateCountriesList = $scope.countriesArr.slice(minValue, maxValue);

			}
		}]);