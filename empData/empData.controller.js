angular.module('EmpForm').controller("DataCtrl", function ($scope) {
    $scope.data = [
      {
        Fname: 'Jack',
        Mname: 'Hamilton',
        Lname: 'Lloyd',
        EmpID: 'Emp1320',
        Contact: '260439969',
        Email: 'j.hamilton@randatmail.com',
        Hobbies: 'Art & Craft',
        Gender: 'Male',
        City: 'Manchester',
        Jdate:'04/05/2021'
      },
      {
        Fname: 'Kristian',
        Mname: 'Cameron',
        Lname: 'Montgomery',
        EmpID: 'Emp1340',
        Contact: '908435214',
        Email: 'k.montgomery@randatmail.com',
        Hobbies: 'Tennis',
        Gender: 'Male',
        City: 'Manhattan',
        Jdate:'02/03/2021'
      },
      {
        Fname: 'Deanna',
        Mname: 'Riley',
        Lname: 'Robinson',
        EmpID: 'Emp1432',
        Contact: '653584984',
        Email: 'd.robinson@randatmail.com',
        Hobbies: 'Football',
        Gender: 'Female',
        City: 'Moscow',
        Jdate:'07/01/2021'
      }

    ];
    $scope.$on("formData", function (event, args) {
      console.log("Data recived");
      $scope.data.push(args);
      console.log($scope.data);
    });
  });