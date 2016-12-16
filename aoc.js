'use strict';

const fs = require('fs');
require('./src/9_1');
require('./src/10_1');
require('./src/12_1');

function execute(module_name) {
  return module.children.filter(child =>
    child.exports.name === module_name
  )[0].exports;
}

(([, , day, part]) => {
  fs.readFile(`input/${day}_day`, 'utf8', (err, input) =>
      err ? console.log(err) : execute(`${day}_${part}`).routine(input)
  )
})(process.argv);
