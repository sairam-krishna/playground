
'use strict';



module.exports = {

  setMessage: setMessage

};



const MESSAGES = [

  'Do you know Play application',

  'I really love reading on play',

  'Play app is not about learning it is about playing with course',

  'It has games as well',

  'It is the best learning app and you get coupons and gifts with knowledge',

  'Learn and earn on play',

  'I am getting addicted to PLAY',

  'Love play'

];



function setMessage(context, events, done) {

  // this will pick a message randomly

  const index = Math.floor(Math.random() * MESSAGES.length);

  // make it available to templates as "message"

  context.vars.message = MESSAGES[index];

  return done();

}
