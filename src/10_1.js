'use strict';

const _ = require('lodash');

const my = require('../lib/my');

const increment_count = acc => (acc.count += 1, acc);

const increment_next_string = (acc, curr) => my.tap(acc)(acc => {
  acc.next_string += acc.count + acc.character;
  acc.count = 1;
  acc.character = curr;
});

const look_and_say = input =>
  (input + '0').split('')
    .reduce((acc, curr) =>
      curr === acc.character
        ? increment_count(acc)
        : increment_next_string(acc, curr)
    , {
      count: 0,
      character: input[0],
      next_string: ''
    }).next_string;

const routine = input => {
  function repeat(times, data, callback) {
    if (times === 0)
      return data;
    console.log('remaining times: ' + times);
    return repeat(times - 1, callback(data), callback);
  }

  console.log(repeat(50, input, look_and_say).length);
}

module.exports = {
  name: '10_1',
  look_and_say,
  routine
};
