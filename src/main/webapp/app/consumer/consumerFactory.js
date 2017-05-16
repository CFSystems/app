angular
	.module('app')
	.factory('Consumer', consumerFactory);

function consumerFactory($resource) {
	return $resource("/cfsystems-soa/rest/consumer/:id");
}