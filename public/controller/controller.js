var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', function ($scope, $http) {
    console.log('entrando al controller...');
    document.getElementById('divcolonias').style.visibility='hidden';
    document.getElementById('divInfo').style.visibility='hidden';
    //llenado de catalogos de estados x api de estados
    $http.get('http://localhost:4000/api/ciudades/municipios').success(function (docs) {
        console.log('entrando a municipios...');
        console.log(docs);
        $scope.municipios = docs;
    });

    //llenado de catalogos de colonias x api de colonias x id_mnpio
    $scope.GetColonias = function (municipio) {
        console.log('entrando a colonias...');
        document.getElementById('divcolonias').style.visibility='visible';
        document.getElementById('divInfo').style.visibility='hidden';
        $http.get('http://localhost:4000/api/ciudades/municipios/colonias/names/'+municipio._id.Municipio).success(function (docs) {
        console.log(docs);
           $scope.colonias = docs;
           var arreglo= docs;
           $scope.infos = docs;
       });
    };
    //llenado de informacion completa con la seleccion de municipio y colonia
    $scope.GetInfo = function () {
        document.getElementById('divInfo').style.visibility='visible';
    };
    
});