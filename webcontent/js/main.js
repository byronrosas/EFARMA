var dependencias = [ 'ui.router' ];

var EfarmaApp = angular.module("EfarmaApp", dependencias);

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
		 	)			
			.state('shop',{
				url:"/shop.html",
				templateUrl:"views/shop.html"
			})
			.state('detalleProductos',{
				url:"/detalleProductos.html",
				templateUrl:"views/product-details.html"
			})
		}])