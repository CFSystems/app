angular
	.module('app')
	.factory('Product', productFactory);

function productFactory($resource) {
	return $resource("/cfsystems-soa/rest/product/:id");
}