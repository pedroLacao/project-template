var app = angular.module('cwApp',[]);
					
//app.controller('patientsCtrl', function($scope, $http){
//	$http.get("http://127.0.0.1:8090/projData.json")
//		.then(function(response){
//			$scope.patients = response.data.patients;
//		});
//	});

app.controller('patientsCtrl', function($scope, $http){
	$http.get("http://localhost:9000/patients").then(function(response){
		$scope.patients = response.data;
	});

	$http.get("http://localhost:9000/requirements").then(function(response){
		$scope.requirements = response.data;
	});

});


