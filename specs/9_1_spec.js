const test = require('ava');

const _ = require('../src/9_1');

const road_map = [
  {from: "Paris", to: "Toronto", weight: 42},
  {from: "Paris", to: "Berlin", weight: 26},
]

test('#to_object', t => {
  const output = _.to_object("Paris to Toronto = 42");

  t.deepEqual(typeof(output), "object", "The output is an object");
  t.deepEqual(output.from, "Paris");
  t.deepEqual(output.to, "Toronto");
  t.deepEqual(output.weight, 42);
});

test('#parse', t => {
  const output = _.parse("Paris to Toronto = 42\nParis to Berlin = 32\n");

  t.deepEqual(output.length, 2, "The size of the returned array should be of length 2");
  t.deepEqual(output[0].from, "Paris");
  t.deepEqual(output[0].to, "Toronto");
  t.deepEqual(output[0].weight, 42);
  t.deepEqual(output[1].from, "Paris");
  t.deepEqual(output[1].to, "Berlin");
  t.deepEqual(output[1].weight, 32);
});

test('#get_cities_reducer', t => {
  const output = _.get_cities_reducer(new Set, road_map[0]);

  t.true(output.has("Paris"));
  t.true(output.has("Toronto"));
});

test('#get_cities', t => {
  t.deepEqual(_.get_cities(road_map).length, 3, "the returned list of cities does not have duplicate values");
});

test('#road', t => {
  const road = _.find_road(road_map);
  const correct_order = road("Paris", "Berlin");
  const invert_order = road("Berlin", "Paris");

  t.deepEqual(correct_order, road_map[1]);
  t.deepEqual(invert_order, road_map[1]);
});

test('#itinerary_distance', t => {
  t.deepEqual(_.itinerary_distance(road_map)(['Toronto', 'Paris', 'Berlin']), 68);
});
