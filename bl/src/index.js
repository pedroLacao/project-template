exports = module.exports

var patients = require("./patients.json");
var requirements = require("./requests.json");
var doctors = require("./doctors.json");

exports.getPatients = function(){
	return patients;
}

exports.getRequirements = function(){
	return requirements;
}

exports.verifyCredentials = function(user, pass){
	
}

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}
