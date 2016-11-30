'use strict';

const my = require('../lib/my');
const Combinatorics = require('js-combinatorics');

const to_object = (road) => {
  const [, from, to, weight] = road.match(/^(\w+) to (\w+) = (\d+)$/);

  return {from, to, weight: parseInt(weight)};
};

const parse = (input) => input.trim().split('\n').map(to_object);

const get_cities_reducer = (cities, {from, to}) => {
  cities.add(from);
  cities.add(to);
  return cities;
};

const get_cities = (road_map) => [...road_map.reduce(get_cities_reducer, new Set)];

const find_road = road_map =>
  (from, to) =>
    road_map.find(road => (road.from === from && road.to === to) || (road.from === to && road.to === from));

const itinerary_distance = road_map => {
  const road = find_road(road_map);

  return itinerary =>
    itinerary.reduce((distance, current_city, i) =>
        i < itinerary.length - 1 ? distance + road(current_city, itinerary[i + 1]).weight : distance
    , 0)
};

const routine = input =>
  my.tap(parse(input))(road_map => {
    const path = Combinatorics.permutation(get_cities(road_map))
      .map(itinerary_distance(road_map))
      .reduce((preferred_distance, current_distance) =>
        preferred_distance > current_distance ? preferred_distance : current_distance);

    console.log(path);
  })

module.exports = {
  name: '9_1',
  to_object,
  parse,
  get_cities_reducer,
  get_cities,
  find_road,
  itinerary_distance,
  routine
};
