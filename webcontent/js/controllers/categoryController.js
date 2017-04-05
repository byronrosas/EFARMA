MetronicApp.controller('categoryController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', 'categoryService', '$state',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage,  $state) {
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$log = $log;
        $scope.version = new Date().getTime();   
        $scope.$on('$viewContentLoaded', function () {
            if (angular.isUndefined($sessionStorage.login)) {
                $state.go('login');
            }
        });
    }]);   