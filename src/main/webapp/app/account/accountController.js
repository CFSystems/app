angular
	.module('app')
	.controller('accountController', accountController);

function accountController($scope, Account) {	
	
	$scope.getAccounts = function() {
		$scope.listAccounts = Account.query();
	}
	
	$scope.addAccount = function(){
		$scope.a.id = "";
	}
	
	$scope.editAccount = function(account) {
		$scope.a = account;
	}
	
	$scope.saveAccount = function() {
		Account.save($scope.a);
		$("#myModal").modal('hide');
		$scope.getAccounts();
	}
	
	$scope.deleteAccount = function(account) {
		if (confirm("Tem certeza que deseja remover o cliente " + account.name + "?")==true) {
			Account.remove({id:account.id});
		}
		$scope.getAccounts();
	}
	
	$scope.getAccounts();
};