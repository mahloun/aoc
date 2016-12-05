'use strict';

const test = require('ava');
const _ = require('../src/10_1');

test('#look_and_say', t => {
  t.deepEqual(_.look_and_say('1'), '11', 'looks one one');
  t.deepEqual(_.look_and_say('11'), '21', 'looks two ones');
  t.deepEqual(_.look_and_say('21'), '1211', 'looks one two and one one');
  t.deepEqual(_.look_and_say('1211'), '111221', 'looks one one, one two, two ones');
  t.deepEqual(_.look_and_say('111221'), '312211', 'looks three ones, two twos, one one');
});
