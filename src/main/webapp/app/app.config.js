cfSystemApp
	.config(['$routeProvider', '$locationProvider', 
	         function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : "templates/home.html",
			controller : "HomeCtrl"
		}).when('/consumer', {
			templateUrl : "app/consumer/consumer.html",
			controller : "ConsumerController"
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
			templateUrl : "app/purchase/purchase.html",
			controller : "purchaseController"
		}).when('/payment', {
			templateUrl : "app/payment/payment.html",
			controller : "paymentController"
		}).when('/404', {
			templateUrl : "templates/404.html"
		}).otherwise({
			redirectTo: '/'
		});
		
		if(window.history && window.history.pushState){
		    //$locationProvider.html5Mode(true);
		}
	}]);

cfSystemApp.config(['$httpProvider', function ($httpProvider) {
	$httpProvider.interceptors.push(function($q, $injector) {
		var $http = null;
		return {
			'request': function(config) {
				//MOSTRA LOADER
				return config;
			},
			'response': function(response) {
				// get $http via $injector because of circular dependency problem
				$http = $http || $injector.get('$http');
				if ($http.pendingRequests.length < 1) {
					//ESCONDE LOADER
					$('#loading').hide();
				}
				return response;
			},
			'responseError': function(rejection) {
				// get $http via $injector because of circular dependency problem
				$http = $http || $injector.get('$http');
				if ($http.pendingRequests.length < 1) {
					//ESCONDE LOADER
					//MENSAGEM DE ERRO
				}

				return rejection;
			}
		};
	});
}]);