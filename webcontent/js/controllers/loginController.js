EfarmaApp.controller('LoginController', ['$window','$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', 'DatosUsuarioService', '$state',
    function ($window,$rootScope, $scope, settings, $log, $sessionStorage, $localStorage,DatosUsuarioService,$state) {
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$log = $log;  
        //Utilizar cuando se enlace al formulario de login       
        // $scope.$on('$viewContentLoaded', function () {
        //     if (angular.isUndefined($sessionStorage.login)) {
        //         $state.go('login');
        //     }
        // });

        $scope.acceder=function(){            
            DatosUsuarioService.login($scope.email, $scope.clave).then(function(usuario){
                $sessionStorage.login=usuario.data;  
                if($sessionStorage.login.rol[0].nombre == 'admin')
                	$window.location.href = 'views/admin.html'
                else if($sessionStorage.login.rol[0].nombre == 'gestor')
                	$state.go('gestor');
                else if($sessionStorage.login.rol[0].nombre == 'cliente')
                	$state.go('cliente');              
            }).catch(function(data){

            });
        }
    }]);   

