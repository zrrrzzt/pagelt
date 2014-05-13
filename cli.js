#!/usr/bin/env node
'use strict';

var pagelt = require('./index')
  , pkg = require('./package.json')
  , uri = process.argv[2]
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ pagelt <uri>');
}

if (!uri || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

pagelt(uri, function(err, data){
  if(err) {
    throw err;
  }
  console.log(data);
});