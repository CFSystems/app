angular
	.module('app')
	.controller('purchaseController', purchaseController);

function purchaseController($scope, Purchase) {	
	
	$scope.getPurchases = function() {
		$scope.listPurchases = Purchase.query();
	}
	
	$scope.addPurchase = function(){
		$scope.u.id = "";
	}
	
	$scope.editPurchase = function(purchase) {
		$scope.u = purchase;
	}
	
	$scope.savePurchase = function() {
		Purchase.save($scope.u);
		$("#myModal").modal('hide');
		$scope.getPurchases();
	}
	
	$scope.deletePurchase = function(purchase) {
		if (confirm("Tem certeza que deseja remover o cliente " + purchase.name + "?")==true) {
			Purchase.remove({id:purchase.id});
		}
		$scope.getPurchases();
	}
	
	$scope.getPurchases();
};