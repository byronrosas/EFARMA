EfarmaApp.controller( 'controllerShop',['$scope','SweetAlert',function ($scope,SweetAlert) {
        $scope.desabilitar=false;
        $scope.darClick = function(){
            console.log("Aqui esta funcionando el controlador");
            SweetAlert.swal("Medicamento agregado", "EXITOSAMENTE", "success");
            $scope.desabilitar=true;
        }
    }]);