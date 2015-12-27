var server = require('./../index.js');
var resources = require('./../resources');

server.route({
  method: 'GET',
  path: '/hello',
  handler: resources.hello.get
});

server.route({
  method: 'POST',
  path: '/hello',
  handler: resources.hello.post
});

server.route({
	method: 'POST',
	path: '/login',
	handler: resources.hello.login
})

server.route({
	method: 'GET',
	path: '/patients',
	handler: resources.hello.getPatients
});

server.route({
	method: 'GET',
	path: '/requirements',
	handler: resources.hello.getRequirements
});

server.route({
	method: 'GET',
	path: '/acts',
	handler: resources.hello.getActs
});

server.route({
	method: 'GET',
	path: '/listacts',
	handler: resources.hello.getListActs
});



server.route({
	method: 'GET',
	path: '/rmb',
	handler: resources.hello.getRmb
});

server.route({
	method: 'GET',
	path: '/rep',
	handler: resources.hello.getRep
});



