angular.module('EmpForm').controller('ModalCtrl', function ($uibModal, $scope) {
    
  
    $scope.open = function (index) {
        $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'empData/modal.template.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          data: function () {
            return $scope.data[index];
          }
        }
      });
    };
  });

  angular.module('EmpForm').controller('ModalInstanceCtrl', function ($uibModalInstance, data,$scope) {
    
    $scope.data = data;
    
    $scope.close = function () {
      $uibModalInstance.close();
    };
  
  });