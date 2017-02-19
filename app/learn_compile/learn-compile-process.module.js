angular
	.module(
	'learn-compile-process.module.js',
	[
		'ui.router'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'CompileProcessDemo', {
					url: '/compile-process-demo',
					templateUrl: 'learn_compile/learn-compile-process.view.html',
					controller: 'CompileProcessController'
				}
				);
		}
	])
	.directive(
	'demoCompileProcess',
	function () {

		return {

			/**
			 * function to handle `compile` stage.
			 */
			compile: function (tElement, tAttributes) {

				console.log('Compile Stage | Available attributes :' + JSON.stringify(tAttributes));

				return {

					/**
					 * function to handle `pre phase` of Link stage.
					 */
					pre: function (scope, iElement, iAttributes) {

						console.log('Pre phase | Associate attribute `myattr` value :' + iAttributes.myattr);
					},
					/**
					 * function to handle `post phase` of Link stage.
					 */
					post: function (scope, iElement, iAttributes) {

						console.log('Post phase | Associate attribute `myattr` value :' + iAttributes.myattr);
					}

				};
			},

			/**
			 * function to handle `controller phase` of Link stage.
 			 */
			controller: function ($scope, $element, $attrs) {

				console.log('Controller phase | Associate attribute `myattr` value :' + $attrs.myattr);
			}
		};
	}
	)
	.controller(
	'CompileProcessController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'AngularJS Compile Process demonstrating';
		}
	]);