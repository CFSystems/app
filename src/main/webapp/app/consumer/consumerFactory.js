cfSystemApp
	.factory('ConsumerFactory', 
		['$resource', '$http', function ($resource, $http) {
	
	var urlBase = '/cfsystems-soa/rest/consumer';
	var dataFactory = {};

	dataFactory.getCustomers = function () {
        return $http.get(urlBase);
	};
	
	dataFactory.insertCustomer = function ( consumer ) {
        return $http.post( urlBase + '/save', consumer );
    };
    dataFactory.deleteCustomer = function ( id ) {
    	return $http.delete( urlBase + '/delete/' + id );
    };
	
	return dataFactory;
	//return $resource("/cfsystems-soa/rest/consumer/:id");
	
}]);