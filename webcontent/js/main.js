var dependencias = [ 'ngStorage','ui.router'];
dependencias.push('ngMockE2E');
var EfarmaApp = angular.module("EfarmaApp", dependencias);


// AngularJS v1.3.x workaround for old style controller declarition in HTML
EfarmaApp.config([ '$controllerProvider', function($controllerProvider) {
	// this option might be handy for migrating old apps, but please don't use
	// it
	// in new ones!
	$controllerProvider.allowGlobals();
} ]);
/* Setup global settings */
EfarmaApp.factory('settings', [ '$rootScope', function($rootScope) {
	// supported languages
	var settings = {
		layout : {
			pageSidebarClosed : false, // sidebar menu state
			pageContentWhite : true, // set page content layout
			pageBodySolid : false, // solid body color state
			pageAutoScrollOnLoad : 1000
		// auto scroll to top on page load
		},
		assetsPath : 'assets',
		globalPath : 'assets/global',
		layoutPath : 'assets/layouts/layout',
	};

	$rootScope.settings = settings;
	return settings;
} ]);
EfarmaApp
		.config(['$stateProvider',
 				'$urlRouterProvider',
 				function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
        	$stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html" 										
				}    
		 	).state('contacto', {
                url: "/contacto.html",
                templateUrl: "views/contact-us.html" 										
			})
			.state('shop',{
				url:"/shop.html",
				templateUrl:"views/shop.html"
			})
			.state('detalleProductos',{
				url:"/detalleProductos.html",
				templateUrl:"views/product-details.html"
			})
			.state('checkout',{
				url:"/checkout.html",
				templateUrl:"views/checkout.html"
			})
			.state('cart',{
				url:"/cart.html",
				templateUrl:"views/cart.html"
			})
			.state('login',{
				url:"/login.html",
				templateUrl:"views/login.html"
			});
		}])

/* Setup App Main Controller */
EfarmaApp.controller('AppController', [ '$scope', '$rootScope',
		'$httpBackend','$sessionStorage','CategoryService', function($scope, $rootScope, $httpBackend,$sessionStorage,CategoryService) {
			$scope.session=$sessionStorage;
			$scope.root = $scope;
			
			angular.module('ngMockE2E');
			$httpBackend.whenGET(function(url) {
				return (url.indexOf('views') !== -1);
			}).passThrough();
			$httpBackend.whenPOST(function(url) {
				return (url.indexOf('ip-api.com') !== -1);
			}).passThrough();

			$httpBackend.whenGET(function(url) {
				return (url.indexOf('tpl/') !== -1);
			}).passThrough();


			CategoryService.getCategory().then(function(sidebarCategorias){
					console.log(JSON.stringify(sidebarCategorias.data));
					//Editar
					$scope.session.sidebarCategorias=sidebarCategorias.data;
				});
			$scope.$on('$viewContentLoaded', function() {				
			});
		} ]);



/* Init global settings and run the app */
EfarmaApp
		.run([
				"$rootScope",
				"settings",
				"$state",
				"$window",				
				function($rootScope, settings, $state, $window) {
					$rootScope.$state = $state; // state to be accessed from
					// view
					$rootScope.$settings = settings; // state to be accessed
					// from					
				} ]);