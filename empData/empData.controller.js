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
      },
      {
        Fname: 'Pamella',
        Mname: 'Cameron',
        Lname: 'Garken',
        EmpID: 'Emp1412',
        Contact: '3102658247',
        Email: 'pgarken0@salon.com',
        Hobbies: 'Football',
        Gender: 'Female',
        City: 'Badian',
        Jdate:'30/01/2018'
      },
      {
        Fname: 'Kalindi',
        Mname: 'Corran',
        Lname: 'Paz',
        EmpID: 'Emp1456',
        Contact: '6543191555',
        Email: 'kpaz0@mapy.cz',
        Hobbies: 'Calligraphy',
        Gender: 'Male',
        City: 'Anyar',
        Jdate:'08/04/2020'
      },
      {
        Fname: 'Shelby',
        Mname: 'Allwood',
        Lname: 'Sallwood',
        EmpID: 'Emp1765',
        Contact: '1126359303',
        Email: 'sallwood3@freewebs.com',
        Hobbies: 'Cricket',
        Gender: 'Male',
        City: 'Mbocayaty',
        Jdate:'11/08/2019'
      },
      {
        Fname: 'Eleanora',
        Mname: 'Corran',
        Lname: 'Matissoff',
        EmpID: 'Emp1235',
        Contact: '7984100358',
        Email: 'eleanora4@blogtalkradio.com',
        Hobbies: 'Chess',
        Gender: 'Female',
        City: 'Carhué',
        Jdate:'19/10/2018'
      },
      {
        Fname: 'Herschel',
        Mname: 'Iago',
        Lname: 'Waylen',
        EmpID: 'Emp1237',
        Contact: '8706623529',
        Email: 'hwaylen7@hc360.com',
        Hobbies: 'Music',
        Gender: 'Male',
        City: 'Ciketak',
        Jdate:'21/10/2017'
      },
      {
        Fname: 'Vitoria',
        Mname: 'Dannie',
        Lname: 'Harriss',
        EmpID: 'Emp1238',
        Contact: '1755293641',
        Email: 'vharriss8@addthis.com',
        Hobbies: 'Music',
        Gender: 'Female',
        City: 'Eirol',
        Jdate:'24/10/2017'
      }


    ];
    $scope.$on("formData", function (event, args) {
      console.log("Data recived");
      $scope.data.push(args);
      console.log($scope.data);
    });
    $scope.search="";
    $scope.searchOption="Fname";
    // predicate function for filter
    $scope.searchEmp=function () {
      return function(value)
      { let temp=$scope.search;
        if(temp!=undefined)
        {
          $scope.search=temp.toLowerCase();
        }
       
        if($scope.searchOption==="EmpID")
        {
         
          if(value.EmpID.toLowerCase().indexOf($scope.search)===0)
          {
            return true;
          }
          else
          {
            return false;
          }
        }
        else
        { 
          if(value.Fname.toLowerCase().indexOf($scope.search)===0)
        {
          return true;
        }
        else{
          return false;
        }
        }

      }
    }
  });