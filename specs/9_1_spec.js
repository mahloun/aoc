const test = require('ava');

const _ = require('../src/9_1');

test('#to_object', t => {
  const output = _.to_object("Paris to Toronto = 42");

  t.deepEqual(typeof(output), "object", "The output is an object");
  t.deepEqual(output.from, "Paris");
  t.deepEqual(output.to, "Toronto");
  t.deepEqual(output.weight, 42);
});
 
test('#parse', t => {
  const input = "Paris to Toronto = 42\nParis to Berlin = 32\n";
  const output = _.parse(input);

  t.deepEqual(output.length, 2, "The size of the returned array should be of length 2");
  t.deepEqual(output[0].from, "Paris");
  t.deepEqual(output[0].to, "Toronto");
  t.deepEqual(output[0].weight, 42);
  t.deepEqual(output[1].from, "Paris");
  t.deepEqual(output[1].to, "Berlin");
  t.deepEqual(output[1].weight, 32);
});
