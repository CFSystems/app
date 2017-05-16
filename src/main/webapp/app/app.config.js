angular
	.module('app')
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : "templates/home.html",
			controller : "HomeCtrl"
		}).when('/consumer', {
			templateUrl : "app/consumer/consumer.html",
			controller : "consumerController"
		}).when('/product', {
			templateUrl : "views/product.html",
			controller : "productController"
		}).when('/paymentMethod', {
			templateUrl : "views/paymentMethod.html",
			controller : "paymentMethodController"
		}).when('/user', {
			templateUrl : "views/user.html",
			controller : "userController"
		}).when('/account', {
			templateUrl : "views/account.html",
			controller : "accountController"
		}).when('/purchase', {
			templateUrl : "views/purchase.html",
			controller : "purchaseController"
		}).when('/payment', {
			templateUrl : "views/payment.html",
			controller : "paymentController"
		}).otherwise('/404', {
			templateUrl : "templates/404.html"
		});
	});