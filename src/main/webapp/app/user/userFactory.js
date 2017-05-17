angular
	.module('app')
	.factory('User', userFactory);

function userFactory($resource) {
	return $resource("/cfsystems-soa/rest/user/:id");
}