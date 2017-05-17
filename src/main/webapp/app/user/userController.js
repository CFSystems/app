angular
	.module('app')
	.controller('userController', userController);

function userController($scope, User) {	
	
	$scope.getUsers = function() {
		$scope.listUsers = User.query();
	}
	
	$scope.addUser = function(){
		$scope.u.id = "";
	}
	
	$scope.editUser = function(user) {
		$scope.u = user;
	}
	
	$scope.saveUser = function() {
		User.save($scope.u);
		$("#myModal").modal('hide');
		$scope.getUsers();
	}
	
	$scope.deleteUser = function(user) {
		if (confirm("Tem certeza que deseja remover o cliente " + user.name + "?")==true) {
			User.remove({id:user.id});
		}
		$scope.getUsers();
	}
	
	$scope.getUsers();
};