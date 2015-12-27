exports = module.exports

var patients = require("./patients.json");
var requirements = require("./requests.json");
var doctors = require("./doctors.json");
var mediators = require("./mediators.json");
var acts = require("./acts.json");
var listacts = require("./acts.json");
var rmb = require("./acts-rmb.json");
var rep = require("./reports.json");
var added = [];


exports.login = function(user, pass){
	for(i = 0; i < doctors.length; i++){
        	if(user === doctors[i].user){
        		if(pass === doctors[i].pass){
                		return [true,true,doctors[i].name];
        		}
        	}
	}
	for(i = 0; i < mediators.length; i++){
        	if(user === mediators[i].user){
        		if(pass === mediators[i].pass){
                		return [true,false,mediators[i].name];
        		}
        	}
	}
    	return [false,"",""];
}




exports.getPatients = function(){
	return patients;
}

exports.getRequirements = function(){
	return requirements;
}

exports.getActs = function(){
	return acts;
}

exports.getListActs = function(){
	return listacts;
}

exports.getRmb = function(){
	return rmb;
}

exports.getRep = function(){
	return rep;
}

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}


