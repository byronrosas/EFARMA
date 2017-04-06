EfarmaApp.controller('LoginController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', 'DatosUsuarioService', '$state',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage,DatosUsuarioService,$state) {
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
                if($sessionStorage.login.roles[0].nombre == 'admin')
                	$state.go('menu.crea');
                else if($sessionStorage.login.roles[0].nombre == 'gestor')
                	$state.go('menu.gestorInicio');
                else if($sessionStorage.login.roles[0].nombre == 'cliente')
                	$state.go('menu.inicio');              
            }).catch(function(data){

            });
        }
    }]);   

