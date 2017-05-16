/**
 * Inicializamos o angular.module com o mesmo nome que definimos na diretiva
 * ng-app E incluímos a dependência do ngRoute
 */
var app = angular.module('website', ['ngRoute', 'ngResource']);

/**
 * Como possuímos a variavel app definida acima com a inicialização do Angular
 * através do app.config conseguimos criar as configurações definimos que essa
 * configuração depende do $routeProvider e usamos na function($routeProvider)
 */
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : "templates/home.html",
		controller : "HomeCtrl"
	}).when('/consumer', {
		templateUrl : "views/consumer.html",
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

/*
 * Controller utilizado nesse exemplo para ativar a galeria e tooltips
 */
app.controller('HomeCtrl', function($scope, $location) {

	// Activates the Carousel
	$('.carousel').carousel({
		interval : 5000
	});

	// Activates Tooltips for Social Links
	$('.tooltip-social').tooltip({
		selector : "a[data-toggle=tooltip]"
	})
});

app.controller('productController', function($scope, $location) {

});

app.controller('paymentMethodController', function($scope, $location) {

});

app.controller('userController', function($scope, $location) {

});

app.controller('accountController', function($scope, $location) {

});

app.controller('purchaseController', function($scope, $location) {

});

app.controller('paymentController', function($scope, $location) {

});
