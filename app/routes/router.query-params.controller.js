angular
	.module(
	'query_params', [
		'ui.router'
	]
	)
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
			.status('routerQueryParams', {
				url : 'router-query-params',
				templateUrl: '',
				controller: 'RouterQueryParamsController'
			});
		}
	]);