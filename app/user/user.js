angular
	.module('storeFrontApp.user',
	[
		'ngRoute'
	])
	.config([
		"$routeProvider",
		function ($routeProvider) {

			$routeProvider
				.when(
				'/user', {
					templateUrl: 'user/user.html',
					controller: 'UserController'
				});
		}
	])
	.controller('UserController', [
		'$scope',
		function ($scope) {

			$scope.manuallyErrorsSet = false;

			/**
			 * `validationFields` object contains fields we need to validate.
			 */
			$scope.validationFields = {
				'name': '',
				'email': ''
			};

			/**
			 * `validationFieldsMessages` object contains validation fileds, along with validation specific
			 * error messages.
			 */
			$scope.validationFieldsMessages = {

				'name': {
					'required': 'Enter user name.',
					'pattern': 'Username must contain alphanumeric characters.',
					'minlength': 'Username must be 5 characters long.'
				},
				'email': {
					'required': 'Enter E-mail Address.',
					'email': 'Enter valid E-mail Address'
				}
			};

			/**
			 * `userForm` Object contains all variables reference used in user form.
			 */
			$scope.userForm = {
				'name': '',
				'name_isRequired': true,
				'name_RegexPattern': /^[0-9A-Za-z]+\s?$/,
				'name_minlength': 5,
				'email': '',
				'email_isRequired': true,
			};

			/**
			 * `validateUserForm` function is used to validate user form when any blur event
			 * occur and accumulate all validation messages.
			 */
			$scope.validateUserForm = function () {
console.log($scope.userAddForm);
				for (let validationField in $scope.validationFieldsMessages) {

					let fieldErrorObj;

					/**
					 * `fieldErrorObj` contains error object for currently itrate field.
					 */
					fieldErrorObj = $scope.userAddForm[validationField].$error;
					$scope.validationFields[validationField] = '';

					if (!_.isEmpty(fieldErrorObj)) {

						var count = 0;
						for (let validationType in fieldErrorObj) {

							/**
							 * Here we will examine that in `fieldErrorObj` each key has `TRUE` value OR `FALSE`
							 * value.
							 */
							if (fieldErrorObj[validationType]) {

								/**
								 * Here we will iterate over specific field error type object and populate `$scope.validationFields`
								 * with corresponding error messages.
								 */
								$scope.validationFields[validationField] += (count++ === 0) ?
									$scope.validationFieldsMessages[validationField][validationType] :
									" | " + $scope.validationFieldsMessages[validationField][validationType];
							}

						}

						count = null;
					}
				}
				console.log($scope.validationFields);
				$scope.manuallyErrorsSet = true;
			}
		}
	]);