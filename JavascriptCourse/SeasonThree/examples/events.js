var events = require('events');
var eventEmitter = new events.EventEmitter();
 
var ringBell = function ()
{
  console.log('Ring ring so strong');
};

var somethingHappens = function (){
  console.log('someone was screaming');
};

var soundDisappear = function (){
  console.log('peace comes');
};

eventEmitter.on('doorOpen', function(){});
eventEmitter.on('doorClosed', soundDisappear);
eventEmitter.on('doorOpen', somethingHappens);
 
eventEmitter.emit('doorOpen');
eventEmitter.emit('doorClosed');

// eventEmitter.on('doorOpen', function(sound){
//   console.log(sound);
// });
// eventEmitter.emit('doorOpen',"what's happening");