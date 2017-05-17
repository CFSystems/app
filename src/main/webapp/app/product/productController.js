angular
	.module('app')
	.controller('productController', productController);

function productController($scope, Product) {	
	
	$scope.getProducts = function() {
		$scope.listProducts = Product.query();
	}
	
	$scope.addProduct = function(){
		$scope.p.id = "";
	}
	
	$scope.editProduct = function(product) {
		$scope.p = product;
	}
	
	$scope.saveProduct = function() {
		Product.save($scope.p);
		$("#myModal").modal('hide');
		$scope.getProducts();
	}
	
	$scope.deleteProduct = function(product) {
		if (confirm("Tem certeza que deseja remover o cliente " + product.name + "?")==true) {
			Product.remove({id:product.id});
		}
		$scope.getProducts();
	}
	
	$scope.getProducts();
};