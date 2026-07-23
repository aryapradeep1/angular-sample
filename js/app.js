var app=angular.module('campus360',[]);

app.controller("dashboardcontroller",function($scope){


    $scope.collegename="FISaT";
    $scope.Name="Aswathi";
    $scope.Email="achu@123";
    $scope.Regno=12345;
    $scope.college="ABC";
    $scope.sysno=123;
    $scope.totalstudents=995;
    
    


    console.log("dashboard controller is loaded");
    $scope.students=[


        "ARCHANA","ANANYAA","AKSHARA","ARYA" 



    ];
      $scope.fees=25000;
         $scope.today=new Date();

         $scope.departments=[


            "MCA","CSE","MBA","MTECH"
         ];

$scope.selectedDepartment="MBA";
$scope.isDisabled=true;
$scope.allowAdmission=function(){

$scope.isDisabled=false;

};
$scope.isReadOnly=true;
$scope.taggleReadOnly=function(){


$scope.isReadOnly=!$scope.isReadOnly;

};
$scope.student={};


    $scope.addstudent=function(){

        $scope.totalstudents++;
         $scope.showstudents=true;
         $scope.showdashboard=true;
       
    };

});