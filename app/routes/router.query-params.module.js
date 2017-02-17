angular
	.module(
	'storeFrontApp.router.query_params.module', [
		'ui.router'
	]
	)
	.config([
		'$stateProvider',
		queryParamsConfigFn
	])
	.controller('RouterQueryParamsController', [
		'$scope',
		'$stateParams',
		RouterQueryParamsControllerFn
	]);

/**
 * `queryParamsConfigFn` is used for module configurations.
 */
function queryParamsConfigFn($stateProvider) {

	$stateProvider
		.state('routerQueryParams', {
			/**
			 * Alternative way to define `url` key with query params
			 * url: '/router-query-params/:param1/:param2',
			 * 
			 * Capture query params in normal way : `{queryParam}`
			 * Capture query params, validating before using `Regular Expression`: `{queryParam:RegEx}`
			 * 
			 * Optional params are on the right-most of the `url`
			 */
			url: '/router-query-params/{param1:[0-9]+}/{param2}/{param3}',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController'
		})
		.state('routerOneQueryParams', {
			/**
			 * Demonstrating : ui-sref-opts="{inherit:false}" option in anchor tag..
			 */
			url: '/router-query-params/{param1}/{param2}',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController'
		})
		.state('routerStateParams', {

			/**
			 * Demonstrating `params` option in state configuration, we'll not mentioned
			 * query params into `url`.
			 * Note: `params` works only with `ui-sref`
			 */
			url: '/router-state-params',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController',
			params: {
				param1: { value: 'A90' },
				param2: { value: 'A91' }
			}
		})
		.state('routerStateParamsWithUrl', {

			/**
			 * Demonstrating `params` option in state configuration with, we'll mentioned query
			 * params into `url`
			 * Note: `params` works with `ui-sref` and `ng-href` (have to use trailing slash for getting default values)
			 */
			url: '/router-state-params-with-url/{param1}/{param2}',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController',
			params: {
				param1: { value: 'B90' },
				param2: { value: 'B91' }
			}
		})
		.state('routerStateParamsSquashWithUrl', {

			/**
			 * Demonstrating `params` option in state configuration with `squash` option (`true` value),
			 * we'll mentioned query params into `url`
			 * 
			 * Note: `params` works with `ui-sref` and `ng-href` (No need to use trailing slash for getting default values)
			 */
			url: '/router-state-params-squash-with-url/{param1}/{param2}',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController',
			params: {
				param1: { value: 'C90', squash: true },
				param2: { value: 'C91', squash: true }
			}
		})
		.state('routerStateParamsSquashOptionWithUrl', {

			/**
			 * Demonstrating `params` option in state configuration with `squash` option (`-`, `~` value),
			 * we'll mentioned query params into `url`
			 * 
			 * Note: `params` works with `ui-sref` and `ng-href` (No need to use trailing slash for getting default values)
			 */
			url: '/router-state-params-squash-options-with-url/{param1}/{param2}/{param3}',
			templateUrl: 'routes/router.query-params.view.html',
			controller: 'RouterQueryParamsController',
			params: {
				param1: { value: 'D90', squash: '@' },
				param2: { value: 'D91', squash: '-' },
				param3: { value: 'D91', squash: '~' }
			}
		});

}

/**
 * `RouterQueryParamsControllerFn` is a controller function for `storeFrontApp.router.query_params.module`
 */
function RouterQueryParamsControllerFn($scope, $stateParams) {

	$scope.title = 'Router Query Params Demo';

	$scope.firstParam = $stateParams.param1 || 'No Query param passed';
	$scope.secondParam = $stateParams.param2 || 'No Query param passed';
	$scope.thirdParam = $stateParams.param3 || 'No Query param passed';

}