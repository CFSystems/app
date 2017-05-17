angular
	.module('app')
	.controller('paymentMethodController', paymentMethodController);

function paymentMethodController($scope, PaymentMethod) {	
	
	$scope.getPaymentMethods = function() {
		$scope.listPaymentMethods = PaymentMethod.query();
	}
	
	$scope.addPaymentMethod = function(){
		$scope.pM.id = "";
	}
	
	$scope.editPaymentMethod = function(paymentMethod) {
		$scope.pM = paymentMethod;
	}
	
	$scope.savePaymentMethod = function() {
		PaymentMethod.save($scope.pM);
		$("#myModal").modal('hide');
		$scope.getPaymentMethods();
	}
	
	$scope.deletePaymentMethod = function(paymentMethod) {
		if (confirm("Tem certeza que deseja remover o cliente " + paymentMethod.name + "?")==true) {
			PaymentMethod.remove({id:paymentMethod.id});
		}
		$scope.getPaymentMethods();
	}
	
	$scope.getPaymentMethods();
};