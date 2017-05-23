angular
	.module('app')
	.factory('Purchase', purchaseFactory);

function purchaseFactory($resource) {
	return $resource("/cfsystems-soa/rest/purchase/:id");
}