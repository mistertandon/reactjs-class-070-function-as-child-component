angular
	.module('calculator.factory',[])
	.factory('CalculatorFactory', [
		'$http',
		'$log',
		function ($http, $log) {

			$log.log('instantiaing CalculatorFactory....');
		}
	]);