angular.module('EmpForm').controller("FormCtrl", function ($scope, $rootScope, $location) {
    $scope.data = [];
    $scope.SubmitForm = function (e) {
      e.preventDefault();
      let Userdata = {
        Fname: $scope.Fname,
        Mname: $scope.Mname,
        Lname: $scope.Lname,
        EmpID: $scope.EmpID,
        Contact: $scope.Contact,
        Email: $scope.Email,
        Hobbies: $scope.Hobbies,
        Gender: $scope.Gender,
        City: $scope.City,
        Jdate:$scope.Jdate
      };
      console.log($scope.Jdate);
      $scope.data.push(Userdata);
      $rootScope.$broadcast("formData", Userdata);
      $location.path( "/" );
      let form = document.getElementById("eForm");
      form.reset();
    };
  });