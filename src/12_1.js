const my = require('../lib/my');

function sum_numbers(node, count = 0) {
  Array.isArray(node)
    ? count = node.reduce((acc, elem) => sum_numbers(elem, acc), count)
    : typeof(node) === 'object'
        ? my.tap(Object.values(node))(values =>
            values.includes('red')
              ? count 
              : count = sum_numbers(values, count)
          )
        : typeof(node) === 'number'
            ? count += node 
            : count
    
  return count;
}

function routine(input) {
  console.log(sum_numbers(JSON.parse(input)));
}

module.exports = {
  name: '12_1',
  sum_numbers,
  routine
};
