   angular
		.module('EfarmaApp')
		.constant('BASE_URL', configuracion.host)
		.factory(
				'CategoryService',
				[
						'BASE_URL',
						'$http',
						'$httpBackend',
						'$location',
						'$window',
						function(BASE_URL, $http, $httpBackend, $location,
								$window, ngProgressFactory) {
							'use strict';
							try {
								angular.module('ngMockE2E');

								$httpBackend
										.whenPOST(
												BASE_URL
														+ '/rest/users/')
										.respond(
												200,
												[ {
													"SPORTSWEAR" : {
                                                        "item1":"NIKE",
                                                        "item2":"UNDER ARMOUR",
                                                        "item3":"ADIDAS",
                                                        "item4":"PUMA",
                                                        "item5":"ASICS"
													},
													"MENS" : {
														"item1" : "FENDI",
														"item2" : "GUESS",
														"item3" : "VALENTINO",
														"item4" : "DIOR",
														"item5" : "VERSACE",
														"item6" : "ARMANI",
														"item7" : "PRADA",
														"item8" : "DOLCE AND GABBANA",
														"item9" : "CHANEL",
                                                        "item10":"GUCCI"
                                                    },
													"WOMENS":{
                                                        "item1":"FENDI",
                                                        "item2":"GUESS",
                                                        "item3":"VALENTINO",
                                                        "item4":"DIOR",
                                                        "item5":"VERSACE"

                                                    },

                                                        "item1":"KIDS",
                                                        "item2":"FASHION",
                                                        "item3":"HOUSEHOLDS", 
                                                        "item4": "INTERIORS",
                                                        "item5":"CLOTHING",
                                                        "item6":"BAGS",
                                                        "item7":"SHOES"
														
												}]);

							} catch (err) {
								console.log("Error " + err);
							}

                            return {
                                getCategory: function () {
                                    var req = {
                                        method: 'GET',
                                        url: BASE_URL + '/rest/data/insertarDato',
                                        headers: {
                                            'Content-Type': 'text/plain'
                                        }
                                    }
                                return $http(req);
                                }
                
                            };
						}]);


						
				