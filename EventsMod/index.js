/* NodeJS has a built in module called 'Events'.
   where we can create-, fire-, and listen for- your own events.
   Example 1: Registering for the event to be fired only one time using once.
   Example 2: Create an event emitter istances and register a couple of callbacks
   Example 3: Registering for the event with callback parameters
*/

/*Example 1:
const EventEmitter = require("events");
const event = new EventEmitter();
//listen for
event.on("sayMyName",()=>{
    console.log("My name is Vishakha");
});
//fire
event.emit("sayMyName");
*/

/*Example 2:
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("My name is Vishakha");
});
event.on("sayMyName",()=>{
    console.log("Bharat");
});
event.on("sayMyName",()=>{
    console.log("Biradar");
});

event.emit("sayMyName");
*/

//Example 3:
const { ok } = require("assert");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("checkPage",(sc, msg) =>{
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, ok);