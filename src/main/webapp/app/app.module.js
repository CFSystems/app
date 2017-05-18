'use strict';

var cfSystemApp = angular
	.module('app', ['ngRoute', 'ngResource']);

cfSystemApp.config(['$logProvider', function($logProvider){
	$logProvider.debugEnabled(true);
}]);