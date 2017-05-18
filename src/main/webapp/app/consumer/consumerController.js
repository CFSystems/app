cfSystemApp
	.controller('ConsumerController',  
				function($log, $scope, $location, ConsumerFactory) {	
	
	$log.debug('ConsumerController [START]');
		
	$scope.init = function() {
		ConsumerFactory.getCustomers().then(function (response) {
			$scope.listConsumers = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
	}
	
	
	$scope.addConsumer = function(){
		$scope.c.id = "";
	}
	
	$scope.editConsumer = function(consumer) {
		$scope.c = consumer;
	}
	
	$scope.saveConsumer = function() {
		ConsumerFactory
			.insertCustomer( $scope.consumer )
				.then(function (response) {
					$("#myModal").modal('hide');
					ConsumerFactory.getCustomers().then(function (response) {
						$scope.listConsumers = response.data;
			        }, function (error) {
			            $scope.status = 'Unable to load customer data: ' + error.message;
			        });
					//$scope.listConsumers.push( $scope.consumer )
		        }, function () {
		            $scope.status = 'Unable to load customer data: ' + error.message;
		        });
	}
	
	$scope.deleteConsumer = function( consumer ) {
		if (confirm('Deseja realmente deleter o cliente ' + consumer.name + '?')) {
			
		ConsumerFactory
		.deleteCustomer( consumer.id )
			.then(function (response) {
				ConsumerFactory.getCustomers().then(function (response) {
					$scope.listConsumers = response.data;
		        }, function (error) {
		            $scope.status = 'Unable to load customer data: ' + error.message;
		        });
	        }, function (error) {
	            $scope.status = 'Unable to load customer data: ' + error.message;
	        });
		}
	}
});