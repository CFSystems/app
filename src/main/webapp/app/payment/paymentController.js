angular
	.module('app')
	.controller('paymentController', paymentController);

function paymentController($scope, Payment) {	
	
	$scope.getPayments = function() {
		$scope.listPayments = Payment.query();
	}
	
	$scope.addPayment = function(){
		$scope.p.id = "";
	}
	
	$scope.editPayment = function(payment) {
		$scope.p = payment;
	}
	
	$scope.savePayment = function() {
		Payment.save($scope.p);
		$("#myModal").modal('hide');
		$scope.getPayments();
	}
	
	$scope.deletePayment = function(payment) {
		if (confirm("Tem certeza que deseja remover o cliente " + payment.name + "?")==true) {
			Payment.remove({id:payment.id});
		}
		$scope.getPayments();
	}
	
	$scope.getPayments();
};