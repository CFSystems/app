angular
	.module('app')
	.controller('consumerController', consumerController);

function consumerController($scope, Consumer) {	
	
	$scope.getConsumers = function() {
		$scope.listConsumers = Consumer.query();
	}
	
	$scope.addConsumer = function(){
		$scope.c.id = "";
	}
	
	$scope.editConsumer = function(consumer) {
		$scope.c = consumer;
	}
	
	$scope.saveConsumer = function() {
		Consumer.save($scope.c);
		$("#myModal").modal('hide');
		$scope.getConsumers();
	}
	
	$scope.deleteConsumer = function(consumer) {
		if (confirm("Tem certeza que deseja remover o cliente " + consumer.name + "?")==true) {
			Consumer.remove({id:consumer.id});
		}
		$scope.getConsumers();
	}
	
	$scope.getConsumers();
};