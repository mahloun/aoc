'use strict';

const my = require('../lib/my');

function to_object(road) {
  const [, from, to, weight] = road.match(/^(\w+) to (\w+) = (\d+)$/);

  return {from, to, weight: parseInt(weight)};
}

function parse(input) {
  return input.trim().split('\n').map(to_object);
}

function routine(input) {
  my.tap(parse(input))(input =>
    console.log(input)
  );
}

module.exports = {
  name: '9_1',
  to_object,
  parse,
  routine
}
