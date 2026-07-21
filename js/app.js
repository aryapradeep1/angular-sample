var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "Campus360";

    $scope.studname = "";
    $scope.stdage = "";
    $scope.stdclass = "";

    $scope.students = [
        "Arya",
        "John",
        "Philip",
        "Ann",
        "Anita"
    ];

    $scope.totalstudents = 0;

    $scope.addstudent = function () {

        $scope.totalstudents++;

        if ($scope.studname != "") {
            $scope.students.push($scope.studname);
        }

    };

});