var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.login = function handler(request, reply){
	reply(bl.login(request.payload.user, request.payload.pass));
}

exports.getPatients = function handler(request, reply){
	reply(bl.getPatients());
}

exports.getRequirements = function handler(request, reply){
	reply(bl.getRequirements());
}

exports.getActs = function handler(request, reply){
	reply(bl.getActs());
}



exports.getListActs = function handler(request, reply){
	reply(bl.getListActs());
}

exports.getRmb = function handler(request, reply){
	reply(bl.getRmb());
}

exports.getRep = function handler(request, reply){
	reply(bl.getRep());
}



