   angular
       .module('EfarmaApp')
       // .constant('BASE_URL', configuracion.host)
       .factory(
           'CategoryService', [
						'$http',
						'$httpBackend',
						function ($http, $httpBackend) {
                   'use strict';
                   try {
                       angular.module('ngMockE2E');

                       $httpBackend
                           .whenGET('/rest/data/categorias')
                           .respond(
                               200, {
                                   categorias: [{
                                           nombre: 'SPORTWEAR',
                                           subcategorias: [
                                               {
                                                   nombre: "NIKE"
												    },
                                               {
                                                   nombre: "UNDER ARMOUR"
                                           }
												    ]
												    },
                                       {
                                           nombre: "MENS",
                                           subcategorias: [{
                                                   nombre: "FENDI"
												        }, {
                                                   nombre: "GUESS"
												        }

												        ]
												    },
                                       {
                                           nombre: "KIDS",
                                           subcategorias: []
                                     }

												]
                               }
                           );

                   } catch (err) {
                       console.log("Error " + err);
                   }

                   return {
                       getCategory: function () {
                           var req = {
                               method: 'GET',
                               url: '/rest/data/categorias',
                               headers: {
                                   'Content-Type': 'text/plain'
                               }
                           }
                           return $http(req);
                       }

                   };
						}]);