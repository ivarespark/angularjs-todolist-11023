var app = angular.module('ToDoList',["LocalStorageModule"])

app.controller('ToDoController',function($scope,localStorageService){
    $scope.todo = [];
    /*
        ACTIVIDAD ----------------
        descripcion: 'Terminar el curso de angular',
        fecha: '3-05-15 2 pm'
    */

    $scope.addActv = function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }
});