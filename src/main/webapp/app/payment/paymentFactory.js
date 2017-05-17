angular
	.module('app')
	.factory('Payment', paymentFactory);

function paymentFactory($resource) {
	return $resource("/cfsystems-soa/rest/payment/:id");
}