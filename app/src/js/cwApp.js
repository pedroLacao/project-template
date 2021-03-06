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

	$http.get("http://localhost:9000/acts").then(function(response){
		$scope.acts = response.data;
	});

	$http.get("http://localhost:9000/listacts").then(function(response){
		$scope.listacts = response.data;
	});

	$http.get("http://localhost:9000/rmb").then(function(response){
		$scope.rmb = response.data;
	});

	$http.get("http://localhost:9000/rep").then(function(response){
		$scope.rep = response.data;
	});


	$scope.logi=false;
	$scope.pat=false;
	$scope.cons=false;
	$scope.err=false;
	$scope.med=false;
	
	$scope.patname="";
	$scope.patid="";
	$scope.docname="No Doc";
	$scope.jacts=[];
	



	$scope.tothird = function (patnam,id) {
		$scope.pat=true;
		$scope.cons=false;
		$scope.patname=patnam;
		$scope.patid=id;
	}

	$scope.enter = function(username, password){
		$http.post("http://localhost:9000/login", {user: username, pass: password}).then(function(response){
			$scope.cred = response.data[0];
			$scope.docname = response.data[2];
			if($scope.cred){
				$scope.logi = true;
				if (response.data[1]) {
					$scope.title="Dr. ";
					$scope.cons = true;
					$scope.err=false;
				}else{
					$scope.title="mediator ";
					$scope.med=true;
				}
			}else{
			$scope.err=true;
			}
		});
	}



	$scope.removeRow = function(name){				
		var index = -1;		
		var actsArr = eval( $scope.jacts );
		for( var i = 0; i < actsArr.length; i++ ) {
			if( actsArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Error" );
		}
		$scope.jacts.splice( index, 1 );		
	};

	$scope.addRow = function(id, actid, actname, actcost){	
		id=$scope.patname;
		$scope.jacts.push({'patID':id, 'actID':actid, 'name': actname, 'cost':actcost});
	};


});


