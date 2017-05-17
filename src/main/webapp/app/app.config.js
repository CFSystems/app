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
			templateUrl : "app/product/product.html",
			controller : "productController"
		}).when('/paymentMethod', {
			templateUrl : "app/paymentMethod/paymentMethod.html",
			controller : "paymentMethodController"
		}).when('/user', {
			templateUrl : "app/user/user.html",
			controller : "userController"
		}).when('/account', {
			templateUrl : "app/account/account.html",
			controller : "accountController"
		}).when('/purchase', {
			templateUrl : "views/purchase.html",
			controller : "purchaseController"
		}).when('/payment', {
			templateUrl : "app/payment/payment.html",
			controller : "paymentController"
		}).otherwise('/404', {
			templateUrl : "templates/404.html"
		});
	});