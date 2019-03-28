var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected () {
  // body...
  console.log('connected sucessfully');
  eventEmitter.emit('data_recived');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_recived', function() {
  console.log('data recived sucessfully');
});

eventEmitter.emit('connection');
console.log("Program ended");