#!/usr/bin/env node

var app = require('../app'),
    pjson = require('../package.json'),
    runOnce = false;

console.log('-. doce ' + pjson.version);

process.argv.slice(2).forEach(function (val, index, array) {
    if (val === 'once') {
      runOnce = true;
    }
});

app.run(runOnce);