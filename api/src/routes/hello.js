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
	method: 'GET',
	path: '/patients',
	handler: resources.hello.getPatients
});

server.route({
	method: 'GET',
	path: '/requirements',
	handler: resources.hello.getRequirements
});
