angular
	.module('app')
	.factory('Account', accountFactory);

function accountFactory($resource) {
	return $resource("/cfsystems-soa/rest/account/:id");
}