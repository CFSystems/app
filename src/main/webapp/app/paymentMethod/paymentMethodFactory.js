angular
	.module('app')
	.factory('PaymentMethod', paymentMethodFactory);

function paymentMethodFactory($resource) {
	return $resource("/cfsystems-soa/rest/paymentMethod/:id");
}