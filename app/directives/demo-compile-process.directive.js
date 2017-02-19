angular
	.module('demo-compile-process.directive', [])
	.directive(
	'demoCompileProcess',
	function ($interpolate) {

		return {

			/**
			 * function to handle `compile` stage.
			 */
			compile: function (tElement, tAttributes) {

				tElement.css('color', '#FF1A1A');
				console.log('Compile Stage | Available attributes :' + JSON.stringify(tAttributes));
				console.log('Compile Stage | Available Element :' + JSON.stringify(tElement));

				return {

					/**
					 * function to handle `pre phase` of Link stage.
					 */
					pre: function (scope, iElement, iAttributes) {

						console.log('Pre phase | Associate attribute `myattr` value :' + iAttributes.myattr);
					},

					/**
					 * function to handle `post phase` of Link stage.
					 * Note : `iElement` is an jQuery Element.
					 */
					post: function (scope, iElement, iAttributes) {

						console.log('Post phase | Associate attribute `myattr` value :' + iAttributes.myattr);

						if (iAttributes.myattr == "2") {

							iElement.css("border", "1px groove #C7C7C7");
						}

						iElement.on('click', scope.onClickEventFunction);

					}

				};
			},

			/**
			 * function to handle `controller phase` of Link stage.
 			 */
			controller: function ($scope, $element, $attrs) {

				var interpolateResult = $interpolate($attrs.myattr)($scope);

				console.log('Controller phase | Associate attribute `myattr` value :' + interpolateResult);

				$scope.onClickEventFunction = function (data) {

					console.log('\n==== onClickEventFunction Triggered start here ====');
					console.log('Associate attribute `myattr` value : ' + interpolateResult);
					console.log('==== onClickEventFunction ends here ====\n');
				}
			}
		};
	}
	);
