angular
		.module('EfarmaApp')
		// .constant('BASE_URL', configuracion.host)
		.factory(
				'DatosUsuarioService',
				[
						// 'BASE_URL',
						'$http',
						'$httpBackend',
						'$location',
						'$window',
						function($http, $httpBackend, $location,
								$window, ngProgressFactory) {
							'use strict';
							try {
								angular.module('ngMockE2E');
								$httpBackend
										.whenPOST(
												
														'/rest/users/login')
										.respond(
												200,
                                                
												 
													 {
                                                        "nombre":"darwin",
                                                        "direccion":"el recreo",
                                                        "telefono":"793399",
                                                        "email":"dj@gmail.com",
                                                        "id":"user001",
                                                        "usuario":"darwin",
                                                        "contrasenia":"123",
                                                        "aplicaciones" : [ {
                                                            "nombre" : "modificacion",
                                                            "license" : "prueba1",
                                                            "description" : "Modificación datos",
                                                            "rutaIcono" : "fa-users",
                                                            "rutaAcceso" : "menu.datos",
                                                            "orden" : 1
                                                        },{
                                                            "nombre" : "informacion",
                                                            "license" : "prueba1",
                                                            "description" : "Información",
                                                            "rutaIcono" : "fa-info",
                                                            "rutaAcceso" : "menu.informacion",
                                                            "orden" : 1
                                                        }
                                                        ,{
                                                            "nombre" : "sugerencias",
                                                            "license" : "prueba1",
                                                            "description" : "Sugerencias",
                                                            "rutaIcono" : "fa-question",
                                                            "rutaAcceso" : "menu.sugerencias",
                                                            "orden" : 1
                                                        }],
                                                        "rol":[
                                                            {
                                                            "nombre" : "admin",
															"importancia" : 3
                                                             }
                                                        ]
													}														
                                            );

							} catch (err) {
								console.log("Error " + err);
							}

                            return {
                                login: function (email,clave) {
                                    var dataObj = {
										login : email,
										password : clave
									};
                                    var req = {
                                        method: 'POST',
                                        url:'/rest/users/login',
                                        data:dataObj,
                                        headers: {
                                            'Content-Type': 'text/plain'
                                        }
                                    }
                                     return $http(req);
                                }
                
                            };
						}]);